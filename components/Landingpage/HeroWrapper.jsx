

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

//  Fetch functions (SERVER SIDE)
async function getData(url) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data;
}

export default async function HeroWrapper() {
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
      <section className="px-8 mt-3 bg-[#F3F4F6]">
        <div className="grid grid-cols-12 gap-5">

          {/* LEFT STICKY */}
          <div className="col-span-3 md:sticky top-0 self-start">
            <CategorySidebar data={data} />
          </div>

          {/* RIGHT */}
          <div className="col-span-9 space-y-4">
            <HeroSection data={data} />
            <Cta />

            <FeaturedProducts data={featuredData} />

            {directoryData?.map((dir) => (
              <DirectorySection key={dir._id} data={dir.content} />
            ))}

            <Banner3Section data={banner3Data} />

            <Clientele />
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