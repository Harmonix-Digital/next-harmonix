import { Runner, withTrace, AgentInputItem } from "@openai/agents";
import { echoAgent } from "./echoCore";
import { getSession } from "@/lib/sessionStore";

type WorkflowInput = {
  input_as_text: string;
  sessionId: string;
};

const MAX_MESSAGES = 6;

export async function runWorkflow(input: WorkflowInput) {
  return await withTrace("AGENT_WORKFLOW", async () => {
    const session = getSession(input.sessionId);

    /* --------------------------------------------------
       1. Push user message (VALID AgentInputItem)
    -------------------------------------------------- */
    const userMessage: AgentInputItem = {
      role: "user",
      type: "message",
      content: input.input_as_text, // ✅ string is allowed
    };

    session.messages.push(userMessage);

    /* --------------------------------------------------
       2. Build agent input
    -------------------------------------------------- */
    const agentInput: AgentInputItem[] = session.messages.slice(-MAX_MESSAGES);

    console.log("=== AGENT INPUT ===");
    console.log(JSON.stringify(agentInput, null, 2));

    /* --------------------------------------------------
       3. Run agent
    -------------------------------------------------- */
    const runner = new Runner();
    const result = await runner.run(echoAgent, agentInput);

    console.log("result", result)

    /* --------------------------------------------------
       4. Extract text from ALL possible outputs
    -------------------------------------------------- */
    let finalText = "";

    for (const item of result.newItems) {
      const raw = item.rawItem as any;

      // Assistant messages
      if (raw?.role === "assistant" && Array.isArray(raw.content)) {
        for (const c of raw.content) {
          if (typeof c?.text === "string") {
            finalText += c.text + "\n";
          }
        }
      }

      // MCP / hosted tool calls
      if (raw?.type === "hosted_tool_call") {
        const output = raw.output;

        if (typeof output === "string") {
          finalText += output + "\n";
        }

        if (output?.content) {
          for (const c of output.content) {
            if (typeof c?.text === "string") {
              finalText += c.text + "\n";
            }
          }
        }

        if (output?.structuredContent) {
          finalText += JSON.stringify(output.structuredContent, null, 2) + "\n";
        }
      }
    }

    finalText = finalText.trim();

    /* --------------------------------------------------
       5. Save assistant message (WITH STATUS ✅)
    -------------------------------------------------- */
    if (finalText) {
      const assistantMessage: AgentInputItem = {
        role: "assistant",
        status: "completed", // ✅ REQUIRED
        type: "message",
        content: [
          {
            type: "output_text",
            text: finalText,
          },
        ],
      };

      session.messages.push(assistantMessage);
    }

    session.messages = session.messages.slice(-MAX_MESSAGES);

    /* --------------------------------------------------
       6. ALWAYS return string
    -------------------------------------------------- */
    return {
      output_text: finalText || "No response generated",
    };
  });
}
