"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner({ data }) {
  if (!data) return null;

  return (
    <div className="max-w-7xl mx-auto  pt-4">
      <Link href={data.link}>
        <div className="w-full h-[100px] md:h-[250px] relative rounded-lg overflow-hidden">
          <Image
            src={data.image}
            alt="Hybrid B2B Marketplace in India"
            width={1800}
            height={800}

            className="object-contain hover:scale-105 transition duration-300"
          />
        </div>
      </Link>
    </div>
  );
}