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
import RequestQuoteModal from "@/components/Layout/Requestquote";
import { FaLinkedin } from "react-icons/fa";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
const desktopSearchRef = useRef(null);
const mobileSearchRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  const saveRecentSearch = (item) => {
  try {
    const existing =
      JSON.parse(
        localStorage.getItem("recentSearches")
      ) || [];

    const searchData = {
      keyword: item.slug,
      name: item.name,
      type: item.type,
      timestamp: Date.now(),
    };

    const filtered = existing.filter(
      (search) =>
        search.keyword !== item.slug
    );

    filtered.unshift(searchData);

    localStorage.setItem(
      "recentSearches",
      JSON.stringify(
        filtered.slice(0, 10)
      )
    );
  } catch (err) {
    console.log(err);
  }
};






const [searchQuery, setSearchQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [loading, setLoading] = useState(false);
const [showResults, setShowResults] = useState(false);

useEffect(() => {
  const delayDebounce = setTimeout(() => {
    if (searchQuery.trim().length > 1) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, 500);

  return () => clearTimeout(delayDebounce);
}, [searchQuery]);




const fetchSearchResults = async () => {
  try {
    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}api/search?q=${searchQuery}`
    );

    const data = await res.json();

    const results = [
      ...(data?.data?.industries || []).map((item) => ({
        ...item,
        type: "Industry",
      })),
      ...(data?.data?.categories || []).map((item) => ({
        ...item,
        type: "Category",
      })),
      ...(data?.data?.products || []).map((item) => ({
        ...item,
        type: "Product",
      })),
    ];

    setSearchResults(results);
    setShowResults(true);

    console.log("Results:", results);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};



useEffect(() => {
  const handleClickOutside = (e) => {
    const clickedDesktop =
      desktopSearchRef.current?.contains(e.target);

    const clickedMobile =
      mobileSearchRef.current?.contains(e.target);

    if (!clickedDesktop && !clickedMobile) {
      setShowResults(false);
    }

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () =>
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
}, []);

  return (
    <>
      <header className="w-full fixed top-0 z-[9999] font-sans overflow-visible">
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
              
                href="https://www.youtube.com/@inquirybazaar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
              >
             
                <FaYoutube size={18} />
              </a>

            </div>
          </div>
        </div>
        {/*  TOP NAV  */}
        <div className="bg-white flex min-h-[52px] border-b border-[#183B63]  items-center">
          <div className="mx-auto w-full flex items-center justify-between px-2 sm:px-4 md:px-12">
            <Link
              href="/"
              className="font-semibold text-black mt-1 md:mt-3 flex-shrink-0"
            >
              <Image
                src="/logocheck.png"
                alt="Logo"
                width={270}
                height={60}
                className="w-[145px] sm:w-[180px] md:w-[270px] h-auto"
              />
            </Link>

            <div className="flex items-center gap-2 md:gap-8 flex-1 justify-end">
              <nav className="hidden md:flex items-center gap-8 text-[19px] mt-3 text-black">
                <Link href="/">Home</Link>
                <button onClick={() => setIsOpen(true)}>Request A Quote</button>
                <Link href="/contact-us">Contact Us</Link>
                <a href="https://dir.inquirybazaar.com/">All Categories</a>
              </nav>

<Link href="https://seller.inquirybazaar.com/register">
  <button className="hidden md:block mt-3 bg-[#ec771c] hover:bg-[#e85d12] text-white text-[14px] md:text-[16px] px-4 md:px-6 h-[36px] md:h-[40px] rounded-md whitespace-nowrap">
                Register Free →
              </button>

</Link>

            

        <div
  className="md:hidden flex-1 max-w-[220px] sm:max-w-[260px] relative"
  ref={mobileSearchRef}
>
  <div className="flex items-center bg-white border border-gray-200 rounded-2xl px-1 h-[45px] shadow-sm">
    <Search size={16} className="text-gray-400 mr-2" />

    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={() => setShowResults(true)}
      placeholder="Search..."
      className="flex-1 min-w-0 bg-transparent outline-none text-[12px] text-gray-700 placeholder:text-gray-400"
    />
  </div>

  {showResults && (
    <div className="absolute top-[50px] left-0 w-full bg-white border rounded-xl shadow-xl max-h-[350px] overflow-y-auto z-[99999]">
      {loading ? (
        <div className="p-4 text-center text-sm">
          Searching...
        </div>
      ) : searchResults?.length > 0 ? (
        searchResults.map((item, index) => (
          <Link
            key={index}
            href={`https://dir.inquirybazaar.com/search/${item.slug}`}
            className="block px-4 py-3 border-b hover:bg-orange-50"
            onClick={() => {
              saveRecentSearch(item);
              setShowResults(false);
              setSearchQuery("");
            }}
          >
            <div className="font-medium text-sm">
              {item.name}
            </div>

            <div className="text-xs text-gray-500">
              {item.type}
            </div>
          </Link>
        ))
      ) : searchQuery?.length > 1 ? (
        <div className="p-4 text-center text-gray-500 text-sm">
          No results found
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500 text-sm">
          Start typing...
        </div>
      )}
    </div>
  )}
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
          <div className="md:hidden bg-white border-b h-200 border-gray-200 px-3 sm:px-4 py-4 space-y-4 shadow-lg">
            {/* MOBILE NAV LINKS */}
            <div className="space-y-2 text-[#0D2340] font-medium">
              <Link href="/" className="block py-2 border-b">
                Home
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="block py-2 border-b"
              >
                Request A Quote
              </button>
              <Link href="contact-us" className="block py-2 border-b">
                Contact Us
              </Link>
              <a href="https://dir.inquirybazaar.com/" className="block py-2">
                All Cat egories
              </a>
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

              <div className="relative z-[9999]" ref={dropdownRef}>
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
                    <Link href="https://seller.inquirybazaar.com/register" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      Login as Supplier
                    </Link>
                    <Link href="https://buyer.inquirybazaar.com/register" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      Login as Buyer
                    </Link>
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
          <div className="w-full mx-auto px-4 md:px-12 py-[6px] flex items-center gap-3 xl:gap-4 overflow-visible">
            <div className="flex items-center bg-[#FAFAF8] border-2 border-[#ec771c] rounded-md overflow-hidden h-[50px]">
              <input
                placeholder="📍 Search City..."
                className="px-3 text-[14px] w-[140px] lg:w-[200px]outline-none"
              />
              <button className="bg-[#ec771c] w-[42px] h-[50px] flex items-center justify-center">
                <Search size={16} color="#fff" />
              </button>
            </div>

            <div className="h-[45px] w-px bg-gray-400"></div>

            <div className="flex items-center flex-1 min-w-[280px] max-w-[722px] h-[42px]">
          <div
  className="relative w-full"
  ref={desktopSearchRef}
>
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onFocus={() => setShowResults(true)}
    placeholder="Search products, suppliers, categories..."
    className="w-full h-[50px] border-2 border-[#ec771c] px-4 text-[14px] rounded-l-md outline-none bg-[#FAFAF8]"
  />

  {showResults && (
    <div className="absolute top-[55px] left-0 w-full bg-white border shadow-xl rounded-lg max-h-[450px] overflow-y-auto z-[99999]">
      {loading ? (
        <div className="p-4 text-center">
          Searching...
        </div>
      ) : searchResults?.length > 0 ? (
        searchResults.map((item, index) => (
         <Link
  key={index}
  href={`https://dir.inquirybazaar.com/search/${item.slug}`}
  className="block px-4 py-3 border-b hover:bg-orange-50"
 onClick={() => {
  saveRecentSearch(item);
  setShowResults(false);
  setSearchQuery("");
}}
>
            <div className="font-medium">
              {item.name}
            </div>

            <div className="text-xs text-gray-500">
              {item.type}
            </div>
          </Link>
        ))
      ) : (
        <div className="p-4 text-center text-gray-500">
         Start typing to see results...
        </div>
      )}
    </div>
  )}
</div>
              <button className="bg-[#ec771c] h-[50px] px-6 flex items-center gap-2 text-white text-[14px] font-medium rounded-r-md">
                <Search size={16} />
                Search
              </button>
            </div>

            <Link href="/whytrustus">
              <button className="py-2 px-3 border-2 border-[#FF6A1A] bg-[#fcf3ef] text-[#ec771c] font-semibold rounded-md text-[16px] flex items-center ">
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
             <div className="absolute right-0 mt-2 z-[99999] w-[180px] overflow-hidden rounded-md border bg-white shadow-lg">
  <a
    href="https://seller.inquirybazaar.com/register"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
  >
    Login as Supplier
  </a>

  <a
    href="https://buyer.inquirybazaar.com/register"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
  >
    Login as Buyer
  </a>
</div>
              )}
            </div>

            <a href="https://www.google.com/maps/place/Inquiry+Bazaar+%5C%5C+Hybrid+B2B+Marketplace/@28.6922061,77.1477074,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03087fd1b4df:0xec224959e4ec6e13!8m2!3d28.6922061!4d77.1477074!16s%2Fg%2F11njwfyl1v?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D">
              <button className="h-[42px] px-3 bg-[#0D2340] text-white rounded-md text-[14px] flex items-center gap-2">
                ✍️ Write a Review
              </button>
            </a>

            <Link href="/faqs">
              <button className="h-[45px] px-3 bg-[#ec771c] text-white rounded-md text-[14px] flex items-center gap-2">
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
