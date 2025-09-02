import React from 'react'
import Image from 'next/image'
import YellowButton from "@/components/ui/YellowButton";
import BlackButton from "@/components/ui/BlackButton";




const Newsletter = () => {
  return (
      <section className="home_newsletter mt-24 lg:mt-[220px]">
        <div className="container">
          <h2 className="font-semibold text-3xl md:text-4xl  lg:text-big text-center leading-10 lg:leading-20 text-golden mb-4 lg:mb-9 tracking-wider">Get Started with Harmonix</h2>
          <p className="sub_text text-lg lg:text-2xl text-center">Enter your details below to access our investor brochure</p>

          <form className="mt-14 lg:mt-[90px] block">
            <div className="form_row flex items-center bg-[#D9D9D9]/10 rounded-xl w-full max-w-[1192px] mx-auto relative">
              <input name="email" autoComplete="false" className="w-full h-[77px] pl-10" placeholder="Email" type="email" />
              <button className="cursor-pointer absolute -translate-y-1/2 top-1/2 right-6"  type="submit"><Image src="/images/circular-submit.png" alt="Submit button" width={67} height={60} /></button>
            </div>
          </form>

          <div className="download_wrap mt-18 ">
            <YellowButton className="flex gap-1 items-center mx-auto tracking-wide lg:!py-5">
              <span>Download Investor Check PDF</span>
              <Image src="/images/download.png" width={26} height={26} alt="download button" />
            </YellowButton>
          </div>


        </div>
      </section>
  )
}

export default Newsletter