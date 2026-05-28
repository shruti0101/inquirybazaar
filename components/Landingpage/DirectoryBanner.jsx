"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner({ data }) {
  if (!data || !data.image) return null;

  return (
    <div className="hidden md:block max-w-7xl mx-auto pt-4">
      <div className="relative rounded-lg overflow-hidden group">
        
        {/* BANNER IMAGE */}
        <Link href={data.link || "#"}>
          <Image
            src={data.image}
            alt="banner"
            width={1600}
            height={400}
            className="max-w-full h-auto group-hover:scale-105 transition duration-300"
          />
        </Link>

        {/* BUTTONS */}
    {/* BUTTONS */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
  {data.buttons?.map((btn, index) => (
    <Link
      key={index}
      href={btn.href}
      className={btn.className}
    >
      {btn.text}
    </Link>
  ))}
</div>


      </div>
    </div>
  );
}