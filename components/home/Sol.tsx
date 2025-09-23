import React from 'react'
import Image from 'next/image'
import YellowButton from "@/components/ui/YellowButton";

const Sol = () => {
  return (
      <section className="sol mt-19 lg:mt-[275px]">
        <div className="container">

          <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="sec_header_btn flex justify-center md:justify-start mx-auto">
            <div className="sec_btn flex items-center justify-center gap-2 bg-[#D9D9D9]/10 rounded-[20px] px-8 py-[15px] w-[296px] text-golden text-lg font-semibold">
              <span>SŌL Brain Preview</span>
              <Image src="/images/brain.png" alt="Clock icon" width={28} height={28} />
            </div>            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 items-center">
            
            <div className="col-span-4 order-2 md:order-1">
              

              <h2 data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="text-3xl md:text-4xl lg:text-big font-semibold mt-6  mb-7.5 text-golden text-center md:text-left">What Is SŌL?</h2>
              <p data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="sub_text text-lg lg:text-2xl  text-center md:text-left">The consciousness that orchestrates your AI workforce. SŌL analyzes your business, assigns the right agents, and optimizes your operations with sacred precision.</p>

              <ul className="sol_list flex flex-col gap-10 mt-17.5">
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="flex items-center gap-5 text-lg lg:text-2xl  ">
                  <Image src="/images/golden-star.png" alt="Star icon" width={20} height={20} />
                  <span>Diagnoses your business automatically</span>
                </li>

                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="300" className="flex items-center gap-5 text-lg lg:text-2xl  ">
                  <Image src="/images/golden-star.png" alt="Star icon" width={20} height={20} />
                  <span>Intelligent agent assignment logic</span>
                </li>
                
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="600" className="flex items-center gap-5 text-lg lg:text-2xl  ">
                  <Image src="/images/golden-star.png" alt="Star icon" width={20} height={20} />
                  <span>Real-time ROI calculator</span>
                </li>

                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="900" className="flex items-center gap-5 text-lg lg:text-2xl  ">
                  <Image src="/images/golden-star.png" alt="Star icon" width={20} height={20} />
                  <span>Adaptive learning from patterns</span>
                </li>


              </ul>

              <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0">

                <YellowButton className="flex gap-2 items-center mt-14 !rounded-2xl lg:!text-[22px]"><span>Ask SOL how we can help  your business</span> <Image src="/images/angle-right-black.png" alt="Angle right" width={24} height={24} />  </YellowButton>
              </div>

            </div>
            
            <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="col-span-3 pt-11 order-1 md:order-2">
              <Image src="/images/sol_image.png" alt="SOL Image" width={590} height={590}  />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Sol