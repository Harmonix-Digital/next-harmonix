"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const agents = [
  {
    id: "sales",
    title: "Sales Rep Agent",
    desc: "Books, follows up, and closes for you.",
    time: "22 hrs/week",
    cost: "$320/month",
    token: "50K",
    integrations: ["GHL", "Slack", "HubSpot"],
    capabilities: [
      "Lead qualification",
      "Deal closing",
      "Follow-up automation",
      "Pipeline management",
    ],
    deploy:"/",
    learnMore:"/"
  },
  {
    id: "sop",
    title: "SOP Architect",
    desc: "Turns chaos into clean workflows.",
    time: "18 hrs/week",
    cost: "$240/month",
    token: "60K",
    integrations: ["Google", "Slack", "HubSpot"],
    capabilities: [
      "Lead qualification",
      "Deal closing",
      "Follow-up automation",
      "Pipeline management",
    ],
    deploy:"/",
    learnMore:"/"
  },
  {
    id: "content",
    title: "Content Producer",
    desc: "Auto-creates, schedules, and posts with tone-match.",
    time: "25 hrs/week",
    cost: "$260/month",
    token: "40K",
    integrations: ["Facebook", "Slack", "HubSpot"],
    capabilities: [
      "Lead qualification",
      "Deal closing",
      "Follow-up automation",
      "Pipeline management",
    ],
    deploy:"/",
    learnMore:"/"
  },
];


export default function HomeThreeAgents() {

  const [selected, setSelected] = useState("sales");

  const current = agents.find((a) => a.id === selected)!;

  const topPosition = selected == 'sales' ? 2 : selected == 'sop' ? 30 : 75

  return (
    <>
      <div className="hidden xl:flex justify-center pt-24">
        {/* Left column */}
        <div className="flex flex-col gap-19 col-span-3 max-w-[346px]">
          {agents.map((agent,idx) => (
            
            <button
              data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay={idx*200}
              key={agent.id}
              onClick={() => setSelected(agent.id)}
              className={`rounded-2xl px-6 pt-6 pb-10 text-left  transition home_agent_index border-[0.7px] bg-[#D9D9D9]/10  ${
                selected === agent.id
                  ? "border-golden"
                  : "border-[#095552CF]"
              }`}
            >
              <h3 className="font-semibold text-golden text-2xl mb-4">{agent.title}</h3>
              <p className="">{agent.desc}</p>
              <div className="flex justify-between gap-5 mt-9">
                <div className="">
                  <p className="text-golden text-sm font-meidum mb-1">Time Saved</p>
                  <p className="text-sm">{agent.time}</p>
                </div>

                <div className="">
                  <p className="text-golden text-sm font-meidum mb-1">Monthly</p>
                  <p className="text-sm">{agent.cost}</p>
                </div>
              </div>
              
            </button>

          ))}
        </div>

        {/* Middle indicator */}
        <div className=" relative  col-span-2 w-full max-w-[280px]">
          <div className="flex flex-col gap-20 h-full absolute left-1/2 -translate-x-1/2">
            {agents.map((agent) => (
              <div key={agent.id} className="line w-[1px] bg-white h-1/4" style={{ background: agent.id === selected ? "#C19E5B" : "linear-gradient(90deg, #F5F5F5 0%, #13BBB4 100%)" }}>

              </div>
            ))}
          </div>


          <Image className="absolute left-1/2 -translate-x-1/2  transition-all duration-500"
            style={{
              top: `${topPosition}%`,
            }} src="/images/selected-glow.png" alt="Selected Glow" width={180} height={160}  />
        </div>

        {/* Right column */}
        <div data-aos="fade-left" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="rounded-2xl border border-gray-700 bg-black/40 pt-16 pb-15 px-14 col-span-4 w-full max-w-[576px]">
          <h2 className="text-golden text-4xl mb-9 font-semibold">
            {current.title}
          </h2>
          <p className="text-2xl font-semibold">{current.desc}</p>

          <div className="flex gap-6 justify-between mt-10">
            
            <div>
              <p className="text-2xl font-medium text-center mb-2">{current.cost}</p>
              <p className="text-golden text-lg text-center ">Monthly Cost</p>
            </div>          
            <div>
              <p className="text-2xl font-medium text-center mb-2">{current.token}</p>
              <p className="text-golden text-lg text-center ">Token Usage (Moderate)</p>
            </div>          
            <div>
              <p className="text-2xl font-medium text-center mb-2">{current.cost}</p>
              <p className="text-golden text-lg text-center ">Time Saved</p>
            </div>

            
          </div>

          <div className="mt-14">
            <p className="text-golden text-xl font-medium">Integrations:</p>
            <div className="flex gap-15 mt-6">
              {current.integrations.map((item,idx) => (
                <button key={idx} className="border border-golden rounded-[40px] px-7 py-2" >{item}</button>
              ))}
              
            </div>
          </div>

          <div className="mt-14">
            <h4 className="text-2xl font-semibold mb-6">Key Capabilities:</h4>
            <ul className="list-disc list-inside text-golden text-lg font-semibold columns-2">
              {current.capabilities.map((cap, i) => (
                <li key={i} className="flex gap-1 items-center mb-6"><Image src="/images/circle-tick.png" alt="tich mark" width={17} height={17} />{cap}</li>
              ))}
            </ul>
          </div>


          <div className="mt-3.5 flex gap-6 justify-center">
            <Link className="text-2xl font-semibold bg-golden rounded-[20px]  px-6 py-4 text-siteBlack border border-golden hover:bg-siteBlack hover:text-golden transition-all duration-300" href={current.deploy}>Deploy Agent</Link>

            <Link className="text-2xl font-semibold flex gap-2 items-center rounded-[20px] px-6 py-4 border border-golden text-offwhite hover:bg-golden hover:text-siteBlack transition-all duration-300" href={current.learnMore}><span>Learn More</span> <Image src="/images/angle-right.png" alt="Right angle icon" width={20} height={20} /> </Link>
          </div>





        </div>
      </div>

      <div className="py-12 flex xl:hidden flex-col gap-14 justify-center items-center">

          {agents.map(agent => (
            <div key={agent.id} data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="rounded-xl border border-gray-700 bg-black/40 pt-6 lg:pt-19 pb-15 px-5 lg:px-14 col-span-4 w-full max-w-[576px]">
              <h2 className="text-golden text-2xl lg:text-4xl mb-11 font-semibold text-center">
                {current.title} 
              </h2>
              <p className="text-lg lg:text-xl lg:text-2xl font-semibold text-center">{agent.desc}</p>

              <div className="flex flex-col md:flex-row gap-6 justify-between mt-11">
                
                <div>
                  <p className="text-xl lg:text-2xl font-medium text-center">{agent.cost}</p>
                  <p className="text-golden text-lg text-center ">Monthly Cost</p>
                </div>          
                <div>
                  <p className="text-xl lg:text-2xl font-medium text-center">{agent.token}</p>
                  <p className="text-golden text-lg text-center ">Token Usage (Moderate)</p>
                </div>          
                <div>
                  <p className="text-xl lg:text-2xl font-medium text-center">{agent.cost}</p>
                  <p className="text-golden text-lg text-center ">Time Saved</p>
                </div>

                
              </div>

              <div className="mt-10">
                <p className="text-golden text-xl font-medium">Integrations:</p>
                <div className="flex flex-col md:flex-row gap-6 lg:gap-15 mt-6">
                  {agent.integrations.map((item,idx) => (
                    <button key={idx} className="border border-golden rounded-[40px] px-7 py-2" >{item}</button>
                  ))}
                  
                </div>
              </div>

              <div className="mt-14">
                <h4 className="text-xl lg:text-2xl font-semibold mb-6">Key Capabilities:</h4>
                <ul className="list-disc list-inside text-golden text-lg font-semibold lg:columns-2">
                  {agent.capabilities.map((cap, i) => (
                    <li key={i} className="flex gap-1 items-center mb-4"><Image src="/images/circle-tick.png" alt="tich mark" width={17} height={17} />{cap}</li>
                  ))}
                </ul>
              </div>


              <div className="mt-11 lg:mt-3.5 flex flex-col md:flex-row gap-6 justify-center ">
                <Link className="text-xl lg:text-2xl font-semibold bg-golden rounded-[20px]  p-3 lg:p-6 text-siteBlack border border-golden hover:bg-siteBlack hover:text-golden transition-all duration-300 text-center" href={current.deploy}>Deploy Agent</Link>

                <Link className="text-xl lg:text-2xl font-semibold flex gap-2 items-center rounded-[20px] p-3 lg:p-6 border border-golden text-offwhite hover:bg-golden hover:text-siteBlack transition-all duration-300 justify-center " href={current.learnMore}><span>Learn More</span> <Image src="/images/angle-right.png" alt="Right angle icon" width={20} height={20} /> </Link>
              </div>





            </div>            
          ))}



      </div>
    </>
  );
}
