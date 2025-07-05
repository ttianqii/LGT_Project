"use client";
import Image from "next/image";
import { Home, Newspaper, Settings, Phone, Menu } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const languages = [
  { code: "en", label: "English", flag: "/flags/eng.png" },
  { code: "th", label: "ไทย", flag: "/flags/thai.png" },
  { code: "zh", label: "中文", flag: "/flags/chinese.png" },
];

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = languages.find(l => l.code === locale) || languages[0];

  // No need for handleChangeLang, use <Link> for locale switching

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className="navbar min-h-[36px] py-0 bg-white text-[#000080] shadow-2xl rounded-xl border border-gray-200 backdrop-blur-xl">
        <div className="navbar-start flex items-center gap-2">
          {/* Logo with blue badge */}
          <div className="flex items-center ml-2 h-10">
            <div className="relative h-9 w-[110px] flex items-center rounded-xl p-1 ">
              <Image
                src="/img/logo1.png"
                alt="Company Logo"
                width={110}
                height={36}
                className="object-contain relative z-10 transition-all duration-300 hover:scale-105 h-7 w-[98px]"
              />
            </div>
          </div>
          {/* Nav links (mobile dropdown) */}
          <div className="dropdown lg:hidden ml-2">
            <div
              tabIndex={0}
              role="button"
            className="btn btn-ghost text-[#000080] hover:bg-blue-100 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Menu className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-[#000080] rounded-xl z-[1] mt-3 w-60 p-3 shadow-2xl border border-gray-200 backdrop-blur-xl"
            >
              <li>
                <a className="hover:bg-blue-100 rounded-xl py-3 px-4 transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-3 text-[#000080]">
                  {t('home')}
                </a>
              </li>
              <li>
                <a className="hover:bg-blue-100 rounded-xl py-3 px-4 transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-3">
                  {t('news')}
                </a>
              </li>
              <li>
                <a className="hover:bg-blue-100 rounded-xl py-3 px-4 transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-3">
                  {t('services')}
                </a>
              </li>
              <li>
                <a className="hover:bg-blue-100 rounded-xl py-3 px-4 transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 text-[#000080] font-semibold">
            <li>
              <a className="hover:bg-blue-100 rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-[#000080]">
                {t('home')}
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100 rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                {t('news')}
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100 rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                {t('services')}
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-2 flex items-center gap-3">
          {/* Language Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 px-2 py-1 bg-white text-gray-800 rounded-xl hover:bg-blue-100 cursor-pointer min-w-[48px] h-8"
            >
              <Image
                src={currentLang.flag}
                alt={currentLang.label}
                width={20}
                height={15}
                className="rounded-sm object-cover"
              />
              <svg
                className="w-3 h-3 ml-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 mt-2 w-36 p-0"
            >
              {languages.map((l, idx) => {
                // Build new path with locale replaced
                const segments = pathname.split('/');
                if (languages.some(lang => lang.code === segments[1])) {
                  segments[1] = l.code;
                } else {
                  segments.splice(1, 0, l.code);
                }
                const newPath = segments.join('/') || '/';
                // Add rounded classes to first and last item for full dropdown effect
                const rounded = idx === 0
                  ? 'rounded-t-xl'
                  : idx === languages.length - 1
                  ? 'rounded-b-xl'
                  : '';
                return (
                  <li key={l.code} className="overflow-hidden">
                    <Link
                      href={newPath}
                      locale={l.code}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium w-full text-left transition-all duration-200 rounded-xl ${locale === l.code ? 'bg-gray-100' : ''} hover:bg-gray-100 focus:bg-gray-100`}
                    >
                      <Image
                        src={l.flag}
                        alt={l.label}
                        width={18}
                        height={13}
                        className="rounded-sm object-cover"
                      />
                      <span className="ml-2">{l.label}</span>
                      {locale === l.code && (
                        <svg className="w-3 h-3 ml-auto text-blue-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="btn bg-[#000080] text-white hover:bg-blue-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold text-[15px] px-5 py-2 border-0 relative overflow-hidden group min-h-0 h-10">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {t('contact')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
