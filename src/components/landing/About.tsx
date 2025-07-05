"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full flex items-center justify-center bg-gradient-to-br from-[#eaf6ff] via-[#f8fafd] to-[#fffbe6] py-16 px-2 md:px-0">
      <div className="relative max-w-6xl w-full rounded-[2.5rem] shadow-xl border border-[#f2f2f2] flex flex-col md:flex-row overflow-hidden transition-all duration-300">
        {/* Left: Illustration */}
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#f8fafd] to-[#eaf6ff] p-8 md:p-12">
          <Image
            src="/img/truck-hero.png"
            alt="Logistics Truck"
            width={320}
            height={220}
            className="object-contain drop-shadow-2xl rounded-2xl border-2 border-[#eaf6ff] bg-white"
          />
        </div>
        {/* Right: Content */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-12 bg-white/95">
          <span className="text-[#000080] font-bold text-lg md:text-xl mb-2 flex items-center gap-2">
            <span className="text-3xl md:text-4xl mr-2">🚚</span> More than 35 Years of Trusted Logistics
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000080] mb-4 leading-tight flex items-center gap-2 drop-shadow-sm">
            Union Freight Forwarder
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed font-medium">
            Union Freight Forwarder has been a key player in Thailand’s logistics industry since 1987. Starting from customs brokerage, we have evolved into a total logistics platform offering seamless solutions by air, sea, road, and rail.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed font-medium">
            We are licensed AEO Customs Brokers and proud members of TAFA and TACBA. Our experienced team and in-house systems ensure timely delivery, secure handling, and smooth customs clearance across ASEAN.
          </p>
          <div className="bg-white rounded-2xl p-4 mb-4 border border-[#eaf6ff] flex items-center gap-3 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#ffe066] to-[#fffbe6] mr-3">
              <Image src="/img/truck-hero.png" alt="truck" width={36} height={24} className="object-contain" />
            </div>
            <div>
              <span className="block text-[#000080] font-semibold mb-1">Tailor-made logistics for:</span>
              <span className="block text-gray-800">Apparel, electronics, chemicals, perishables, exhibitions, and more.</span>
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <a
              href="#contact"
              className="px-6 py-2 bg-[#000080] text-white rounded-full font-semibold shadow-md hover:bg-blue-800 transition-all text-base md:text-lg border-2 border-[#000080] hover:scale-105"
            >
              Learn More →
            </a>
            <a
              href="#services"
              className="px-6 py-2 bg-white text-[#000080] rounded-full font-semibold shadow-md border-2 border-[#000080] hover:bg-blue-50 transition-all text-base md:text-lg hover:scale-105"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      {/* Floating decorative shapes */}
      <div className="hidden md:block absolute top-8 left-8 z-10">
        <div className="w-12 h-12 rounded-full bg-[#ffe066] opacity-60 blur-[2px] animate-bounce"></div>
      </div>
      <div className="hidden md:block absolute top-20 right-16 z-10">
        <div className="w-8 h-8 rounded-full bg-[#eaf6ff] opacity-70 blur-[1px] animate-pulse"></div>
      </div>
      <div className="hidden md:block absolute bottom-8 right-8 z-10">
        <div className="w-16 h-16 rounded-full bg-[#f8fafd] opacity-60 blur-[2px] animate-bounce"></div>
      </div>
    </section>
  );
}
