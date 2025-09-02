"use client"
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import YellowButton from "../ui/YellowButton";

export default function PhoneField() {
  const [phone, setPhone] = useState("");

  return (

    <form className="relative z-20 mt-10.5 flex flex-col gap-6 lg:gap-13" action="">
    
      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        
        <div className="input_group flex flex-col gap-4 w-full">
          <label className="text-dimWhite text-xl lg:text-[28px] font-semibold" htmlFor="firstName">First Name</label>
          <input className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px] font-semibold placeholder-[#E6E6E6]/54 px-3 lg:px-6 py-2 lg:py-4" type="text" id="firstName" placeholder="First Name" />
        </div>
        
        <div className="input_group flex flex-col gap-4 w-full">
          <label className="text-dimWhite text-xl lg:text-[28px] font-semibold" htmlFor="lastName">Last Name</label>
          <input className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px] font-semibold placeholder-[#E6E6E6]/54 px-3 lg:px-6 py-2 lg:py-4" type="text" id="lastName" placeholder="Last Name" />
        </div>


      </div>

      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        
        <div className="input_group flex flex-col gap-4 w-full">
          <label className="text-dimWhite text-xl lg:text-[28px] font-semibold" htmlFor="email">Email</label>
          <input className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px] font-semibold placeholder-[#E6E6E6]/54 px-3 lg:px-6 py-2 lg:py-4" type="text" id="email" placeholder="Email" />
        </div>
        
        <div className="input_group flex flex-col gap-4 w-full">
          <label className="text-dimWhite text-xl lg:text-[28px] font-semibold" htmlFor="lastName">Phone</label>
          <PhoneInput
            country={"ca"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{
              // width: "100%",
              borderRadius: "10px",
              background: "rgba(217, 217, 217, 0.1)",
              color: "#C4C4C4",
              padding: "16px 24px",
              height:"auto",
              border:"0px solid",
              fontSize:"28px",
              width:"100%",
              paddingLeft:"44px",
              lineHeight: "1.5", 

            }}
            buttonClass="flag-button"
            buttonStyle={{
              borderRadius: "10px 0 0 10px",
              background: "rgba(217, 217, 217, 0.0)",
              border: "none",
            }}
            dropdownStyle={{
              background: "#1A1A1A",
              color: "#fff",
            }}
          />          
        </div>


      </div>

      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        
        <div className="input_group flex flex-col gap-4 w-full">
          <label className="text-dimWhite text-xl lg:text-[28px] font-semibold" htmlFor="organization">Organization</label>
          <input className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px] font-semibold placeholder-[#E6E6E6]/54 px-3 lg:px-6 py-2 lg:py-4" type="text" name="organization" id="organization" placeholder="Organization" />
        </div>
        
        <div className="input_group flex flex-col gap-4 w-full">
          <label className="text-dimWhite text-xl lg:text-[28px] font-semibold" htmlFor="business">Business Type</label>
          

          <select className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px] font-s px-3elg:mibo py-2llg:d  px-6 py-4" name="business" id="business">
            <option className="bg-black text-white" value="">Select One</option>
            <option className="bg-black text-white" value="">Option 1</option>
            <option className="bg-black text-white" value="">Option 2</option>
            <option className="bg-black text-white" value="">Option 3</option>
          </select>
        </div>


      </div>


      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        
        <div className="input_group flex flex-col gap-4 w-full">
          <label className="text-dimWhite text-xl lg:text-[28px] font-semibold" htmlFor="profit">How much profit (EBITDA) did your business earn over the past 3 months?</label>
          <select className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px] fo px-3nlg:t-se py-2mlg:ibold  px-6 py-4" name="profit" id="profit">
            <option className="bg-black text-white" value="">Select One</option>
            <option className="bg-black text-white" value="">Option 1</option>
            <option className="bg-black text-white" value="">Option 2</option>
            <option className="bg-black text-white" value="">Option 3</option>
          </select>
        </div>
        
        <div className="input_group flex flex-col gap-4 w-full">
          <label className="text-dimWhite text-xl lg:text-[28px] font-semibold lg:mb-10" htmlFor="teamSize">Team Size</label>
          

          <select className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px] font-se px-3mlg:ibol py-2dlg:  px-6 py-4 " name="teamSize" id="teamSize">
            <option className="bg-black text-white" value="">Select One</option>
            <option className="bg-black text-white" value="">1-10</option>
            <option className="bg-black text-white" value="">11-20</option>
            <option className="bg-black text-white" value="">21-50</option>
          </select>
        </div>


      </div>

      <div className="form_row flex flex-col gap-7">

        <div className="input-group flex gap-2 ">
          <input type="checkbox" id="msgConcent" name="msgConcent" />
          <label htmlFor="msgConcent">By checking this box, I agree to receive messages from Harmonix Digital and can reply STOP to Un subsribe</label>
        </div>

        <div className="input-group flex gap-2 ">
          <input type="checkbox" id="termsAgreement" name="termsAgreement" />
          <label htmlFor="termsAgreement">I agree with <Link className="text-golden" href="/terms"> Terms & Condition</Link></label>
        </div>


      </div>

      <YellowButton className="font-medium text-xl lg:text-[32px]">Join Waitlist</YellowButton>


    </form>
  );
}
