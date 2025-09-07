'use client'
import { useState } from 'react';
import Image from 'next/image'
import YellowButton from '../ui/YellowButton';
import BlackButton from '../ui/BlackButton';


type Agent = {
  image: string;
  name: string;
  level: string;
  category: string;
  desc: string;
  specs: string[];
  price: string;
  setup: string;
  rating: string;
  numReviews: string;
  numDeployments: string;
  deployLink: string;
};

type AgentsListProps = {
  agents: Agent[];
};

const AgentsList = ({agents } : AgentsListProps ) => {

  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [integration, setIntegration] = useState("");
  
  // ✅ Filtering logic
  const filteredAgents = agents.filter(agent => {
    const matchesSearch =
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.category.toLowerCase().includes(search.toLowerCase());

    const matchesLevel = level ? agent.level === level : true;
    const matchesCategory = category ? agent.category === category : true;
    // For integration filter, replace logic when you have real data
    const matchesIntegration = integration ? agent.desc.includes(integration) : true;

    return matchesSearch && matchesLevel && matchesCategory && matchesIntegration;
  });



  return (
    <>
      <section className="market_search mt-14">
        <div className="container">
          
          <div className="search_wrap flex flex-wrap lg:flex-nowrap md:flex-row items-center gap-4 md:gap-8">
            
            <div className="search_box flex-1 relative min-w-[300px] max-w-full">
              <Image className='absolute left-5 top-1/2 -translate-y-1/2' src="/images/search-lens.png" alt="Search icon" width={20} height={20} />
              <input className='py-4 border border-offwhite rounded-[20px] pr-4 pl-14  w-full'  type="text" placeholder='Search Agents by name of role' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="levels relative">
              <Image className='absolute right-4 top-1/2 -translate-y-1/2 ' src="/images/select-down.png" alt="Dropdown icon" width={16} height={8} />
              <select value={level} onChange={(e) => setLevel(e.target.value)}  name="level" id="" className='border rounded-[20px] p-4 appearance-none pr-10'>
                <option className='bg-[#0F1115]' value="">All Levels</option>
                <option className='bg-[#0F1115]' value="LEGENDARY">Legendary</option>
                <option className='bg-[#0F1115]' value="EPIC">Epic</option>
                <option className='bg-[#0F1115]' value="RARE">Rare</option>
              </select>
            </div>

            <div className="category relative">
                <Image className='absolute right-4 top-1/2 -translate-y-1/2 ' src="/images/select-down.png" alt="Dropdown icon" width={16} height={8} />
                <select value={category} onChange={(e) => setCategory(e.target.value)} name="level" id="" className='border rounded-[20px] p-4 appearance-none pr-10'>
                <option className='bg-[#0F1115]' value="">All Category</option>
                <option className='bg-[#0F1115]' value="Sales">Sales</option>
                <option className='bg-[#0F1115]' value="Customer Service">Customer service</option>
                <option className='bg-[#0F1115]' value="Marketing">Marketing</option>
                <option className='bg-[#0F1115]' value="Operations">Operations</option>
                <option className='bg-[#0F1115]' value="Analytics">Analytics</option>
                <option className='bg-[#0F1115]' value="System">System</option>
              </select>              
            </div>
            <div className="integration relative">
                <Image className='absolute right-4 top-1/2 -translate-y-1/2 ' src="/images/select-down.png" alt="Dropdown icon" width={16} height={8} />
                <select  value={integration} onChange={(e) => setIntegration(e.target.value)} name="level" id="" className='border rounded-[20px] p-4 appearance-none pr-10'>
                <option className='bg-[#0F1115]' value="">Integrations</option>
                <option className='bg-[#0F1115]' value="">Option 2</option>
                <option className='bg-[#0F1115]' value="">Option 3</option>
              </select>

            </div>
          </div>
        </div>
      </section>

      <section className="sec_agents_grid mt-13 relative">
        <Image className='absolute left-0 top-0 ' src="/images/market-bg-glow.png" alt="Background glow" width={957} height={763}  />
        <div className="container">
          <div className="products_wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent,index) => (
              <div key={index} className="single_agent bg-[#D9D9D9]/10 rounded-[30px] px-9 pt-7.5 pb-9.5">
                
                <div className="agent_title_wrap flex flex-col lg:flex-row items-center gap-4">
                  <Image src={agent.image } alt={agent.name} width={65} height={65} />
                  <div className="flex flex-col gap-1">
                    <h2 className="mb-2 lg:mb-0 text-center lg:text-left">{agent.name}</h2>
                    <div className="flex flex-col md:flex-col lg:flex-row gap-1 lg:gap-2.5 items-center">
                      <div className={`level rounded-xl text-xs px-2 py-1 text-center ${agent.level == "LEGENDARY" ? 'bg-golden' : agent.level == "EPIC" ? 'bg-gradient-to-r from-[#B552E3] to-[#DF4AAB]' :   agent.level == "RARE" ? 'bg-[#0BB0D7]' : '' }`}>{agent.level}</div>
                      <span>{agent.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#9C9C9C]">{agent.desc}</p>
                <ul className="spces mt-3.5 flex flex-col gap-3">

                  {agent.specs.map((spec,idx) => (
                    <li key={idx} className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>{spec}</span>
                    </li>
                  ))}

                    <li className="flex gap-2.5 items-center">
                      <Image src="/images/tick-yellow-white.png" alt='tick icon' width={15} height={15} className='w-4 h-4' />
                      <span className=''>+1 more</span>
                    </li>

                  
                </ul>


                <div className="agent_bottom flex flex-col items-center mt-8">
                  <p className="text-2xl font-bold mb-2.5">$350 <span className="text-xs font-normal ">/month</span></p>
                  
                  <p className="text-[#9C9C9C] text-xs ">Setup: <span className='text-white'> $1000</span> one-time</p>

                  <div className="agent_bottom flex mt-9 justify-between w-full max-[190px] mx-auto ">
                    
                    <div>
                      <p className="flex gap-1.5 items-center justify-center mb-1">
                        <Image src="/images/yellow-star.png" alt="Star icon" width={12} height={12} />
                        <span>{agent.rating}</span>
                      </p>
                      <p className="text-white text-xs text-center">{agent.numReviews} reviews</p>
                    </div>

                    <div className="">
                      <p className="text-sm font-bold mb-1 text-center ">{agent.numDeployments}</p>
                      <p className=" text-center ">deployments</p>
                    </div>


                  </div>

                  <YellowButton href={agent.deployLink} className='mt-8'>Deploy</YellowButton>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>    
    
    </>
  )
}

export default AgentsList