import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeDescription = () => {
  return (
      <section className="home_desc mt-21">
        <div className="container">
          <h2 data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500"  className="text-3xl md:text-4xl lg:text-big font-semibold text-center mb-5">Design a business that runs <span className="text-golden">itself</span> </h2>
          <p data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500" className="sub_text text-xl lg:text-2xl text-center">A full AI operating system for teams who value freedom, clarity, and flow.</p>
          

          <div className="home_desc_blocks_wrap flex flex-col lg:flex-row gap-9 lg:gap-6 mt-19">
            
            <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700"  data-aos-delay="0"className="home_desc_block rounded-3xl bg-[#D9D9D91A]  pt-0 pb-9">
              <div className="flex justify-end">
                <p className="inline-block px-9 py-5 rounded-2xl bg-[#0F1115] text-golden font-semibold text-xl lg:text-[27px]">Agent Intelligence</p>
              </div>

              <div className="px-7 mt-9">
                <p className="pb-5 font-medium text-[20px] leading-[35px]">12 core agents trained for sales, systems, content, and client ops.</p>

                <div className="home-desc_points relative">
                  <Image className="absolute left-[4px] top-2.5 z-10 max-h-[98%]" src="/images/white-ver-line.png"  width={4} height={180} alt='vertical bar' />
                  
                  <ul className="flex flex-col justify-between gap-11 mt-2">

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Sales automation
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Content creation
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Client management
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />System optimization
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="300" className="home_desc_block rounded-3xl bg-[#D9D9D91A]  pt-0 pb-9">
              <div className="flex justify-end">
                <p className="inline-block px-9 py-5 rounded-2xl bg-[#0F1115] text-golden font-semibold text-xl lg:text-xl lg:text-[27px]">Seamless Integration</p>
              </div>

              <div className="px-7 mt-9">
                <p className="pb-5 font-medium text-[20px] leading-[35px]">Plug into your tools: GHL, Stripe, Slack, Notion, ClickUp & more.</p>

                <div className="home-desc_points relative">
                  <Image className="absolute left-[4px] top-2.5 z-10 max-h-[98%]" src="/images/white-ver-line.png"  width={4} height={180} alt='vertical bar' />
                  
                  <ul className="flex flex-col justify-between gap-11 mt-2">

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />CRM sync
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Payment processing
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Team collaboration
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Project management
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="600" className="home_desc_block rounded-3xl bg-[#D9D9D91A]  pt-0 pb-9">
              <div className="flex justify-end">
                <p className="inline-block px-9 py-5 rounded-2xl bg-[#0F1115] text-golden font-semibold text-xl lg:text-[27px]">Time Sovereignty</p>
              </div>

              <div className="px-7 mt-9">
                <p className="pb-5 font-medium text-[20px] leading-[35px]">Track time saved per task. Grow in flow — not in stress.</p>

                <div className="home-desc_points relative">
                  <Image className="absolute left-[4px] top-2.5 z-10 max-h-[98%]" src="/images/white-ver-line.png"  width={4} height={180} alt='vertical bar' />
                  
                  <ul className="flex flex-col justify-between gap-11 mt-2">

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Time tracking
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Efficiency metrics
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Flow optimization
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Stress reduction
                    </li>

                  </ul>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
  )
}

export default HomeDescription