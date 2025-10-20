// import { runWorkflow } from "@/lib/agent";
import { runWorkflow } from "@/lib/agents/grace/agentGrace";

export async function POST(req: Request) {
  const body = await req.json();
  
  // Check that input_as_text exists
  if (!body.input_as_text || body.input_as_text.trim() === "") {
    return new Response(JSON.stringify({ error: "Input text is required" }), { status: 400 });
  }

  const result = await runWorkflow({ input_as_text: body.input_as_text });
  return new Response(JSON.stringify(result), { status: 200 });
}