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

    // console.log("caHResultTemp:",caHResultTemp)
    // console.log("Token usage:", caHResultTemp?.usage);
    // console.log("Token usage:", caHResultTemp.state?.usage);
    // const trace = caHResultTemp.trace;
    
    // console.log("Trace metadata:", trace.metadata);
    // @ts-ignore because `_context` is internal
    // console.log("Token usage:", caHResultTemp._context?.usage?.[0]);
    // console.log("Token usage context:", caHResultTemp._context);
    // const usage =
    // caHResultTemp?.usage ||
    // (caHResultTemp as any)?._context?.usage?.[0] ||
    // (caHResultTemp as any)?._lastTurnResponse?.usage;
  
    // console.log("Token usage:", caHResultTemp.RunResult.state._lastTurnResponse.usage);
    // console.log("Token usage:", caHResultTemp);
    // console.log("Token usage:", caHResultTemp.RunResult.state.RunState);
    // const usage = (caHResultTemp as any)?._context?.usage?.[0];
    // console.log("Token usage:", usage);
// Try to extract usage from different possible locations
// console.log("Run result keys:", Object.keys(caHResultTemp as any)); //state
// console.log("State keys:", Object.keys((caHResultTemp as any).state || {}));
const usage = (caHResultTemp.state as any)?._lastTurnResponse?.usage;
// console.log("Token usage:", usage);





  
    



    conversationHistory.push(...caHResultTemp.newItems.map((item) => item.rawItem));

    if (!caHResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const caHResult = {
      output_text: caHResultTemp.finalOutput ?? ""
    };

    return {caHResult, usage};
  });
}
