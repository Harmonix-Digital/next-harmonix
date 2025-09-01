import React from 'react'
import Image from 'next/image'
import YellowButton from "@/components/ui/YellowButton";
import BlackButton from "@/components/ui/BlackButton";


const OwnerFeature = () => {
  return (
      <section className="owner_feature mt-19">
        <div className="container">

          <div className="sec_btn flex items-center justify-center gap-2 bg-[#D9D9D9]/10 rounded-[20px] px-8 py-[15px] w-[296px] mx-auto text-golden text-lg font-semibold">
            <span>Harmonix Tokens</span>
            <Image src="/images/dollar.png" alt="Clock icon" width={28} height={28} />
          </div>

          <h2 className="text-big font-semibold text-center mt-4 mb-5 text-golden"> Unlock the Future of AI Ownership</h2>
          <p className="sub_text text-2xl text-center">Our NFTs aren’t just collectibles. They’re functional tokens designed to connect you with rewards, access, and growth inside our AI-driven platform</p>

          <div className="flex flex-col md:flex-row gap-16 mt-[180px] pb-[195px]">
            
            <div className="relative flex flex-col md:flex-row">
              
              <div className="single_card">
                <div className=" bg-[#D9D9D9]/10 rounded-[10px] px-3.5 py-2 relative lg:-right-[15px]">
                  <Image src="/images/token-img.png" width={258} height={261} alt="ownership image" />
                  <p className="text-golden font-semibold">Harmonix Tokens 2</p>
                  <div className="flex justify-between">
                    
                    <div className="flex gap-1 items-center">
                      <Image src="/images/token-icon.png" alt="token icon" width={20} height={20} />
                      <span className="text-sm font-semibold">12.5 ETH</span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Image className="w-3 h-3" src="/images/clock-white.png" alt="token icon" width={12} height={12} />
                      <span className="text-sm font-semibold">6h:30m:7s</span>
                    </div>


                  </div>
                </div>
              </div>

              <div className="single_card">
                <div className="single_card bg-[#D9D9D9]/10 rounded-[10px] px-3.5 py-2 relative lg:top-[70%] ">
                  <Image src="/images/token-img.png" width={258} height={261} alt="ownership image" />
                  <p className="text-golden font-semibold">Harmonix Tokens 2</p>
                  <div className="flex justify-between">
                  
                    <div className="flex gap-1 items-center">
                      <Image src="/images/token-icon.png" alt="token icon" width={20} height={20} />
                      <span className="text-sm font-semibold">12.5 ETH</span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Image className="w-3 h-3" src="/images/clock-white.png" alt="token icon" width={12} height={12} />
                      <span className="text-sm font-semibold">6h:30m:7s</span>
                    </div>


                  </div>



                </div>          

              </div>

              <div className="single_card">
                <div className="single_card bg-[#D9D9D9]/10 rounded-[10px] px-3.5 py-2 relative lg:-left-[15px]">
                  <Image src="/images/token-img.png" width={258} height={261} alt="ownership image" />
                  <p className="text-golden font-semibold">Harmonix Tokens 2</p>
                  <div className="flex justify-between">
                    
                    <div className="flex gap-1 items-center">
                      <Image src="/images/token-icon.png" alt="token icon" width={20} height={20} />
                      <span className="text-sm font-semibold">12.5 ETH</span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Image className="w-3 h-3" src="/images/clock-white.png" alt="token icon" width={12} height={12} />
                      <span className="text-sm font-semibold">6h:30m:7s</span>
                    </div>


                  </div>
                </div>
              </div>


            </div>

            <div className="right-col pt-11">
              <p className="font-semibold text-5xl text-center leading-20 text-golden max-w-[500px]">Collect. Connect. Grow with AI</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-9 mt-[46px]">
                <YellowButton href="/" className="shadow-lg">Mint Now</YellowButton>
                <BlackButton href="/" className="flex gap-1 items-center justify-center"><span>Learn more</span> <Image alt="right angle" src="/images/angle-right.png" width={16} height={16} /></BlackButton>
              </div>
            </div>

          </div>

        </div>
      </section>
  )
}

export default OwnerFeature