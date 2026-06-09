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
          "Hospital,Clinic and Consultation",
        ];

        const industryOrder = {
           Chemicals: 1,
        
          Automobile: 2,
           Agriculture: 3,
          "Construction & Real Estate": 4,
          "Industrial Plants & Machinery": 5,
          "Metals, Alloys & Minerals": 6,
          "Packaging & Paper": 7,
          "Textiles & Fabrics": 8,
        };

        const filteredIndustries = data.data
          .filter(
            (industry) => !hiddenCategories.includes(industry.name)
          )
          .sort((a, b) => {
            const orderA = industryOrder[a.name] ?? 999;
            const orderB = industryOrder[b.name] ?? 999;
            return orderA - orderB;
          });

        setIndustries(filteredIndustries);
      } catch (error) {
        console.error("Failed to fetch industries:", error);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <div>
      {industries.slice(0, 8).map((section, index) => (
        <div key={section._id || index}>
          <DirectorySection data={section} />

          {(index + 1) % 2 === 0 && (
            <Banner data={bannerData[(index + 1) / 2 - 1]} />
          )}
        </div>
      ))}
    </div>
  );
}