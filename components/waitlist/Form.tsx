"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import YellowButton from "../ui/YellowButton";
import { toast } from 'react-toastify';





interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  business: string;
  profit: string;
  teamSize: string;
  harmonixPlan: string;
  msgConsent: boolean;
  termsAgreement: boolean;
  source:string;
}

interface Status {
  loading: boolean;
  message: string;
  error: boolean;
}

export default function PhoneField() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    business: "",
    profit: "",
    teamSize: "",
    harmonixPlan: "",
    msgConsent: false,
    termsAgreement: false,
    source:"harmonix_join_waitlist"
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    message: "",
    error: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && "checked" in e.target) {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePhoneChange = (phone: string) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.termsAgreement) {
      setStatus({ loading: false, message: "Please agree to the Terms & Conditions.", error: true });
      return;
    }

    try {
      setStatus({ loading: true, message: "Submitting...", error: false });

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      

      

      const data = await res.json();
      console.log("res data", data)

      if(!data.success){
        // throw new Error("User already exists!");
        return toast.error("User already exists!")
      }

      // if (!res.ok) throw new Error("Failed to submit form.");
      toast.success("Your submission has been received. Thank you!")


      setStatus({ loading: false, message: data.message || "Form submitted successfully!", error: false });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        business: "",
        profit: "",
        teamSize: "",
        harmonixPlan: "",
        msgConsent: false,
        termsAgreement: false,
        source:"harmonix_join_waitlist",
      });
    } catch (error: unknown) {
      let message = 'An unknown error occurred';
    
      if (error instanceof Error) {
        message = error.message;
      }
    
      setStatus({ loading: false, message, error: true });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 mt-10.5 flex flex-col gap-6 lg:gap-13"
    >
      {/* Name Row */}
      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px]
              font-semibold placeholder-[#E6E6E6]/54 px-3 lg:px-6 py-2 lg:py-4"
            type="text"
            id="firstName"
            placeholder="First Name"
            required
          />
        </div>

        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px]
              font-semibold placeholder-[#E6E6E6]/54 px-3 lg:px-6 py-2 lg:py-4"
            type="text"
            id="lastName"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      {/* Email + Phone Row */}
      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px]
              font-semibold placeholder-[#E6E6E6]/54 px-3 lg:px-6 py-2 lg:py-4"
            type="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="phone"
          >
            Phone
          </label>
          <PhoneInput
            country="ca"
            value={formData.phone}
            onChange={handlePhoneChange}
            inputStyle={{
              borderRadius: "10px",
              background: "rgba(217, 217, 217, 0.1)",
              color: "#C4C4C4",
              padding: "16px 24px",
              height: "auto",
              border: "0px solid",
              fontSize: "28px",
              width: "100%",
              paddingLeft: "44px",
              lineHeight: "1.5",
            }}
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

      {/* Organization + Business Type */}
      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="organization"
          >
            Organization
          </label>
          <input
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px]
              font-semibold placeholder-[#E6E6E6]/54 px-3 lg:px-6 py-2 lg:py-4"
            type="text"
            id="organization"
            placeholder="Organization"
          />
        </div>

        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="business"
          >
            Business Type
          </label>
          <select
            name="business"
            value={formData.business}
            onChange={handleChange}
            className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px]
              px-3 lg:px-6 py-2 lg:py-4"
          >
            <option className="bg-black text-white"  value="">Select One</option>
            <option className="bg-black text-white"  value="Real Estate">Real Estate</option>
            <option className="bg-black text-white"  value="Healthcare">Healthcare</option>
            <option className="bg-black text-white"  value="Logistics">Logistics</option>
            <option className="bg-black text-white"  value="Creative/Media">Creative / Media</option>
            <option className="bg-black text-white"  value="Professional Services">Professional Services</option>
            <option className="bg-black text-white"  value="E-Commerce">E-Commerce</option>
            <option className="bg-black text-white"  value="Tech & SaaS">Tech & SaaS</option>
            <option className="bg-black text-white"  value="Nonprofit">Nonprofit</option>
          </select>
        </div>
      </div>

      {/* Profit + Team Size */}
      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="profit"
          >
            Profit (Last 3 Months)
          </label>
          <select
            name="profit"
            value={formData.profit}
            onChange={handleChange}
            className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px]
              px-3 lg:px-6 py-2 lg:py-4"
          >
            <option className="bg-black text-white"  value="">Select One</option>
            <option className="bg-black text-white"  value="$0 – $50K / month">$0 – $50K / month</option>
            <option className="bg-black text-white"  value="$50K – $250K / month">$50K – $250K / month</option>
            <option className="bg-black text-white"  value="$250K – $1M / month">$250K – $1M / month</option>
            <option className="bg-black text-white"  value="$1M+ / month">$1M+ / month</option>
          </select>
        </div>

        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="teamSize"
          >
            Team Size
          </label>
          <select
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px]
              px-3 lg:px-6 py-2 lg:py-4"
          >
            <option className="bg-black text-white"  value="">Select One</option>
            <option className="bg-black text-white"  value="1-5 Employees">1-5 Employees</option>
            <option className="bg-black text-white"  value="6-20 Employees">6-20 Employees</option>
            <option className="bg-black text-white"  value="21-50 Employees">21-50 Employees</option>
            <option className="bg-black text-white"  value="51-200 Employees">51-200 Employees</option>
            <option className="bg-black text-white"  value="200+ Employees">200+ Employees</option>
          </select>
        </div>
      </div>

      {/* Plan of Interest */}
      <div className="form_row flex flex-col md:flex-row gap-6 lg:gap-24 justify-between">
        <div className="input_group flex flex-col gap-4 w-full">
          <label
            className="text-dimWhite text-xl lg:text-[28px] font-semibold"
            htmlFor="plan"
          >
            Select Your Plan of Interest
          </label>
          <select
            name="harmonixPlan"
            value={formData.harmonixPlan}
            onChange={handleChange}
            className="text-dimWhite rounded-[10px] bg-[#D9D9D9]/10 text-lg lg:text-[28px] fo px-3nlg:t-se py-2mlg:ibold  px-6 py-4"
          >
            <option className="bg-black text-white"  value="">Select One</option>
            <option className="bg-black text-white"  value="Launch ($1K–$3K)">Launch ($1K–$3K)</option>
            <option className="bg-black text-white"  value="Growth ($4K–$8K)">Growth ($4K–$8K)</option>
            <option className="bg-black text-white"  value="Enterprise ($10K+)">Enterprise ($10K+)</option>
          </select>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="form_row flex flex-col gap-7">
        <div className="input-group flex gap-2">
          <input
            type="checkbox"
            id="msgConsent"
            name="msgConsent"
            checked={formData.msgConsent}
            onChange={handleChange}
          />
          <label htmlFor="msgConsent">
            By checking this box, I agree to receive messages from Harmonix Digital and can reply STOP to unsubscribe.
          </label>
        </div>

        <div className="input-group flex gap-2">
          <input
            type="checkbox"
            id="termsAgreement"
            name="termsAgreement"
            checked={formData.termsAgreement}
            onChange={handleChange}
          />
          <label htmlFor="termsAgreement">
            I agree with{" "}
            <Link className="text-golden" href="/terms">
              Terms & Conditions
            </Link>
          </label>
        </div>
      </div>

      <YellowButton
        type="submit"
        // disabled={status.loading}
        className="font-medium text-xl lg:text-[32px]"
      >
        {status.loading ? "Submitting..." : "Join Waitlist"}
      </YellowButton>

      {status.message && (
        <p
          className={`text-center mt-4 ${
            status.error ? "text-red-500" : "text-green-400"
          }`}
        >
          {/* {status.message} */}
        </p>
      )}
    </form>
  );
}
