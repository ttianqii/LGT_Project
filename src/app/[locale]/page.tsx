
// import { NextIntlClientProvider, useTranslations } from 'next-intl';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";


export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Blue Navbar with Logo */}
      <Navbar />
      {/* Hero Section as Component */}
      <Hero />

      <About />
    </div>
  );
}
