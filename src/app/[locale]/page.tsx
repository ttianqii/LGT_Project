import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Blue Navbar with Logo */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-800">Welcome!</h1>
            <p className="py-6 text-gray-600">
              สวัสกดีครับ! Discover our new features and components designed to enhance your web experience.
            </p>
            <button className="btn bg-blue-600 text-white hover:bg-blue-700 border-none">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Features & Components
        </h2>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="card-title text-blue-800">Fast Performance</h2>
              {/* ...existing code... */}
            </div>
          </div>
          {/* ...existing code... */}
        </div>
      </div>
    </div>
  );
}
