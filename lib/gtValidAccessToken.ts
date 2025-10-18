import { connectDB } from "@/lib/db";
import Token from "@/models/Token";

export async function getValidAccessToken(locationId: string) {
  await connectDB();
  const tokenDoc = await Token.findOne({ locationId });
  if (!tokenDoc) throw new Error("No tokens found");

  let { accessToken, refreshToken } = tokenDoc;
  const {  clientId, clientSecret } = tokenDoc;

  // test token 
  const bodyData = {
    // locationId: "eKlKYR6vdxwBnCFOUy5l",
    locationId: locationId,
    pageLimit: 10,
  };

  const testRes = await fetch("https://services.leadconnectorhq.com/contacts/search", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
      "Version": "2021-07-28",
    },
    body: JSON.stringify(bodyData),
    redirect: "follow",
  });

  // console.log("Token Test result:", testRes)


  
  if (testRes.status === 401) {
    // console.log("Access Token invalid, creating new one!")
    const refreshRes = await fetch("https://services.leadconnectorhq.com/oauth/token", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        user_type: "Company",
        redirect_uri: "http://localhost:3000/getcode",
      }),
    });

    

    

    if (!refreshRes.ok) throw new Error("Failed to refresh token");

    const refreshData = await refreshRes.json();
    // console.log("Refresh token creation info:", refreshData)
    accessToken = refreshData.access_token;
    refreshToken = refreshData.refresh_token;

    await Token.findOneAndUpdate(
      { locationId },
      { accessToken, refreshToken },
      { new: true }
    );
  }
  

  return accessToken;
}
