"use client";

import { Award, Shield, Globe } from "lucide-react";


export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-white py-20 px-4 overflow-hidden">

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-6">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-20"></div>
            <div className="relative bg-card border border-border rounded-full px-12 py-4 shadow-logistics">
              <h2 className="text-primary text-4xl md:text-6xl font-black tracking-tight text-center">
                ABOUT US
              </h2>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-center text-gray-900 leading-tight">
            More than <span className="text-primary">35 Years</span> of Trusted Logistics
          </h3>
          
          <p className="text-gray-700 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Union Freight Forwarder has been a key player in Thailand's logistics industry since 1987. 
            Starting from customs brokerage, we have evolved into a total logistics platform offering 
            seamless solutions by air, sea, road and rail.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Since 1987 */}
          <div className="group relative  border border-gray-400 rounded-3xl p-10 shadow-card hover:shadow-logistics transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #000080 0%, #1a237e 100%)'}}>
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-3">Since 1987</h4>
              <p className="text-gray-700 leading-relaxed">
                Over 35 years in logistics<br/>
                evolving from customs to 3PL
              </p>
              
              <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 2 - Licensed */}
          <div className="group relative border border-gray-400 rounded-3xl p-10 shadow-card hover:shadow-logistics transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #000080 0%, #1a237e 100%)'}}>
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-3">Licensed</h4>
              <p className="text-gray-700 leading-relaxed">
                Accredited Customs Broker<br/>
                with end-to-end expertise
              </p>
              
              <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-5/6 h-full bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 3 - ASEAN */}
          <div className="group relative border border-gray-400 rounded-3xl p-10 shadow-card hover:shadow-logistics transition-all duration-500 hover:-translate-y-2">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #000080 0%, #1a237e 100%)'}}>
                <Globe className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-3">ASEAN Cross-Border</h4>
              <p className="text-gray-700 leading-relaxed">
                Seamless freight across<br/>
                Thailand, Vietnam, Malaysia, Singapore, etc.
              </p>
              
              <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="w-32 h-1 bg-gradient-primary rounded-full opacity-60"></div>
      </div>
    </section>
  );
}
