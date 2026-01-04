// import { runWorkflow } from "@/lib/agent";
// import { runWorkflow } from "@/lib/agents/echo/agentEcho";
// import { runWorkflow } from "@/lib/agents/echo/agentEchoNew";
// import { runWorkflow } from "@/lib/agents/echo/echoRunner";
import { runWorkflow } from "@/lib/agents/echo/echoRunnerJS";
export async function POST(req: Request) {
  const body = await req.json();

  
  // Check that input_as_text exists
  if (!body.input_as_text || body.input_as_text.trim() === "") {
    return new Response(JSON.stringify({ error: "Input text is required" }), { status: 400 });
  }
  const ghlApiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  // console.log("session id from route file:", body.sessionId)

  const result = await runWorkflow({ input_as_text: body.input_as_text ,sessionId:body.sessionId, apiKey:ghlApiKey,locationId:locationId });
  return new Response(JSON.stringify(result), { status: 200 });
}