"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FooterLinksUI({ data }) {
  const [Catdata, setcatData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/industries`
        );

        const result = await res.json();

        console.log(result);

        setcatData(result.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

const renderLinks = (items, type = "category") => (
  <section className="w-full">
    <div className="flex flex-wrap gap-y-2">
      {items?.map((item, i) => (
        <span
          key={item._id || i}
          className="flex items-center flex-wrap min-w-0"
        >
          <Link
            href={
              type === "search"
                ? item.link || "#"
                : `https://dir.inquirybazaar.com/industries/${item.slug}`
            }
            className="hover:underline break-words"
          >
            {item.title || item.name}
          </Link>

          {i !== items.length - 1 && (
            <span className="mx-2 sm:mx-3 text-gray-500">|</span>
          )}
        </span>
      ))}
    </div>
  </section>
);

  return (
    <section className="w-full bg-gray-100 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 text-xs sm:text-sm text-gray-800 leading-relaxed">

      {/* SHOP ALL CATEGORIES FROM API */}
      <div className="mb-4 sm:mb-6 w-full">
        <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">
          SHOP ALL CATEGORIES
        </h3>

        <div className="capitalize w-full">
       {renderLinks(Catdata, "category")}
        </div>
      </div>

      {/* POPULAR SEARCHES */}
      <div>
        <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">
          POPULAR SEARCHES
        </h3>

{renderLinks(data?.searches, "search")}
      </div>

    </section>
  );
}