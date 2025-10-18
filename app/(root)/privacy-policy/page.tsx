"use client"
import { useState } from "react";
import React from 'react'
import Image from 'next/image'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import YellowButton from "@/components/ui/YellowButton";




const PolicyPage = () => {
  const [phone, setPhone] = useState("");




  return (
    <>

      <section className='pricing_hero pt-14 pb-24 relative'>
        <Image alt="background image" src="/images/pricing-hero-glow.png" width={400} height={300} className='absolute right-0 top-0 z-10 h-full ' />
        <div className="container relative z-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6">Privacy Policy</h1>
          <p className="w-full max-w-[850px] mx-auto text-lg lg:text-xl text-center">Welcome to Harmonix (“we,” “our,” “us”). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website, marketplace, and related services (collectively, the “Platform”).</p>

          <p className="w-full max-w-[850px] mx-auto text-lg text-center">By accessing or using the Platform, you agree to this Privacy Policy. If you do not agree, please discontinue using the Platform.</p>
        </div>
      </section>


      <section className="support_form_sec">
        <div className="container">
          <div className="max-w-4xl mx-auto">
          <p className="mt-4">
            <span className="title font-bold mb-2 block">1. Information We Collect</span>
          </p>
          <p>We may collect the following types of information:</p>

          <p className="mt-2 font-semibold">a. Personal Information:</p>
          <p>Name, email address, and contact details.</p>
          <p>Billing and payment information.</p>
          <p>Account login credentials.</p>

          <p className="mt-2 font-semibold">b. Usage Data:</p>
          <p>IP address, browser type, and device information.</p>
          <p>Pages visited and time spent on the Platform.</p>
          <p>Clicks, search queries, and transaction history.</p>

          <p className="mt-2 font-semibold">c. AI Agent Interaction Data:</p>
          <p>Prompts, responses, and activity logs related to AI agent usage (for troubleshooting and performance improvement).</p>

          </div>



















        </div>
      </section>

                  



    </>
  )
}

export default PolicyPage