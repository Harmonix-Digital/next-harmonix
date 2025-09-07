import React from 'react'
import Image from 'next/image'
import YellowButton from '@/components/ui/YellowButton'
import Link from 'next/link'
import AgentLinks from '@/components/demo/AgentLinks'


const DemoPage = () => {
  return (
  <>
      <section className='demo_hero relative'>
        
        <div className="container relative z-20">

          <AgentLinks />
          
          <div className="single_agent relative">
            
            <div className="agent_top flex flex-col items-center md:flex-row justify-between  gap-9">
              <div className="image_col">
                <Image src="/images/agent-cash.png" alt="Agent Icon" width={110} height={110} />
              </div>
              
              <div className="desc_col text-white flex-1">
                <h3 className='font-bold text-[32px] mb-2.5 text-center md:text-left'>CA$H</h3>
                <p className=" text-center md:text-left">Close more deals, effortlessly</p>
              </div>
              
              <div className="favorite_col">
                <YellowButton className='' href='/'>Deploy</YellowButton>
              </div>

            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default DemoPage