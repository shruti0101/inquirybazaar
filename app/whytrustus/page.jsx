"use client"

import axios from "axios";
import toast from "react-hot-toast";

import {
  Users,
  TrendingDown,
  Ban,
  Lock,
  Bot,
  BadgeDollarSign,
  AlertCircle,
} from "lucide-react";
import { Check, X } from "lucide-react";
import {
  TrendingUp,
  ArrowUp,
  Infinity,
  Plus,
  IndianRupee,
} from "lucide-react";
import {
  Smartphone,
  Mail,
  Shield,
  MessageSquare,
} from "lucide-react";

import { useState } from "react";

import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
const page = () => {

const problems = [
  {
    icon: Users,
    text: "Leads shared with 5–10 competitors — you race to the bottom on price",
  },
  {
    icon: TrendingDown,
    text: "Price wars instead of value selling — margins shrink every quarter",
  },
  {
    icon: Ban,
    text: "Low conversion rates from unqualified, cold, shared inquiries",
  },
  {
    icon: Lock,
    text: "Platform controls your leads — you own nothing at the end",
  },
  {
    icon: Bot,
    text: "Full dependency on a third-party algorithm for your business growth",
  },
  {
    icon: BadgeDollarSign,
    text: "You pay for visibility, not results — high spend with zero ownership",
  },
];


const comparisonData = [
  {
    feature: "Lead type",
    old: "Shared with competitors",
    new: "Exclusive — only yours",
  },
  {
    feature: "Competition per lead",
    old: "5–10 sellers per inquiry",
    new: "Direct — no competition",
  },
  {
    feature: "Lead ownership",
    old: "Platform-controlled",
    new: "100% yours, always",
  },
  {
    feature: "Branding power",
    old: "You are just a listing",
    new: "Strong brand positioning",
  },
  {
    feature: "Communication",
    old: "Through platform only",
    new: "Direct phone and email",
  },
  {
    feature: "Conversion rate",
    old: "Low — shared, cold leads",
    new: "High — intent-verified",
  },
  {
    feature: "Pricing model",
    old: "Pay for visibility",
    new: "Pay for results",
  },
  {
    feature: "Growth strategy",
    old: "Listing-based only",
    new: "Hybrid: branding + lead gen",
  },
];


const features = [
  {
    icon: Smartphone,
    title: "Direct to your mobile",
    description:
      "Every lead lands on your phone number directly. No platform login, no delay, no relay between you and the buyer.",
  },
  {
    icon: Mail,
    title: "Email straight to your inbox",
    description:
      "Buyer inquiries arrive in your email — not a platform dashboard you have to log into every single day.",
  },
  {
    icon: Shield,
    title: "Zero lead sharing",
    description:
      "One inquiry, one seller. Your lead is never shared with any competitor. That is our core promise, always.",
  },
  {
    icon: MessageSquare,
    title: "You talk to the buyer",
    description:
      "No platform barriers between you and your buyer. You build the relationship and you close the deal your way.",
  },
];

const impacts = [
  {
    icon: "3×",
    title: "Higher conversion rate",
    description:
      "Exclusive, intent-verified leads convert 3× better than shared marketplace leads on average.",
  },
  {
    icon: ArrowUp,
    title: "Better quality leads",
    description:
      "Every inquiry is verified. No cold or spam leads wasting your sales team's valuable time.",
  },
  {
    icon: "2×",
    title: "Faster deal closure",
    description:
      "Direct communication means shorter sales cycles and faster purchasing decisions every time.",
  },
  {
    icon: Infinity,
    title: "Long-term relationships",
    description:
      "You own the buyer relationship. They return to you — not the platform that introduced them.",
  },
  {
    icon: Plus,
    title: "Strong market positioning",
    description:
      "Your brand stands out clearly. Buyers trust you, not just an anonymous listing in a directory.",
  },
  {
    icon: IndianRupee,
    title: "Better ROI on spend",
    description:
      "Pay for results, not visibility. Every rupee drives real, measurable, trackable business growth.",
  },
];

const traditionalItems = [
  "Compete purely on lowest price",
  "No differentiation from competitors",
  "Buyers don't know your brand name",
  "Margins shrink every quarter",
  "No repeat business strategy possible",
];

const brandItems = [
  "Compete on value and trust",
  "Strong positioning in your category",
  "Buyers remember you and return",
  "Better margins — no race to bottom",
  "Long-term repeat business growth",
];


const transparencyItems = [
  {
    title: "Your mobile number is yours",
    description:
      "Buyers call you directly — not through a platform relay or intermediary contact number.",
  },
  {
    title: "Your email ID is yours",
    description:
      "Every inquiry arrives in your inbox directly — not locked inside a platform dashboard.",
  },
  {
    title: "Every lead belongs to you",
    description:
      "No expiry, no revocation, no lock-in. You own all your leads and contacts forever.",
  },
  {
    title: "No shared inquiries — ever",
    description:
      "One lead goes to one seller only. That is the Inquiry Bazaar promise, without exception.",
  },
];


const testimonials = [
  {
    initials: "RS",
    name: "Rajesh Sharma",
    company: "Industrial equipment, Delhi",
    review:
      "Switched from a traditional marketplace and got better quality leads in just 2 weeks. These buyers are actually serious.",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    company: "Textiles manufacturer, Surat",
    review:
      "Was sharing leads with 8 competitors. Now every lead is ours alone. Conversion went from 4% to 18% in just 3 months.",
  },
  {
    initials: "AK",
    name: "Arvind Kumar",
    company: "Chemical supplier, Mumbai",
    review:
      "The hybrid model is the best of both worlds. Digital leads plus a team that actively helps me follow up and close.",
  },
  {
    initials: "VG",
    name: "Vikas Gupta",
    company: "Packaging supplier, Noida",
    review:
      "The lead quality is noticeably higher. We spend less time filtering and more time selling.",
  },
];


const faqs = [
  {
    question: "Will I get fewer leads than on Traditional Marketplace?",
    answer:
      "Yes — and that is intentional. You get fewer leads, but each one is exclusive and high-intent. One qualified lead that converts is worth more than 50 shared leads that go nowhere. Our sellers see 3× better conversion on average.",
  },
  {
    question: "Are leads shared with multiple sellers?",
    answer:
      "No. Every inquiry is sent to one seller only. We never share your lead with competitors.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most sellers begin receiving qualified inquiries within the first few weeks after onboarding.",
  },
  {
    question:
      "Can I use this alongside my existing marketplace listings?",
    answer:
      "Absolutely. Many sellers use Inquiry Bazaar alongside Traditional Marketplace, Traditional Marketplace, and other channels.",
  },
  {
    question: 'What makes it a "hybrid" marketplace?',
    answer:
      "We combine technology-driven lead generation with a human team that helps qualify and manage inquiries.",
  },
];


const [form, setForm] = useState({
  name: "",
  companyName: "",
  phone: "",
  requirement: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.phone) {
    return toast.error("Please fill required fields");
  }

  try {
    setLoading(true);

    const formData = {
      platform: "Exclusive Lead Form",
      platformEmail: "care@inquirybazaar.com",
      name: form.name,
      phone: form.phone,
      email: "N/A",
      companyName: form.companyName,
      place: "N/A",
      product: "Exclusive Lead",
      message: form.requirement,
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      formData
    );

    if (data?.success) {
      toast.success("Lead Submitted Successfully");

      setForm({
        name: "",
        companyName: "",
        phone: "",
        requirement: "",
      });
    } else {
      toast.error("Failed to submit");
    }
  } catch (error) {
    console.log(error);
    toast.error("Server Error");
  } finally {
    setLoading(false);
  }
};

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };


  
  return (
    <div>



<section className="bg-white py-20 mt-25">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Badge */}
    <div className="inline-flex items-center gap-3 border border-[#ef6b2e] rounded-xl px-5 py-3 text-[#ef6b2e] text-sm font-medium bg-white">
      <span className="w-2 h-2 rounded-full bg-[#ef6b2e]" />
      India's Hybrid B2B Marketplace
    </div>

    {/* Heading */}
    <h1 className="mt-5 text-[42px] md:text-[68px] leading-[1.05] font-semibold tracking-[-2px] text-[#1D3A76]">
      Stop competing for leads.
      <br />
      <span className="text-[#F27A1B]">
        Start owning them.
      </span>
    </h1>

    {/* Description */}
    <p className="mt-5 max-w-4xl mx-auto text-[20px] leading-[1.9] text-black font-normal">
      See why smart businesses are switching from traditional marketplaces to
      Inquiry Bazaar — where every lead is exclusive, verified, and goes
      directly to you.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-6">

<a href="https://seller.inquirybazaar.com/register">


      <button className="h-[58px] px-10 rounded-xl bg-[#ef6b2e] text-white font-semibold text-lg hover:scale-105 transition-all duration-300">
        Get exclusive leads
      </button>
</a>


<a href="/contact-us">

      <button className="h-[58px] px-10 rounded-xl border border-gray-300 bg-white text-black font-medium text-lg hover:bg-gray-50 transition-all duration-300">
        Book free demo
      </button>

      </a>

    </div>

    {/* Stats */}
    <div className="mt-8 max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="py-8 px-10 border-b md:border-b-0 md:border-r border-gray-200">
          <h3 className="text-[52px] leading-none font-semibold text-black">
            21.9<span className="text-[#F27A1B]">Cr</span>
          </h3>
          <p className="mt-2 text-[#7b8190] text-lg">
            Active buyers
          </p>
        </div>

        <div className="py-8 px-10 border-b md:border-b-0 md:border-r border-gray-200">
          <h3 className="text-[52px] leading-none font-semibold text-black">
            86<span className="text-[#F27A1B]">L+</span>
          </h3>
          <p className="mt-2 text-[#7b8190] text-lg">
            Verified suppliers
          </p>
        </div>

        <div className="py-8 px-10">
          <h3 className="text-[52px] leading-none font-semibold text-black">
            100<span className="text-[#F27A1B]">%</span>
          </h3>
          <p className="mt-2 text-[#7b8190] text-lg">
            Exclusive leads
          </p>
        </div>

      </div>
    </div>

  </div>
</section>


{/* section 2 */}

 <section className="bg-[#F5F5F3] py-10">
  <div className="w-full mx-auto px-6  text-center">

    {/* Label */}
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="w-6 h-[1px] bg-[#eb5a2a]" />
      <span className="text-[13px] tracking-[4px] uppercase text-[#eb5a2a] font-medium">
        The Problem
      </span>
    </div>

    {/* Heading */}
    <h2 className="max-w-[900px] mx-auto text-[34px] md:text-[46px] leading-[1.12] font-semibold text-[#1D3A76] tracking-[-1.8px]">
      Why businesses fail on traditional marketplaces 
    </h2>

    {/* Description */}
    <p className="mt-4 max-w-[650px] mx-auto text-[18px] leading-[1.8] text-black">
      You pay for premium listings — but still struggle every day with
      these avoidable problems.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-5 mt-4 max-w-7xl mx-auto text-left">
      {problems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl border border-[#e8e8e8] bg-white px-4 py-4 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff3ef]">
              <Icon
                size={18}
                className="text-[#eb5a2a]"
                strokeWidth={2}
              />
            </div>

            <p className="text-[18px] leading-[1.7] text-[#1d2939] font-medium">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>

    {/* Result Box */}
    <div className="mt-3 max-w-5xl mx-auto rounded-xl border border-[#f5c7be] bg-[#fff5f2]">
      <div className="flex items-center justify-center gap-4 px-7 py-6 border-l-4 border-[#e14d2a]">
        <AlertCircle
          size={18}
          className="text-[#a13c26] shrink-0"
        />

        <p className="text-[20px] font-medium text-[#8f2f1d] ">
          Result: High cost. Low ROI. Zero ownership of your buyers.
        </p>
      </div>
    </div>

  </div>
</section>

{/* SECTION 3 */}

   <section className="bg-white py-5">
      <div className="w-full mx-auto px-6">

        {/* Top Label */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-[1px] w-6 bg-[#e7602a]" />
          <span className="uppercase tracking-[4px] text-[13px] font-medium text-[#e7602a]">
            Side By Side
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[34px] md:text-[56px] font-semibold leading-[1.1] tracking-[-2px] text-[#1D3A76]">
          Inquiry Bazaar vs traditional marketplaces
        </h2>

        {/* Description */}
        <p className="mt-2 max-w-3xl mx-auto text-center text-[22px] leading-[1.8] text-black">
          A clear, honest feature comparison — see exactly what changes
          when you move to Inquiry Bazaar.
        </p>

        {/* Table */}
        <div className="mt-4 max-w-7xl mx-auto overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white">

          {/* Header */}
          <div className="grid grid-cols-3 border-b border-[#e5e5e5]">

            <div className="px-8 py-5 bg-[#fafafa]">
              <span className="text-[13px] tracking-[2px] uppercase text-[#8a94a6] font-semibold">
                Feature
              </span>
            </div>

            <div className="px-8 py-5 bg-[#fafafa] border-l border-[#e5e5e5]">
              <span className="text-[13px] tracking-[2px] uppercase text-[#8a94a6] font-semibold">
                Traditional Marketplace / Traditional Marketplace
              </span>
            </div>

            <div className="px-8 py-5 bg-[#fdf6f2] border-l border-[#e5e5e5]">
              <span className="text-[13px] tracking-[2px] uppercase text-[#e7602a] font-semibold">
                Inquiry Bazaar
              </span>
            </div>

          </div>

          {/* Rows */}
          {comparisonData.map((item, index) => (
          <div
  key={index}
  className="group grid grid-cols-3 border-b border-[#ececec] last:border-b-0 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#fffaf7] hover:to-[#fff3ed] hover:shadow-lg hover:z-10 hover:scale-[1.01] relative"
>
              {/* Feature */}
           <div className="px-8 py-4 text-[18px] text-[#344054] font-medium transition-all duration-300 group-hover:text-black">
  {item.feature}
</div>

           <div className="px-8 py-4 border-l border-[#ececec] transition-all duration-300 group-hover:bg-red-50/40">
  <div className="flex items-center gap-2 text-[#e74c3c] text-[18px]">
    <X
      size={16}
      strokeWidth={2.5}
      className="transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"
    />
    <span>{item.old}</span>
  </div>
</div>

              {/* New */}
          <div className="px-8 py-4 border-l border-[#ececec] transition-all duration-300 group-hover:bg-green-50/40">
  <div className="flex items-center gap-2 text-[#027a48] text-[18px]">
    <Check
      size={16}
      strokeWidth={2.5}
      className="transition-all duration-300 group-hover:scale-125"
    />
    <span className="font-medium transition-all duration-300 group-hover:text-[#01643d]">
      {item.new}
    </span>
  </div>
</div>
            </div>
          ))}
        </div>

      </div>
    </section>



{/* SECTION 4 */}
     <section className="bg-[#f8f8f8] py-6">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-[1px] w-6 bg-[#e7602a]" />
          <span className="uppercase tracking-[4px] text-[13px] font-medium text-[#e7602a]">
            How It Works
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[34px] md:text-[56px] font-semibold leading-[1.1] tracking-[-2px] text-[#1D3A76]">
          The lead journey: them vs us
        </h2>

        {/* Description */}
        <p className="my-3 max-w-5xl mx-auto text-center text-[20px] leading-[1.8] text-black">
          See exactly why traditional platforms lose buyers — and why
          Inquiry Bazaar closes deals faster.
        </p>

        {/* Traditional Path */}
        <div className="mt-3 max-w-7xl mx-auto overflow-hidden rounded-2xl border border-[#f1c9c3] bg-white shadow-sm transition-all duration-500 hover:shadow-xl">

          <div className="flex items-center gap-3 bg-[#fff3f1] px-6 py-3 border-b border-[#f1c9c3]">
            <X size={18} className="text-[#c83b2b]" />
            <h3 className="text-[18px] font-medium text-[#a12d20]">
              Traditional marketplace path
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 py-4 px-6">
            {[
              "Buyer",
              "Platform",
              "5+ sellers",
              "Confusion",
              "Price war",
              "Low conversion",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="rounded-xl border border-[#efb4aa] bg-[#fff7f5] px-6 py-3 text-[#d94b37] font-medium transition-all duration-300 hover:scale-105 hover:bg-[#fff0ec]">
                  {item}
                </div>

                {index !== 5 && (
                  <span className="text-[#98a2b3] text-xl">→</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#fff6f5] border-t border-[#f1c9c3] px-6 py-2">
            <p className="text-[#b42318] text-[18px] font-medium text-center">
              Wasted budget. Exhausted team. No ownership.
            </p>
          </div>
        </div>

        {/* Inquiry Bazaar Path */}
        <div className="mt-6 max-w-7xl mx-auto overflow-hidden rounded-2xl border border-[#9ad5c2] bg-white shadow-sm transition-all duration-500 hover:shadow-xl">

          <div className="flex items-center gap-3 bg-[#eefaf5] px-6 py-3 border-b border-[#9ad5c2]">
            <Check size={18} className="text-[#027a48]" />
            <h3 className="text-[18px] font-medium text-[#026b42]">
              Inquiry Bazaar path
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 py-4 px-6">
            {[
              "Buyer",
              "Inquiry Bazaar",
              "You — only you",
              "Direct deal",
              "Higher conversion",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="rounded-xl border border-[#98d6bf] bg-[#f4fffa] px-6 py-3 text-[#027a48] font-medium transition-all duration-300 hover:scale-105 hover:bg-[#ecfff6]">
                  {item}
                </div>

                {index !== 4 && (
                  <span className="text-[#98a2b3] text-xl">→</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#f4fffa] border-t border-[#9ad5c2] px-6 py-5">
            <p className="text-[#027a48] text-[18px] font-medium text-center">
              Exclusive lead. Faster closure. Better margins.
            </p>
          </div>
        </div>

      </div>
    </section>



{/* SECTION 5 */}

    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1440px] px-12">
        {/* Top Label */}
        <div className="mb-2 flex items-center gap-3">
          <div className="h-px w-8 bg-[#e56d2e]" />
          <span className="text-[13px] font-medium uppercase tracking-[3px] text-[#e56d2e]">
            Built Different
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[780px] text-[44px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1D3A76]">
          Built for results, not just listings
        </h2>

        {/* Description */}
        <p className="mt-2 max-w-[760px] text-[20px] leading-[1.8] text-[#5c6470]">
          We don't just show your business — we actively generate high-intent
          inquiries and send them directly to you.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;

            return (
           <div
  key={item.title}
  className="group relative overflow-hidden rounded-2xl border border-[#dddddd] bg-white px-8 py-5 transition-all duration-500 hover:-translate-y-3 hover:border-[#e56d2e] hover:shadow-[0_20px_50px_rgba(229,109,46,0.15)]"
>
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#fff7f2] via-transparent to-[#fff0e8] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  <div className="relative z-10">
    {/* Icon */}
    <div className="mb-4 flex h-[44px] w-[44px] items-center justify-center rounded-xl border border-[#e56d2e] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#e56d2e]">
      <Icon
        size={20}
        strokeWidth={3}
        className="text-[#e56d2e] transition-all duration-500 group-hover:text-white"
      />
    </div>

    {/* Title */}
    <h3 className="mb-2 text-[20px] font-medium text-[#111827] transition-colors duration-300 group-hover:text-[#e56d2e]">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-[17px] leading-[1.9] text-black/80 transition-all duration-300 group-hover:text-black">
      {item.description}
    </p>
  </div>
</div>
            );
          })}
        </div>
      </div>
    </section>


{/* section 6 */}


 <section className="bg-[#f6f6f5] py-10">
  <div className="mx-auto flex flex-col items-center ">

    {/* Label */}
    <div className="mb-3 flex items-center gap-2">
      <div className="h-px w-5 bg-[#e86c2f]" />
      <span className="text-[13px] font-medium uppercase tracking-[3px] text-[#e86c2f]">
        Your Positioning
      </span>
    </div>

    {/* Heading */}
    <h2 className=" text-center text-[46px] font-medium leading-[1.1] tracking-[-0.04em] text-[#1D3A76]">
      Stop selling on price. Start building a brand.
    </h2>

    {/* Description */}
    <p className="mt-3 max-w-[960px] text-center text-[18px] leading-[2] text-[#5c6470]">
      On traditional platforms you are a commodity. On Inquiry Bazaar,
      you are a trusted brand.
    </p>

    {/* Comparison Cards */}
    <div className="mx-auto mt-5 grid  grid-cols-1 gap-4 lg:grid-cols-2">
      
      {/* Left Card */}
      <div className="rounded-[16px] border border-[#dddddd] bg-white px-[30px] py-[20px]">
        <div className="inline-flex rounded-[8px] bg-[#f7ece8] px-4 py-2">
          <span className="text-[13px] font-medium uppercase tracking-[2px] text-[#b13f2d]">
            Traditional Platforms
          </span>
        </div>

        <h3 className="mt-3 text-[22px] font-medium text-[#0a0a0a]">
          You are a commodity
        </h3>

        <ul className="mt-4 space-y-3">
          {traditionalItems.map((item) => (
            <li key={item} className="flex items-center gap-4">
              <X
                size={16}
                strokeWidth={2}
                className="shrink-0 text-[#e04d39]"
              />
              <span className="text-[17px] text-[#4f5661]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Card */}
      <div className="rounded-[16px] border border-[#f0a57f] bg-white px-[30px] py-[20px]">
        <div className="inline-flex rounded-[8px] bg-[#f4ece7] px-4 py-2">
          <span className="text-[13px] font-medium uppercase tracking-[2px] text-[#c85e29]">
            Inquiry Bazaar
          </span>
        </div>

        <h3 className="mt-3 text-[22px] font-medium text-[#0a0a0a]">
          You are a brand
        </h3>

        <ul className="mt-3 space-y-3">
          {brandItems.map((item) => (
            <li key={item} className="flex items-center gap-4">
              <Check
                size={16}
                strokeWidth={2}
                className="shrink-0 text-[#0d7b4b]"
              />
              <span className="text-[17px] text-[#4f5661]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>


    {/* sectuin7 */}

    <section className="bg-[#f6f6f5] py-[20px]">
  <div className="mx-auto flex w-full  flex-col items-center px-6">

    {/* Section Label */}
    <div className="mb-2 flex items-center gap-2">
      <div className="h-px w-5 bg-[#eb6425]" />
      <span className="text-[13px] font-medium uppercase tracking-[3px] text-[#eb6425]">
        Real Business Impact
      </span>
    </div>

    {/* Heading */}
    <h2 className=" text-center text-[56px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1D3A76]">
      What this means for your business
    </h2>

    {/* Description */}
    <p className="mt-3  text-center text-[18px] leading-[2] text-black">
      Switching to Inquiry Bazaar is a growth strategy upgrade — not just a
      platform change.
    </p>

    {/* Cards Grid */}
    <div className="mx-auto mt-[20px] grid px-20 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {impacts.map((item, index) => {
        const Icon =
          typeof item.icon !== "string" ? item.icon : null;

        return (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-[16px]
              border
              border-[#dddddd]
              bg-white
              px-7
              pt-7
              pb-8
            "
          >
            {/* Sliding Background */}
            <div
              className="
                absolute
                inset-0
                origin-top
                scale-y-0
                bg-[#eb6425]/50
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-y-100
              "
            />

            {/* Top Border */}
            <div className="absolute left-0 top-0 h-[3px] w-full bg-[#eb6425]" />

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-5 flex h-[42px] items-center justify-center">
                {typeof item.icon === "string" ? (
                  <span
                    className="
                      text-[42px]
                      font-light
                      leading-none
                      text-[#eb6425]
                      transition-colors
                      duration-500
                      group-hover:text-white
                    "
                  >
                    {item.icon}
                  </span>
                ) : (
                  <Icon
                    size={34}
                    strokeWidth={2}
                    className="
                      text-[#eb6425]
                      transition-colors
                      duration-500
                      group-hover:text-white
                    "
                  />
                )}
              </div>

              <h3
                className="
                  text-center
                  text-[18px]
                  font-medium
                  text-[#070707]
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-center
                  text-[17px]
                  leading-[1.8]
                  text-[#616977]
                  transition-colors
                  duration-500
                  group-hover:text-white/90
                "
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>


{/* section 8 */}




  <section className="bg-white py-[22px]">
      <div className="mx-auto flex w-full flex-col items-center px-6">

        {/* Label */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-5 bg-[#eb6425]" />
          <span className="text-[13px] font-medium uppercase tracking-[3px] text-[#eb6425]">
            Transparency
          </span>
        </div>

        {/* Heading */}
        <h2 className=" text-center text-[56px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1D3A76]">
          100% transparent. 100% yours.
        </h2>

        {/* Description */}
        <p className="mt-4  text-center text-[18px] leading-[2] text-black">
          Unlike other platforms, we don't control your business, your leads,
          or your customer relationships.
        </p>

        {/* Cards */}
        <div className="mt-5 grid w-full px-20 grid-cols-1 gap-4 md:grid-cols-2">
          {transparencyItems.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[16px]
                border
                border-[#dddddd]
                bg-white
                p-5
              "
            >
              {/* Hover Fill Animation */}
              <div
                className="
                  absolute
                  inset-0
                  origin-top
                  scale-y-0
                  bg-[#dff5e8]
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-y-100
                "
              />

              <div className="relative z-10 flex gap-4">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#9fd6b7]
                    bg-[#dff5e8]
                    transition-all
                    duration-500
                  "
                >
                  <Check
                    size={16}
                    className="text-[#0f7b4f]"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="
                      text-[18px]
                      font-medium
                      text-[#070707]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[15px]
                      leading-[1.8]
                      text-black
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


{/* section 9 */}

  <section className="bg-[#f6f6f5] py-10">
      <div className="mx-auto max-w-[1440px] px-6">

        {/* Label */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-5 bg-[#eb6425]" />
          <span className="text-[13px] uppercase tracking-[3px] text-[#eb6425]">
            Real Businesses. Real Results.
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-5 text-[56px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1D3A76]">
          What our sellers say
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          loop
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="h-full rounded-[16px] border border-[#dddddd] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                {/* Stars */}
                <div className="mb-5 flex gap-1 text-[#d98a17]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Review */}
                <p className="min-h-[150px] text-[18px] italic leading-[1.9] text-[#434343]">
                  "{item.review}"
                </p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#eb6425]
                      text-sm
                      font-medium
                      text-[#eb6425]
                    "
                  >
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="text-[18px] font-medium text-black">
                      {item.name}
                    </h4>

                    <p className="text-[16px] text-[#7c8794]">
                      {item.company}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>


{/* section 10 */}

<section className="bg-[#f6f6f5] py-12">
  <div className="mx-auto w-full px-[44px]">
    {/* Header */}
    <div className="mb-4 flex items-center gap-2">
      <div className="h-px w-5 bg-[#eb6425]" />
      <span className="text-[13px] uppercase tracking-[3px] text-[#eb6425]">
        COMMON QUESTIONS
      </span>
    </div>

    <h2 className="text-[56px] font-medium leading-[1.08] tracking-[-0.04em] text-[#1D3A76]">
      Objections answered honestly
    </h2>

    <p className="mt-4 text-[18px] text-[#1D3A76]">
      Real questions from businesses evaluating Inquiry Bazaar —
      answered straight.
    </p>

    {/* FAQ + FORM */}
    <div className="mt-8 flex flex-col gap-8 xl:flex-row">
      
      {/* FAQ */}
      <div className="w-full xl:max-w-[860px]">
        <div className="overflow-hidden rounded-[16px] border border-[#dddddd] bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#dddddd] last:border-b-0"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left"
                >
                  <span className="text-[18px] font-medium text-black">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <X
                      size={18}
                      strokeWidth={2}
                      className="text-[#eb6425]"
                    />
                  ) : (
                    <Plus
                      size={18}
                      strokeWidth={2}
                      className="text-[#9aa0a6]"
                    />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="flex gap-6">
                        <div className="w-[3px] bg-[#eb6425]" />

                        <p className="max-w-[700px] text-[17px] leading-[2] text-[#616977]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* FORM */}
<form onSubmit={handleSubmit} className="space-y-5">
  <div className="rounded-[18px] border border-[#ececec] bg-gradient-to-b from-[#fffaf7] to-white p-5">

    {/* Name */}
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-[#2b2b2b]">
        Full Name
      </label>

      <div className="relative">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="h-[58px] w-full rounded-xl border border-[#e4e4e4] bg-white px-4 text-[15px] shadow-sm transition-all outline-none focus:border-[#eb6425] focus:ring-4 focus:ring-[#eb6425]/10"
        />
      </div>
    </div>

    {/* Company */}
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-[#2b2b2b]">
        Company Name
      </label>

      <input
        type="text"
        name="companyName"
        value={form.companyName}
        onChange={handleChange}
        placeholder="Your company name"
        className="h-[58px] w-full rounded-xl border border-[#e4e4e4] bg-white px-4 text-[15px] shadow-sm transition-all outline-none focus:border-[#eb6425] focus:ring-4 focus:ring-[#eb6425]/10"
      />
    </div>

    {/* Phone */}
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-[#2b2b2b]">
        Mobile Number
      </label>

      <div className="flex overflow-hidden rounded-xl border border-[#e4e4e4] bg-white shadow-sm">
        <div className="flex items-center border-r bg-[#fafafa] px-4 font-medium text-[#555]">
          +91
        </div>

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter mobile number"
          className="h-[58px] w-full px-4 outline-none"
        />
      </div>
    </div>

    {/* Requirement */}
    <div>
      <label className="mb-2 block text-sm font-medium text-[#2b2b2b]">
        Tell us what you need
      </label>

      <textarea
        name="requirement"
        value={form.requirement}
        onChange={handleChange}
        placeholder="Describe your product, quantity, location, specifications or any requirement..."
        rows={5}
        className="w-full rounded-xl border border-[#e4e4e4] bg-white px-4 py-4 text-[15px] shadow-sm transition-all outline-none resize-none focus:border-[#eb6425] focus:ring-4 focus:ring-[#eb6425]/10"
      />
    </div>

    {/* Trust Points */}
    <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#666]">
      <span className="rounded-full bg-[#f7f7f7] px-3 py-1">
        ✓ Verified Leads
      </span>

      <span className="rounded-full bg-[#f7f7f7] px-3 py-1">
        ✓ Quick Response
      </span>

      <span className="rounded-full bg-[#f7f7f7] px-3 py-1">
        ✓ Genuine Buyers
      </span>
    </div>
  </div>

  {/* CTA */}
  <button
    type="submit"
    disabled={loading}
    className="group relative h-[62px] w-full overflow-hidden rounded-2xl bg-[#eb6425] text-[18px] font-semibold text-white shadow-[0_15px_40px_rgba(235,100,37,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9571f]"
  >
    <span className="relative z-10">
      {loading
        ? "Submitting..."
        : "Get My First Exclusive Lead"}
    </span>

    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
  </button>

  <p className="text-center text-xs text-[#7a828f]">
    By submitting this form, you agree to receive calls and messages regarding your business requirements.
  </p>
</form>



    </div>
  </div>
</section>


{/* section 11 */}
 <section className="bg-black py-[26px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 text-center">
        
        {/* Heading */}
        <h2 className="max-w-[700px] text-[64px] font-medium leading-[1.05] tracking-[-0.04em] text-white">
          Don't just get leads.
          <br />
          <span className="text-[#F27A1B]">Get results.</span>
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-[760px] text-[18px] leading-[1.9] text-white">
          Join businesses moving beyond traditional marketplaces and
          building real, lasting growth systems with Inquiry Bazaar.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          {/* Primary CTA */}

<a href="https://seller.inquirybazaar.com/register">



          <button
            className="
          
              rounded-[12px]
              bg-[#eb6425]
              px-4
              py-4
              text-[18px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#d9571f]
              hover:scale-[1.02]
            "
          >
            Get exclusive leads now
          </button>
</a>



<a href="tel:+917303486777">
    {/* Secondary CTA */}
          <button
            className="
              min-w-[255px]
              rounded-[12px]
              border
              border-[#2a2a2a]
              bg-transparent
              px-4
              py-4
              text-[18px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:border-[#444]
              hover:bg-white/5
            "
          >
            Book free strategy call
          </button>

</a>

      
        </div>
      </div>
    </section>

    </div>
  )
}

export default page