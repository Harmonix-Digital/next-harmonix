import React from "react";
import Link from "next/link";

type YellowButtonProps = {
  children: React.ReactNode;
  href?: string; // if provided, renders as <Link>
  className?: string; // extra classes
  onClick?: () => void; // optional click handler
  type?: "button" | "submit" | "reset";
};

const YellowButton: React.FC<YellowButtonProps> = ({
  children,
  href,
  className = "",
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "px-6 py-3 bg-golden border border-golden hover:bg-siteBlack  text-siteBlack hover:text-golden font-semibold rounded-xl transition duration-200 text-lg min-w-[192px] text-center cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default YellowButton;
