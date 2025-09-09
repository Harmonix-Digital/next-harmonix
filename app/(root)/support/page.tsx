"use client"
import { useState } from "react";
import React from 'react'
import Image from 'next/image'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import YellowButton from "@/components/ui/YellowButton";




const SupportPage = () => {
  const [phone, setPhone] = useState("");




  return (
    <>

      <section className='pricing_hero pt-14 pb-24 relative'>
        <Image alt="background image" src="/images/pricing-hero-glow.png" width={400} height={300} className='absolute right-0 top-0 z-10 h-full ' />
        <div className="container relative z-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6">Support</h1>
          <p className="w-full max-w-[850px] mx-auto text-lg lg:text-xl text-center">Get quick help with setup, integrations, and advanced features. Explore FAQs, guides, and tutorials, or reach out directly to our team for fast, reliable support.</p>
        </div>
      </section>


      <section className="support_form_sec">
        <div className="container">
          <form className='' action="">
            
            
            <div className="form_row flex flex-col md:flex-row justify-between gap-4 lg:gap-[100px] mb-5">
              
              <div className="form_group w-full bg-[#D9D9D9]/10 p-5 rounded-[15px]">
                <label className='flex justify-center md:justify-start gap-4 items-center mb-2.5' htmlFor="email">
                  <Image src="/images/email-icon.png" alt="Eamil icon"  width={20} height={17} />
                  <span className='text-lg font-extrabold'>Email</span>
                </label>

                <a href="mailto:harmonix.hq@gmail.com" className="text-center md:text-left block">harmonix.hq@gmail.com</a>
              </div>

              
              <div className="form_group w-full bg-[#D9D9D9]/10 p-5 rounded-[15px]">
                <label className='flex justify-center md:justify-start gap-4 items-center mb-2.5' htmlFor="phone">
                  <Image src="/images/phone.png" alt="Eamil icon"  width={20} height={17} />
                  <span className='text-lg font-extrabold'>Phone</span>
                </label>

                <a href="tel:12345678" className="text-center md:text-left block">+1-234-5678</a>
              </div>

              
            </div>


            <div className="form_row flex flex-col md:flex-row justify-between gap-4 lg:gap-[100px] mb-5">
              
              <div className="form_group w-full">
                <label className='flex gap-4 items-center mb-2.5' htmlFor="firstName">
                  <span className='text-lg font-extrabold'>First Name</span>
                </label>

                <input id="firstName" type="text" className='bg-[#D9D9D9]/10 rounded-[15px] p-5 w-full' placeholder='First Name' />
              </div>

              
              <div className="form_group w-full">
                <label className='flex gap-4 items-center mb-2.5' htmlFor="lastName">
                  <span className='text-lg font-extrabold'>Last Name</span>
                </label>

                <input id="lastName" type="text" className='bg-[#D9D9D9]/10 rounded-[15px] p-5 w-full' placeholder='Last Name' />
              </div>
              
            </div>


            <div className="form_row flex flex-col md:flex-row justify-between gap-4 lg:gap-[100px] mb-5">
              
              <div className="form_group w-full">
                <label className='flex gap-4 items-center mb-2.5' htmlFor="email">
                  <span className='text-lg font-extrabold'>Email</span>
                </label>

                <input id="email" type="email" className='bg-[#D9D9D9]/10 rounded-[15px] p-5 w-full' placeholder='First Name' />
              </div>

              
              <div className="form_group w-full">
                <label className='flex gap-4 items-center mb-2.5' htmlFor="phone">
                  <span className='text-lg font-extrabold'>Phone</span>
                </label>

                <PhoneInput
                  country={"ca"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{
                    // width: "100%",
                    borderRadius: "15px",
                    background: "rgba(217, 217, 217, 0.1)",
                    color: "#C4C4C4",
                    padding: "20px",
                    height:"auto",
                    border:"0px solid",
                    fontSize:"16px",
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


            <div className="form_row flex justify-between gap-[100px] mb-5">
              
              <div className="form_group w-full">
                <label className='flex gap-4 items-center mb-2.5' htmlFor="message">
                  <span className='text-lg font-extrabold'>Message</span>
                </label>

                <textarea id="message" className='bg-[#D9D9D9]/10 rounded-[15px] p-5 w-full' placeholder='Message' />
              </div>
              
            </div>


            <div className="w-full max-w-[668px] mb-5 mx-auto mt-[50px]">
              <YellowButton className="w-full">Submit Form</YellowButton>             
            </div>



          </form>
        </div>
      </section>

                  

      <section className="faq_sec mt-20">
        
        <div className="container">
          
          <h2 className="font-extrabold text-2xl lg:text-[32px] mb-3.5 text-center">Frequently Asked Questions</h2>
          <p className="text-center">Everything you need to know about Harmonix pricing and plans</p>

          <div className="faqs mt-[50px] flex flex-col gap-5 ">
            
            <div className="single_faq px-6.5 py-5 rounded-[15px] bg-[#D9D9D9]/10">
              <h3 className="text-xl font-semibold mb-3.5">What's included in the setup fee?</h3>
              <p className="">The setup fee covers agent training, CRM integration, workflow configuration, team onboarding, and 30 days of dedicated support to ensure optimal performance.</p>
            </div>


            <div className="single_faq px-6.5 py-5 rounded-[15px] bg-[#D9D9D9]/10">
              <h3 className="text-xl font-semibold mb-3.5">Can I upgrade or downgrade my plan?</h3>
              <p className="">Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades occur at your next billing cycle.</p>
            </div>


            <div className="single_faq px-6.5 py-5 rounded-[15px] bg-[#D9D9D9]/10">
              <h3 className="text-xl font-semibold mb-3.5">Do you offer financing options?</h3>
              <p className="">Yes, we offer 12-month financing with 0% APR for qualified businesses. This allows you to spread the setup cost over monthly installments.</p>
            </div>

            <div className="single_faq px-6.5 py-5 rounded-[15px] bg-[#D9D9D9]/10">
              <h3 className="text-xl font-semibold mb-3.5">What happens if I'm not satisfied?</h3>
              <p className="">We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your setup fee and cancel your subscription.</p>
            </div>


            <div className="single_faq px-6.5 py-5 rounded-[15px] bg-[#D9D9D9]/10">
              <h3 className="text-xl font-semibold mb-3.5">How quickly can I see results?</h3>
              <p className="">Most customers see significant improvements within the first 30 days. Our agents typically achieve 40-70% automation of manual tasks within the first quarter.</p>
            </div>



          </div>



        </div>
      </section>



    </>
  )
}

export default SupportPage