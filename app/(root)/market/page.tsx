import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import YellowButton from '@/components/ui/YellowButton'
import BlackButton from '@/components/ui/BlackButton'
import AgentsList from '@/components/marketplace/Agents'


const agents = [
  {
    image:'/images/agent-cash.png',
    name:'CA$H',
    level:"LEGENDARY",
    category:"Sales",
    desc:'Elite revenue generation specialist with advanced CRM integratio',
    specs:['CRM Sync','Lead Processing','Loom Scripts'],
    price:'$350',
    setup:'$1000',
    rating:'4.9',
    numReviews:'247',
    numDeployments:"240",
    deployLink: '/'
  },
  {
    image:'/images/agent-grace.png',
    name:'GRACE',
    level:"EPIC",
    category:"Customer Service",
    desc:'Sophisticated concierge agent for premium customer experience',
    specs:['24/7 Support','VIP Handling','Appointment Booking'],
    price:'$300',
    setup:'$900',
    rating:'4.8',
    numReviews:'189',
    numDeployments:"890",
    deployLink: '/'
  },
  {
    image:'/images/agent-echo.png',
    name:'ECHO',
    level:"EPIC",
    category:"Marketing",
    desc:'Social media automation with trend analysis and content generation',
    specs:['Content Creation','Post Scheduling','Trend Analysis'],
    price:'$320',
    setup:'$1000',
    rating:'4.7',
    numReviews:'156',
    numDeployments:"240",
    deployLink: '/'
  },
  {
    image:'/images/agent-flow.png',
    name:'FLOW',
    level:"RARE",
    category:"Operations",
    desc:'Operations optimizer with workflow automation and process management',
    specs:['Process Automation','Workflow Design','Task Management'],
    price:'$280',
    setup:'$800',
    rating:'4.8',
    numReviews:'247',
    numDeployments:"1120",
    deployLink: '/'
  },
  {
    image:'/images/agent-kairos.png',
    name:'KAIROS',
    level:"LEGENDARY",
    category:"Analytics",
    desc:'Advanced analytics and insights with predictive modeling',
    specs:['Predictive Analytics','Custom Reports','Data Visualization'],
    price:'$400',
    setup:'$1200',
    rating:'4.8',
    numReviews:'189',
    numDeployments:"890",
    deployLink: '/'
  },
  {
    image:'/images/agent-sol.png',
    name:'SŌL',
    level:"LEGENDARY",
    category:"System",
    desc:'Master orchestrator connecting all agents for seamless collaboration',
    specs:['Agent Orchestration','Cross-Agent Communication','System Optimization'],
    price:'$500',
    setup:'$1500',
    rating:'5',
    numReviews:'156',
    numDeployments:"2100",
    deployLink: '/'
  },
]


const MarketPage = () => {
  return (
    <>
      <section className='market_hero py-18 relative'>
        <Image className='absolute left-1/2 -translate-x-1/2 top-0 max-w-full w-[1400px] max-h-[300px]' src="/images/market-hero-bg.png" alt="Backgroun image" width={1400} height={230}  />
        <div className="container relative z-20">

          <h1 className="font-extrabold text-5xl tracking-wide text-center mb-3.5">AI Agent <span className='text-golden' >Marketplace</span></h1>
          <p className='text-xl text-center w-full max-w-[656px] mx-auto'>Deploy elite AI agents that transform your business operations. Each agent is expertly crafted to deliver immediate value.</p>
          
          <div className="flex gap-6 justify-between max-w-[686px] mx-auto mt-10">
            
            <div className="flex flex-col items-center single">
              <p className="font-bold text-[32px] text-golden">12+</p>
              <p className="text-sm font-medium text-[#9C9C9C]">Elite Agents</p>
            </div>

            <div className="flex flex-col items-center single">
              <p className="font-bold text-[32px] text-golden">5000+</p>
              <p className="text-sm font-medium text-[#9C9C9C]">Deployments</p>
            </div>

            <div className="flex flex-col items-center single">
              <p className="font-bold text-[32px] text-golden">40 hours</p>
              <p className="text-sm font-medium text-[#9C9C9C]">Saved Weekly</p>
            </div>


          </div>

        </div>
      </section>

      <AgentsList agents={agents} />



      <section className="sec_roi mt-20">
        <div className="container">
          
          <h2 className="font-bold text-[32px] text-center mb-4">ROI Calculator</h2>
          <p className="text-center">Calculate your potential return on investment with Harmonix AI automation</p>
          
          <div className="calculator_wrap flex flex-col lg:flex-row gap-6 xl:gap-[70px] justify-between mt-10">
            
            <div className='roi_left flex-1 w-full px-10 py-12'>
              <h3 className="text-3xl text-center font-bold mb-6">Business Metrics</h3>
              
              <form className='w-full' action="">

                <div className="form_row mb-5">
                  <div className="form_group flex flex-col gap-2.5">
                    <label className='text-dimWhite font-semibold' htmlFor="industry">Industry</label>
                    <div className="relative">
                      <Image className='absolute right-4 top-1/2 -translate-y-1/2 ' src="/images/select-down.png" alt="Dropdown icon" width={16} height={8} />
                      <select name="level" id="" className='rounded-[13px] p-4 appearance-none pr-10 w-full bg-[#D9D9D9]/10'>
                        <option className='bg-[#0F1115]' value="">All Levels</option>
                        <option className='bg-[#0F1115]' value="">Option 2</option>
                        <option className='bg-[#0F1115]' value="">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form_row mb-5 flex flex-col sm:flex-row gap-4 xl:gap-12">
                  <div className="form_group flex flex-1 gap-2.5 flex-col">
                    <label className='text-dimWhite font-semibold' htmlFor="team_size">Team Size</label>
                    <input id="team_size" className='rounded-[13px] p-4 appearance-none pr-10 w-full bg-[#D9D9D9]/10' type="text" placeholder='Team Size' />
                  </div>
                  <div className="form_group flex flex-1 gap-2.5 flex-col">
                    <label className='text-dimWhite font-semibold' htmlFor="hourly_wage">Average Hourly Wage</label>
                    <input id="hourly_wage" className='rounded-[13px] p-4 appearance-none pr-10 w-full bg-[#D9D9D9]/10' type="text" placeholder='Average Hourly Wage' />
                  </div>
                </div>

                <div className="form_row mb-5 flex gap-12">
                  <div className="form_group flex gap-2.5 flex-col w-full">
                    <label className='text-dimWhite font-semibold' htmlFor="manual_time">Hours/Week on Manual Tasks</label>
                    <input id="manual_time" className='rounded-[13px] p-4 appearance-none pr-10 w-full bg-[#D9D9D9]/10' type="text" placeholder='Hours/Week on Manual Tasks' />
                  </div>
                </div>

                <div className="form_row mb-5 flex gap-12">
                  <div className="form_group flex gap-2.5 flex-col w-full">
                    <label className='text-dimWhite font-semibold' htmlFor="harmonix_tier">Harmonix Tier</label>
                    <input id="harmonix_tier" className='rounded-[13px] p-4 appearance-none pr-10 w-full bg-[#D9D9D9]/10' type="text" placeholder='Harmonix Tier' />
                  </div>
                </div>

                <div className="flex justify-center mt-10">
                  <YellowButton className='w-full max-w-[313px] mx-auto'>Calculate ROI</YellowButton>
                </div>




              </form>
            </div>

            <div className="roi_right flex-1 w-full px-10 py-12 shadow-[0px_2px_49px_0px_#00000026] bg-[#0E1E21] rounded-[30px]">
              <h3 className="text-3xl text-center font-bold mb-6">ROI Results</h3>
              <div className="h-full flex flex-col gap-7 justify-center items-center">
                <Image src="/images/calculator.png" alt="Calculator" width={41} height={45} />
                <p className="text-center">Enter your business metrics to see your potential ROI</p>
              </div>
            </div>
          </div>


        </div>
      </section>


      <section className='sec_bottom_cta mt-20 pt-18 pb-8 px-6 relative'>
        <Image className='absolute right-[5%]' src="/images/cta-glow" alt="Background glow" width={680} height={507} />
        <div className="container">
          <h2 className="font-bold text-[32px] text-center mb-4">Ready to Build Your AI Workforce?</h2>
          <p className="text-center">Join thousands of businesses automating their operations with Harmony's elite AI agents</p>

          <div className="cta_wrap mt-12.5 flex flex-col sm:flex-row gap-4 lg:gap-15 justify-center">
            <YellowButton>Get full Access for $297 /month</YellowButton>
            <BlackButton >+ Create Custom Agent</BlackButton>
          </div>
          
          <Link className='block mx-auto mt-14.5 text-center' href="mailto:connect@harmonixdigital.com">Contact:connect@harmonixdigital.com</Link>

        </div>
      </section>
    </>
    
  )
}

export default MarketPage