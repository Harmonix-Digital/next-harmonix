'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const AgentLinks = () => {
  const pathname = usePathname();


  return (
    <div className="agents_list flex flex-wrap gap-5">
      {[
        { href: "/demo/cash", label: "CA$H" },
        { href: "/demo/sol", label: "SOL" },
        { href: "/demo/grace", label: "GRACE" },
        { href: "/demo/flow", label: "FLOW" },
        { href: "/demo/kairos", label: "KAIROS" },
        { href: "/demo/echo", label: "ECHO" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={` rounded-[30px]  px-5 py-4
            ${pathname === link.href
              ? "bg-[#0E2829]"
              : "bg-[#D9D9D9]/10"}
          `}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default AgentLinks