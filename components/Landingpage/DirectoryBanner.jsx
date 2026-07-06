"use client";
"use client";

import { useState } from "react";
import Image from "next/image";


import RequestQuotePopup from "@/components/Layout/Requestquote";

import Link from "next/link";

export default function Banner({ data }) {

      const [isOpen, setIsOpen] = useState(false);
  if (!data || !data.image) return null;





  return (
    <div className="hidden md:block max-w-7xl mx-auto pt-4">
      <div className="relative rounded-lg overflow-hidden group">
        
        {/* BANNER IMAGE */}
        <div >
          <Image
            src={data.image}
            alt="banner"
            width={1600}
            height={400}
            className="max-w-full h-auto group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* BUTTONS */}
    {/* BUTTONS */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
{data.buttons?.map((btn, index) => {
  // Open popup for Get Quotation
  if (btn.text === "Get Quotation →") {
    return (
      <button
        key={index}
        onClick={() => setIsOpen(true)}
        className={btn.className}
      >
        {btn.text}
      </button>
    );
  }

  // Other buttons remain links
  return (
    <Link
      key={index}
      href={btn.href}
      target={btn.href.startsWith("http") ? "_blank" : "_self"}
      rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={btn.className}
    >
      {btn.text}
    </Link>
  );
})}
</div>


      </div>







<RequestQuotePopup
  isOpen={isOpen}
  setIsOpen={setIsOpen}
/>

    </div>
  );
}