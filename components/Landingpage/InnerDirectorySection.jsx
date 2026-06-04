"use client"
import React, { useEffect, useState } from 'react'
import DirectorySection from "./DirectorySection";
import Banner from './DirectoryBanner';
import bannerData from "@/data/bannerData";



export default function InnerDirectorySection() {
     const [industries, setIndustries] = useState([]);
  
    useEffect(() => {
        console.log("ello");
      const fetchIndustries = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL_TREE}api/industries/tree`
          );
  
          const data = await res.json();
  
          console.log(data);
          setIndustries(data.data);
        } catch (error) {
          console.error("Failed to fetch industries:", error);
        }
      };
      
      fetchIndustries();
    }, []);

    console.log(industries);
  return (
    <div>
          {industries?.map((section, index) => (
            <div key={index}>
              
              {/* SECTION */}
              <DirectorySection data={section} />
    
              {/* SHOW BANNER AFTER EVERY 2 SECTIONS */}
              {(index + 1) % 2 === 0 && (
                <Banner data={bannerData[(index + 1) / 2 - 1]} />
              )}
            </div>
          ))}
        </div>
  )
}
