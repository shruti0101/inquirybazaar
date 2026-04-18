"use client";

import {
  ShoppingCart,
  BadgeDollarSign,
  ShieldCheck,
  Users,
  Star,
  Lock,
} from "lucide-react";

export default function HeroInquiry() {
  return (
    <section className="bg-[#f7f8fa] relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f8fa] to-[#eef3f3]" />
      <div className="absolute inset-0 opacity-[0.25] bg-[url('/pattern.png')] bg-repeat"></div>

      <div className="relative px-4 sm:px-6 md:px-8 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-start max-w-7xl mx-auto">
        {/* ================= LEFT ================= */}
        <div>
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[46px] md:leading-[56px] font-bold text-[#1f2937]">
            We connect <br />
            <span className="text-[#10316C]">Buyers & Sellers</span>
          </h1>

          <p className="mt-3 text-[14px] sm:text-[15px] text-black max-w-full sm:max-w-[540px] leading-relaxed">
            Inquiry Bazaar is a premium B2B marketplace helping businesses
            discover verified buyers and trusted suppliers effortlessly.
          </p>

          {/* FEATURES */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
            <Feature
              icon={<ShoppingCart className="text-[#10316C]" size={22} />}
              title=" Buyer Assistance"
              subtitle="Seamless sourcing"
            />
            <Feature
              icon={<BadgeDollarSign className="text-[#10316C]" size={22} />}
              title="India’s Hybrid B2B Network"
              subtitle="Competitive pricing"
            />
            <Feature
              icon={<ShieldCheck className="text-[#10316C]" size={22} />}
              title=" Quick Response "
              subtitle="Full protection"
            />
            <Feature
              icon={<Users className="text-[#10316C]" size={22} />}
              title="  Get Genuine Inquiries"
              subtitle="Verified inquiries"
            />
          </div>

          {/* BOTTOM */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-gray-700 text-[13px] sm:text-[14px] border-t pt-5 md:pt-6">
            <div className="flex items-center gap-2">
              <Star size={14} className="text-[#10316C]" />
              Trusted by 100+ Businesses
            </div>

            <div className="flex items-center gap-2">
              <Lock size={14} className="text-[#10316C]" />
              Safe & Secure
            </div>
          </div>
        </div>

   
        <div className="md:pl-4 lg:pl-6">
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200 p-5 sm:p-6 md:p-8">
            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-black leading-snug">
              Tell us what you need
            </h2>

            <p className="text-sm text-black mt-1">
              Get quotes from verified suppliers
            </p>

            <form
              action="/api/enquiry"
              method="POST"
              className="mt-5 md:mt-6 space-y-4"
            >
              <input
                name="product"
                type="text"
                placeholder="Product / Service"
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] focus:ring-2 focus:ring-[#2a7f7f] outline-none"
                required
              />

              <div className="flex rounded-lg overflow-hidden border border-gray-300">
                <span className="px-3 sm:px-4 flex items-center bg-gray-100 text-gray-600 text-sm">
                  +91
                </span>
                <input
                  name="mobile"
                  type="tel"
                  placeholder="Mobile number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#10316C] to-[#10316C] hover:opacity-90 text-white py-2.5 sm:py-3 rounded-lg text-[15px] sm:text-[17px] font-semibold shadow-md transition"
              >
                Submit Requirement
              </button>
            </form>

            {/* BENEFITS */}
            <div className="mt-5 md:mt-6 space-y-2 md:space-y-3 text-[13px] sm:text-[14px]">
              <div className="flex items-center gap-2 text-gray-600">
                <ShieldCheck size={14} className="text-[#10316C]" />
                100% genuine inquiries
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Users size={14} className="text-[#10316C]" />
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
        <p className="text-[14px] sm:text-[15px] font-semibold text-gray-800">
          {title}
        </p>
        <p className="text-[12px] sm:text-[13px] text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
