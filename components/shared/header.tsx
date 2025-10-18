'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  // { name: "Marketplace", path: "/market" },
  // { name: "Demo", path: "/demo/cash" },
  { name: "Pricing", path: "/pricing" },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // <section className="header tracking-extra relative">
    <section className="header tracking-extra fixed top-0 left-0 w-full z-50 bg-[#0F1115]">
      <div className="container">
        <div className="header_wrap flex justify-between items-center mt-[30px] mb-[7px]">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image src="/images/logo.png" alt="Harmonix Logo" width={54} height={54} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="main_nav hidden lg:block">
            <nav className="flex gap-9 items-center font-medium text-lg">
              {navItems.map((item) => {
                const isActive = item.path === "/demo/cash" ? pathname.startsWith("/demo")
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

          {/* Utility Nav */}
          <div className="utility_nav hidden lg:flex">
            <ul className="flex gap-7 items-center">
              {/* <Link href="/" className="flex gap-1">
                <p>Log in</p>
                <Image src="/images/arrow-top-right.png" alt="Login icon" width={18} height={18} />
              </Link> */}
              <Link
                href="/join"
                className="bg-green/89 rounded-3xl px-4 py-3 hover:bg-white hover:text-green transition-colors duration-300 font-semibold"
              >
                Join Waitlist
              </Link>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <span className="text-3xl">&times;</span> // Close (X)
            ) : (
              <span className="text-3xl">&#9776;</span> // Hamburger
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-[#0F1115] text-white transition-all duration-300 ease-in-out z-40 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-6 items-center py-10 font-medium text-lg">
          {navItems.map((item) => {
            const isActive =
              item.path === "/demo/cash"
                ? pathname.startsWith("/demo")
                : pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`hover:text-golden ${isActive ? "text-golden" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="flex flex-col gap-4 mt-6">
            {/* <Link href="/" className="flex gap-1 justify-center" onClick={() => setMobileOpen(false)}>
              <p>Log in</p>
              <Image src="/images/arrow-top-right.png" alt="Login icon" width={18} height={18} />
            </Link> */}
            <Link
              href="/join"
              onClick={() => setMobileOpen(false)}
              className="bg-green/89 rounded-3xl px-6 py-3 hover:bg-white hover:text-green transition-colors duration-300 font-semibold text-center"
            >
              Join Waitlist
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;