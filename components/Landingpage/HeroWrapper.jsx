
export const dynamic = "force-dynamic";
export const revalidate = 60; 

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
import Youtube from "./Youtube";
import About from "./About";
import FooterLinksUI from "./Footerlink";
import Fourcards from "./Fourcards";
import pharmaData from "@/data/pharmaData";
import hospitalData from "@/data/hospitalData";
import bannerData from "@/data/bannerData";
import buildingData from "@/data/buildingData"
import Industrial from "@/data/Industrial"
import packingData from "@/data/packingData"
import chemicalData from "@/data/chemicalData"
import labData from "@/data/labData"
import mechanicalData from "@/data/mechanicalData"
import Banner from "@/components/Landingpage/DirectoryBanner"

//  Fetch functions (SERVER SIDE)
async function getData(url) {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}${url}`, {
      cache: "no-store", 
    });

    if (!res.ok) {
      console.error(`Fetch failed: ${url}`);
      return null; 
    }

    return res.json();
  } catch (err) {
    console.error("Fetch error:", err.message);
    return null; 
  }
}

export default async function HeroWrapper() {



  const sections = [
    pharmaData,
    hospitalData,
    buildingData,
    Industrial,
    packingData,
    chemicalData,
    labData,
    mechanicalData
    // 👉 add more here later
  ];



  // ✅ Parallel fetching (SUPER FAST)
  const [
    heroRes,
    categoriesRes,
    directoryRes,
    bannerRes,
    bestsellerRes,
    aboutRes,
    footerRes,
  ] = await Promise.all([
    getData("/api/hero"),
    getData("/api/categories"),
    getData("/api/directory"),
    getData("/api/banner"),
    getData("/api/bestseller"),
    getData("/api/aboutus"),
    getData("/api/footerlink"),
  ]);

  const data = heroRes?.content;
  const featuredData = categoriesRes?.content;
  const directoryData = directoryRes || [];
  const banner3Data = bannerRes?.content;
  const bestsellerData = bestsellerRes?.content;
  const aboutData = aboutRes?.content;
  const footerdata = footerRes;

  return (
    <>
      <section className="px-1 md:px-8  mx-auto  bg-[#F3F4F6]">
        <div className="grid grid-cols-12 gap-5">

          

          {/* LEFT STICKY */}
          <div className="col-span-12 md:col-span-3 md:sticky md:top-0 md:self-start">
            <CategorySidebar data={data} />
          </div>

          {/* RIGHT */}
          <div className="col-span-full lg:col-span-9 space-y-4">
            <HeroSection data={data} />
             <Clientele />
            <Cta />
         

            <FeaturedProducts data={featuredData} />

            {/* {directoryData?.map((dir) => (
              <DirectorySection key={dir._id} data={dir.content} />
            ))} */}

          <div>
      {sections.map((section, index) => (
        <div key={index}>
          
          {/* SECTION */}
          <DirectorySection data={section} />

          {/* 🔥 SHOW BANNER AFTER EVERY 2 SECTIONS */}
          {(index + 1) % 2 === 0 && (
            <Banner data={bannerData[(index + 1) / 2 - 1]} />
          )}
        </div>
      ))}
    </div>

            <Banner3Section data={banner3Data} />

           
            <Bestseller data={bestsellerData} />
            <MoreForYou />
            <TopCities />

            <TestimonialSection />
            <Youtube />

            <About content={aboutData} />
            <Fourcards />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <FooterLinksUI data={footerdata} />
    </>
  );
}