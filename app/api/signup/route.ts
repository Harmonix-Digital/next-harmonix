import { NextResponse } from "next/server";
import { getValidAccessToken } from "@/lib/gtValidAccessToken";
import { createContact } from "@/lib/createContact";

export async function POST(req: Request) {
  try {
    // Parse request body (for controlled form via fetch/axios)
    const body = await req.json();
    const { name, email, message } = body;

    console.log("Form data:", { name, email, message });

    const token = await getValidAccessToken("eKlKYR6vdxwBnCFOUy5l");
    // console.log("token from library:" , token)
    const contactData = {
      firstName: "",
      lastName: "",
      name,
      email,
      locationId:"eKlKYR6vdxwBnCFOUy5l",
    };


    try {
 
     const result = await createContact(token, contactData);
    console.log("Contact created:", result);
    // return result;
    return NextResponse.json({ success: true, message: "Form submitted!" });



    } catch (error:unknown) {
      console.log(error)

      if (error instanceof Error) {
        console.error(error.message);
        return NextResponse.json({ success: false, message: error.message });
      } else {
        console.error("Unknown error", error);
        return NextResponse.json({ success: false, message: 'Something went wrong!' });
      }
      
    }

    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, errorMsg: "Invalid request", error }, { status: 400 });
  }
}
