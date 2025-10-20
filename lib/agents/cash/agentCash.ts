import { fileSearchTool, webSearchTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";
import { cashInstructions } from "./cashInstruction";

// Tool definitions
const fileSearch = fileSearchTool([
  "vs_68f528867a2081919b98474edc9fa852"
])
const webSearchPreview = webSearchTool({
  searchContextSize: "medium",
  userLocation: {
    type: "approximate"
  }
})
const caH = new Agent({
  name: "CA$H",
  instructions: cashInstructions,
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
  return await withTrace("CA$H DEMO V2", async () => {
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
        workflow_id: "wf_68f527f6c3648190b2313f0215291cbc0bcd9d33bec7eb12"
      }
    });
    const caHResultTemp = await runner.run(
      caH,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...caHResultTemp.newItems.map((item) => item.rawItem));

    if (!caHResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const caHResult = {
      output_text: caHResultTemp.finalOutput ?? ""
    };

    return caHResult;
  });
}
