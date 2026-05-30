"use client";

import { Search, User, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import  RequestQuoteModal from "@/components/Layout/Requestquote";
import { FaLinkedin } from "react-icons/fa";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);



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


    <>
    
    

<header className="w-full fixed top-0 z-50 font-sans overflow-x-hidden">
<div className="w-full bg-[#183B63] hidden md:block text-white">
      <div className="mx-auto flex w-full px-4 xl:px-15  flex-col items-center justify-between gap-3 py-2 text-sm md:flex-row md:gap-0">
        
        {/* Left Section */}
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-8">
          
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-white" />
            <span className="text-gray-100">
              Have a question? Call us now at{" "}
              <a
                href="tel:+917303486777"
                className="font-medium hover:text-gray-300"
              >
                +91 7303486777
              </a>
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-white" />
            <a
              href="mailto:care@inquirybazaar.com"
              className="text-gray-100 hover:text-gray-300"
            >
              care@inquirybazaar.com
            </a>
          </div>
        </div>

        {/* Right Section */}
      <div className="flex items-center gap-3">

        Follow Us On
  <a
    href="https://www.facebook.com/profile.php?id=61562989183794"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition"
  >
    <FaFacebookF size={15} />
  </a>

  <a
    href="https://www.instagram.com/inquirybazaar/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://www.linkedin.com/company/inquiry-bazaar/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition"
  >
    <FaLinkedin size={18} />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition"
  >
    <FaYoutube size={19 } />
  </a>
</div>
      </div>
    </div>
      {/*  TOP NAV  */}
     <div className="bg-white flex min-h-[52px] border-b border-[#183B63]  items-center">
       <div className="mx-auto w-full flex items-center justify-between px-2 sm:px-4 md:px-12 gap-2">

         <Link
  href="/"
  className="font-semibold text-black mt-1 md:mt-3 flex-shrink-0"
>
         <Image
  src="/logocheck.png"
  alt="Logo"
  width={270}
  height={60}
  className="w-[150px] sm:w-[180px] md:w-[270px] h-auto"
/>

        
          </Link>

       <div className="flex items-center gap-2 md:gap-8 flex-1 justify-end">

            
            <nav className="hidden md:flex items-center gap-8 text-[19px] mt-3 text-black">
              <Link href="/">Home</Link>
              <button onClick={()=> setIsOpen(true)}>Request A Quote</button>
              <Link href="/contact-us">Contact Us</Link>
              <a href="https://dir.inquirybazaar.com/">All Categories</a>
            </nav>


              <button className="hidden md:block mt-3 bg-[#ec771c] hover:bg-[#e85d12] text-white text-[14px] md:text-[16px] px-4 md:px-6 h-[36px] md:h-[40px] rounded-md whitespace-nowrap">
              Register Free →
            </button>

      
  <div className="md:hidden flex-1 max-w-[220px] sm:max-w-[260px]">
  <div className="flex items-center bg-white border border-gray-200 rounded-2xl px-3 h-[45px] shadow-sm">


    {/* Search Input */}
<input
  type="text"
  placeholder="Search..."
  className="flex-1 min-w-0 bg-transparent outline-none text-[11px] sm:text-[12px] text-gray-700 placeholder:text-gray-400"
    />

   

  </div>
</div>
           
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
    className="md:hidden text-black flex-shrink-0"
            >
              {mobileMenu ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </div>

      {/*  MOBILE PANEL  */}
      {mobileMenu && (
<div className="md:hidden bg-white border-b border-gray-200 px-3 sm:px-4 py-4 space-y-4 shadow-lg">

{/* MOBILE NAV LINKS */}
<div className="space-y-2 text-[#0D2340] font-medium">
  <Link href="/" className="block py-2 border-b">Home</Link>
  <button onClick={()=> setIsOpen(true)} className="block py-2 border-b">Request A Quote</button>
  <Link href="contact-us" className="block py-2 border-b">Contact Us</Link>
  <a href="https://dir.inquirybazaar.com/" className="block py-2">All Categories</a>
</div>


    {/* MAIN SEARCH */}
          <button className="bg-[#ec771c] hover:bg-[#e85d12] text-white text-[14px] md:text-[16px] px-4 md:px-6 h-[36px] md:h-[40px] rounded-md whitespace-nowrap">
              Register Free →
            </button>

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

      

          {/* BUTTONS */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">

<Link href="/whytrustus">

            <button className="py-3 px-2 border-2 border-[#FF6A1A] bg-[#fcf3ef] text-[#ec771c] font-semibold rounded-md text-[14px]">
              Why Trust Us
            </button>
</Link>

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


<a href="https://www.google.com/maps/place/Inquiry+Bazaar+%5C%5C+Hybrid+B2B+Marketplace/@28.6922061,77.1477074,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03087fd1b4df:0xec224959e4ec6e13!8m2!3d28.6922061!4d77.1477074!16s%2Fg%2F11njwfyl1v?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D">





            <button className="h-[48px] bg-[#0D2340] text-white rounded-md px-2 text-[14px]">
              ✍️ Write a Review
            </button>
</a>


<Link href="/faqs">

            <button className="h-[48px] bg-[#ec771c] px-2 text-white rounded-md text-[14px]">
              💬 Help Center
            </button>
</Link>


          </div>
        </div>
      )}

      {/* ================= DESKTOP SEARCH STRIP (UNCHANGED) ================= */}
      <div className="hidden md:block bg-white border-b border-gray-200">
      <div className="w-full mx-auto px-4 md:px-12 py-[6px] flex items-center gap-3 xl:gap-4 overflow-x-auto">

          <div className="flex items-center bg-[#FAFAF8] border-2 border-[#ec771c] rounded-md overflow-hidden h-[50px]">
            <input placeholder="📍 Search City..." className="px-3 text-[14px] w-[140px] lg:w-[200px]outline-none" />
            <button className="bg-[#ec771c] w-[42px] h-[50px] flex items-center justify-center">
              <Search size={16} color="#fff" />
            </button>
          </div>

          <div className="h-[45px] w-px bg-gray-400"></div>

       <div className="flex items-center flex-1 min-w-[280px] max-w-[722px] h-[42px]">
            <input
              placeholder="Search for products, supplier"
              className="w-full h-[50px] border-2 border-[#ec771c] px-4 text-[14px] rounded-l-md outline-none bg-[#FAFAF8]"
            />
            <button className="bg-[#ec771c] h-[50px] px-6 flex items-center gap-2 text-white text-[14px] font-medium rounded-r-md">
              <Search size={16} />
              Search
            </button>
          </div>


<Link href="/whytrustus">

          <button className="py-2 px-3 border-2 border-[#FF6A1A] bg-[#fcf3ef] text-[#ec771c] font-semibold rounded-md text-[13px] flex items-center ">
             Why Trust Us
          </button>
</Link>


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
              <div className="absolute right-0 mt-2 z-9999 w-[180px] bg-white border rounded-md shadow-md overflow-hidden">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Login as Supplier
                </button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Login as Buyer
                </button>
              </div>
            )}
          </div>

<a href="https://www.google.com/maps/place/Inquiry+Bazaar+%5C%5C+Hybrid+B2B+Marketplace/@28.6922061,77.1477074,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03087fd1b4df:0xec224959e4ec6e13!8m2!3d28.6922061!4d77.1477074!16s%2Fg%2F11njwfyl1v?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D">



          <button className="h-[42px] px-3 bg-[#0D2340] text-white rounded-md text-[14px] flex items-center gap-2">
            ✍️ Write a Review
          </button>
</a>

<Link href="/faqs">


          <button className="h-[42px] px-3 bg-[#ec771c] text-white rounded-md text-[14px] flex items-center gap-2">
            💬 Help Center
          </button>
</Link>


        </div>
      </div>

    </header>


 <RequestQuoteModal isOpen={isOpen} setIsOpen={setIsOpen} />


    </>

  );
}