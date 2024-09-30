import localFont from "next/font/local";
import "./globals.css";

import Footer from "./components/Footer";
import Railway from "./components/Railway";

import { Suspense } from 'react'
import Image from "next/image.js";

import logo from "./assets/BADNEWS.know.svg";

const Lexend = localFont({
  src: "./fonts/Lexend/Lexend-VariableFont_wght.ttf",
  variable: "--font-lexend",
  weight: "100 900",
});

export const metadata = {
  title: "Bad news",
  description: "Application pédagogique dans le cadre de l'app router Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${Lexend.variable} antialiased`}>
      <header className="flex flex-row items-center justify-end px-10">
        <Image
            src={logo}
            alt="logo-text"
            width={350}
            height={100}
            priority
          />
      
      </header>
      <Suspense fallback={null}>
        <Railway/>
        </Suspense>
   
        {children}
   
       

        <Footer/>

      </body>
      
    </html>
  );
}
