import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="home_hero overflow-hidden tracking-extra">
        <div className="container bg-[url('/images/square-lines.png')] bg-cover bg-center relative">
          <div className="light_images_wrap"></div>
          <Image className="absolute z-10 w-full max-w-full -top-[5%]" src="/images/left-right-light.png" alt="decorative light" width={1432} height={345} />
          <Image className="absolute z-10 w-full max-w-[80%] left-1/2 -translate-x-1/2 top-[10%] " src="/images/hero-main-light.png" alt="decorative light" width={1440} height={995} />

          <div className="home_hero_wrap grid grid-cols-1 lg:grid-cols-12 relative z-20 items-center">
            <div className="col-span-6">
              <h1 className="font-semibold text-golden text-6xl ">The elite, AI automation platform</h1>
              <p className="text-2xl leading-[34px] mt-[54px] mb-[64px]">Transform your business with advanced AI agents-powered by blockchain innovation</p>

              <div className="hero_cta_wrap flex gap-11 text-2xl font-semibold">
                <Link href="/" className="flex gap-2 bg-white rounded-4xl pt-1 pb-0 pl-[3px] pr-4 text-black items-center" >
                  <Image src="/images/green-circle.png" alt="Join icon" width={61} height={56}/>
                  <span>Activate Your Agent</span>
                </Link>
                <Link href="/" className="flex gap-1 items-center">
                  <span>Join Waitlist</span>
                  <Image src="/images/arrow-down.png" alt="Down arrow" width={22} height={22} />
                
                </Link>
              </div>
            </div>
            <div className="col-span-5">
              <Image src="/images/hero-img.png" alt="Ai Image" height={664} width={656}  />
            </div>
          </div>

          <div className="hero_blocks_wrap flex gap-4 justify-between items-center relative z-20 mt-22">
            
            <div className="home_hero_block">
              <p className="text-3xl font-semibold text-center mb-[18px]">Early Adopters</p>
              <p className="text-lg font-medium text-center max-w-[230px] mx-auto">Manage your AI agents 
              from a single dashboard</p>
            </div>           
            <div className="home_hero_block">
              <p className="text-3xl font-semibold text-center mb-[18px]">Agent Marketplace</p>
              <p className="text-lg font-medium text-center max-w-[230px] mx-auto">Browse and deploy AI agents to serve yor needs</p>
            </div>           
            <div className="home_hero_block">
              <p className="text-3xl font-semibold text-center mb-[18px]">Harmonix Token</p>
              <p className="text-lg font-medium text-center max-w-[230px] mx-auto">Recharge your AI agents with our stable token</p>
            </div>

          </div>
        </div>
      </section>
      
      <section className="home_desc mt-24">
        <div className="container">
          <h2 className="text-big font-semibold mb-9 text-center mb-11">Design a business that runs <span className="text-golden">itself</span> </h2>
          <p className="sub_text text-2xl text-center">A full AI operating system for teams who value freedom, clarity, and flow.</p>

          <div className="home_desc_blocks_wrap flex gap-6 mt-19">
            
            <div className="home_desc_block rounded-3xl bg-[#D9D9D91A]  pt-0 pb-9">
              <div className="flex justify-end">
                <p className="inline-block px-9 py-5 rounded-2xl bg-[#0F1115] text-golden font-semibold text-xl">Agent Intelligence</p>
              </div>

              <div className="px-7 mt-9">
                <p className="pb-5 font-medium text-lg">12 core agents trained for sales, systems, content, and client ops.</p>

                <div className="home-desc_points relative">
                  <Image className="absolute left-[4px] top-2.5 z-10 max-h-[98%]" src="/images/white-ver-line.png"  width={4} height={180} alt='vertical bar' />
                  
                  <ul className="flex flex-col justify-between gap-17">

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Sales automation
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Content creation
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Client management
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />System optimization
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="home_desc_block rounded-3xl bg-[#D9D9D91A]  pt-0 pb-9">
              <div className="flex justify-end">
                <p className="inline-block px-9 py-5 rounded-2xl bg-[#0F1115] text-golden font-semibold text-xl">Seamless Integration</p>
              </div>

              <div className="px-7 mt-9">
                <p className="pb-5 font-medium text-lg">Plug into your tools: GHL, Stripe, Slack, Notion, ClickUp & more.</p>

                <div className="home-desc_points relative">
                  <Image className="absolute left-[4px] top-2.5 z-10 max-h-[98%]" src="/images/white-ver-line.png"  width={4} height={180} alt='vertical bar' />
                  
                  <ul className="flex flex-col justify-between gap-17">

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />CRM sync
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Payment processing
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Team collaboration
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Project management
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="home_desc_block rounded-3xl bg-[#D9D9D91A]  pt-0 pb-9">
              <div className="flex justify-end">
                <p className="inline-block px-9 py-5 rounded-2xl bg-[#0F1115] text-golden font-semibold text-xl">Time Sovereignty</p>
              </div>

              <div className="px-7 mt-9">
                <p className="pb-5 font-medium text-lg">Track time saved per task. Grow in flow — not in stress.</p>

                <div className="home-desc_points relative">
                  <Image className="absolute left-[4px] top-2.5 z-10 max-h-[98%]" src="/images/white-ver-line.png"  width={4} height={180} alt='vertical bar' />
                  
                  <ul className="flex flex-col justify-between gap-17">

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Time tracking
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Efficiency metrics
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Flow optimization
                    </li>

                    <li className="realtive z-20 flex gap-4 items-center text-[#F5F5F5]">
                      <Image className="w-3 h-3 mt-1.5" src="/images/golden-circle-filled.png" width={12} height={12} alt="Golden circle" />Stress reduction
                    </li>

                  </ul>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>


    </>
  );
}
