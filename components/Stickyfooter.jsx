"use client";
import React from "react";
import Link from "next/link";
import { Home, Phone, FileText, LayoutGrid } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Stickyfooter = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white py-2 border-t shadow-lg z-50">
      <div className="flex justify-around items-center py-2">

        <Link href="/" className="flex flex-col items-center text-xs">
          <Home size={26} />
          <span>Home</span>
        </Link>

        <Link href="/products" className="flex flex-col items-center text-xs">
          <FileText size={26} className="text-black" />
          <span>Request A Quote</span>
        </Link>

        <Link href="/contact" className="flex flex-col items-center text-xs">
          <Phone className="text-red-600" size={26} />
          <span>Contact Us</span>
        </Link>

        <Link href="/categories" className="flex flex-col items-center text-xs">
          <LayoutGrid className="text-black" size={26} />
          <span>All Categories</span>
        </Link>

      </div>
    </div>
  );
};

export default Stickyfooter;