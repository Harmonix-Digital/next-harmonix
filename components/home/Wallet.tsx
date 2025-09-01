import React from 'react'
import Image from 'next/image'
import YellowButton from "@/components/ui/YellowButton";
import BlackButton from "@/components/ui/BlackButton";


const Wallet = () => {
  return (
    <section className="wallet mt-[233px]">
    <div className="container">
      <h2 className="font-semibold text-5xl text-center leading-20 text-golden mb-5 tracking-wider">Connect Your Digital Wallet</h2>
      <p className="sub_text text-2xl text-center max-w-[992px] w-full mx-auto">Securely manage your crypto assets, track your earnings, and explore your NFT collection with Harmonix.</p>


      <div className="savings_cta_wrap flex justify-center gap-19 mt-[55px]">
        <YellowButton className="flex gap-1 items-center !rounded-2xl !text-[22px]"><Image src="/images/wallet.png" alt="video icon" width={18} height={18} /> <span>Connect Wallet</span> </YellowButton>
      </div>


      <div className="wallet_col_wrap flex flex-col md:flex-row justify-between gap-11 mt-[170px]">
        
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
  )
}

export default Wallet