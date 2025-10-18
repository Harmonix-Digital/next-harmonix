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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6">FAQ</h1>
          {/* <p className="w-full max-w-[850px] mx-auto text-lg lg:text-xl text-center">Welcome to Harmonix (“we,” “our,” “us”). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website, marketplace, and related services (collectively, the “Platform”).</p> */}

        </div>
      </section>


      <section className="support_form_sec">
        <div className="container">
          <div className="max-w-4xl mx-auto">
          <p className="mt-4">
            <span className="title font-bold mb-2 block">1. What is Harmonix?</span>
          </p>
          <p>Harmonix is a digital marketplace where developers can create, list, and sell AI-powered agents and tools. Buyers can explore, purchase, and deploy these agents for business, personal, or creative use.</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">2. How do I create an account?</span>
          </p>
          <p>To create an account:</p>
          <p>1. Click <strong>Sign Up</strong> on the top-right corner of the website.</p>
          <p>2. Enter your name, email, and password.</p>
          <p>3. Verify your email to activate your account.</p>
          <p>Once verified, you can browse or list agents on the marketplace.</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">3. How do I buy an AI agent?</span>
          </p>
          <p>You can purchase an AI agent by visiting its product page and clicking “Buy Now” or “Get Agent.”</p>
          <p>After purchase, you’ll receive access to the agent directly through your dashboard or via your registered email.</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">4. Can I sell my own AI agents on Harmonix?</span>
          </p>
          <p>Yes! If you’re a developer, you can list your AI agents for sale on the platform.</p>
          <p>You’ll need to create a Seller Account, provide a description, upload files or integrations, and set your pricing. Our team reviews each listing before it goes live.</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">5. What payment methods do you accept?</span>
          </p>
          <p>We currently support major credit/debit cards and secure online payment gateways.</p>
          <p>Additional payment options (such as crypto or PayPal) may be added in the future.</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">6. How do refunds work?</span>
          </p>
          <p>Refunds depend on the type of product purchased.</p>
          <p>Digital items are generally non-refundable once accessed or downloaded, but if there’s a technical issue, you can contact our support team at <strong>harmonix.hq@gmail.com</strong> for assistance.</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">7. Are AI agents safe to use?</span>
          </p>
          <p>We review all listings to ensure they meet our quality and ethical standards.</p>
          <p>However, as AI agents are developed by independent creators, we recommend reviewing the agent’s description, permissions, and privacy details before purchase.</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">8. Can I customize an AI agent I buy?</span>
          </p>
          <p>In most cases, yes. Many agents can be customized or extended depending on the seller’s terms.</p>
          <p>You can contact the seller directly or request customization through our platform if the option is available.</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">9. How do developers get paid?</span>
          </p>
          <p>Creators receive payouts for each successful sale minus Harmonix’s transaction or service fee.</p>
          <p>Payouts are processed via secure payment gateways on a set schedule (e.g., weekly or monthly).</p>

          <p className="mt-4">
            <span className="title font-bold mb-2 block">10. Who do I contact for support?</span>
          </p>
          <p>If you have questions about your account, purchases, or listings, reach out to us at:</p>
          <p>📧 <strong>harmonix.hq@gmail.com</strong></p>


          </div>

        </div>
      </section>

                  



    </>
  )
}

export default PolicyPage