"use client";
import Link from "next/link"; 
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full pb-20 md:pb-0 text-[13px] leading-[1.4]">

      {/* TOP STRIP */}
      <div className="bg-[#1e3a5f] text-white px-4 sm:px-6 md:px-10 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ITEM */}
          <div className="flex gap-3 items-start">
            <Image src="/footer/bottom/imgi_99_helpline.webp" alt="Hybrid B2B Marketplace in India" width={100} height={100} className="h-[50px] w-auto object-contain"/>
            <div>
              <p className="font-semibold text-[15px]">Dedicated Support</p>
              <p>Call: +91 7303486777</p>
              <p>(Mon–Sun: 9am–8pm)</p>
              <p>Get quick assistance for all your business needs.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Image src="/footer/bottom/imgi_102_original-tag.webp" alt="Hybrid B2B Marketplace in India" width={100} height={100} className="h-[50px] w-auto object-contain"/>
            <div>
              <p className="font-semibold text-[15px]">Verified Suppliers Only</p>
              <p>Connect with trusted manufacturers & wholesalers. Every supplier is screened for quality and reliability.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Image src="/footer/bottom/imgi_100_box.webp" alt="Hybrid B2B Marketplace in India" width={100} height={100} className="h-[50px] w-auto object-contain"/>
            <div>
              <p className="font-semibold text-[15px]">Quick Response</p>
              <p>Get multiple quotations within hours of posting your requirement. Save time and close deals faster.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Image src="/footer/bottom/imgi_103_wallet-check.webp" alt="Hybrid B2B Marketplace in India" width={100} height={100} className="h-[47px] w-auto object-contain"/>
            <div>
              <p className="font-semibold text-[15px]">Wide Product Categories</p>
              <p>Explore lakhs of products across multiple industries. One platform for all your B2B sourcing needs.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Image src="/footer/bottom/imgi_103_wallet-check.webp" alt="Hybrid B2B Marketplace in India" width={100} height={100} className="h-[47px] w-auto object-contain"/>
            <div>
              <p className="font-semibold text-[15px]">Buyer Assistance</p>
              <p>Our team helps you find the right supplier at the best price. Hassle-free sourcing experience guaranteed.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Image src="/footer/bottom/imgi_104_secure-shield.webp" alt="Hybrid B2B Marketplace in India" width={100} height={100} className="h-[50px] w-auto object-contain"/>
            <div>
              <p className="font-semibold text-[15px]">Buyer Protection</p>
              <p>Committed to buyer interests to provide a smooth shopping experience.</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="font-semibold text-[15px] mb-2">Follow us on</p>
            <div className="flex gap-4 text-[16px]">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaPinterestP />
              <FaLinkedinIn />
            </div>
          </div>

        </div>
      </div>

      {/* GREEN SECTION */}
      <div className="bg-[#c9d8b6] px-4 sm:px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div>
            <p className="font-bold text-[15px] mb-3">COMPANY</p>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Become a Supplier</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[15px] mb-3">SISTER SITE</p>
            <ul className="space-y-1">
              <li>

              <a href="https://www.promozionebranding.com/">Promozione Branding</a>
              </li>
<li>


              <a href="https://www.promotionbranding.com/">Promotion Branding</a>
</li>

<li>


              <a href="https://promotebharat.com/">Promote Bharat</a>
</li>

<li>


              <a href="https://promotebharat.com/">Top 10 Digital Marketing Agency</a>
</li>

            </ul>
          </div>

          <div>
            <p className="font-bold text-[15px] mb-3">HELP</p>
            <ul className="space-y-1">
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><a href="mailto:care@inquirybazaar.com">Write to Management</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="bg-white rounded-[10px] p-4 shadow-sm w-full">
            <p className="text-[16px] font-semibold mb-3 text-center">
              Subscribe to Newsletter
            </p>

            <div className="flex flex-col sm:flex-row bg-[#f3f3f3] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 text-[13px] bg-transparent outline-none"
              />
              <button className="bg-black text-white text-[12px] px-4 py-2">
                SUBMIT NOW
              </button>
            </div>

            <p className="text-[12px] text-gray-600 mt-2 text-center">
              Sign up to get exclusive offers and updates
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#f2f2f2] px-4 sm:px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-[13px]">
        <p>Copyright@ Inquiry Bazaar Pvt Ltd. 2026 All Right Reserved</p>

        <Image
          src="/payment-options.webp"
          alt="Hybrid B2B Marketplace in India"
          width={450}
          height={400}
          className="w-full max-w-[250px] md:max-w-[350px] object-contain"
        />
      </div>

    </footer>
  );
}