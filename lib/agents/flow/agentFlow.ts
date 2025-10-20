import { fileSearchTool, webSearchTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";
import { flowInstructions } from "./flowInstruction";

// Tool definitions
const fileSearch = fileSearchTool([
  "vs_68f54d94cabc81919ada7563e7733259"
])
const webSearchPreview = webSearchTool({
  searchContextSize: "medium",
  userLocation: {
    type: "approximate"
  }
})
const flow = new Agent({
  name: "FLOW",
  instructions: flowInstructions,
  model: "gpt-5",
  tools: [
    fileSearch,
    webSearchPreview
  ],
  modelSettings: {
    reasoning: {
      effort: "medium",
      summary: "auto"
    },
    store: true
  }
});

type WorkflowInput = { input_as_text: string };


// Main code entrypoint
export const runWorkflow = async (workflow: WorkflowInput) => {
  return await withTrace("FLOW DEMO", async () => {
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
        workflow_id: "wf_68f44ed003c0819083cddc12ae5d31fd0484bc108e819c3e"
      }
    });
    const flowResultTemp = await runner.run(
      flow,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...flowResultTemp.newItems.map((item) => item.rawItem));

    if (!flowResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const flowResult = {
      output_text: flowResultTemp.finalOutput ?? ""
    };

    return flowResult;
  });
}
