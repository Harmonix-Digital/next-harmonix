import { fileSearchTool, webSearchTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";
import { graceInstructions } from "./graceInstruction";

// Tool definitions
const fileSearch = fileSearchTool([
  "vs_68f553c10c0c8191914f42b678309182"
])
const webSearchPreview = webSearchTool({
  searchContextSize: "medium",
  userLocation: {
    type: "approximate"
  }
})
const grace = new Agent({
  name: "Grace",
  instructions: graceInstructions,
  model: "gpt-4.1-mini",
  tools: [
    fileSearch,
    webSearchPreview
  ],
  modelSettings: {
    temperature: 1,
    topP: 1,
    maxTokens: 2048,
    store: true
  }
});

type WorkflowInput = { input_as_text: string };


// Main code entrypoint
export const runWorkflow = async (workflow: WorkflowInput) => {
  return await withTrace("GRACE DEMO", async () => {
    const state = {

    };
    const conversationHistory: AgentInputItem[] = [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: workflow.input_as_text
          }
        ]
      }
    ];
    const runner = new Runner({
      traceMetadata: {
        __trace_source__: "agent-builder",
        workflow_id: "wf_68f44e7ed09c8190ac404a9daef18da40e6fa43fca5b6b97"
      }
    });
    const graceResultTemp = await runner.run(
      grace,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...graceResultTemp.newItems.map((item) => item.rawItem));

    if (!graceResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const graceResult = {
      output_text: graceResultTemp.finalOutput ?? ""
    };

    return graceResult;
  });
}
