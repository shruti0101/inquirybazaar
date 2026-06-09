"use client";
import React, { useEffect, useState } from "react";
import DirectorySection from "./DirectorySection";
import Banner from "./DirectoryBanner";
import bannerData from "@/data/bannerData";

export default function InnerDirectorySection() {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_TREE}api/industries/tree`
        );

        const data = await res.json();

        const hiddenCategories = [
          "Cosmetics & Personal Care",
          "Electrical Equipment and Supplies",
          "Food & Beverages",
          "Furniture & Supplies",
          "Houseware and Supplies",
          "Hospital,Clinic and Consultation"
        ];

     const filteredIndustries = data.data.filter(
  (industry) => !hiddenCategories.includes(industry.name)
);

const customOrder = [
    "Chemicals",
 

  "Construction & Real Estate",
  "Industrial Plants & Machinery",
  "Metals, Alloys & Minerals",
  "Packaging & Paper",
  "Textiles & Fabrics",
];

// Build array in exact order
const orderedIndustries = customOrder
  .map((name) =>
    filteredIndustries.find(
      (industry) => industry.name === name
    )
  )
  .filter(Boolean);

// Add remaining industries at the end
const remainingIndustries = filteredIndustries.filter(
  (industry) => !customOrder.includes(industry.name)
);

setIndustries([
  ...orderedIndustries,
  ...remainingIndustries,
]);

        setIndustries(filteredIndustries);
      } catch (error) {
        console.error("Failed to fetch industries:", error);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <div>
      {industries?.slice(0, 8).map((section, index) => (
        <div key={index}>
          <DirectorySection data={section} />

          {(index + 1) % 2 === 0 && (
            <Banner data={bannerData[(index + 1) / 2 - 1]} />
          )}
        </div>
      ))}
    </div>
  );
}