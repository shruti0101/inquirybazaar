"use client";

import { Phone, Mail, Search, User, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {  ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);






  return (
<motion.header
  initial={false}
animate={{
  y: 0,
  opacity: 1,
}}
transition={{
  duration: 0.25,
  ease: "easeOut",
}}

  className="w-full fixed top-0 left-0 z-50 font-sans bg-white shadow-md"
>

    
      <div className="bg-[#1E3A56] text-white text-[13px] hidden md:block">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-2">

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm animate-pulse">
              <Phone size={16} />
         Have a question? Call us now at  +91 7303486777
            </span>

            <span className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              care@inquirybazaar.com
            </span>
          </div>

          <a
            href="https://g.page/r/CX8DUuqTRZshEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            Write Review
          </a>
        </div>
      </div>

    
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">


<div className="flex items-center gap-6">

            {/* LOGO */}
            <Link href="/">
              <Image
                width={130}
                height={50}
                src="/logoo.png"
                alt="Hybrid B2B Marketplace in India"
                className="object-contain"
              />
            </Link>


  <div className="flex items-center mr-8 border border-gray-300 rounded-sm overflow-hidden w-full md:w-auto">
  <input
    type="text"
    placeholder="Search City..."
    className="px-3 py-[6px] text-[14px] outline-none w-full md:w-[140px]"
  />
  <button className="bg-[#F45A06] px-3 py-[6px] flex items-center justify-center">
    <Search size={16} color="white" />
  </button>
</div>
</div>

            
          {/* LEFT */}

     
        {/* ================= SEARCH (DESKTOP ONLY) ================= */}
<div className="hidden lg:flex justify-center flex-1">
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
          <div className="flex items-center gap-4">
    {/* Mobile Menu */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} />
            </button>


            {/* Why Trust Us */}
            <Link
              href="/whytrustus"
              className="hidden lg:block bg-[#F45A06] text-white px-4 py-2 text-sm rounded-sm"
            >
              Why Trust Us
            </Link>
            {/* LOGIN ICON (NEW) */}
     <div className="relative" ref={dropdownRef}>
  
  {/* BUTTON */}
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center gap-1 text-gray-700 hover:text-[#F45A06] transition"
  >
    <User size={22} />
    <ChevronDown size={16} />
  </button>

  {/* DROPDOWN */}
  {open && (
    <div className="absolute right-0 mt-3 w-48 bg-white border rounded-md shadow-lg z-50 animate-fadeIn">

      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
        Login as Supplier
      </button>

      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
        Login as Buyer
      </button>

    </div>
  )}
</div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">

              <div className="bg-blue-900 flex items-center gap-2 px-3 py-2 rounded-md text-white cursor-pointer">
                📄 <span className="text-sm">Write a Review</span>
              </div>

              <button className="bg-[#F45A06] text-white px-4 py-2 rounded-md text-sm">
                Help Center
              </button>
            </div>
          </div>
        </div>

        {/* ================= SEARCH BAR (MOVED BELOW) ================= */}
        <div className="block md:hidden w-full px-4 pb-3">
          <div className="max-w-[800px] mx-auto flex">

            <input
              type="text"
              placeholder="Search Products..."
              className="w-full border border-gray-300 px-4 py-2 rounded-l-md text-sm outline-none"
            />

            <button className="bg-[#F45A06] px-4 flex items-center justify-center rounded-r-md">
              <Search size={18} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">

          <Link href="/whytrustus" className="block text-gray-700">
            Why Trust Us
          </Link>

          <div className="flex gap-3">
            <button className="bg-[#F45A06] text-white px-4 py-2 rounded-md text-sm w-full">
              Help Center
            </button>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm w-full">
              RFQ
            </button>
          </div>
        </div>
      )}

    </motion.header>
  );
}