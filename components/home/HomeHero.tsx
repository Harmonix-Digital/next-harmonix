import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeHero = () => {
  return (
      <section className="home_hero overflow-hidden tracking-extra pt-5 lg:pt-[105px]">
        <div className="container bg-[url('/images/square-lines.png')] bg-cover bg-center relative">
          <div className="light_images_wrap"></div>
          <Image className="hidden lg:block absolute z-10 w-full max-w-full -top-[5%]" src="/images/left-right-light.png" alt="decorative light" width={1432} height={345} />
          <Image className="hidden lg:block absolute z-10 w-full max-w-[80%] left-1/2 -translate-x-1/2 top-[10%] " src="/images/hero-main-light.png" alt="decorative light" width={1440} height={995} />

          <div className="home_hero_wrap grid grid-cols-1 lg:grid-cols-12 relative z-20 items-center gap-10 lg:gap-0">
            
            <div className="col-span-6 order-2 lg:order-1">
              <h1 data-aos="fade-up" data-aos-offset="0"  data-aos-duration="700" data-aos-delay="0"   className="font-semibold text-golden text-4xl md:text-5xl lg:text-6xl leading-9 lg:leading-20 text-center lg:text-left">The elite, AI automation platform</h1>
              <p data-aos="fade-up" data-aos-offset="0"  data-aos-duration="700" data-aos-delay="0"   className="text-lg lg:text-2xl leading-[34px] mt-5 lg:mt-[54px] mb-[64px] text-center lg:text-left">Transform your business with advanced AI agents-powered by blockchain innovation</p>

              <div data-aos="fade-up" data-aos-offset="0"  data-aos-duration="700" data-aos-delay="0"   className="hero_cta_wrap flex flex-col md:flex-row gap-11 text-xl lg:text-2xl font-semibold">
                <Link href="/" className="flex gap-2 bg-white rounded-4xl pt-1 pb-0 pl-[3px] pr-4 text-black items-center justify-center" >
                  <Image src="/images/green-circle.png" alt="Join icon" width={61} height={56}/>
                  <span>Activate Your Agent</span>
                </Link>
                <Link href="/join" className="flex gap-1 items-center justify-center">
                  <span>Join Waitlist</span>
                  <Image src="/images/arrow-down.png" alt="Down arrow" width={22} height={22} />
                
                </Link>
              </div>
            </div>

            <div className="col-span-6 order-1 lg:order-2">
              <Image data-aos="zoom-in" data-aos-offset="0"  data-aos-duration="1500" className='max-w-full mx-auto' src="/images/home-hero.webp" alt="Ai Image" height={664} width={656}  />
            </div>
          </div>

          <div  className="hero_blocks_wrap flex flex-col md:flex-row gap-7 lg:gap-4 justify-between items-center relative z-20 mt-22">
            
            <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="home_hero_block">
              <p className="text-3xl font-semibold text-center text-golden">Early Adopters</p>
              <p className="text-lg font-medium text-center max-w-[230px] mx-auto">Manage your AI agents 
              from a single dashboard</p>
            </div>           
            <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="300" className="home_hero_block">
              <p className="text-3xl font-semibold text-center text-golden">Agent Marketplace</p>
              <p className="text-lg font-medium text-center max-w-[230px] mx-auto">Browse and deploy AI agents to serve yor needs</p>
            </div>           
            <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="600" className="home_hero_block">
              <p className="text-3xl font-semibold text-center text-golden">Harmonix Token</p>
              <p className="text-lg font-medium text-center max-w-[230px] mx-auto">Recharge your AI agents with our stable token</p>
            </div>

          </div>
        </div>
      </section>
  )
}

export default HomeHero