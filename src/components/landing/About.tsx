"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full flex items-center justify-center bg-white py-16 px-4 md:px-0">
      <div className="relative max-w-5xl w-full bg-white/90 rounded-3xl shadow-2xl border-4 border-white flex flex-col md:flex-row overflow-hidden">
        {/* Left: Image or Icon */}
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-8 md:p-12">
          <Image
            src="/img/logo1.png"
            alt="Union Freight Forwarder Logo"
            width={180}
            height={180}
            className="object-contain drop-shadow-xl rounded-2xl"
          />
        </div>
        {/* Right: Content */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-12">
          <span className="text-blue-900 font-bold text-lg md:text-xl mb-2 flex items-center gap-2">
            <span className="text-3xl md:text-4xl mr-2">🚚</span> More than 35 Years of Trusted Logistics
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] mb-4 leading-tight">Union Freight Forwarder</h2>
          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            Union Freight Forwarder has been a key player in Thailand’s logistics industry since 1987. Starting from customs brokerage, we have evolved into a total logistics platform offering seamless solutions by air, sea, road, and rail.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            We are licensed AEO Customs Brokers and proud members of TAFA and TACBA. Our experienced team and in-house systems ensure timely delivery, secure handling, and smooth customs clearance across ASEAN.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 mb-4">
            <span className="block text-[#000080] font-semibold mb-1">👉 Tailor-made logistics for:</span>
            <span className="block text-gray-800">Apparel, electronics, chemicals, perishables, exhibitions, and more.</span>
          </div>
          <a
            href="#contact"
            className="inline-block mt-2 px-6 py-2 bg-[#000080] text-white rounded-full font-semibold shadow-lg hover:bg-blue-800 transition-all text-base md:text-lg"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
