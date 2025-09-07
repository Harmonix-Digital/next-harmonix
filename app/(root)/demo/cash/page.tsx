import React from 'react'
import Image from 'next/image'
import YellowButton from '@/components/ui/YellowButton'
import Link from 'next/link'
import AgentLinks from '@/components/demo/AgentLinks'
import ChatTabs from '@/components/demo/cash/ChatTabs'


const DemoPage = () => {
  return (
  <>
      <section className='demo_hero relative mt-6'>
        
        <div className="container relative z-20">

          <AgentLinks />
          
          <div className="single_agent relative mt-6">
            
            <div className="agent_top flex flex-col items-center md:flex-row justify-between  gap-9">
              <div className="image_col">
                <Image src="/images/agent-cash.png" alt="Agent Icon" width={80} height={80} />
              </div>
              
              <div className="desc_col text-white flex-1">
                <h3 className='font-bold text-2xl mb-2 text-center md:text-left'>CA$H</h3>
                <p className="text-lg font-medium text-center md:text-left">Close more deals, effortlessly</p>
              </div>
              
              <div className="favorite_col">
                <YellowButton className='' href='/'>Deploy</YellowButton>
              </div>

            </div>


          </div>


          <div className="agent_chat_wrap flex flex-col lg:flex-row gap-5 justify-between mt-6 ">
            
            <div className="chat_box w-full">
              <Image src="/images/chat.png" alt="Chat image" width={620} height={670} />
            </div>

            <div className="chat_right_col w-full bg-[#0F1115] px-5 md:px-10 py-4 rounded-[30px]">
              <ChatTabs />
            </div>
          </div>

        </div>
        
        {/* <Image className='absolute bottom-[10%] left-0' src="/images/demo-bg-left.png" alt="Background image" width={500} height={400} /> */}
        <Image className='z-10 absolute bottom-[0%] right-0' src="/images/demo-bg-right.png" alt="Background image" width={500} height={350} />



      </section>
    </>
  )
}

export default DemoPage