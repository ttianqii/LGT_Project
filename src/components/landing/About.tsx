"use client";


export default function About() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#eaf6ff] via-[#f8fafd] to-[#fffbe6] overflow-hidden py-20 px-2 md:px-0">
      {/* Modern floating shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-60px] left-[-60px] w-72 h-72 rounded-full bg-[#eaf6ff] opacity-60 blur-2xl animate-pulse"></div>
        <div className="absolute top-24 right-[-40px] w-40 h-40 rounded-full bg-[#ffe066] opacity-40 blur-xl animate-bounce"></div>
        <div className="absolute bottom-[-40px] left-1/4 w-44 h-44 rounded-full bg-[#b6e0fe] opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-56 h-56 rounded-full bg-[#fffbe6] opacity-50 blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-[#000080] opacity-10 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full bg-[#eaf6ff] opacity-60 blur-2xl"></div>
        <div className="absolute top-24 right-[-60px] w-48 h-48 rounded-full bg-[#ffe066] opacity-40 blur-xl"></div>
        <div className="absolute bottom-[-60px] left-1/4 w-56 h-56 rounded-full bg-[#b6e0fe] opacity-30 blur-2xl"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 rounded-full bg-[#fffbe6] opacity-50 blur-2xl"></div>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="w-full flex flex-col items-center gap-3">
          <div className="inline-block bg-white/80 rounded-full px-8 py-2 shadow-md border border-[#eaf6ff] mb-2 animate-fade-in">
            <h2 className="text-[#000080] text-3xl md:text-5xl font-extrabold tracking-tight text-center uppercase drop-shadow-lg">About Us</h2>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-2 text-gray-900 animate-fade-in">More than 35 Years of Trusted Logistics</h3>
          <p className="text-gray-700 text-lg md:text-xl mb-4 text-center max-w-2xl mx-auto animate-fade-in">
            Union Freight Forwarder has been a key player in Thailand’s logistics industry since 1987. Staring from customs brokerage, we have evolved into a total logistics platform offering seamless solutions by air, sea, road and rail.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {/* Card 1 */}
          <div className="bg-white/90 border border-[#eaf6ff] rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300 group relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#eaf6ff] opacity-40 blur-xl group-hover:scale-110 transition-transform"></div>
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect x="6" y="6" width="48" height="48" rx="12" stroke="#000080" strokeWidth="3" fill="none"/><text x="50%" y="60%" textAnchor="middle" fill="#000080" fontSize="22" fontWeight="bold" dominantBaseline="middle">1<tspan fontSize='12' fontWeight='bold'>ST</tspan></text></svg>
            </div>
            <div className="font-bold text-lg text-[#000080] mb-1">Since 1987</div>
            <div className="text-sm text-gray-700 text-center">Over 34 years in logistics<br/>evolving from custom to 3PL</div>
          </div>
          {/* Card 2 */}
          <div className="bg-white/90 border border-[#eaf6ff] rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300 group relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#ffe066] opacity-30 blur-xl group-hover:scale-110 transition-transform"></div>
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect x="6" y="6" width="48" height="48" rx="12" stroke="#000080" strokeWidth="3" fill="none"/><text x="50%" y="60%" textAnchor="middle" fill="#000080" fontSize="22" fontWeight="bold" dominantBaseline="middle">1<tspan fontSize='12' fontWeight='bold'>ST</tspan></text></svg>
            </div>
            <div className="font-bold text-lg text-[#000080] mb-1">Licensed</div>
            <div className="text-sm text-gray-700 text-center">Accredited Custom Broker<br/>with end-to-end expertise</div>
          </div>
          {/* Card 3 */}
          <div className="bg-white/90 border border-[#eaf6ff] rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300 group relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#b6e0fe] opacity-30 blur-xl group-hover:scale-110 transition-transform"></div>
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect x="12" y="12" width="36" height="36" rx="9" stroke="#000080" strokeWidth="3" fill="none"/><circle cx="30" cy="30" r="12" stroke="#000080" strokeWidth="2" fill="none"/><text x="50%" y="56%" textAnchor="middle" fill="#000080" fontSize="16" fontWeight="bold" dominantBaseline="middle">ASEAN</text></svg>
            </div>
            <div className="font-bold text-lg text-[#000080] mb-1">ASEAN Cross-Border</div>
            <div className="text-sm text-gray-700 text-center">Seamless freight across<br/>Thailand, Vietnam, Malaysia, Singapore, etc.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
