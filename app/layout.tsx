import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AOSInit from "@/components/shared/AOSInit";

const jakarta = Plus_Jakarta_Sans({
  subsets:['latin'],
  variable: "--font-jakarta",
})


export const metadata: Metadata = {
  title: "Harmonix Digital",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${jakarta.variable}`}>
      <body
        className={`antialiased font-jakarta `}
      >
        {children}


        <AOSInit />

      </body>
    </html>
  );
}
