import React from 'react'
import Image from 'next/image'
import YellowButton from '@/components/ui/YellowButton'

const PricingPage = () => {
  return (
    <>
      <section className='pricing_hero pt-14 pb-24 relative'>
        <Image alt="background image" src="/images/pricing-hero-glow.png" width={400} height={300} className='absolute right-0 top-0 z-10 h-full ' />
        <div className="container relative z-20">
          <h1 className="text-5xl font-extrabold text-center mb-6">Transparent Pricing for Every Business</h1>
          <p className="w-full max-w-[850px] mx-auto text-xl text-center">hoose the perfect automation package for your business. No hidden fees, no surprises—just clear pricing that scales with your success.</p>
        </div>
      </section>

      <section className="pricing_list mt-20">
        <div className="container">
          <div className="pricing_wrap flex flex-wrap lg:flex-nowrap gap-13 items-center justify-center">
            
            <div className="single_pricing w-full md:w-[45%] lg:w-[30%] pt-10 pb-12 px-9 rounded-[40px] bg-[#D9D9D9]/10">
                
                <div className="pricing_heading flex gap-4">
                  <Image className='w-auto h-[50px]' alt="pricing image" src="/images/pricing-circle.png" width={50} height={40} />
                  <div>
                    <p className="mb-1 text-2xl font-extrabold">Growth</p>
                    <p className="">5 AI Agents</p>
                  </div>
                </div>

                <p className="mt-4">Growing teams with multi-function automation setups</p>

                <div className="price_middle max-w-[144px] mx-auto mt-5">
                  <p className="text-center font-medium text-sm">Monthly</p>
                  <p className="text-[32px] font-bold text-center ">$4,400</p>
                  <p className="mt-6 text-center font-medium text-sm">Setup Fee:</p>
                  <p className="mt-1.5 text-2xl font-bold flex gap-1 items-baseline justify-center">
                    $6,500 <span className="text-golden line-through text-sm font-normal">$8,000</span>
                  </p>
                  <p className="text-golden text-center text-xs">30% Early Bird Discount</p>

                </div>

                <p className="text-xl font-bold mt-10">Features:</p>

                <ul className="spces mt-3.5 flex flex-col gap-3">

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>3-5 AI Agents</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Advanced CRM Integration</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Priority Support</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Custom Workflows</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Ongoing Training & Optimization</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>SŌL Brain Coordination</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>API Access</span>
                    </li>

                  
                </ul>

                <div className="pricing_bottom mx-auto mt-9 max-w-[302px]">
                  <YellowButton className='w-full block' href="/">Subscribe</YellowButton>
                </div>




            </div>


            <div className="single_pricing w-full md:w-[45%] lg:w-[30%] pt-10 pb-12 px-9 rounded-[40px] bg-[#D9D9D9]/10 relative border border-golden">
                <div className="popular border border-golden rounded-xl px-4 py-2 absolute left-1/2 -translate-x-1/2 -top-6 bg-golden text-black font-extrabold">Popular</div>
                
                <div className="pricing_heading flex gap-4">
                  <Image className='w-auto h-[50px]' alt="pricing image" src="/images/pricing-circle.png" width={50} height={40} />
                  <div>
                    <p className="mb-1 text-2xl font-extrabold">Growth</p>
                    <p className="">5 AI Agents</p>
                  </div>
                </div>

                <p className="mt-4">Growing teams with multi-function automation setups</p>

                <div className="price_middle max-w-[144px] mx-auto mt-5">
                  <p className="text-center font-medium text-sm">Monthly</p>
                  <p className="text-[32px] font-bold text-center ">$4,400</p>
                  <p className="mt-6 text-center font-medium text-sm">Setup Fee:</p>
                  <p className="mt-1.5 text-2xl font-bold flex gap-1 items-baseline justify-center">
                    $6,500 <span className="text-golden line-through text-sm font-normal">$8,000</span>
                  </p>
                  <p className="text-golden text-center text-xs">30% Early Bird Discount</p>

                </div>

                <p className="text-xl font-bold mt-10">Features:</p>

                <ul className="spces mt-3.5 flex flex-col gap-3">

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>3-5 AI Agents</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Advanced CRM Integration</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Priority Support</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Custom Workflows</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Ongoing Training & Optimization</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>SŌL Brain Coordination</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>API Access</span>
                    </li>

                  
                </ul>

                <div className="pricing_bottom mx-auto mt-9 max-w-[302px]">
                  <YellowButton className='w-full block' href="/">Subscribe</YellowButton>
                </div>




            </div>


            <div className="single_pricing w-full md:w-[45%] lg:w-[30%] pt-10 pb-12 px-9 rounded-[40px] bg-[#D9D9D9]/10">
                
                <div className="pricing_heading flex gap-4">
                  <Image className='w-auto h-[50px]' alt="pricing image" src="/images/pricing-circle.png" width={50} height={40} />
                  <div>
                    <p className="mb-1 text-2xl font-extrabold">Growth</p>
                    <p className="">5 AI Agents</p>
                  </div>
                </div>

                <p className="mt-4">Growing teams with multi-function automation setups</p>

                <div className="price_middle max-w-[144px] mx-auto mt-5">
                  <p className="text-center font-medium text-sm">Monthly</p>
                  <p className="text-[32px] font-bold text-center ">$4,400</p>
                  <p className="mt-6 text-center font-medium text-sm">Setup Fee:</p>
                  <p className="mt-1.5 text-2xl font-bold flex gap-1 items-baseline justify-center">
                    $6,500 <span className="text-golden line-through text-sm font-normal">$8,000</span>
                  </p>
                  <p className="text-golden text-center text-xs">30% Early Bird Discount</p>

                </div>

                <p className="text-xl font-bold mt-10">Features:</p>

                <ul className="spces mt-3.5 flex flex-col gap-3">

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>3-5 AI Agents</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Advanced CRM Integration</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Priority Support</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Custom Workflows</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>Ongoing Training & Optimization</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>SŌL Brain Coordination</span>
                    </li>

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>API Access</span>
                    </li>

                  
                </ul>

                <div className="pricing_bottom mx-auto mt-9 max-w-[302px]">
                  <YellowButton className='w-full block' href="/">Subscribe</YellowButton>
                </div>




            </div>



          </div>
        </div>
      </section>

      <section className="pricing_specs mt-20">
        <div className="container">
          
          <h2 className="font-bold text-[32px] text-center mb-2.5" >Everything You Need to Succeed</h2>
          <p className="text-center max-w-[665px] mx-auto">Every plan includes enterprise-grade features and world-class support</p>

          <div className="pricing_specs_wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mt-10">

            <div className="single_specs flex flex-col items-center">
              <Image src="/images/shield.png" alt="spec icon"  width={27} height={30} />
              <p className="mt-5 font-smibold text-xl text-center">Enterprise Security</p>
              <p className="font-medium text-center mt-2">SOC 2 compliant with end-to-end encryption</p>
            </div>

            <div className="single_specs flex flex-col items-center">
              <Image src="/images/setup.png" alt="spec icon"  width={27} height={30} />
              <p className="mt-5 font-smibold text-xl text-center">Enterprise Security</p>
              <p className="font-medium text-center mt-2">SOC 2 compliant with end-to-end encryption</p>
            </div>


            <div className="single_specs flex flex-col items-center">
              <Image src="/images/headset.png" alt="spec icon"  width={27} height={30} />
              <p className="mt-5 font-smibold text-xl text-center">Enterprise Security</p>
              <p className="font-medium text-center mt-2">SOC 2 compliant with end-to-end encryption</p>
            </div>

            <div className="single_specs flex flex-col items-center">
              <Image src="/images/global.png" alt="spec icon"  width={27} height={30} />
              <p className="mt-5 font-smibold text-xl text-center">Enterprise Security</p>
              <p className="font-medium text-center mt-2">SOC 2 compliant with end-to-end encryption</p>
            </div>

            <div className="single_specs flex flex-col items-center">
              <Image src="/images/monitoring.png" alt="spec icon"  width={27} height={30} />
              <p className="mt-5 font-smibold text-xl text-center">Enterprise Security</p>
              <p className="font-medium text-center mt-2">SOC 2 compliant with end-to-end encryption</p>
            </div>


            <div className="single_specs flex flex-col items-center">
              <Image src="/images/billing.png" alt="spec icon"  width={27} height={30} />
              <p className="mt-5 font-smibold text-xl text-center">Enterprise Security</p>
              <p className="font-medium text-center mt-2">SOC 2 compliant with end-to-end encryption</p>
            </div>


          </div>


        </div>
      </section>



    </>

   
  )
}

export default PricingPage