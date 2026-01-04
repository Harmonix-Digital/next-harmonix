"use client"

import { useState } from "react"
import React from 'react'
import Image from 'next/image'
import YellowButton from '@/components/ui/YellowButton'
import Link from 'next/link'
import AgentLinks from '@/components/demo/AgentLinks'
import ChatTabs from '@/components/demo/cash/ChatTabs'


const DemoPage = () => {
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([])

  const sessionId = React.useMemo(() => crypto.randomUUID(), []);
  
  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
  
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    try {
      const res = await fetch("/api/agents/echo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_as_text: input,sessionId }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { from: "agent", text: data.output_text }]);
    } catch (err) {
      console.error(err);
    } finally {
      setInput("");
      setLoading(false);
    }
  };






  return (
  <>
      <section className='demo_hero relative mt-6'>
        
        <div className="container relative z-20">

          <AgentLinks />
          
          <div className="single_agent relative mt-6">



          </div>


          <div className="agent_chat_wrap flex flex-col lg:flex-row justify-start mt-6 ">
            
            <div className="chat_left_col w-full bg-[#0F1115] px-5 md:px-10 py-4 rounded-[30px] max-w-[407px]">
              {/* <ChatTabs />
               */}

               <div className="task_bar">
                <h2 className="font-bold text-2xl mb-5">Tasks</h2>
                <ul className="task_list flex flex-col gap-2.5 text-xl font-semibold">
                  <li className="tast_list_item px-5 py-4 bg-[#D9D9D9]/10 rounded-2xl">Target Audience</li>
                  <li className="tast_list_item px-5 py-4 rounded-2xl">Media Partnerships Deal</li>
                  <li className="tast_list_item px-5 py-4 rounded-2xl">Bulk Gmail outreach</li>
                </ul>
               </div>
            </div>

            <div className="chat_box w-full border-l border-[#D9D9D9]/30">

              <div className="agent_top flex flex-col items-center md:flex-row justify-between  gap-9 border-b border-[#D9D9D9]/30">
                <div className="image_col">
                  <Image src="/images/agent-echo.png" alt="Agent Icon" width={80} height={80} />
                </div>
                
                <div className="desc_col text-white flex-1">
                  <h3 className='font-bold text-2xl mb-2 text-center md:text-left'>ECHO</h3>
                  {/* <p className="text-lg font-medium text-center md:text-left">Elite revenue generation specialist with advanced CRM integration</p> */}
                </div>
                
                <div className="favorite_col">
                  <YellowButton className='' href='/'>Deploy</YellowButton>
                </div>

              </div>


              <div className="p-7.5">
                  <div className="p-2 h-96 overflow-y-auto ">
                    {messages.map((m, i) => (
                      <div key={i} className={`px-5 py-4  ${m.from === "agent" ? "text-left bg-[#d9d9d9]/10" : "text-right bg-[#0D2527]"} rounded-tr-sm mb-8`}>
                        {m.text}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex gap-2">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 border py-4 px-6 rounded-l-lg"
                      placeholder="Type your message..."
                      onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage();  } }}
                    />
                    <button onClick={sendMessage}    className=" text-white px-4 rounded-r-lg cursor-pointer border border-white">
                      <Image src="/images/send_btn.png" alt="send button" width={24} height={24} />
                    </button>
                  </div>
                </div>
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