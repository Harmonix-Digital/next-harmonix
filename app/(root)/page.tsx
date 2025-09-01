import Image from "next/image";
import Link from "next/link";
import HomeThreeAgents from "@/components/home/HomeThreeAgents";
import YellowButton from "@/components/ui/YellowButton";
import BlackButton from "@/components/ui/BlackButton";

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
          <h2 className="text-big font-semibold text-center mb-11">Design a business that runs <span className="text-golden">itself</span> </h2>
          <p className="sub_text text-2xl text-center">A full AI operating system for teams who value freedom, clarity, and flow.</p>
          

          <div className="home_desc_blocks_wrap flex flex-col lg:flex-row gap-6 mt-19">
            
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

      <section className="home_harmonix_can_do mt-19">
        <div className="container">
          <h2 className="text-big font-semibold text-center mb-11 text-golden">What Can Harmonix Agents Do?</h2>
          <p className="sub_text text-2xl text-center">Discover the specialized AI agents that will transform your business operations.</p>

          <HomeThreeAgents />
        </div>

        

        
      </section>


      <section className="home_tiers mt-19">
        <div className="container">
          
          <div className="sec_btn flex items-center justify-center gap-2 bg-[#D9D9D9]/10 rounded-[20px] px-8 py-[15px] w-[296px] mx-auto text-golden text-lg font-semibold">
            <span>Early Adopter Pricing</span>
            <Image src="/images/clock.png" alt="Clock icon" width={28} height={28} />
          </div>

          <h2 className="text-big font-semibold text-center mb-5 text-golden">Investment Tiers
          </h2>
          <p className="sub_text text-2xl text-center">Limited time offer - 30% discount. Secure your spot before rates increase.</p>

          <div className="tiers_wrap flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-center mt-24">
            
            <div className="tier bg-[#D9D9D9]/10 rounded-[10px] flex flex-col items-center p-6">
              <p className="text-golden text-2xl font-semibold mb-4">Starter</p>
              <p className="font-semibold text-[12px] mb-6">1 Agent</p>
              <p className="text-offwhite text-[16px] font-semibold mb-2">$320/month</p>
              <p className="text-golden text-[9px] font-semibold mb-6">Ongoing monthly cost</p>
              <p className="flex gap-2 items-center">
                <span className="line-through text-[8px]">$4.4,000</span>
                <span className="text-golden text-[12px] mb-2">30% OFF</span>
              </p>
              <p className="text-[12px]">$4.4K setup</p>
              <p className="text-golden text-[8px] font-semibold mb-6">One-time platform setup</p>

              <button className="rounded-[8px] px-2 py-3 border border-golden text-[10px]">Pay 30% Deposit & Get 15% Off + Priority Access</button>
            </div>

            <div className="tier bg-[#D9D9D9]/10 rounded-[10px] flex flex-col items-center p-6 relative">
              <div className="popular bg-[#D9D9D9]/10 rounded-[12px] px-2.5 py-3.5 absolute -translate-y-1/2 -top-[10px]">
                <p className="text-[10px] text-golden font-semibold">Most Popular</p>  
              </div>
              <p className="text-golden text-2xl font-semibold mb-4">Growth</p>
              <p className="font-semibold text-[12px] mb-6">3–5 Agents</p>
              <p className="text-offwhite text-[16px] font-semibold mb-2">$960 – $1,600/month</p>
              <p className="text-golden text-[9px] font-semibold mb-6">Ongoing monthly cost</p>
              <p className="flex gap-2 items-center">
                <span className="line-through text-[8px]">$8,000</span>
                <span className="text-golden text-[12px] mb-2">30% OFF</span>
              </p>
              <p className="text-[12px]">$8K setup</p>
              <p className="text-golden text-[8px] font-semibold mb-6">One-time platform setup</p>

              <button className="rounded-[8px] px-2 py-3 border border-golden text-[10px]">Pay 30% Deposit & Get 15% Off + Priority Access</button>
            </div>  

            <div className="tier bg-[#D9D9D9]/10 rounded-[10px] flex flex-col items-center p-6">
              <p className="text-golden text-2xl font-semibold mb-4">Expansion</p>
              <p className="font-semibold text-[12px] mb-6">6–8 Agents</p>
              <p className="text-offwhite text-[16px] font-semibold mb-2">$1,920 – $2,560/month
              </p>
              <p className="text-golden text-[9px] font-semibold mb-6">Ongoing monthly cost</p>
              <p className="flex gap-2 items-center">
                <span className="line-through text-[8px]">$15,000</span>
                <span className="text-golden text-[12px] mb-2">30% OFF</span>
              </p>
              <p className="text-[12px]">$15K setup</p>
              <p className="text-golden text-[8px] font-semibold mb-6">One-time platform setup</p>

              <button className="rounded-[8px] px-2 py-3 border border-golden text-[10px]">Pay 30% Deposit & Get 15% Off + Priority Access</button>
            </div>

            <div className="tier bg-[#D9D9D9]/10 rounded-[10px] flex flex-col items-center p-6">
              <p className="text-golden text-2xl font-semibold mb-4">Enterprise</p>
              <p className="font-semibold text-[12px] mb-6">9–12 Agents</p>
              <p className="text-offwhite text-[16px] font-semibold mb-2">$2,880 – $3,840/month              </p>
              <p className="text-golden text-[9px] font-semibold mb-6">Ongoing monthly cost</p>
              <p className="flex gap-2 items-center">
                <span className="line-through text-[8px]">$21,500+</span>
                <span className="text-golden text-[12px] mb-2">30% OFF</span>
              </p>
              <p className="text-[12px]">$21.5K+ setup</p>
              <p className="text-golden text-[8px] font-semibold mb-6">One-time platform setup</p>

              <button className="rounded-[8px] px-2 py-3 border border-golden text-[10px]">Pay 30% Deposit & Get 15% Off + Priority Access</button>
            </div>



          </div>




        </div>
      </section>

      <section className="owner_feature mt-19">
        <div className="container">

          <div className="sec_btn flex items-center justify-center gap-2 bg-[#D9D9D9]/10 rounded-[20px] px-8 py-[15px] w-[296px] mx-auto text-golden text-lg font-semibold">
            <span>Harmonix Tokens</span>
            <Image src="/images/dollar.png" alt="Clock icon" width={28} height={28} />
          </div>

          <h2 className="text-big font-semibold text-center mb-5 text-golden"> Unlock the Future of AI Ownership</h2>
          <p className="sub_text text-2xl text-center">Our NFTs aren’t just collectibles. They’re functional tokens designed to connect you with rewards, access, and growth inside our AI-driven platform</p>

          <div className="flex gap-11 mt-[160px] pb-[195px]">
            
            <div className="relative flex">
              
              <div className="single_card">
                <div className=" bg-[#D9D9D9]/10 rounded-[10px] px-3.5 py-2 relative -right-[15px]">
                  <Image src="/images/token-img.png" width={258} height={261} alt="ownership image" />
                  <p className="text-golden font-semibold">Harmonix Tokens 2</p>
                  <div className="flex justify-between">
                    
                    <div className="flex gap-1 items-center">
                      <Image src="/images/token-icon.png" alt="token icon" width={20} height={20} />
                      <span className="text-sm font-semibold">12.5 ETH</span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Image className="w-3 h-3" src="/images/clock-white.png" alt="token icon" width={12} height={12} />
                      <span className="text-sm font-semibold">6h:30m:7s</span>
                    </div>


                  </div>
                </div>
              </div>

              <div className="single_card">
                <div className="single_card bg-[#D9D9D9]/10 rounded-[10px] px-3.5 py-2 relative top-[70%] ">
                  <Image src="/images/token-img.png" width={258} height={261} alt="ownership image" />
                  <p className="text-golden font-semibold">Harmonix Tokens 2</p>
                  <div className="flex justify-between">
                  
                    <div className="flex gap-1 items-center">
                      <Image src="/images/token-icon.png" alt="token icon" width={20} height={20} />
                      <span className="text-sm font-semibold">12.5 ETH</span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Image className="w-3 h-3" src="/images/clock-white.png" alt="token icon" width={12} height={12} />
                      <span className="text-sm font-semibold">6h:30m:7s</span>
                    </div>


                  </div>



                </div>          

              </div>

              <div className="single_card">
                <div className="single_card bg-[#D9D9D9]/10 rounded-[10px] px-3.5 py-2 relative -left-[15px]">
                  <Image src="/images/token-img.png" width={258} height={261} alt="ownership image" />
                  <p className="text-golden font-semibold">Harmonix Tokens 2</p>
                  <div className="flex justify-between">
                    
                    <div className="flex gap-1 items-center">
                      <Image src="/images/token-icon.png" alt="token icon" width={20} height={20} />
                      <span className="text-sm font-semibold">12.5 ETH</span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Image className="w-3 h-3" src="/images/clock-white.png" alt="token icon" width={12} height={12} />
                      <span className="text-sm font-semibold">6h:30m:7s</span>
                    </div>


                  </div>
                </div>
              </div>


            </div>

            <div className="right-col">
              <p className="font-semibold text-5xl text-center leading-20 text-golden max-w-[500px]">Collect. Connect. Grow with AI</p>
              
              <div className="flex justify-center gap-9 mt-[130px]">
                <YellowButton href="/" className="shadow-lg">Mint Now</YellowButton>
                <BlackButton href="/" className="flex gap-1 items-center justify-center"><span>Learn more</span> <Image alt="right angle" src="/images/angle-right.png" width={16} height={16} /></BlackButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="sol mt-19">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-7">
            
            <div className="col-span-4 ">
              
              <div className="sec_btn flex items-center justify-center gap-2 bg-[#D9D9D9]/10 rounded-[20px] px-8 py-[15px] w-[296px] text-golden text-lg font-semibold">
                <span>SŌL Brain Preview</span>
                <Image src="/images/brain.png" alt="Clock icon" width={28} height={28} />
              </div>

              <h2 className="text-big font-semibold  mb-5 text-golden">What Is SŌL?</h2>
              <p className="sub_text text-2xl ">The consciousness that orchestrates your AI workforce. SŌL analyzes your business, assigns the right agents, and optimizes your operations with sacred precision.</p>

              <ul className="sol_list flex flex-col gap-10 mt-20">
                <li className="flex items-center gap-5 text-2xl  ">
                  <Image src="/images/golden-star.png" alt="Star icon" width={20} height={20} />
                  <span>Diagnoses your business automatically</span>
                </li>

                <li className="flex items-center gap-5 text-2xl  ">
                  <Image src="/images/golden-star.png" alt="Star icon" width={20} height={20} />
                  <span>Intelligent agent assignment logic</span>
                </li>
                
                <li className="flex items-center gap-5 text-2xl  ">
                  <Image src="/images/golden-star.png" alt="Star icon" width={20} height={20} />
                  <span>Real-time ROI calculator</span>
                </li>

                <li className="flex items-center gap-5 text-2xl  ">
                  <Image src="/images/golden-star.png" alt="Star icon" width={20} height={20} />
                  <span>Adaptive learning from patterns</span>
                </li>


              </ul>

              <YellowButton className="flex gap-2 items-center mt-14"><span>Ask SOL how we can help  your business</span> <Image src="/images/angle-right-black.png" alt="Angle right" width={24} height={24} />  </YellowButton>

            </div>
            
            <div className="col-span-3 pt-11">
              <Image src="/images/sol_image.png" alt="SOL Image" width={590} height={590}  />
            </div>
          </div>
        </div>
      </section>

      <section className="savings mt-19">
        <div className="container">
          <h2 className="font-semibold text-5xl text-center leading-20 text-golden mb-5">This isn't theory — it's already saving teams 40+ hours/week</h2>
          <p className="sub_text text-2xl text-center">Real results from businesses that have activated their AI workforce.</p>

          <div className="savings_col_wrap flex justify-between gap-11 mt-[170px]">
            
            <div className="savings_col">
              <p className="font-semibold text-[76px] text-center">40+</p>
              <p className="text-golden text-[32px] text-center">Hours saved per week</p>
            </div>            
            <div className="savings_col">
              <p className="font-semibold text-[76px] text-center">40+</p>
              <p className="text-golden text-[32px] text-center">Hours saved per week</p>
            </div>            
            <div className="savings_col">
              <p className="font-semibold text-[76px] text-center">40+</p>
              <p className="text-golden text-[32px] text-center">Hours saved per week</p>
            </div>

          </div>

          <div className="savings_cta_wrap flex justify-center gap-19 mt-22">
            <YellowButton className="flex gap-1 items-center"><Image src="/images/video_icon.png" alt="video icon" width={18} height={18} /> <span>Watch Live Demo</span> </YellowButton>

            <BlackButton className="">Read Success Stories</BlackButton>
          </div>



        </div>
      </section>


      <section className="savings mt-24">
        <div className="container">
          <h2 className="font-semibold text-5xl text-center leading-20 text-golden mb-5">Connect Your Digital Wallet</h2>
          <p className="sub_text text-2xl text-center">Securely manage your crypto assets, track your earnings, and explore your NFT collection with Harmonix.</p>


          <div className="savings_cta_wrap flex justify-center gap-19 mt-22">
            <YellowButton className="flex gap-1 items-center"><Image src="/images/wallet.png" alt="video icon" width={18} height={18} /> <span>Connect Wallet</span> </YellowButton>
          </div>


          <div className="wallet_col_wrap flex justify-between gap-11 mt-[170px]">
            
            <div className="savings_col relative">
              <Image className="absolute w-full -top-24 -left-24 z-10" src="/images/wallet-glow.png" width={142} height={57} alt="background glow" />
              <div className="relative z-20">
                <p className="font-semibold text-[30px] text-golden">Track Earnings</p>
                <p className=" text-lg">Monitor your portfolio performance and earnings in real-time</p>
              </div>
            </div>               
            <div className="savings_col relative">
              <Image className="absolute w-full -top-24 -left-24 z-10" src="/images/wallet-glow.png" width={142} height={57} alt="background glow" />
              <div className="relative z-20">
                <p className="font-semibold text-[30px] text-golden">Manage Tokens</p>
                <p className=" text-lg">View and manage your token balances across multiple chains</p>
              </div>
            </div>

            <div className="savings_col relative">
              <Image className="absolute w-full -top-24 -left-24 z-10" src="/images/wallet-glow.png" width={142} height={57} alt="background glow" />
              <div className="relative z-20">
                <p className="font-semibold text-[30px] text-golden">NFT Gallery</p>
                <p className="text-lg">Showcase and organize your NFT collection in one place</p>
              </div>
            </div>
            
          


          </div>

        </div>
      </section>

    </>
  );
}
