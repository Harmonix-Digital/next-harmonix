import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Token from "@/models/Token";

// Save token
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { locationId, accessToken, refreshToken, clientSecret, clientId } = body;

    if (!locationId || !accessToken || !refreshToken || !clientId || !clientSecret) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const tokenDoc = await Token.findOneAndUpdate(
      { locationId },
      { accessToken, refreshToken, clientId, clientSecret },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Token saved successfully",
      token: tokenDoc,
    });

  } catch (error) {
    console.error("Token save error:", error);
    return NextResponse.json({ error: "Failed to save token" }, { status: 500 });
  }
}


// Get token
export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const subAccountId = searchParams.get("subAccountId");

    if (!subAccountId) {
      return NextResponse.json({ error: "subAccountId is required" }, { status: 400 });
    }

    const tokenDoc = await Token.findOne({ subAccountId });
    if (!tokenDoc) {
      return NextResponse.json({ error: "Token not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, token: tokenDoc });
  } catch (error) {
    console.error("Token fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch token" }, { status: 500 });
  }
}
