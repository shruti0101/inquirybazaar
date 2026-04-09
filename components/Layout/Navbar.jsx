"use client";

import { Phone, Mail, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <header className="w-full font-sans">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#1E3A56] text-white text-[13px]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-2">

          {/* LEFT */}
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 whitespace-nowrap text-lg animate-pulse">
              <Phone size={20} />
              Have a question? Call us now at +91 7303486777
            </span>

            <span className="flex items-center gap-2 whitespace-nowrap text-lg">
              <Mail size={20} />
              care@inquirybazaar.com
            </span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

          

            {/* Orange pill */}
            <Link href="/whytrustus" className="bg-[#F45A06] capitalize px-4 py-[6px] cursor-pointer text-[16px] rounded-sm whitespace-nowrap">
          why trust us
            </Link>

            {/* GMB REVIEW LINK */}
            <a
              href="https://g.page/r/CX8DUuqTRZshEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:underline whitespace-nowrap"
            >
              Write Review
            </a>

            <span className="opacity-90 whitespace-nowrap">
              Chat
            </span>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
   <div className="bg-white border-b">
  <div className="w-full mx-auto flex items-center px-6  gap-6">

    {/* LEFT */}
    <div className="flex items-center gap-6 min-w-fit">

      {/* Categories */}
      <div className="flex flex-col items-center text-[17px] text-gray-600 cursor-pointer">
        <div className="grid grid-cols-2 gap-[3px] mb-[2px]">
          <span className="w-[12px] h-[12px] bg-gray-700"></span>
          <span className="w-[12px] h-[12px] bg-gray-700"></span>
          <span className="w-[12px] h-[12px] bg-gray-700"></span>
          <span className="w-[12px] h-[12px] bg-orange-500"></span>
        </div>
        Categories
      </div>

      {/* LOGO (ENHANCED) */}
      <Link href="/" className="flex items-center ">
        <Image
          width={150}
          height={60}
          src="/logoo.png"
          alt="Logo"
          loading="eager"
          className="object-contain "
        />
      </Link>

      {/* Badge */}
      <div className="hidden lg:flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-800 to-orange-500 text-white text-[12px] font-semibold whitespace-nowrap">
     DAILY ESSENTIALS SPECIAL DEALS
      </div>
    </div>

    {/* SEARCH (SHORT + CENTERED) */}
    <div className="flex justify-center flex-1">
      <div className="flex w-full max-w-[420px]">
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full border border-gray-300 px-4 py-[9px] rounded-l-md text-[14px] outline-none"
        />
        <button className="bg-[#F45A06] px-4 flex items-center justify-center rounded-r-md">
          <Search size={18} color="white" />
        </button>
      </div>
    </div>

    {/* RIGHT */}
  <div className="flex items-center gap-4 min-w-fit justify-end">

  <div className="hidden lg:flex items-center gap-4 text-[14px] text-gray-700 whitespace-nowrap">

    {/* Request Quote */}
    <div className="bg-blue-900 flex items-center gap-2 px-3 py-3 rounded-md  cursor-pointer hover-bg-blue-800 text-white transition">
      <span className="text-white">📄</span>
      <span className="font-medium">Request for Quotes</span>
    </div>

    {/* Divider */}
    <div className="h-5 w-[1px] bg-gray-300"></div>

    {/* Help Center Button */}
    <button className="bg-[#F45A06] hover:bg-[#d94e05] text-white px-5 py-3 rounded-md font-medium shadow-sm transition">
      Help Center
    </button>

  </div>

</div>

  </div>
</div>

    </header>
  );    
}