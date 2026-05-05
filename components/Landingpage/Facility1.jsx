"use client";

import {
  BadgeCheck,
  Store,
  Smartphone,
  Receipt,
} from "lucide-react";

export default function MoreForYou() {
  const items = [
    {
      icon: <Receipt size={28} className="sm:w-9 sm:h-9" />,
      title: "Connect with Verified Suppliers",
      desc: "Find trusted & verified manufacturers, wholesalers, and exporters across India. Share your requirement and get the best quotes instantly.",
      btn: "Get Verified Suppliers",
    },
    {
      icon: <Store size={28} className="sm:w-9 sm:h-9" />,
      title: "Sell on Inquiry Bazaar for Free",
      desc: "Expand your business reach and connect with high-intent buyers. Generate quality B2B leads without upfront cost.",
      btn: "Start Selling",
    },
    {
      icon: <Smartphone size={28} className="sm:w-9 sm:h-9" />,
      title: "Get Instant Business Enquiries",
      desc: "Receive real-time enquiries directly on your mobile & dashboard. Never miss a potential deal with instant alerts.",
      btn: "Get Enquiries Now",
    },
    {
      icon: <BadgeCheck size={28} className="sm:w-9 sm:h-9" />,
      title: "Legal Compliance",
      desc: "Verified Goods & Service Tax Identification Number (GSTIN) indicates a registered business that complies with Indian tax regulations.",
      btn: "Know More",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] md:py-10">

      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">
        More for You
      </h2>

      {/* GRID WRAPPER */}
      <div className="bg-white border border-gray-200 rounded-sm">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 items-stretch">

          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative flex flex-col h-full items-center text-center 
              px-3 sm:px-6 py-6 sm:py-10 transition-all duration-300

              ${i === 1 ? "bg-[#0E2347] text-white" : "bg-white text-gray-800"}

              hover:bg-[#ec771c] hover:text-white

              ${i !== items.length - 1 ? "lg:border-r border-gray-200" : ""}
              ${i < items.length - 1 ? "border-b sm:border-b-0 sm:border-r-0 lg:border-b-0 border-gray-200" : ""}
              `}
            >

              {/* MOST POPULAR TAG */}
              {i === 1 && (
                <span className="absolute top-2 left-5 animate-pulse bg-[#ec771c] text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full">
                 ⚡Most Popular
                </span>
              )}

              {/* ICON */}
              <div
                className={`mb-3 sm:mb-4 transition-all duration-300
                ${i === 1 ? "text-white" : "text-[#10316C]"}
                group-hover:text-white`}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[13px] sm:text-[16px] font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-[12px] sm:text-[14px] leading-relaxed max-w-full sm:max-w-[240px] mb-4 sm:mb-6 opacity-90">
                {item.desc}
              </p>

              {/* BUTTON */}
              <button
                className={`mt-auto px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300

                ${i === 1
                  ? "border border-white text-white hover:bg-white hover:text-[#ec771c]"
                  : "border border-[#10316C] text-[#10316C] hover:bg-white hover:text-[#ec771c]"
                }`}
              >
                {item.btn}
              </button>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}