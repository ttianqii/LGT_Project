"use client";


import { Award, Shield, Globe } from "lucide-react";
import { useTranslations } from "next-intl";


export default function About() {
  const t = useTranslations("About");
  return (
    <section className="relative w-full min-h-screen bg-white py-20 px-4 overflow-hidden">

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-6">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-20"></div>
            <div className="relative bg-card border border-border rounded-full px-12 py-4 shadow-logistics">
              <h2 className="text-primary text-4xl md:text-6xl font-black tracking-tight text-center">
                {t("about_us")}
              </h2>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-center text-gray-900 leading-tight">
            {t("headline")}
          </h3>
          
          <p className="text-gray-700 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Since 1987 */}
          <div className="group relative  border-2 border-gray-200  rounded-3xl p-10 shadow-card hover:shadow-logistics transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #000080 0%, #1a237e 100%)'}}>
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-3">{t("card1_title")}</h4>
              <p className="text-gray-700 leading-relaxed">
                {t("card1_desc1")}<br/>
                {t("card1_desc2")}
              </p>
              
              <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 2 - Licensed */}
          <div className="group relative border-2 border-gray-200 rounded-3xl p-10 shadow-card hover:shadow-logistics transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #000080 0%, #1a237e 100%)'}}>
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-3">{t("card2_title")}</h4>
              <p className="text-gray-700 leading-relaxed">
                {t("card2_desc1")}<br/>
                {t("card2_desc2")}
              </p>
              
              <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-5/6 h-full bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 3 - ASEAN */}
          <div className="group relative border-2 border-gray-200 rounded-3xl p-10 shadow-card hover:shadow-logistics transition-all duration-500 hover:-translate-y-2">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #000080 0%, #1a237e 100%)'}}>
                <Globe className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-3">{t("card3_title")}</h4>
              <p className="text-gray-700 leading-relaxed">
                {t("card3_desc1")}<br/>
                {t("card3_desc2")}
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
