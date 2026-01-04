import { fileSearchTool, webSearchTool, hostedMcpTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";

import { echoInsNew } from "./echoInstructionNew";

// Tool definitions
const fileSearch = fileSearchTool([
  "vs_68f7ee2546808191a3a18e1cf6ee8330"
])
const webSearchPreview = webSearchTool({
  searchContextSize: "medium",
  userLocation: {
    type: "approximate"
  }
})
const mcp = hostedMcpTool({
  serverLabel: "custom_ghl_mcp",
  serverUrl: "https://mcp.codermahmud.xyz/mcp",
  // serverDescription: "MCP server for GHL integration",
  allowedTools: [
    "add_contact_to_GHL",
    "add_numbers"
  ],
  requireApproval: "always"
})
const echo = new Agent({
  name: "ECHO",
  instructions: echoInsNew,
  model: "gpt-4.1-mini",
  tools: [
    fileSearch,
    webSearchPreview,
    mcp
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
  return await withTrace("ECHO DEMO", async () => {
    const state = {

    };
    const conversationHistory: AgentInputItem[] = [
      { role: "user", content: [{ type: "input_text", text: workflow.input_as_text }] }
    ];
    const runner = new Runner({
      traceMetadata: {
        __trace_source__: "agent-builder",
        workflow_id: "wf_68f52fa511748190999439b3cd0cd91d0e9cc13b76e93f82"
      }
    });
    const echoResultTemp = await runner.run(
      echo,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...echoResultTemp.newItems.map((item) => item.rawItem));

    if (!echoResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    return {
      output_text: echoResultTemp.finalOutput ?? ""
    };
  });
}
