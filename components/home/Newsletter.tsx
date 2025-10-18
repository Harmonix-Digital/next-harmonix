'use client'
import React,{useRef, useState} from 'react'
import Image from 'next/image'
import YellowButton from "@/components/ui/YellowButton";
import BlackButton from "@/components/ui/BlackButton";
import { toast } from 'react-toastify';



const Newsletter = () => {

  const [isLoading, setIsLoading] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)

    const email = emailRef.current?.value;

    // console.log({ email });

    // Example: send to API route
    const signupRes = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const signupdata = await signupRes.json();
    console.log("signupRes", signupdata)
    setIsLoading(false);
    if (emailRef.current) {
      emailRef.current.value = "";
    }
    if(signupdata.success){
      toast.success("Your submission has been received. Thank you!")
    }else{
      toast.error(signupdata.message)
    }


    
    
  };


  return (
      <section className="home_newsletter mt-24 lg:mt-[220px]">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="font-semibold text-3xl md:text-4xl  lg:text-big text-center leading-10 lg:leading-20 text-golden mb-4 lg:mb-9 tracking-wider">Get Started with Harmonix</h2>
          <p data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="sub_text text-lg lg:text-2xl text-center">Enter your details below to access our investor brochure</p>

          <form data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" onSubmit={handleSubmit} className="mt-14 lg:mt-[90px] block relative">

            {isLoading && (
              <div className="absolute left-0 top-0 h-full w-full flex items-center justify-center z-20">
                <Image src="/images/loading.gif" width={100} height={100} alt="Loader image" />
              </div>
            )}

            <div className="form_row flex items-center bg-[#D9D9D9]/10 rounded-xl w-full max-w-[1192px] mx-auto relative z-10">
              <input name="email" autoComplete="false" className="w-full h-[77px] pl-10" placeholder="Email" type="email" ref={emailRef}/>
              <button className="cursor-pointer absolute -translate-y-1/2 top-1/2 right-6"  type="submit"><Image src="/images/circular-submit.png" alt="Submit button" width={67} height={60} /></button>
            </div>
          </form>

          <div data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="download_wrap mt-18 ">
            <YellowButton className="flex gap-1 items-center mx-auto tracking-wide lg:!py-5">
              <span>Download Investor Check PDF</span>
              <Image src="/images/download.png" width={26} height={26} alt="download button" />
            </YellowButton>
          </div>


        </div>
      </section>
  )
}

export default Newsletter