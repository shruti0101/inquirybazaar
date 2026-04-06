"use client";

import { useEffect, useState } from "react";
import HeroSection from "./Hero";
import Cta from "./Cta";
import CategorySidebar from "./CategorySidebar";
import FeaturedProducts from "./FeaturedCategories";
import DirectorySection from "./DirectorySection";
import Banner3Section from "./Banner3";
import Clientele from "./Clientele";
import MoreForYou from "./Facility1";
import TopCities from "./Cities";
import Bestseller from "./Bestseller";
import TestimonialSection from "./Testimonial";
export default function HeroWrapper() {
  const [data, setData] = useState(null);

  // hero
  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((res) => setData(res.content));
  }, []);

  // feature categories
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((res) => setFeaturedData(res.content));
  }, []);

  // directory

  const [directoryData, setDirectoryData] = useState(null);

  useEffect(() => {
    fetch("/api/directory")
      .then((res) => res.json())
      .then((data) => {
        console.log("DIRECTORY DATA:", data);
        setDirectoryData(data);
      });
  }, []);

  // banner3

  const [banner3Data, setBanner3Data] = useState(null);

 useEffect(() => {
    fetch("/api/banner")
      .then((res) => res.json())
      .then((res) =>  setBanner3Data(res.content));
  }, []);


   const [bestsellerData, setBestsellerData] = useState(null);

 useEffect(() => {
    fetch("/api/bestseller")
      .then((res) => res.json())
      .then((res) =>  setBestsellerData(res.content));
  }, []);

  return (
    <section className="px-8 mt-3 bg-[#F3F4F6]">
      <div className="grid grid-cols-12 gap-5">
        {/* LEFT STICKY */}
        <div className="col-span-3 md:sticky top-0 self-start">
          <CategorySidebar data={data} />
        </div>

        {/* RIGHT */}
        <div className="col-span-9 space-y-4 ">
          <HeroSection data={data} />
          <Cta />

          <FeaturedProducts data={featuredData} />

          {directoryData?.map((dir) => (
            <DirectorySection key={dir._id} data={dir.content} />
          ))}



          {/* banner 3 */}
<Banner3Section data={banner3Data}/>

<Clientele></Clientele>
<Bestseller data={bestsellerData} />
<MoreForYou></MoreForYou>
<TopCities></TopCities>


<TestimonialSection></TestimonialSection>

        </div>
      </div>
    </section>
  );
}
