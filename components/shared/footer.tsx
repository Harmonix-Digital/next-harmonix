import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <section className="footer mt-[170px]">
        <div className="container">
          <div className="footer_top grid gap-14 grid-cols-1 md:grid-cols-8">
            
            <div className="logo_col col-span-3">
              <Image src="/images/footer-logo.png" alt="footer logo" width={165} height={60} />
              <p className="text-[15px] leading-6 mt-8">Your trusted financial partner—an AI-driven platform with expert agents trained for finance, operations, and client support, empowering associations and organizations to manage finances effortlessly and scale sustainably.</p>
              
              <div className="socials_wrap flex gap-4 mt-10">
                <Link href="/"><Image src="/images/linkedin.png" alt="Linkedin icon" width={35} height={36} /></Link>
                <Link href="/"><Image src="/images/instagram.png" alt="Linkedin icon" width={35} height={36} /></Link>
                <Link href="/"><Image src="/images/x.png" alt="Linkedin icon" width={35} height={36} /></Link>
                <Link href="/"><Image src="/images/facebook.png" alt="Linkedin icon" width={35} height={36} /></Link>
              </div>

            </div>

            <div className="col-span-5 flex gap-14 justify-between w-full max-w-[700px]">
              
              <div className="">
                <p className="footer_col_header font-medium text-lg mb-9.5">Explore</p>
                <ul className='flex flex-col gap-6'>
                  <li>
                    <Link className='' href="/">About</Link>
                  </li>
                  <li>
                    <Link className='' href="/">Service</Link>
                  </li>
                </ul>
              </div>


              <div className="">
                <p className="footer_col_header font-medium text-lg mb-9.5">Useful Links</p>
                <ul className='flex flex-col gap-6'>
                  <li>
                    <Link className='' href="/">Support</Link>
                  </li>
                </ul>
              </div>


              <div className="">
                <p className="footer_col_header font-medium text-lg mb-9.5">Contact</p>
                <ul className='flex flex-col gap-6'>
                  <li><p className="">128 Maplewood Avenue,  Canada</p></li>
                  <li><p className=""> <a href="tel:+14165552378">+1 (416) 555-2378</a> </p></li>
                  <li><p className=""><a href="mailto:info@harmonixdigital.com">info@harmonixdigital.com</a></p></li>
                </ul>
              </div>

            </div>








          </div>
        </div>
      </section>
    </>
  )
}

export default Footer