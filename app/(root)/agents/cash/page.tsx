import React from 'react'
import Image from 'next/image'
import YellowButton from '@/components/ui/YellowButton'
import BlackButton from '@/components/ui/BlackButton'

const AgentCashPage = () => {
  return (
    <>
      <section className='agent_details_hero relative'>
        <Image className='absolute right-0' src="/images/oval-glow.png" alt="Background image" width={300} height={200} />
        <div className="container relative z-20">
          <div className="single_agent pt-18 pb-12 px-10 rounded-[10px]">
            
            <div className="agent_top flex flex-col items-center md:items-start md:flex-row justify-between  gap-9">
              <div className="image_col">
                <Image src="/images/agent-cash.png" alt="Agent Icon" width={110} height={110} />
              </div>
              
              <div className="desc_col text-white flex-1">
                <h3 className='font-bold text-[32px] mb-2.5 text-center md:text-left'>CA$H</h3>
                <p className=" text-center md:text-left">Close more deals, effortlessly</p>

                <div className="agent_bottom flex flex-col sm:flex-row gap-4 justify-start mt-10">
                  <YellowButton className='' href='/'>Deploy</YellowButton>
                  <BlackButton href='/demo/cash'>Try Demo</BlackButton>
                </div>


              </div>
              
              <div className="favorite_col">
                <Image src="/images/agent-loved.png" alt="Agent Icon" width={50} height={43} />
              </div>

            </div>


          </div>
        </div>
      </section>

      <section className="agent_details mt-8">
        <div className="container">
          <h1 className="font-bold text-2xl">Overview</h1>
          <p className="text-xl font-semibold mt-8 mb-3.5">Description</p>
          <p className="">CA$H is your AI-powered sales closer, trained to handle the end-to-end sales process — from outreach to objection handling, to booking qualified meetings.
          It works seamlessly with your CRM, email, and calendar, ensuring your pipeline never runs dry. With CA$H, your sales team can focus on what they do best: building relationships and closing high-value deals, while routine prospecting and follow-ups run on autopilot.</p>
        </div>
      </section>

      <section className='agent_pricing mt-12'>
        <div className="container">
          <p className="text-xl font-semibold mt-8 mb-3.5">Pricing</p>
          <div className="pricing_points flex flex-col gap-3.5">
            
            <div className="single-price flex gap-12">
              <div className='min-w-[85px]'>Base price:</div>
              <div className='font-bold text-xl'>
               $350 <span className='text-sm'>/month</span>
              </div>
            </div>

            <div className="single-price flex gap-12">
              <div className='min-w-[85px]'>Fuel price:</div>
              <div className='font-bold text-xl'>
               $2 <span className='text-sm'>/prompt</span>
              </div>
            </div>

            <div className="single-price flex gap-12">
              <div className='min-w-[85px]'>Setup:</div>
              <div className='font-bold text-xl'>
               $1000 <span className='text-sm'>/one time payment</span>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className='agent_integration mt-12'>
        <div className="container">
          <p className="text-xl font-semibold mt-8 mb-3.5">Supported Integration</p>
          <div className="integration_wrap flex flex-col gap-4">
            
            <div className="single_itegration flex gap-3">
              <Image className='w-4.5 h-5' src="/images/tick-yellow-white.png" alt="Check icon" width={15} height={15} />
              <span className='text-sm'>Hubspot</span>
            </div>
            
            <div className="single_itegration flex gap-3">
              <Image className='w-4.5 h-5' src="/images/tick-yellow-white.png" alt="Check icon" width={15} height={15} />
              <span className='text-sm'>Salesforce</span>
            </div>

            <div className="single_itegration flex gap-3">
              <Image className='w-4.5 h-5' src="/images/tick-yellow-white.png" alt="Check icon" width={15} height={15} />
              <span className='text-sm'>Slack</span>
            </div>

            <div className="single_itegration flex gap-3">
              <Image className='w-4.5 h-5' src="/images/tick-yellow-white.png" alt="Check icon" width={15} height={15} />
              <span className='text-sm'>Gmail</span>
            </div>


            <div className="single_itegration flex gap-3">
              <Image className='w-4.5 h-5' src="/images/tick-yellow-white.png" alt="Check icon" width={15} height={15} />
              <span className='text-sm'>Outlook</span>
            </div>

            
          </div>
        </div>
      </section>


      <section className='agent_integration mt-12'>
        <div className="container">
          <p className="text-xl font-semibold mt-8 mb-5">Key Features</p>
          
          <div className="integration_wrap flex flex-wrap justify-start gap-6 md:gap-6 lg:gap-17">
            
            <div className="single_feature px-10 py-14 bg-[#D9D9D9]/10 rounded-[30px] w-full sm:w-[45%] md:w-[30%] lg:w-[25%]">
              <Image className='mx-auto' src="/images/feat-calendar.png" alt="Check icon" width={70} height={70} />
              <p className="font-bold mt-4 mb-2 text-center">Calendar Integration</p>
              <p className="text-sm text-center">Books meetings directly into your schedule.</p>
            </div>


            <div className="single_feature px-10 py-14 bg-[#D9D9D9]/10 rounded-[30px] w-full sm:w-[45%] md:w-[30%] lg:w-[25%]">
              <Image className='mx-auto' src="/images/feat-calendar.png" alt="Check icon" width={70} height={70} />
              <p className="font-bold mt-4 mb-2 text-center">Calendar Integration</p>
              <p className="text-sm text-center">Books meetings directly into your schedule.</p>
            </div>



            <div className="single_feature px-10 py-14 bg-[#D9D9D9]/10 rounded-[30px] w-full sm:w-[45%] md:w-[30%] lg:w-[25%]">
              <Image className='mx-auto' src="/images/feat-calendar.png" alt="Check icon" width={70} height={70} />
              <p className="font-bold mt-4 mb-2 text-center">Calendar Integration</p>
              <p className="text-sm text-center">Books meetings directly into your schedule.</p>
            </div>



            <div className="single_feature px-10 py-14 bg-[#D9D9D9]/10 rounded-[30px] w-full sm:w-[45%] md:w-[30%] lg:w-[25%]">
              <Image className='mx-auto' src="/images/feat-calendar.png" alt="Check icon" width={70} height={70} />
              <p className="font-bold mt-4 mb-2 text-center">Calendar Integration</p>
              <p className="text-sm text-center">Books meetings directly into your schedule.</p>
            </div>



            <div className="single_feature px-10 py-14 bg-[#D9D9D9]/10 rounded-[30px] w-full sm:w-[45%] md:w-[30%] lg:w-[25%]">
              <Image className='mx-auto' src="/images/feat-calendar.png" alt="Check icon" width={70} height={70} />
              <p className="font-bold mt-4 mb-2 text-center">Calendar Integration</p>
              <p className="text-sm text-center">Books meetings directly into your schedule.</p>
            </div>

            
            
          </div>


        </div>
      </section>

      <section className='reviews mt-10'>
        <div className="container">
          <p className="text-xl font-semibold mb-5">Reviews</p>
          <div className="flex gap-4">
            <Image src="/images/yellow-star.png" alt="Star" width={30} height={30} />
            <div className="flex gap-1 items-baseline">
              <span className='font-extrabold text-2xl'>4.8</span>
              <span className='text-xs'>(from early beta testers)</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-4 gap-10">

            <div className="single_testimonial bg-[#D9D9D9]/10 px-4 py-8 md:px-[60px] md:py-13 rounded-xl md:rounded-[30px]">
              <p className='mb-4'>“CA$H booked us 12 qualified calls in the first two weeks — something our team struggled with for months. Absolute game changer.”</p>
              <p className="text-right"> – Startup Founder, B2B SaaS</p>
            </div>

            <div className="single_testimonial bg-[#D9D9D9]/10 px-4 py-8 md:px-[60px] md:py-13 rounded-xl md:rounded-[30px]">
              <p className='mb-4'>“CA$H booked us 12 qualified calls in the first two weeks — something our team struggled with for months. Absolute game changer.”</p>
              <p className="text-right"> – Startup Founder, B2B SaaS</p>
            </div>




          </div>
        </div>
      </section>

      <section className="proof mt-10">
        <div className="container">
          <p className="text-xl font-semibold mb-7.5">Performance & Proof</p>
          <div className="flex flex-col md:flex-row gap-10 md:gap-6">

            <div className="flex flex-col items-center">
              <Image src="/images/tick-yellow-white.png" alt="Check" width={30} height={30} />
              <p className="mt-2.5 text-center">
                +27% average lead conversion rate in pilot tests
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/images/tick-yellow-white.png" alt="Check" width={30} height={30} />
              <p className="mt-2.5 text-center">
                +27% average lead conversion rate in pilot tests
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/images/tick-yellow-white.png" alt="Check" width={30} height={30} />
              <p className="mt-2.5 text-center">
                +27% average lead conversion rate in pilot tests
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/images/tick-yellow-white.png" alt="Check" width={30} height={30} />
              <p className="mt-2.5 text-center">
                +27% average lead conversion rate in pilot tests
              </p>
            </div>


          </div>
        </div>
      </section>


    </>
    
  )
}

export default AgentCashPage