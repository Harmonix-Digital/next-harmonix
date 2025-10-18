import { NextResponse } from "next/server";
import { getValidAccessToken } from "@/lib/gtValidAccessToken";
import { createContact } from "@/lib/createContact";

export async function POST(req: Request) {
  try {
    // Parse request body (for controlled form via fetch/axios)
    const body = await req.json();
    const { firstName,lastName, email, phone, organization, business, profit, teamSize, harmonixPlan, msgConsent,termsAgreement, source } = body;

    console.log("Form data:", { firstName,lastName, email, phone, organization, business, profit, teamSize, harmonixPlan, msgConsent,termsAgreement, source });

    const token = await getValidAccessToken("eKlKYR6vdxwBnCFOUy5l");
    // console.log("token from library:" , token)
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      customFields:[
        {
          id:"Y3CnXWiNzZ7RrCvthndR",
          key:"contact.organization_name",
          field_value:organization
        },
        {
          id:"kwO8xYPKoBKD34mZAoqG",
          key:"contact.harmonix_plan",
          field_value:harmonixPlan
        },
        {
          id:"VPnfjnCuAtmGvdzFuIk3",
          key:"contact.business",
          field_value:business
        },
        {
          id:"7ai48jEkjOZFkVU10Jmc",
          key:"contact.profit",
          field_value:profit
        },
        {
          id:"YVsdizjxf9ZzHgvoTdpA",
          key:"contact.team_size",
          field_value:teamSize
        }
      ],
      locationId:"eKlKYR6vdxwBnCFOUy5l",
      source,
      dndSettings:{
        Email:{
          status: msgConsent ? 'inactive' :"active"
        },

        SMS:{
          status: msgConsent ? 'inactive' :"active"
        },

      }
    };

    const result = await createContact(token, contactData);
    // console.log("Contact creation result on route file:", result);

    if(result.success){
      return NextResponse.json({ success: true, message: "Form submitted!" });
    }else{
      return NextResponse.json({ success: false, message: result.message });
    }
    
    

    /*
    try {
 
    const result = await createContact(token, contactData);
    console.log("Contact created:", result);
    // return result;
    return NextResponse.json({ success: true, message: "Form submitted!" });



    } catch (error:unknown) {
      console.log("Error on route page: ",error)

      if (error instanceof Error) {
        console.error(error.message);
        return NextResponse.json({ success: false, message: error.message });
      } else {
        console.error("Unknown error", error);
        return NextResponse.json({ success: false, message: error ? error : 'Something went wrong!' });
      }
      
    }

    */

    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, errorMsg: "Invalid request", error }, { status: 400 });
  }
}
