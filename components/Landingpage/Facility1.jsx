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
      icon: <BadgeCheck size={42} />,
      title: "Connect with verified sellers",
      desc: "Tell us your requirement & let our experts find verified sellers for you",
      btn: "Get Verified Sellers",
    },
    {
      icon: <Store size={42} />,
      title: "Sell on IndiaMART for free",
      desc: "Reach out to more than 21+ crore buyers. Sell with us.",
      btn: "Start Selling",
    },
    {
      icon: <Smartphone size={42} />,
      title: "Download our App",
      desc: "Get instant notifications on the go. Download our App Now",
      btn: "Download Now",
    },
    {
      icon: <Receipt size={42} />,
      title: "Tally on Mobile",
      desc: "With Live Keeping, SME’s can now connect their Tally offline data to mobile app",
      btn: "Know More",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f5]  ">

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        More for You
      </h2>

      {/* GRID */}
   <div className="bg-white border border-gray-200 rounded-sm">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch">

    {items.map((item, i) => (
      <div
        key={i}
        className={`flex flex-col h-full items-center text-center px-6 py-10 ${
          i !== items.length - 1
            ? "lg:border-r border-gray-200"
            : ""
        }`}
      >

        {/* ICON */}
        <div className="text-[#10316C] mb-4">
          {item.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>

        {/* DESC */}
        <p className="text-[14px] text-black leading-relaxed max-w-[240px] mb-6">
          {item.desc}
        </p>

        {/* BUTTON (pushed to bottom) */}
        <button className="mt-auto border border-[#10316C] text-[#10316C] px-6 py-2 rounded-full text-sm hover:bg-blue-50 transition">
          {item.btn}
        </button>

      </div>
    ))}

  </div>
</div>
    </div>
  );
}