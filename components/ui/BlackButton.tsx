import React from "react";
import Link from "next/link";

type BlackButtonProps = {
  children: React.ReactNode;
  href?: string; // if provided, renders as <Link>
  className?: string; // extra classes
  onClick?: () => void; // optional click handler
  type?: "button" | "submit" | "reset";
};

const BlackButton: React.FC<BlackButtonProps> = ({
  children,
  href,
  className = "",
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "px-6 py-3 bg-siteBlack border border-golden hover:bg-golden  text-golden hover:text-siteBlack font-semibold rounded-xl transition duration-200 text-lg min-w-[192px] text-center cursor-pointer";

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

export default BlackButton;
