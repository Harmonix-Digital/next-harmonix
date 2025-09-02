import React from 'react'
import Image from 'next/image'



const HomeTiers = () => {
  return (
      <section className="home_tiers mt-19">
        <div className="container !max-w-[1380px]">
          
          <div className="sec_btn flex items-center justify-center gap-2 bg-[#D9D9D9]/10 rounded-[20px] px-8 py-[15px] w-[296px] mx-auto text-golden text-lg font-semibold">
            <span>Early Adopter Pricing</span>
            <Image src="/images/clock.png" alt="Clock icon" width={28} height={28} />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-big font-semibold text-center mb-5 text-golden">Investment Tiers
          </h2>
          <p className="sub_text texl-lg lg:text-2xl text-center">Limited time offer - 30% discount. Secure your spot before rates increase.</p>

          <div className="tiers_wrap flex flex-col md:flex-row md:flex-wrap gap-12 lg:gap-4 items-center justify-center mt-11 lg:mt-24">
            
            <div className="tier flex-1 bg-[#D9D9D9]/10 rounded-[10px] flex flex-col items-center p-7">
              <p className="text-golden text-[28px] font-semibold mb-3">Starter</p>
              <p className="font-semibold text-[12px] mb-6">1 Agent</p>
              <p className="text-offwhite text-[16px] font-semibold mb-2">$320/month</p>
              <p className="text-golden text-[9px] font-semibold mb-6">Ongoing monthly cost</p>
              <p className="flex gap-2 items-center">
                <span className="line-through text-[8px]">$4.4,000</span>
                <span className="text-golden text-[12px] mb-2">30% OFF</span>
              </p>
              <p className="text-[12px]">$4.4K setup</p>
              <p className="text-golden text-[8px] font-semibold mb-6">One-time platform setup</p>

              <button className="rounded-[8px] px-2 py-3 border border-golden text-[10px]">Pay 30% Deposit & Get 15% Off + Priority Access</button>
            </div>

            <div className="tier flex-1 bg-[#D9D9D9]/10 rounded-[10px] flex flex-col items-center p-7 relative">
              <div className="popular bg-[#D9D9D9]/10 rounded-[12px] px-2.5 py-3.5 absolute -translate-y-1/2 -top-[10px]">
                <p className="text-[10px] text-golden font-semibold">Most Popular</p>  
              </div>
              <p className="text-golden text-[28px] font-semibold mb-3">Growth</p>
              <p className="font-semibold text-[12px] mb-6">3–5 Agents</p>
              <p className="text-offwhite text-[16px] font-semibold mb-2">$960 – $1,600/month</p>
              <p className="text-golden text-[9px] font-semibold mb-6">Ongoing monthly cost</p>
              <p className="flex gap-2 items-center">
                <span className="line-through text-[8px]">$8,000</span>
                <span className="text-golden text-[12px] mb-2">30% OFF</span>
              </p>
              <p className="text-[12px]">$8K setup</p>
              <p className="text-golden text-[8px] font-semibold mb-6">One-time platform setup</p>

              <button className="rounded-[8px] px-2 py-3 border border-golden text-[10px]">Pay 30% Deposit & Get 15% Off + Priority Access</button>
            </div>  

            <div className="tier flex-1 bg-[#D9D9D9]/10 rounded-[10px] flex flex-col items-center p-7">
              <p className="text-golden text-[28px] font-semibold mb-3">Expansion</p>
              <p className="font-semibold text-[12px] mb-6">6–8 Agents</p>
              <p className="text-offwhite text-[16px] font-semibold mb-2">$1,920 – $2,560/month
              </p>
              <p className="text-golden text-[9px] font-semibold mb-6">Ongoing monthly cost</p>
              <p className="flex gap-2 items-center">
                <span className="line-through text-[8px]">$15,000</span>
                <span className="text-golden text-[12px] mb-2">30% OFF</span>
              </p>
              <p className="text-[12px]">$15K setup</p>
              <p className="text-golden text-[8px] font-semibold mb-6">One-time platform setup</p>

              <button className="rounded-[8px] px-2 py-3 border border-golden text-[10px]">Pay 30% Deposit & Get 15% Off + Priority Access</button>
            </div>

            <div className="tier flex-1 bg-[#D9D9D9]/10 rounded-[10px] flex flex-col items-center p-7">
              <p className="text-golden text-[28px] font-semibold mb-3">Enterprise</p>
              <p className="font-semibold text-[12px] mb-6">9–12 Agents</p>
              <p className="text-offwhite text-[16px] font-semibold mb-2">$2,880 – $3,840/month              </p>
              <p className="text-golden text-[9px] font-semibold mb-6">Ongoing monthly cost</p>
              <p className="flex gap-2 items-center">
                <span className="line-through text-[8px]">$21,500+</span>
                <span className="text-golden text-[12px] mb-2">30% OFF</span>
              </p>
              <p className="text-[12px]">$21.5K+ setup</p>
              <p className="text-golden text-[8px] font-semibold mb-6">One-time platform setup</p>

              <button className="rounded-[8px] px-2 py-3 border border-golden text-[10px]">Pay 30% Deposit & Get 15% Off + Priority Access</button>
            </div>



          </div>




        </div>
      </section>
  )
}

export default HomeTiers