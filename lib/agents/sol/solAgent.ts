import { fileSearchTool, webSearchTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";
import { solInstructions } from "./solInstruction";

// Tool definitions
const fileSearch = fileSearchTool([
  "vs_68f52af53c408191a129120e6853e8f5"
])
const webSearchPreview = webSearchTool({
  searchContextSize: "medium",
  userLocation: {
    type: "approximate"
  }
})
const sol = new Agent({
  name: "SOL",
  instructions: solInstructions,
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
  return await withTrace("SOL DEMO", async () => {
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
        workflow_id: "wf_68f44e1547b481909bffbf354420d47f0be292ab5afeab5b"
      }
    });
    const solResultTemp = await runner.run(
      sol,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...solResultTemp.newItems.map((item) => item.rawItem));

    if (!solResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const solResult = {
      output_text: solResultTemp.finalOutput ?? ""
    };
    return solResult;
  });
}
