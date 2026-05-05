"use client";

import { Search, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 font-sans">

      {/* ================= TOP NAV ================= */}
      <div className="bg-[#0D2340] h-[64px] flex items-center">
       <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between px-6">

  {/* LEFT → ONLY LOGO */}
  {/* <Image
    src="/logoo.png"
    width={170}
    height={40}
    alt="logo"
    className="object-contain"
  /> */}

  <p className="text-3xl font-bold text-white">Inquiry <span className="text-[#ec771c]">Bazaar</span> </p>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-8">

    {/* MENU LINKS (NOW CORRECT POSITION) */}
    <nav className="hidden md:flex items-center gap-8 text-[18px] text-white">
      <Link href="#" className="hover:opacity-80">Home</Link>
      <Link href="#" className="hover:opacity-80">Request A Quote</Link>
      <Link href="#" className="hover:opacity-80">Contact Us</Link>
      <Link href="#" className="hover:opacity-80">All Categories</Link>
    </nav>

    {/* REGISTER BUTTON */}
    <button className="bg-[#ec771c] hover:bg-[#e85d12] text-white text-[16px] font-medium px-6 h-[40px] rounded-md">
      Register Free →
    </button>

  </div>
</div>
      </div>

      {/* ================= SEARCH STRIP ================= */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 py-[10px] flex items-center gap-4">

          {/* CITY SEARCH */}
          <div className="flex items-center bg-[#FAFAF8] border-2 border-[#ec771c] rounded-md overflow-hidden h-[50px]">
            <input
              placeholder="📍 Search City..."
              className="px-3 text-[14px] w-[200px] outline-none"
            />
            <button className="bg-[#ec771c] w-[42px] h-[50px] flex items-center justify-center">
              <Search size={16} color="#fff" />
            </button>
          </div>

        <div className="h-[45px] w-px bg-gray-400"></div>

          {/* MAIN SEARCH */}
          <div className="flex items-center flex-1 max-w-[520px] h-[42px]">
            <input
              placeholder="Search for products, supplier"
              className="w-full h-[50px]  border-2 border-[#ec771c] px-4 text-[14px] rounded-l-md outline-none bg-[#FAFAF8]"
            />
            <button className="bg-[#ec771c]  h-[50px]  px-6 flex items-center gap-2 text-white text-[14px] font-medium rounded-r-md">
              <Search size={16} />
              Search
            </button>
          </div>

          {/* WHY TRUST US */}
          <button className="py-2 px-5 border-2 border-[#FF6A1A] bg-[#fcf3ef] text-[#ec771c] font-semibold rounded-md text-[19px] flex items-center ">
            🛡 Why Trust Us
          </button>

          {/* ACCOUNT */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="h-[45px] px-4 border-2 border-gray-300 bg-[#FAFAF8] rounded-md text-[16px] flex items-center gap-2"
            >
              <User size={20} />
              Account
              <ChevronDown size={14} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-[180px] bg-white border rounded-md shadow-md overflow-hidden">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Login as Supplier
                </button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Login as Buyer
                </button>
              </div>
            )}
          </div>

          {/* WRITE REVIEW */}
          <button className="h-[42px] px-5 bg-[#0D2340] text-white rounded-md text-[14px] flex items-center gap-2">
            ✍️ Write a Review
          </button>

          {/* HELP CENTER */}
          <button className="h-[42px] px-5 bg-[#ec771c] text-white rounded-md text-[14px] flex items-center gap-2">
            💬 Help Center
          </button>

        </div>
      </div>
    </header>
  );
}