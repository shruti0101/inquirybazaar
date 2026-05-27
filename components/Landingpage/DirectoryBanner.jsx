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
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
          
          {/* REGISTER BUTTON */}
          <Link
            href="/register"
            className="
              bg-[#ff6b00]
              hover:bg-[#e66000]
              text-white
              font-semibold
              text-md
              px-3
              py-3
              rounded-xl
              shadow-lg
              transition
              flex items-center gap-2
            "
          >
            Register Free →
          </Link>

          {/* POST REQUIREMENT BUTTON */}
          <Link
            href="/post-requirement"
            className="
              border-2 border-cyan-400
              text-white
              hover:bg-cyan-400/10
              font-semibold
              text-md
              px-3
              py-3
              rounded-xl
              backdrop-blur-sm
              transition
              
            "
          >
            Post Requirement
          </Link>

        </div>
      </div>
    </div>
  );
}