import { fileSearchTool, webSearchTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";
import { kairosInstructions } from "./kairosInstruction";

// Tool definitions
const fileSearch = fileSearchTool([
  "vs_68f532e302b481919a4b0a797037a118"
])
const webSearchPreview = webSearchTool({
  searchContextSize: "medium",
  userLocation: {
    type: "approximate"
  }
})
const kairos = new Agent({
  name: "KAIROS",
  instructions: kairosInstructions,
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
  return await withTrace("KAIROS DEMO", async () => {
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
        workflow_id: "wf_68f44eeb0dd081909cb7ec2730476f420913218ae2acfd34"
      }
    });
    const kairosResultTemp = await runner.run(
      kairos,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...kairosResultTemp.newItems.map((item) => item.rawItem));

    if (!kairosResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const kairosResult = {
      output_text: kairosResultTemp.finalOutput ?? ""
    };
    return kairosResult;
  });
}
