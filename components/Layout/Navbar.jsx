"use client";

import { Search, User, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
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
        <div className=" mx-auto w-full flex items-center justify-between px-4 md:px-12">

          <p className="text-2xl md:text-3xl font-bold text-white">
            Inquiry <span className="text-[#ec771c]">Bazaar</span>
          </p>

          <div className="flex items-center gap-3 md:gap-8">

            {/* DESKTOP NAV (UNCHANGED) */}
            <nav className="hidden md:flex items-center gap-8 text-[18px] text-white">
              <Link href="#">Home</Link>
              <Link href="#">Request A Quote</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">All Categories</Link>
            </nav>

            {/* REGISTER BUTTON (VISIBLE ALWAYS) */}
            <button className="bg-[#ec771c] hover:bg-[#e85d12] text-white text-[14px] md:text-[16px] px-4 md:px-6 h-[36px] md:h-[40px] rounded-md whitespace-nowrap">
              Register Free →
            </button>

            {/* HAMBURGER (MOBILE ONLY) */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white"
            >
              {mobileMenu ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </div>

      {/* ================= MOBILE PANEL ================= */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-4 shadow-lg">


{/* MOBILE NAV LINKS */}
<div className="space-y-2 text-[#0D2340] font-medium">
  <Link href="#" className="block py-2 border-b">Home</Link>
  <Link href="#" className="block py-2 border-b">Request A Quote</Link>
  <Link href="#" className="block py-2 border-b">Contact Us</Link>
  <Link href="#" className="block py-2">All Categories</Link>
</div>


          {/* CITY SEARCH */}
          <div className="flex items-center bg-[#FAFAF8] border-2 border-[#ec771c] rounded-md overflow-hidden h-[50px]">
            <input
              placeholder="📍 Search City..."
              className="px-3 text-[14px] w-full outline-none bg-transparent"
            />
            <button className="bg-[#ec771c] w-[50px] h-[50px] flex items-center justify-center">
              <Search size={16} color="#fff" />
            </button>
          </div>

          {/* MAIN SEARCH */}
          <div className="flex items-center">
            <input
              placeholder="Search for products, supplier"
              className="w-full h-[50px] border-2 border-[#ec771c] px-4 text-[14px] rounded-l-md outline-none bg-[#FAFAF8]"
            />
            <button className="bg-[#ec771c] h-[50px] px-5 flex items-center gap-2 text-white text-[14px] font-medium rounded-r-md">
              <Search size={16} />
              Search
            </button>
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-3">

            <button className="py-3 border-2 border-[#FF6A1A] bg-[#fcf3ef] text-[#ec771c] font-semibold rounded-md text-[14px]">
              🛡 Why Trust Us
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="w-full h-[48px] border-2 border-gray-300 bg-[#FAFAF8] rounded-md text-[14px] flex items-center justify-center gap-2"
              >
                <User size={18} />
                Account
                <ChevronDown size={14} />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-full bg-white border rounded-md shadow-md overflow-hidden z-50">
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Login as Supplier
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Login as Buyer
                  </button>
                </div>
              )}
            </div>

            <button className="h-[48px] bg-[#0D2340] text-white rounded-md text-[14px]">
              ✍️ Write a Review
            </button>

            <button className="h-[48px] bg-[#ec771c] text-white rounded-md text-[14px]">
              💬 Help Center
            </button>

          </div>
        </div>
      )}

      {/* ================= DESKTOP SEARCH STRIP (UNCHANGED) ================= */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="w-full mx-auto px-4 md:px-12 py-[10px] flex items-center gap-4">

          <div className="flex items-center bg-[#FAFAF8] border-2 border-[#ec771c] rounded-md overflow-hidden h-[50px]">
            <input placeholder="📍 Search City..." className="px-3 text-[14px] w-[200px] outline-none" />
            <button className="bg-[#ec771c] w-[42px] h-[50px] flex items-center justify-center">
              <Search size={16} color="#fff" />
            </button>
          </div>

          <div className="h-[45px] w-px bg-gray-400"></div>

          <div className="flex items-center flex-1 max-w-[722px] h-[42px]">
            <input
              placeholder="Search for products, supplier"
              className="w-full h-[50px] border-2 border-[#ec771c] px-4 text-[14px] rounded-l-md outline-none bg-[#FAFAF8]"
            />
            <button className="bg-[#ec771c] h-[50px] px-6 flex items-center gap-2 text-white text-[14px] font-medium rounded-r-md">
              <Search size={16} />
              Search
            </button>
          </div>

          <button className="py-2 px-5 border-2 border-[#FF6A1A] bg-[#fcf3ef] text-[#ec771c] font-semibold rounded-md text-[15px] flex items-center ">
            🛡 Why Trust Us
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="h-[42px] px-4 border-2 border-gray-300 bg-[#FAFAF8] rounded-md text-[16px] flex items-center gap-2"
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

          <button className="h-[42px] px-5 bg-[#0D2340] text-white rounded-md text-[14px] flex items-center gap-2">
            ✍️ Write a Review
          </button>

          <button className="h-[42px] px-5 bg-[#ec771c] text-white rounded-md text-[14px] flex items-center gap-2">
            💬 Help Center
          </button>

        </div>
      </div>

    </header>
  );
}