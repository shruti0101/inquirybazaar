"use client";
import Link from "next/link";

export default function Banner3Section({ data }) {
  if (!data || !data.length) return null;

  return (
    <section className="py-5 ">

      <div className="grid grid-cols-3 gap-4">

        {data.map((b, i) => (
          <Link key={i} href={b.link || "#"}>

            <div className="overflow-hidden  group cursor-pointer">

              <img
                src={b.image}
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}