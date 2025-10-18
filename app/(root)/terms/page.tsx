"use client"
import { useState } from "react";
import React from 'react'
import Image from 'next/image'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import YellowButton from "@/components/ui/YellowButton";




const TermsPage = () => {
  const [phone, setPhone] = useState("");




  return (
    <>

      <section className='pricing_hero pt-14 pb-24 relative'>
        <Image alt="background image" src="/images/pricing-hero-glow.png" width={400} height={300} className='absolute right-0 top-0 z-10 h-full ' />
        <div className="container relative z-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6">Terms of Use</h1>
          <p className="w-full max-w-[850px] mx-auto text-lg lg:text-xl text-center">Welcome to Harmonix (“we,” “our,” “us”). These Terms of Use (“Terms”) govern your access to and use of the Harmonix website, marketplace, services, and related applications (collectively, the “Platform”).
          By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, please discontinue using the Platform.</p>
        </div>
      </section>


      <section className="support_form_sec">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <p>
              <span className="title font-bold mb-2 block">1. Overview of Services:</span>Harmonix provides an online marketplace where users can discover, purchase, and deploy AI agents and digital tools created by developers. Our Platform facilitates interactions between creators (“Sellers”) and customers (“Buyers”) but does not directly develop or sell third-party agents unless otherwise stated.

            </p>
          

            <p className="mt-4">
              <span className="title font-bold mb-2 block">2. Eligibility</span>
              To use the Platform, you must:
            </p>
            <p> - Be at least 18 years old (or the legal age in your jurisdiction).</p>
            <p> - Have the authority to enter into these Terms.</p>
            <p> - Provide accurate, current, and complete registration information.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">3. Account Registration</span>
            </p>

            <p>You may need an account to access certain features of the Platform. You agree to:</p>
            <p> - Maintain the confidentiality of your login credentials.</p>
            <p> - Be responsible for all activity under your account.</p>
            <p> - Notify us immediately of any unauthorized use.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">4. Marketplace Transactions</span>
            </p>
            <p>All transactions between Buyers and Sellers occur directly through the Platform. Harmonix may charge service or transaction fees, disclosed before purchase.</p>
            <p>We are not responsible for the accuracy, performance, or legality of third-party AI agents sold by Sellers.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">5. Use of AI Agents</span>
            </p>
            <p>By purchasing or deploying an AI agent, you acknowledge and agree that:</p>
            <p> - Each agent&apos;s functionality and outputs depend on third-party AI models and integrations.</p>
            <p> - You are responsible for complying with all applicable laws in your use of AI agents.</p>
            <p> - Agents should not be used for unlawful, harmful, or deceptive purposes.</p>


            <p className="mt-4">
              <span className="title font-bold mb-2 block">6. Acceptable Use</span>
            </p>
            <p>You agree not to:</p>
            <p> - Engage in any fraudulent, abusive, or illegal activity.</p>
            <p> - Reverse engineer or tamper with the Platform or any AI agent.</p>
            <p> - Upload or distribute viruses or harmful code.</p>
            <p> - Use the Platform to infringe intellectual property or privacy rights.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">7. Intellectual Property</span>
            </p>
            <p>All content, trademarks, and software on the Platform belong to Harmonix or its licensors.</p>
            <p>Sellers retain ownership of their agents but grant Harmonix a license to host, display, and promote their listings.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">8. Payments and Refunds</span>
            </p>
            <p>Payments are processed via secure third-party gateways.</p>
            <p>Refunds are subject to our [Refund Policy] (if applicable). Once a digital product is accessed or downloaded, refunds may not be available.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">9. Limitation of Liability</span>
            </p>
            <p>To the maximum extent permitted by law, Harmonix is not liable for:</p>
            <p>Errors, bugs, or downtime of the Platform;</p>
            <p>Misuse or malfunction of third-party AI agents;</p>
            <p>Loss of data, revenue, or business opportunities.</p>
            <p>Use of the Platform is at your own risk.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">10. Termination</span>
            </p>
            <p>We reserve the right to suspend or terminate accounts that violate these Terms or engage in misconduct.</p>
            <p>Upon termination, you must stop using the Platform and any associated services.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">11. Modifications</span>
            </p>
            <p>We may update these Terms from time to time. Updated versions will be posted on this page, with the revised date noted above.</p>
            <p>Continued use of the Platform constitutes acceptance of the changes.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">12. Governing Law</span>
            </p>
            <p>These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to conflict of law principles.</p>

            <p className="mt-4">
              <span className="title font-bold mb-2 block">13. Contact Us</span>
            </p>
            <p>If you have questions or concerns regarding these Terms, please contact:</p>
            <p>📧 harmonix.hq@gmail.com</p>

          </div>



















        </div>
      </section>

                  



    </>
  )
}

export default TermsPage