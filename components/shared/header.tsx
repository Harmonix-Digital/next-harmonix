'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Marketplace", path: "/market" },
  { name: "Demo", path: "/demo/cash" },
  { name: "Pricing", path: "/pricing" },
];

const Header = () => {
  const pathname = usePathname();


  return (
    <section className='header tracking-extra'>
      <div className="container">
        <div className="header_wrap flex justify-between items-center mt-[30px] mb-[7px]">
          <div className="logo">
            <Link href="/">
              <Image src="/images/logo.png" alt="Harmonix Logo" width={54} height={54} />
            </Link>
          </div>
          <div className="main_nav hidden lg:block">
            <nav className='flex gap-9 items-center font-medium text-lg '>

            {/* {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:text-golden ${
                  pathname === item.path
                    ? "text-golden "
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))} */}

            {navItems.map((item) => {
              const isActive =
                item.path === "/demo/cash"
                  ? pathname.startsWith("/demo") // any /demo/* is active
                  : pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`hover:text-golden ${isActive ? "text-golden" : ""}`}
                >
                  {item.name}
                </Link>
              );
            })}




            </nav>
          </div>
          <div className="utility_nav">
            <ul className='flex gap-7 items-center'>
              <Link href="/" className='flex gap-1'>
                <p>Log in</p>
                <Image src='/images/arrow-top-right.png' alt="Login icon"  width={18} height={18}/>
              </Link>
              <Link href="/join" className='bg-green/89 rounded-3xl px-4 py-3 hover:bg-white hover:text-green transition-colors duration-300 font-semibold' >Join Waitlist</Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header