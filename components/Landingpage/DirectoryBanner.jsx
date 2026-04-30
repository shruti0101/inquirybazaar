"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner({ data }) {
  if (!data || !data.image) return null;

  return (
    <div className="max-w-7xl mx-auto pt-4">
      <Link href={data.link || "#"}>
        <div className="w-full h-[100px] md:h-[250px] relative rounded-lg overflow-hidden">
          <Image
            src={data.image}
            alt="banner"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </Link>
    </div>
  );
}