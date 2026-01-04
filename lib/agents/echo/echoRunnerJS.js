import { Runner, withTrace } from "@openai/agents";
import { echoAgent } from "./echoCore";
import { getSession } from "@/lib/sessionStore";
import { summarizeConversation } from "@/lib/summaryAgent";

const MAX_MESSAGES = 4;
const SUMMARY_TRIGGER = 4; 

export async function runWorkflow(input) {
  return await withTrace("AGENT_WORKFLOW", async () => {
    // console.log("session id:",input.sessionId)
    const session = getSession(input.sessionId);
    // console.log("session info:", session)
    const locationId =input.locationId;
    const apiKey = input.apiKey;

    // console.log("key values", locationId, apiKey)
    // console.log("values ended")

    /* --------------------------------------------------
       1️⃣ Push user message (VALID format)
    -------------------------------------------------- */
    const systemMessage = {
      role: "system",
      content: [
        {
          type: "input_text",
          text: `Use this GHL API information for every MCP tool call:
          apiKey: ${apiKey}
          locationId: ${locationId}`
        }
      ]
    }

    session.messages.push(systemMessage);

    const userMessage = {
      role: "user",
      type: "message",
      // content: input.input_as_text,
      content:[{
        type: "input_text",
        text: input.input_as_text,
      }],
    };

    session.messages.push(userMessage);
    
    
    session.counter++;

    if (session.counter >= SUMMARY_TRIGGER) {
      const messagesText = session.messages
        .map(
          (m) =>
            `${m.role}: ${m.content
              .map((c) => ("text" in c ? c.text : ""))
              .join("\n")}`
        )
        .join("\n");

      session.summary = await summarizeConversation(
        session.summary || "",
        messagesText
      );

      // reset counter but KEEP session.messages for building agentInput
      session.counter = 0;
    }

    



    /* --------------------------------------------------
       2️⃣ Build agent input
    -------------------------------------------------- */

    // 4️⃣ Build agent input

    
    const agentInput = [];

    // Push summary as system message
    if (session.summary) {
      agentInput.push({
        role: "system",
        content: [
          {
            type: "input_text",
            text: `Conversation summary:\n${session.summary}`,
          },
        ],
      });
    }

    // Push last MAX_MESSAGES of user/assistant messages
    agentInput.push(...session.messages.slice(-MAX_MESSAGES));
    


    // console.log("Session messages start:")
    // console.dir(session, { depth: 10 })
    // console.log("Session messages ends")
    // const agentInput = session.messages.slice(-MAX_MESSAGES);

    // console.log("=== AGENT INPUT ===");
    // console.dir(agentInput, { depth: 10 });
    // console.log("=============Agent Input ends============")

    /* --------------------------------------------------
       3️⃣ Run agent (HANDLE MCP LOOP)
    -------------------------------------------------- */
    const runner = new Runner();
    let result = await runner.run(echoAgent, agentInput);

    // console.log("Result", result)

    const usage =  result.state?._lastTurnResponse?.usage ?? result.state?._context?.usage;

    // console.log("Usage:", usage)
  
    
    if (usage) {
      // Type assertion to tell TS it's the correct shape
      const { inputTokens, outputTokens, totalTokens } = usage ;
  
      console.log("🔹 Token Usage Summary:");
      console.log(`Prompt tokens: ${inputTokens ?? 0}`);
      console.log(`Completion tokens: ${outputTokens ?? 0}`);
      console.log(`Total tokens: ${totalTokens ?? 0}`);
    } else {
      console.log("⚠️ No usage data found in the result object.");
    }





    while (result.hasToolsOrApprovalsToRun?.()) {
      console.log("⏳ Waiting for MCP tools / approvals...");
      result = await runner.run(echoAgent, agentInput);
    }

    //console.log("✅ Agent execution finished");

    /* --------------------------------------------------
       4️⃣ Extract ALL outputs (assistant + MCP)
    -------------------------------------------------- */
    let finalText = "";

    // console.log("=== RAW AGENT OUTPUT ===");

    for (const item of result.newItems) {
      const raw = item.rawItem;
      // console.dir(raw, { depth: 10 });

      // 🧠 Assistant output
      if (raw?.role === "assistant" && Array.isArray(raw.content)) {
        for (const c of raw.content) {
          if (typeof c?.text === "string") {
            finalText += c.text + "\n";
          }
        }
      }

      // 🔧 MCP / hosted tool output
      if (raw?.type === "hosted_tool_call") {
        const output = raw.output;

        // console.log("🧠 MCP TOOL OUTPUT:");
        // console.dir(output, { depth: 10 });

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
          finalText +=
            JSON.stringify(output.structuredContent, null, 2) + "\n";
        }
      }
    }

    finalText = finalText.trim();

    /* --------------------------------------------------
       5️⃣ Save assistant message (STATUS REQUIRED)
    -------------------------------------------------- */
    if (finalText) {
      const assistantMessage = {
        role: "assistant",
        status: "completed", // ✅ REQUIRED by SDK
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

    // Trim memory (no persistence after reload)
    session.messages = session.messages.slice(-MAX_MESSAGES);

    /* --------------------------------------------------
       6️⃣ ALWAYS return a string
    -------------------------------------------------- */
    return {
      output_text: finalText || "No response generated",
    };
  });
}
