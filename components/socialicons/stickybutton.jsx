"use client";

import { useState } from "react";

export default function StickyOfferButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
<div className="fixed bottom-5 right-0 z-50 group ">

  {/* 🌈 PULSE GLOW RING */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-blue-900 opacity-70 blur-md animate-ping" />

  {/* MAIN BUTTON */}
  <div
    onClick={() => setShowPopup(true)}
    style={{ backgroundImage: "url(/stickybg1.png)" }}
    className="relative w-28 h-28 bg-center bg-cover rounded-full shadow-xl flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 animate-popIn"
  >
    {/* 🔴 NOTIFICATION BADGE */}
    <div className="absolute top-4 right-6 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-bounce">
      1
    </div>

    {/* DARK OVERLAY */}
   

    {/* TEXT */}
    <p className="relative text-white text-center text-md font-semibold leading-tight px-3 animate-blink">
      Register For Free
    </p>
  </div>

  {/* 💬 TOOLTIP */}
  <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
    <div className="bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
      Click to Register
    </div>
    <div className="w-2 h-2 bg-black rotate-45 mx-auto -mt-1" />
  </div>

</div>
      {/* OPTIONAL POPUP */}
   {showPopup && (
  <div
    onClick={() => setShowPopup(false)}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-[520px] p-8 rounded-3xl bg-white backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.25)] animate-fadeIn"
    >
      {/* CLOSE */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      {/* HEADER */}
      <h2 className="text-2xl font-bold text-[#0f172a] text-center">
        Get Yourself Registered With Us
      </h2>
      <p className="text-gray-600 text-center mt-2 mb-6">
        Join our platform and grow your business with verified leads
      </p>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-5">
        
        {/* SUPPLIER */}
        <button
          className="group relative p-5 rounded-2xl bg-[#24457A] text-white text-left transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer"
        >
          <div className="text-3xl mb-3">🏭</div>
          <h3 className="font-semibold text-lg">Register as Supplier</h3>
          <p className="text-sm  mt-1">
            List your products & reach more buyers
          </p>

          {/* glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
        </button>

        {/* BUYER */}
        <button
          className="group relative p-5 rounded-2xl bg-[#F48335] text-white text-left transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer"
        >
          <div className="text-3xl mb-3">🛒</div>
          <h3 className="font-semibold text-lg">Register as Buyer</h3>
          <p className="text-sm  mt-1">
            Find trusted suppliers instantly
          </p>

          <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
        </button>
      </div>

      {/* FOOTER */}
      <div className="mt-6 text-center">
        <button
          onClick={() => setShowPopup(false)}
          className="text-gray-500 hover:text-black text-sm underline"
        >
          Maybe later
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
}