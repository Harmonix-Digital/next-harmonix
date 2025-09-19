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

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`GHL API error: ${response.status} - ${errorText}`);
    }

    return await response.json();
  } catch (err: unknown) {
    console.error("Create contact error:", err);
    throw err;
  }
}
