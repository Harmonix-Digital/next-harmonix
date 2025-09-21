import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <section className="footer mt-24 lg:mt-[170px]">
        <div className="container">
          
          <div className="footer_top grid gap-14 grid-cols-1 lg:grid-cols-8 border-b border-white pb-16">
            
            <div className="logo_col col-span-6 md:col-span-2">
              <Image src="/images/footer-logo.png" alt="footer logo" width={165} height={60} />
              <p className="text-[15px] leading-6 mt-8">About Harmonix Intelligent Systems for Timeless overeignty. Build → Automate → Scale → Exit.</p>
              
              <div className="socials_wrap flex gap-4 mt-10">
                <Link className='group' href="/">
                  <Image className='block group-hover:hidden' src="/images/linkedin.png" alt="Social icon" width={35} height={36} />
                  <Image className='hidden group-hover:block' src="/images/linkedin-golden.png" alt="Social icon" width={35} height={36} />
                </Link>
                <Link className='group' href="/">
                  <Image className='block group-hover:hidden' src="/images/instagram.png" alt="Social icon" width={35} height={36} />
                  <Image className='hidden group-hover:block' src="/images/instagram-golden.png" alt="Social icon" width={35} height={36} />
                </Link>
                <Link className='group' href="/">
                  <Image className='block group-hover:hidden' src="/images/x.png" alt="Social icon" width={35} height={36} />
                  <Image className='hidden group-hover:block' src="/images/x-golden.png" alt="Social icon" width={35} height={36} />
                </Link>
                <Link className='group' href="/">
                  <Image className='block group-hover:hidden' src="/images/facebook.png" alt="Social icon" width={35} height={36} />
                  <Image className='hidden group-hover:block' src="/images/facebook-golden.png" alt="Social icon" width={35} height={36} />
                </Link>
                <Link className='group' href="/">
                  <Image className='block group-hover:hidden' src="/images/youtube.png" alt="Social icon" width={35} height={36} />
                  <Image className='hidden group-hover:block' src="/images/youtube-golden.png" alt="Social icon" width={35} height={36} />
                </Link>
                <Link className='group' href="/">
                  <Image className='block group-hover:hidden' src="/images/tiktok.png" alt="Social icon" width={35} height={36} />
                  <Image className='hidden group-hover:block' src="/images/tiktok-golden.png" alt="Social icon" width={35} height={36} />
                </Link>
              </div>

            </div>

            <div className="col-span-5 flex flex-col md:flex-row lg:flex-nowrap  gap-10 justify-between w-full max-w-[800px] ">
              
              <div className="">
                <p className="footer_col_header font-medium text-lg mb-2 lg:mb-9.5">Services</p>
                <ul className='flex flex-col gap-2 lg:gap-6'>
                  <li>
                    <Link className=' hover:text-golden' href="/">AI & Automation Infrastructure</Link>
                  </li>
                  <li>
                    <Link className=' hover:text-golden' href="/">Web Development (Web2 + Web3)</Link>
                  </li>
                  <li>
                    <Link className=' hover:text-golden' href="/">Blockchain & Tokenization</Link>
                  </li>
                  <li>
                    <Link className=' hover:text-golden' href="/">Community Building</Link>
                  </li>
                </ul>
              </div>


              <div className="min-w-[130px]">
                <p className="footer_col_header font-medium text-lg mb-2 lg:mb-9.5">Support</p>
                <ul className='flex flex-col  gap-2 lg:gap-6'>
                  <li>
                    <Link className=' hover:text-golden' href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link className=' hover:text-golden' href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link className=' hover:text-golden' href="/terms">Terms of Service</Link>
                  </li>
                </ul>
              </div>


              <div className="">
                <p className="footer_col_header font-medium text-lg mb-2 lg:mb-9.5">Contact</p>
                <ul className='flex flex-col  gap-2 lg:gap-6'>
                  <li><p className="flex gap-2 items-start"><Image className='mt-1' src="/images/location-icon.png" alt="Location Icon" width={20} height={20} /> <span>Vancouver, BC (Serving Global Clients)</span></p></li>
                  <li><p className="flex gap-1 items-start"><Image className='mt-1' src="/images/phone-icon.png" alt="Phone Icon" width={20} height={20} /> <a className=' hover:text-golden' href="tel:+16047577771"> +1 (604) 757-7771</a> </p></li>
                  <li><p className="flex gap-1 items-start"><Image className='mt-1' src="/images/email-icon1.png" alt="email Icon" width={20} height={20} /><a className=" hover:text-golden" href="mailto:connect@harmonixdigital.com">connect@harmonixdigital.com</a></p></li>
                </ul>
              </div>

            </div>


          </div>

          <div className="footer_bottom pt-6">
            <p className="text-center mb-11">©️ 2025 Harmonix Digital. All Rights Reserved.</p>
          </div>


        </div>
      </section>
    </>
  )
}

export default Footer