import {
  fileSearchTool,
  webSearchTool,
  hostedMcpTool,
  Agent,
} from "@openai/agents";

import { echoInsNew } from "./echoInstructionNew";

const fileSearch = fileSearchTool([
  "vs_68f7ee2546808191a3a18e1cf6ee8330",
]);

const webSearchPreview = webSearchTool({
  searchContextSize: "medium",
  userLocation: { type: "approximate" },
});

const mcp = hostedMcpTool({
  serverLabel: "ghl_mcp",
  serverUrl: "https://mcp.codermahmud.xyz/mcp",
  allowedTools: [
    "add_contact_to_GHL",
    "add_numbers"
  ],
  requireApproval: "never"
})

export const echoAgent = new Agent({
  name: "ECHO",
  instructions: echoInsNew,
  model: "gpt-4.1-mini",
  tools: [fileSearch, webSearchPreview, mcp],
  modelSettings: {
    temperature: 1,
    topP: 1,
    maxTokens: 2048,
    store: false, // ❗ we manage memory ourselves
  },
});
