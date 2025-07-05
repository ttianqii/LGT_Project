import Image from "next/image";
import { Home, Newspaper, Settings, Phone, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className="navbar min-h-[36px] py-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl rounded-3xl border border-blue-400/30 backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105">
              <Menu className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl z-[1] mt-3 w-60 p-3 shadow-2xl text-white border border-blue-400/30 backdrop-blur-sm">
              <li>
                <a className="hover:bg-white/20 rounded-2xl py-3 px-4 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-3">
                  <Home className="h-5 w-5" />
                  Home
                </a>
              </li>
              <li>
                <a className="hover:bg-white/20 rounded-2xl py-3 px-4 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-3">
                  <Newspaper className="h-5 w-5" />
                  News
                </a>
              </li>
              <li>
                <a className="hover:bg-white/20 rounded-2xl py-3 px-4 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-3">
                  <Settings className="h-5 w-5" />
                  Services
                </a>
              </li>
              <li>
                <a className="hover:bg-white/20 rounded-2xl py-3 px-4 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <div className="flex items-center ml-2 h-10">
            <div className="relative h-9 w-[110px] flex items-center">
              <Image
                src="/img/logo2.png"
                alt="Company Logo"
                width={110}
                height={36}
                className="rounded-xl object-contain relative z-10 transition-all duration-300 hover:scale-105 h-9 w-[110px]"
              />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 text-white">
            <li>
              <a className="hover:bg-white/20 rounded-2xl px-4 py-2 transition-all duration-300 hover:scale-105 font-medium text-[15px] relative group flex items-center gap-2">
                <Home className="h-5 w-5" />
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
              </a>
            </li>
            <li>
              <a className="hover:bg-white/20 rounded-2xl px-4 py-2 transition-all duration-300 hover:scale-105 font-medium text-[15px] relative group flex items-center gap-2">
                <Newspaper className="h-5 w-5" />
                News
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
              </a>
            </li>
            <li>
              <a className="hover:bg-white/20 rounded-2xl px-4 py-2 transition-all duration-300 hover:scale-105 font-medium text-[15px] relative group flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Services
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-2">
          <button className="btn bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold text-[15px] px-5 py-2 border-0 relative overflow-hidden group min-h-0 h-10">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Us
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
