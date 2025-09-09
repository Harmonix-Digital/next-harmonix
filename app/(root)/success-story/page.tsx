import React from 'react'
import Image from 'next/image'
import YellowButton from '@/components/ui/YellowButton'

const SuccessStoryPage = () => {
  return (
    <div className='success_page relative'>
      <Image className='absolute bottom-[0%] left-0 -z-[1]' src="/images/success-bg.png" alt="Background image" width={700} height={600} />
    
      <section className='pricing_hero pt-14 pb-24 relative'>
        <Image alt="background image" src="/images/pricing-hero-glow.png" width={400} height={300} className='absolute right-0 top-0 z-10 h-full ' />
        <div className="container relative z-20">
          <h1 className="text-5xl font-extrabold text-center mb-6">Customer Success Story</h1>
          <p className="w-full max-w-[850px] mx-auto text-xl text-center">A real-world example of growth powered by AI agents.</p>
        </div>
      </section>

      <section className="success_title">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-7.5">
            <Image src="/images/zenith.png" alt="Zenith logo" width={136} height={136} />
            <div>
              <p className="text-2xl font-extrabold mb-2.5 text-center md:text-left">Zenith Co's Success Story</p>
              <p className="font-medium text-center md:text-left">Zenith co is a growing SaaS company with 25 employees, offering project management solutions for small businesses. While their product was strong, the team struggled to reach new customers efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='sec_challenge mt-12'>
        <div className="container">
          <div className="challenge_wrap bg-[#D9D9D9]/10 rounded-[30px] p-10">
            <p className="font-bold text-xl mb-3">The Challenge</p>
            <p className="">Before Harmony, Zenith co’s sales process was entirely manual. The sales team spent hours each week sending outreach emails and cold-calling prospects with very little return. Their conversion rate hovered around 8%, and lead quality was inconsistent. The leadership team knew they needed a more scalable, efficient solution to compete in their market.</p>
          </div>
        </div>
      </section>

      <section className="sec_solution mt-12  bg-[url('/images/solution-bg.png')] bg-no-repeat bg-contain bg-center">

        <div className="container">
          <div className="challenge_wrap bg-[#D9D9D9]/10 rounded-[30px] p-10">
            <p className="font-bold text-xl mb-3">The Harmony Solution</p>
            <p className="">Zenith co deployed CA$H – the AI Sales Closer. Within minutes, they connected their CRM, synced email accounts, and customized the AI to match their brand's tone of voice. CA$H began prospecting small businesses, sending personalized outreach campaigns, and automatically handling common objections like pricing and feature comparisons. The AI worked around the clock, qualifying leads and scheduling calls directly into the team's calendar. What once required hours of manual effort was now fully automated, freeing the team to focus on closing deals and product development.</p>
          </div>
        </div>
      </section>
    


      <section className='sec_challenge mt-12'>
        <div className="container">
          <div className="challenge_wrap bg-[#D9D9D9]/10 rounded-[30px] p-10">
            <p className="font-bold text-xl mb-3">The Results</p>
            <div className="">Within just two months, the results were clear:
              <ul className='list-disc pl-5'>
                <li>Zenith co's conversion rate increased from 8% to 16%, effectively doubling their sales efficiency.</li>
                <li>The team reported saving 10+ hours per week, previously wasted on repetitive outreach tasks.</li>
                <li>Most importantly, revenue from new clients grew by 35%, creating momentum that positioned Zenith co ahead of competitors.</li>
              </ul>


              <p>One of the sales managers shared:</p>
              💬 “CA$H transformed our entire approach to sales. Instead of burning time on cold emails that went nowhere, we had qualified leads booked straight into our calendar. Harmony didn’t just save us time — it helped us grow faster than we thought possible.”
            </div>


          </div>
        </div>
      </section>


      <section className='sec_bottom_cta mt-20 pt-18 pb-8 px-6 relative'>
        <div className="container">
          <h2 className="font-bold text-[32px] text-center mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-center">Activate your first AI agent today and transform the way you work.</p>

          <div className="cta_wrap mt-12.5 flex flex-col sm:flex-row gap-4 lg:gap-15 justify-center mx-auto w-full max-w-[408px]">
            <YellowButton className='block w-full' href="/">Activate Your Agent</YellowButton>
          </div>
          

        </div>
      </section>



    
    </div>
  )
}

export default SuccessStoryPage