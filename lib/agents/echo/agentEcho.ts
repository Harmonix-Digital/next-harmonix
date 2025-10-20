import { fileSearchTool, webSearchTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";
import { echoInstructions } from "./echoInstruction";

// ---------------------
// Tool definitions
// ---------------------
const fileSearch = fileSearchTool([
  "vs_68f53009ebe481919c0e6fb10eb23dae"
]);

const webSearchPreview = webSearchTool({
  searchContextSize: "medium",
  userLocation: {
    type: "approximate"
  }
});

// ---------------------
// Define the Agent
// ---------------------
const echo = new Agent({
  name: "ECHO",
  instructions: echoInstructions,
  model: "gpt-4.1-mini",
  tools: [fileSearch, webSearchPreview],
  modelSettings: {
    temperature: 1,
    topP: 1,
    maxTokens: 2048,
    store: true
  }
});

type WorkflowInput = { input_as_text: string };

// ---------------------
// Main workflow runner
// ---------------------
export const runWorkflow = async (workflow: WorkflowInput) => {
  return await withTrace("ECHO DEMO V2", async () => {
    // Ensure input is a non-empty string
    const userText = workflow.input_as_text?.trim();
    if (!userText) {
      throw new Error("Input text is empty");
    }

    // Correct AgentInputItem structure
    const conversationHistory: AgentInputItem[] = [
      {
        role: "user",
        type: "message",
        content: [
          {
            type: "input_text",
            text: userText
          }
        ]
      }
    ];

    console.log("Running agent with input:", userText);
    console.log("Conversation history:", JSON.stringify(conversationHistory, null, 2));

    // Initialize Runner
    const runner = new Runner({
      traceMetadata: {
        __trace_source__: "agent-builder",
        workflow_id: "wf_68f52fa511748190999439b3cd0cd91d0e9cc13b76e93f82"
      }
    });

    // Run the agent
    const echoResultTemp = await runner.run(echo, conversationHistory);

    console.log("Raw agent result:", echoResultTemp);

    // Store new items in history (optional)
    conversationHistory.push(...echoResultTemp.newItems.map((item) => item.rawItem));

    if (!echoResultTemp.finalOutput) {
      throw new Error("Agent result is undefined");
    }

    return {
      output_text: echoResultTemp.finalOutput
    };
  });
};
