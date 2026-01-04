import { AgentInputItem } from "@openai/agents";

interface SessionData {
  messages: AgentInputItem[];
  summary: string;
  counter: number;
}

const sessions = new Map<string, SessionData>();

export function getSession(sessionId: string): SessionData {
  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, {
      messages: [],
      summary: "",
      counter: 0,
    });
  }

  return sessions.get(sessionId)!;
}