import { Agent, Runner } from "@openai/agents";

export const summaryAgent = new Agent({
  name: "Conversation Summarizer",
  model: "gpt-4.1-mini",
  instructions: `
You summarize conversations.

Rules:
- Be concise
- Keep facts, decisions, preferences
- Remove greetings and filler
- Write in plain text
`,
  modelSettings: {
    temperature: 0,
    maxTokens: 300,
  },
});

export async function summarizeConversation(
  previousSummary: string,
  messagesText: string
) {
  const runner = new Runner();

  const result = await runner.run(summaryAgent, [
    {
      role: "user",
      content: [
        {
          type: "input_text",
          text: `
PREVIOUS SUMMARY:
${previousSummary || "None"}

NEW MESSAGES:
${messagesText}

Update the summary.
`,
        },
      ],
    },
  ]);

  return result.finalOutput || "";
}
