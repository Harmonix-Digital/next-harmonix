'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const ChatTabs = () => {
  const [activeTab, setActiveTab] = useState("Strategy")

  const tabs = ["Strategy", "Execution"]

  return (
    <>
      <div className="flex gap-6 items-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 rounded-[16px] font-bold text-xl transition-colors duration-200 cursor-pointer
              ${activeTab === tab 
                ? "bg-[#095552]" 
                : ""}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab == 'Strategy' && (
        <div className="content mt-12">
          <div className="ul flex flex-col gap-10 sm:gap-6">
            
            <li className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-center">
              <Image src="/images/strategy-icon.png" width={25} height={25} alt="Strategy Icon" />
              <div className='rounded-[20px] px-4 lg:px-5 py-4 bg-[#D9D9D9]/10'>
                <p className='text-xl font-semibold' >Prospecting</p>
                <p className="text-lg">Identify small business owners & ops managers.</p>
              </div>
            </li>
            
            <li className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-center">
              <Image src="/images/strategy-icon.png" width={25} height={25} alt="Strategy Icon" />
              <div className='rounded-[20px] px-4 lg:px-5 py-4 bg-[#D9D9D9]/10'>
                <p className='text-xl font-semibold' >Outreach</p>
                <p className="text-lg">Personalized cold emails highlighting time savings.</p>
              </div>
            </li>
            
            <li className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-center">
              <Image src="/images/strategy-icon.png" width={25} height={25} alt="Strategy Icon" />
              <div className='rounded-[20px] px-4 lg:px-5 py-4 bg-[#D9D9D9]/10'>
                <p className='text-xl font-semibold' >Objection Handling</p>
                <p className="text-lg">Emphasize ROI (less admin time = more productivity).</p>
              </div>
            </li>
            
            <li className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-center">
              <Image src="/images/strategy-icon.png" width={25} height={25} alt="Strategy Icon" />
              <div className='rounded-[20px] px-4 lg:px-5 py-4 bg-[#D9D9D9]/10'>
                <p className='text-xl font-semibold' >Conversion</p>
                <p className="text-lg">Offer 14-day free trial → upgrade to paid plan.</p>
              </div>
            </li>


          </div>
        </div>

      )}
      
      {activeTab == 'Execution' && (

        <div className="content mt-12">
          <div className="ul flex flex-col gap-10 sm:gap-6">
            
            <li className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-center">
              <Image src="/images/strategy-icon.png" width={25} height={25} alt="Strategy Icon" />
              <div className='rounded-[20px] px-4 lg:px-5 py-4 bg-[#D9D9D9]/10'>
                <p className='text-xl font-semibold' >Execution</p>
                <p className="text-lg">Identify small business owners & ops managers.</p>
              </div>
            </li>
            
            <li className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-center">
              <Image src="/images/strategy-icon.png" width={25} height={25} alt="Strategy Icon" />
              <div className='rounded-[20px] px-4 lg:px-5 py-4 bg-[#D9D9D9]/10'>
                <p className='text-xl font-semibold' >Execution</p>
                <p className="text-lg">Personalized cold emails highlighting time savings.</p>
              </div>
            </li>
            
            <li className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-center">
              <Image src="/images/strategy-icon.png" width={25} height={25} alt="Strategy Icon" />
              <div className='rounded-[20px] px-4 lg:px-5 py-4 bg-[#D9D9D9]/10'>
                <p className='text-xl font-semibold' >Execution</p>
                <p className="text-lg">Emphasize ROI (less admin time = more productivity).</p>
              </div>
            </li>
            
            <li className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-center">
              <Image src="/images/strategy-icon.png" width={25} height={25} alt="Strategy Icon" />
              <div className='rounded-[20px] px-4 lg:px-5 py-4 bg-[#D9D9D9]/10'>
                <p className='text-xl font-semibold' >Execution</p>
                <p className="text-lg">Offer 14-day free trial → upgrade to paid plan.</p>
              </div>
            </li>


          </div>
        </div>
    )}


    </>
  )
}

export default ChatTabs
