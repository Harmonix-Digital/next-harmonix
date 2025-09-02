import React from 'react'
import Image from 'next/image'
import Form from '@/components/waitlist/Form'

const JoinPage = () => {
  return (
    <>
      <section className='pt-24'>
        <div className="container relative">
          
          <div className="sec_btn flex items-center justify-center gap-2 bg-[#D9D9D9]/10 rounded-[20px] px-6 py-[18px] mx-auto text-golden text-xlbig font-semibold max-w-[296px] relative z-20">
            <span>Available Early 2026</span>
            <Image src="/images/clock.png" alt="Clock icon" width={28} height={28} />
          </div>

          <Image className='absolute top-0 right-0 z-10 max-w-[600px]' src="/images/access-glow.png" alt="Access glow image" width={831} height={222} />

          <div className="page_hero relative z-20">
            
          
            <h1 className="text-golden text-3xl md:text-5xl lg:text-[58px] leading-20 font-medium text-center mt-12 tracking-extra ">Get early access</h1>
            <p className="text-lg md:text-2xl font-semibold mt-3 text-center max-w-[862px] mx-auto text-dimWhite">Be among the first to experience AI automation that grows with your vision. Connect with visionary founders and personalize setup and customization. Sign up to be notified when we are launch!</p>
          </div>
          <Form />



        </div>
      </section>

      <section className="time_left mt-20">
        
        <div className="container">
          
          <div className="people flex flex-col md:flex-row items-center justify-center gap-6">
            <Image src="/images/people.png" alt="People" width={290} height={63} />
            <span className='font-medium text-lg md:text-2xl text-center'>Join 11,500+ others on the waitlist </span>
          </div>

          <div className="flex justify-center gap-2 md:gap-16 items-center mt-12">
            
            <div className='flex flex-col gap-2 justify-center'>
              <p className="text-center text-lg md:text-[28px] font-semibold">348</p>
              <p className="text-center text-dimWhite font-medium text-base md:text-xl">DAYS</p>
            </div>

            <div className='hidden md:block'><Image src="/images/colon.png" alt="Colon sign" width={4} height={16} /></div>

            <div className='flex flex-col gap-2 justify-center'>
              <p className="text-center text-lg md:text-[28px] font-semibold">1</p>
              <p className="text-center text-dimWhite font-medium text-base md:text-xl">HOURS</p>
            </div>

            <div className='hidden md:block'><Image src="/images/colon.png" alt="Colon sign" width={4} height={16} /></div>
            
            <div className='flex flex-col gap-2 justify-center'>
              <p className="text-center text-lg md:text-[28px] font-semibold">28</p>
              <p className="text-center text-dimWhite font-medium text-base md:text-xl">MINUTES</p>
            </div>

            <div className='hidden md:block'><Image src="/images/colon.png" alt="Colon sign" width={4} height={16} /></div>
            
            <div className='flex flex-col gap-2 justify-center'>
              <p className="text-center text-lg md:text-[28px] font-semibold">29</p>
              <p className="text-center text-dimWhite font-medium text-base md:text-xl">SECONDS</p>
            </div>

          </div>

          <div className="flex flex-col md:flex-row gap-2 items-center md:items-center md:justify-center mt-20 md:mt-[120px]">
            <Image src="/images/calender.png" width={30} height={30} alt="calendar icon" />
            <span className='font-semibold text-lg md:text-2xl text-center'>LEFT UNTIL FULL RELEASE</span>
          </div>

        </div>
      </section>
    </>
  )
}

export default JoinPage