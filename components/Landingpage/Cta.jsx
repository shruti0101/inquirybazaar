"use client";

import {
  ShoppingCart,
  BadgeDollarSign,
  ShieldCheck,
  Users,
  Star,
  MessageCircle,
  Lock
} from "lucide-react";

export default function HeroInquiry() {
  return (
    <section className="bg-[#f7f8fa] relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f8fa] to-[#eef3f3]" />
      <div className="absolute inset-0 opacity-[0.25] bg-[url('/pattern.png')] bg-repeat"></div>

      <div className="relative px-6 py-6 grid md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">

        {/* ================= LEFT ================= */}
        <div>

          <h1 className="text-[40px] leading-[56px] font-bold text-[#1f2937]">
            We connect <br />
            <span className="text-[#10316C]">Buyers & Sellers</span>
          </h1>

          <p className="mt-2 text-[15px] text-black max-w-[540px] leading-relaxed">
            Inquiry Bazaar is a premium B2B marketplace helping businesses discover verified buyers and trusted suppliers effortlessly.
          </p>

          {/* FEATURES */}
          <div className="mt-5 grid grid-cols-2 gap-8">

            <Feature icon={<ShoppingCart className="text-[#10316C]"  size={26} />} title=" Buyer Assistance" subtitle="Seamless sourcing" />
            <Feature icon={<BadgeDollarSign className="text-[#10316C]" size={26} />} title="India’s Hybrid B2B Network" subtitle="Competitive pricing" />
            <Feature icon={<ShieldCheck className="text-[#10316C]" size={26} />} title=" Quick Response Guarantee" subtitle="Full protection" />
            <Feature icon={<Users className="text-[#10316C]" size={26} />} title="  Get Genuine Inquiries" subtitle="Daily inquiries" />

          </div>

          {/* BOTTOM */}
          <div className="mt-12 flex flex-wrap gap-6 text-gray-700 text-[14px] border-t pt-6">

            <div className="flex items-center gap-2">
              <Star size={16} className="text-[#10316C]" />
              Trusted by 100+ Businesses
            </div>

            <div className="flex items-center gap-2">
              <Lock size={16} className="text-[#10316C]" />
              Safe & Secure
            </div>

          

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="md:pl-6">

          <div className="bg-white/80 backdrop-blur-lg border border-gray-200  p-8">

            <h2 className="text-[28px] font-semibold text-black leading-snug">
              Tell us what you need
            </h2>

            <p className="text-sm text-black mt-1">
              Get quotes from verified suppliers
            </p>

            <form
              action="/api/enquiry"
              method="POST"
              className="mt-6 space-y-4"
            >
              <input
                name="product"
                type="text"
                placeholder="Product / Service"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:ring-2 focus:ring-[#2a7f7f] outline-none"
                required
              />

              <div className="flex rounded-lg overflow-hidden border border-gray-300">
                <span className="px-4 flex items-center bg-gray-100 text-gray-600 text-sm">
                  +91
                </span>
                <input
                  name="mobile"
                  type="tel"
                  placeholder="Mobile number"
                  className="w-full px-4 py-3 text-[15px] outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#10316C] to-[#10316C] hover:opacity-90 text-white py-3 rounded-lg text-[17px] font-semibold shadow-md transition"
              >
                Submit Requirement
              </button>
            </form>

            {/* BENEFITS */}
            <div className="mt-6 space-y-3 text-[14px]">

              <div className="flex items-center gap-2 text-gray-600">
                <ShieldCheck size={16} className="text-[#10316C]" />
                100% genuine inquiries
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Users size={16} className="text-[#10316C]" />
                Verified business leads
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-[#2a7f7f]/10 text-[#2a7f7f]">
        {icon}
      </div>
      <div>
        <p className="text-[15px] font-semibold text-gray-800">{title}</p>
        <p className="text-[13px] text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}