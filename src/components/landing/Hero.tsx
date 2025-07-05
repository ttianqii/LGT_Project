"use client";
import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations('Home');
  console.log('Hero locale:', locale, 'welcome:', t('welcome'));
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white p-0 overflow-hidden">
      <div className="relative w-[100vw] h-[100vh] max-w-[100vw] mx-auto p-0 flex flex-col items-center justify-center">
        {/* Image with rounded corners, almost full screen, very thin border */}
        <div
          className="w-full h-full bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          style={{ backgroundImage: `url('/img/background1.jpg')` }}
        >
          <div className="w-full h-full bg-black/20 rounded-xl"></div>
          {/* Hero Content */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 max-w-2xl">
              {t('welcome')}
            </h1>
            <p className="text-base md:text-xl text-white mb-6 max-w-lg drop-shadow">
              {t('desc')}
            </p>
            <div className="flex gap-3">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105 text-sm md:text-base">
                {t('contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
