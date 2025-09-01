import Image from "next/image";
import Link from "next/link";
import HomeThreeAgents from "@/components/home/HomeThreeAgents";
import YellowButton from "@/components/ui/YellowButton";
import BlackButton from "@/components/ui/BlackButton";
import HomeHero from "@/components/home/HomeHero";
import HomeDescription from "@/components/home/HomeDescription";
import HomeHarmonixAbility from "@/components/home/HomeHarmonixAbility";
import HomeTiers from "@/components/home/HomeTiers";
import OwnerFeature from "@/components/home/OwnerFeature";
import Sol from "@/components/home/Sol";
import Savings from "@/components/home/Savings";
import Wallet from "@/components/home/Wallet";
import Newsletter from "@/components/home/Newsletter";




export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeDescription />
      <HomeHarmonixAbility />
      <HomeTiers />
      <OwnerFeature />
      <Sol />
      <Savings />
      <Wallet />
      <Newsletter />
    </>
  );
}
