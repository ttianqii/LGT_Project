import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-blue-600 text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
            <li><a className="hover:bg-blue-700">Home</a></li>
            <li><a className="hover:bg-blue-700">About</a></li>
            <li><a className="hover:bg-blue-700">Services</a></li>
            <li><a className="hover:bg-blue-700">Portfolio</a></li>
            <li><a className="hover:bg-blue-700">Contact</a></li>
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/img/logo2.png"
            alt="Company Logo"
            width={140}
            height={100}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li><a className="hover:bg-blue-700 rounded-lg">Home</a></li>
          <li><a className="hover:bg-blue-700 rounded-lg">About</a></li>
          <li><a className="hover:bg-blue-700 rounded-lg">Services</a></li>
          <li><a className="hover:bg-blue-700 rounded-lg">Portfolio</a></li>
          <li><a className="hover:bg-blue-700 rounded-lg">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-white mr-2 hover:bg-white hover:text-blue-600">
          Sign In
        </button>
        <button className="btn bg-white text-blue-600 hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </div>
  );
}
