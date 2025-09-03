import BlackButton from '@/components/ui/BlackButton'
import YellowButton from '@/components/ui/YellowButton'
import Image from 'next/image'
import React from 'react'

const ActivateAgent = () => {
  return (
    <>
      <section className="activate_agent_hero pt-15 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="col-span-5 order-2 md:order-1 md:pr-5">
              <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-center">Activate AI Agent</h1>
              <p className='text-lg md:text-xl mt-4 text-center mx-auto w-full max-w-[777px]'>Choose the right AI assistant to supercharge your business. Each agent is designed with a specialized skillset to help you win in sales, marketing, operations, finance, strategy, and people management.</p>              
            </div>
            <div className="col-span-1 order-1 md:order-2">
              <Image className='mx-auto' src="/images/agent-hero.png" alt="Agent hero img" width={200} height={240} />
            </div>
          </div>
          
        </div>
      </section>


      <section className="agents mt-8">
        <div className="container">
          
          <div className="single_agent hover:bg-[#D9D9D9]/10 pt-18 pb-12 px-10 rounded-[10px]">
            
            <div className="agent_top flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="image_col">
                <Image src="/images/agent-cash.png" alt="Agent Icon" width={110} height={110} />
              </div>
              <div className="desc_col text-white">
                <h3 className='font-bold text-[32px] mb-2.5 text-center md:text-left'>CA$H</h3>
                <p className=" text-center md:text-left">CA$H is your AI-powered sales closer, trained to handle the end-to-end sales process — from outreach to objection handling, to booking qualified meetings.</p>
              </div>
              <div className="favorite_col">
                <Image src="/images/agent-loved.png" alt="Agent Icon" width={50} height={43} />
              </div>
            </div>

            <div className="agent_bottom flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <YellowButton className='' href='/agents/cash'>View Details</YellowButton>
              <BlackButton className=''>Try Demo</BlackButton>
            </div>



          </div>


          <div className="single_agent hover:bg-[#D9D9D9]/10 pt-18 pb-12 px-10 rounded-[10px]">
            
            <div className="agent_top flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="image_col">
                <Image src="/images/agent-echo.png" alt="Agent Icon" width={110} height={110} />
              </div>
              <div className="desc_col text-white">
                <h3 className='font-bold text-[32px] mb-2.5 text-center md:text-left'>ECHO</h3>
                <p className=" text-center md:text-left">Amplify your brand with AI-driven campaigns, personalized content creation, and engagement strategies tailored to your audience.</p>
              </div>
              <div className="favorite_col">
                <Image src="/images/agent-love.png" alt="Agent Icon" width={50} height={43} />
              </div>
            </div>

            <div className="agent_bottom flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <YellowButton className='' href='/agents/echo'>View Details</YellowButton>
              <BlackButton className='' href="/">Try Demo</BlackButton>
            </div>



          </div>


          <div className="single_agent hover:bg-[#D9D9D9]/10 pt-18 pb-12 px-10 rounded-[10px]">
            
            <div className="agent_top flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="image_col">
                <Image src="/images/agent-flow.png" alt="Agent Icon" width={110} height={110} />
              </div>
              <div className="desc_col text-white">
                <h3 className='font-bold text-[32px] mb-2.5 text-center md:text-left'>FLOW</h3>
                <p className=" text-center md:text-left">Keep your business running smoothly with automated task management, workflow optimization, and AI-powered efficiency tracking.</p>
              </div>
              <div className="favorite_col">
                <Image src="/images/agent-love.png" alt="Agent Icon" width={50} height={43} />
              </div>
            </div>

            <div className="agent_bottom flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <YellowButton className='' href='/agents/flow'>View Details</YellowButton>
              <BlackButton className='' href="/">Try Demo</BlackButton>
            </div>



          </div>          


          <div className="single_agent hover:bg-[#D9D9D9]/10 pt-18 pb-12 px-10 rounded-[10px]">
            
            <div className="agent_top flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="image_col">
                <Image src="/images/agent-sol.png" alt="Agent Icon" width={110} height={110} />
              </div>
              <div className="desc_col text-white">
                <h3 className='font-bold text-[32px] mb-2.5 text-center md:text-left'>SOL</h3>
                <p className=" text-center md:text-left">Gain clarity on your finances with real-time analytics, predictive insights, and smarter budgeting tools that maximize ROI.</p>
              </div>
              <div className="favorite_col">
                <Image src="/images/agent-loved.png" alt="Agent Icon" width={50} height={43} />
              </div>
            </div>

            <div className="agent_bottom flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <YellowButton className='' href='/agents/sol'>View Details</YellowButton>
              <BlackButton className='' href="/">Try Demo</BlackButton>
            </div>



          </div>

          <div className="single_agent hover:bg-[#D9D9D9]/10 pt-18 pb-12 px-10 rounded-[10px]">
            
            <div className="agent_top flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="image_col">
                <Image src="/images/agent-kairos.png" alt="Agent Icon" width={110} height={110} />
              </div>
              <div className="desc_col text-white">
                <h3 className='font-bold text-[32px] mb-2.5 text-center md:text-left'>KAIROS</h3>
                <p className=" text-center md:text-left">Navigate uncertainty with AI that forecasts risks, identifies opportunities, and guides strategic decisions at the right time.</p>
              </div>
              <div className="favorite_col">
                <Image src="/images/agent-loved.png" alt="Agent Icon" width={50} height={43} />
              </div>
            </div>

            <div className="agent_bottom flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <YellowButton className='' href='/agents/kairos'>View Details</YellowButton>
              <BlackButton className='' href="/">Try Demo</BlackButton>
            </div>

          </div>

          <div className="single_agent hover:bg-[#D9D9D9]/10 pt-18 pb-12 px-10 rounded-[10px]">
            
            <div className="agent_top flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="image_col">
                <Image src="/images/agent-kairos.png" alt="Agent Icon" width={110} height={110} />
              </div>
              <div className="desc_col text-white">
                <h3 className='font-bold text-[32px] mb-2.5 text-center md:text-left'>GRACE</h3>
                <p className=" text-center md:text-left">Empower your workforce with AI-driven talent management, seamless onboarding, and employee engagement that builds strong culture.</p>
              </div>
              <div className="favorite_col">
                <Image src="/images/agent-love.png" alt="Agent Icon" width={50} height={43} />
              </div>
            </div>

            <div className="agent_bottom flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <YellowButton className='' href='/agents/grace'>View Details</YellowButton>
              <BlackButton className='' href="/">Try Demo</BlackButton>
            </div>

          </div>


        </div>
      </section>
    </>
  )
}

export default ActivateAgent