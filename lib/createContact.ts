// lib/ghlApi.ts
export async function createContact(accessToken: string, contactData: unknown) {
  const url = "https://services.leadconnectorhq.com/contacts/";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
        "Version": "2021-07-28",
      },
      body: JSON.stringify(contactData),
      redirect: "follow",
    });

    const ghlResponse = await response.json()

    console.log("GHL Response:", ghlResponse)
    // console.log("GHL Response Status:", response.status)

    if(response.status == 400){
      throw new Error(`User already exists!`);
    }

    /*
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`GHL API error: ${response.status} - ${errorText}`);
    }
      */

    // return await response.json();
    return {success:true, message: ghlResponse.message}
  } catch (err: unknown) {
    // console.error("Create contact error:", err);
    // return {success:false, message: err.message}
    if (err instanceof Error) {
      return { success: false, message: err.message };
    }
  
    return { success: false, message: String(err) };

  
  }
}
