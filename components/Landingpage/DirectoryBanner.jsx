"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner({ data }) {
  if (!data) return null;

  return (
    <div className="max-w-7xl mx-auto  py-6">
      <Link href={data.link}>
        <div className="w-full h-[180px] md:h-[250px] relative rounded-lg overflow-hidden">
          <Image
            src={data.image}
            alt="banner"
            width={1800}
            height={800}

            className="object-contain hover:scale-105 transition duration-300"
          />
        </div>
      </Link>
    </div>
  );
}