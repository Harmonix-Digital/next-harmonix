import React from 'react'
import Image from 'next/image'
import YellowButton from "@/components/ui/YellowButton";
import BlackButton from "@/components/ui/BlackButton";


const Savings = () => {
  return (
      <section className="savings mt-24 lg:mt-[174px]">
        <div className="container">
          <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center leading-10 lg:leading-20 text-golden mb-5 tracking-wider">This isn't theory — it's already saving teams 40+ hours/week</h2>
          <p className="sub_text text-lg lg:text-2xl text-center">Real results from businesses that have activated their AI workforce.</p>

          <div className="savings_col_wrap flex flex-col md:flex-row justify-between gap-11 mt-16 lg:mt-[150px]">
            
            <div className="savings_col">
              <p className="font-semibold text-3xl lg:text-[76px] text-center">40+</p>
              <p className="text-golden  lg:text-[32px] text-center">Hours saved per week</p>
            </div>            
            <div className="savings_col">
              <p className="font-semibold text-3xl lg:text-[76px] text-center">280+</p>
              <p className="text-golden  lg:text-[32px] text-center">Early adopters</p>
            </div>            
            <div className="savings_col">
              <p className="font-semibold text-3xl lg:text-[76px] text-center">95%</p>
              <p className="text-golden  lg:text-[32px] text-center">Automation success</p>
            </div>

          </div>

          <div className="savings_cta_wrap flex flex-col md:flex-row justify-center gap-10 lg:gap-19 mt-22">
            <YellowButton className="flex gap-1 items-center justify-center !rounded-2xl !text-[22px]"><Image src="/images/video_icon.png" alt="video icon" width={18} height={18} /> <span>Watch Live Demo</span> </YellowButton>

            <BlackButton className="!rounded-2xl !text-[22px]">Read Success Stories</BlackButton>
          </div>



        </div>
      </section>
  )
}

export default Savings