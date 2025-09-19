import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Token from "@/models/Token";


// const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_BASE = "https://services.leadconnectorhq.com/oauth/token";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { locationId } = body;

    if (!locationId) {
      return NextResponse.json({ error: "Missing locationId" }, { status: 400 });
    }

    // Find stored tokens
    const tokenDoc = await Token.findOne({ locationId });
    if (!tokenDoc) {
      return NextResponse.json({ error: "No tokens found for this location" }, { status: 404 });
    }

    console.log("Client with the locationid found!")

    let { accessToken, refreshToken  } = tokenDoc;
    const { clientId, clientSecret } = tokenDoc;
    // console.log("Info from db: ",  clientId, clientSecret )

    // 1️⃣ Try calling GHL API with the current access token
    const apiRes = await fetch(`https://services.leadconnectorhq.com/contacts/search`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    //console.log("apiRes", apiRes)
    // 2️⃣ If unauthorized, try refreshing the token
    if (apiRes.status === 401) {
      console.log("Access token expired. Refreshing...");

      /*
      const refreshRes = await fetch(`https://services.leadconnectorhq.com/oauth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
          user_type: "Location",
          redirect_uri:"http://localhost:3000/getcode"
        }),
      });
      */


      const refreshRes = await fetch("https://services.leadconnectorhq.com/oauth/token", {
        method: "POST",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
          user_type: "Company", // must match what your API expects
          redirect_uri: "https://myapp.com/oauth/callback/highlevel"
        })
      });
      

      console.log("new refresho token result!",refreshRes )

      if (!refreshRes.ok) {
        return NextResponse.json({  success: false, error: "Failed to refresh token" }, { status: 401 });
      }

      

      const refreshData = await refreshRes.json();
      accessToken = refreshData.access_token;
      refreshToken = refreshData.refresh_token;

      // Save updated tokens
      await Token.findOneAndUpdate(
        { locationId },
        { accessToken, refreshToken },
        { new: true }
      );
    }

    

    return NextResponse.json({
      success: true,
      accessToken,
    });
  } catch (error) {
    console.error("GHL API error:", error);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
