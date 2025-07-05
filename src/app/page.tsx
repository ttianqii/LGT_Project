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
              <p className="text-gray-600">Lightning-fast loading with optimized code and modern technologies.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-blue">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="card-title text-blue-800">User Friendly</h2>
              <p className="text-gray-600">Intuitive design that puts user experience first in every interaction.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-blue">Discover</button>
              </div>
            </div>
          </div>

          <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="card-title text-blue-800">Reliable</h2>
              <p className="text-gray-600">Built with robust architecture ensuring 99.9% uptime and reliability.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-blue">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        {/* Status Alert */}
        <div className="alert alert-info bg-blue-50 border-blue-200 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-blue-600 shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-blue-800">Blue navbar with your custom logo is now active!</span>
        </div>
      </div>
    </div>
  );
}
