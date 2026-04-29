import React from "react";

const Exhibition = () => {
  const features = [
    {
      title: ["Google Top", "Placement"],
      desc: "Aapki category ke har search pe — aapka product sabse upar. Koi competitor pehle nahi dikhega. Exactly like an exhibition stall, but on Google.",
      icon: (
        <>
          <path
            d="M5 21l4-7 4 4 4-9 4 5"
            stroke="#F97316"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="4"
            y="4"
            width="18"
            height="17"
            rx="2"
            stroke="#F97316"
            strokeWidth="1.3"
          />
        </>
      ),
    },
    {
      title: ["State/City", "Targeting"],
      desc: "Surat ke textile buyers chahiye? Ya Delhi ke hardware dealers? Hum exactly usi geography ke buyers tak pahunchate hain. Zero wasted budget.",
      icon: (
        <>
          <path
            d="M13 3C7.5 3 3 7.5 3 13s4.5 10 10 10 10-4.5 10-10S18.5 3 13 3z"
            stroke="#F97316"
            strokeWidth="1.3"
          />
          <path
            d="M3 13h20M13 3c-2.5 2.5-4 6-4 10s1.5 7.5 4 10M13 3c2.5 2.5 4 6 4 10s-1.5 7.5-4 10"
            stroke="#F97316"
            strokeWidth="1.3"
          />
        </>
      ),
    },
    {
      title: ["Customised", "Inquiry Delivery"],
      desc: "Aap specify karo — product type, quantity, buyer type. Hum usi basis pe inquiries filter karke deliver karte hain. No junk, only relevant leads.",
      icon: (
        <>
          <path
            d="M5 8h16M5 13h10M5 18h7"
            stroke="#F97316"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect
            x="3"
            y="3"
            width="20"
            height="20"
            rx="3"
            stroke="#F97316"
            strokeWidth="1.3"
          />
        </>
      ),
    },
    {
      title: ["Direct", "Contact Visibility"],
      desc: "Inquiry Bazaar ka core promise — buyer ko aapka phone number aur email directly milta hai. Koi middleman nahi. Koi paid lead unlock nahi.",
      icon: (
        <>
          <path
            d="M6 20v-8l7-7 7 7v8"
            stroke="#F97316"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path
            d="M10 20v-5h6v5"
            stroke="#F97316"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </>
      ),
    },
    {
      title: ["Verified", "Buyer Leads"],
      desc: "Sirf serious buyers — jo actively Google pe search kar rahe hain. Exhibition jaisi random foot traffic nahi. Har inquiry ek genuine intent.",
      icon: (
        <>
          <circle cx="13" cy="10" r="5" stroke="#F97316" strokeWidth="1.3" />
          <path
            d="M5 22c0-4 3.6-7 8-7s8 3 8 7"
            stroke="#F97316"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </>
      ),
    },
    {
      title: ["WhatsApp + Email", "Alerts"],
      desc: "Jab bhi koi buyer inquiry kare — turant WhatsApp aur email alert. Koi inquiry miss nahi hogi. Exhibition mein koi card chod ke gaya ho toh? That doesn't happen here.",
      icon: (
        <>
          <path
            d="M4 8l9 7 9-7"
            stroke="#F97316"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="6"
            width="20"
            height="15"
            rx="3"
            stroke="#F97316"
            strokeWidth="1.3"
          />
        </>
      ),
    },
  ];
  const industries = [
    "Textile & Garments",
    "Industrial Machinery",
    "Agriculture & Farm Equipment",
    "Pharma & Healthcare",
    "Hardware & Tools",
    "Food & Beverages",
    "Electronics & Electricals",
    "Construction Materials",
    "Chemicals & Plastics",
    "Furniture & Interiors",
    "Packaging & Printing",
    "Auto Parts & Components",
  ];

  const metrics = [
    { label: "Google Search Position", value: "#1–3" },
    { label: "Avg. Inquiries / Month", value: "30–200+" },
    { label: "States Reachable", value: "All 28" },
    { label: "Cost vs. Exhibition", value: "80% Less" },
    { label: "Visibility Duration", value: "365 Days" },
  ];

  const points = [
    {
      title: "Transparency First",
      desc: "India ka pehla B2B marketplace jahan buyer ko supplier ka direct contact milta hai. Koi paid unlock nahi.",
    },
    {
      title: "Category-Specific Google Ads",
      desc: "Generic ads nahi — aapki exact product category pe targeted Google Ads.",
    },
    {
      title: "Zero Middleman. Full Control.",
      desc: "Buyer se aapka direct connection. Inquiry aaye — aap directly deal karo.",
    },
    {
      title: "MSME-Friendly Pricing",
      desc: "Budget ke hisab se plans — ek stall ke cost me full saal ki visibility.",
    },
  ];

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      ></link>

      {/* Styles */}
      <style>{`
        
            .syne-font {
            font-family: "Syne", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            line-height: 1.05;
            letter-spacing: -0.03em;
            }
            .syne-2{
            font-family: 'Syne', sans-serif;
            font-size: 32px;
            font-weight: 800;
            }
            .syne-3{
            font-family: 'Syne', sans-serif;
            
            }
            
      `}</style>

      <section className="mt-22 md:mt-34 relative  flex flex-col items-center justify-center text-center px-6 pt-10 pb-4 overflow-hidden bg-[#0F172A] text-white">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(249,115,22,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_40%_at_10%_90%,rgba(30,41,59,0.9)_0%,transparent_60%)]"></div>

        {/* Grid Lines */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(249,115,22,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.06)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

       

        {/* Heading */}
        <h1 className="slide-up relative syne-font z-10 font-extrabold leading-tight tracking-tight text-[clamp(36px,6vw,72px)]">
          <span className="block text-white">Your Business,</span>
          <span className="block text-orange-500">Everywhere Online.</span>
          <span className="block text-white">Every Buyer. Every State.</span>
        </h1>

        {/* Hinglish Line */}
        <p className="relative slide-up z-10 syne-3  mt-4 text-[clamp(13px,2vw,17px)] font-bold uppercase tracking-widest text-yellow-400">
          ✦ Exhibition Se Google Tak — Har Jagah Bas Aap ✦
        </p>

        {/* Subtext */}
        <p className=" slide-up relative z-10 mt-6 max-w-xl text-gray-400 text-[16px] leading-relaxed">
          Pehle suppliers apna product showcase karne ke liye states me jaate
          the, exhibitions lagate the. Ab wahi visibility — bina stall ke, bina
          travel ke — sirf Google pe, 24/7.
        </p>

        {/* CTA Buttons */}
        <div className="slide-up relative z-10 mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium"
          >
            Apni Visibility Start Karo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href=""
            className="px-6 py-3 border border-white/20 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition"
          >
            See How It Works
          </a>
        </div>

        {/* Scroll Hint */}
        <div className=" mt-4 flex flex-col items-center  gap-1 text-[11px] text-gray-400 uppercase tracking-widest">
          <div className="w-[1px] h-10 bg-gradient-to-b from-orange-500 to-transparent"></div>
          Scroll
        </div>
      </section>

      <section>
        <div className="w-full  bg-[#0F172A]  text-white border-y border-white/10 font-['DM_Sans'] overflow-x-hidden">
          <div className="flex flex-wrap justify-center">
            {/* Item 1 */}
            <div className="flex-1 min-w-[140px] max-w-[220px] text-center px-6 py-4 border-r border-white/10 last:border-none">
              <div className="text-3xl syne-2 font-extrabold text-orange-500">
                28+
              </div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide">
                States Covered
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex-1 min-w-[140px] max-w-[220px] text-center px-6 py-4 border-r border-white/10 last:border-none">
              <div className="text-3xl syne-2 font-extrabold text-orange-500">
                10x
              </div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide">
                More Visibility vs Exhibition
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex-1 min-w-[140px] max-w-[220px] text-center px-6 py-4 border-r border-white/10 last:border-none">
              <div className="text-3xl syne-2 font-extrabold text-orange-500">
                24/7
              </div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide">
                Google Pe Active
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex-1 min-w-[140px] max-w-[220px] text-center px-6 py-4">
              <div className="text-3xl syne-2 font-extrabold text-orange-500">
                100%
              </div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide">
                Customised Inquiry Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] text-white px-6 py-10">
        {/* CONTAINER */}
        <div className="max-w-[1100px] text-start mx-auto text-center">
          {/* TOP TEXT */}
          <p className="text-[#F97316] text-start font-sm mb-3">THE PROCESS</p>

          <h2 className="text-3xl  syne-font md:text-5xl font-bold leading-snug">
            Ek Exhibition Ka Budget.
            <br />
            <span className="text-gray-400 text-orange-500">
              Google Pe Saal Bhar Ki Presence.
            </span>
          </h2>

          <p className="text-gray-400 text-start mt-4 text-sm md:text-lg max-w-xl ">
            Koi stall nahi. Koi travel nahi. Koi waiting nahi. Sirf buyers —
            jinhe aapka product chahiye.
          </p>

          {/* GRID */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
              {/* CARD 1 */}
              <div className="p-6 bg-[#1E293B] border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.08)] hover:bg-orange-300/20 transition duration-300">
                <div className="text-[#F97316]/20 text-[48px] syne-font font-bold mb-2">
                  01
                </div>

                <div className="mb-3 bg-orange-300/20 w-fit p-2 rounded-xl">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="16"
                      height="16"
                      rx="3"
                      stroke="#F97316"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 11h8M7 7.5h5M7 14.5h3"
                      stroke="#F97316"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold mb-2">
                  Aap Apni Category Choose Karo
                </h3>

                <p className="text-sm text-gray-400">
                  Textile, Machinery, Agriculture, Pharma — jo bhi aapka product
                  ho, hum usi category pe Google Ads run karte hain
                  specifically..
                </p>
              </div>

              {/* CARD 2 */}
              <div className="p-6 bg-[#1E293B] border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.08)] hover:bg-orange-300/20 transition duration-300">
                <div className="text-[#F97316]/20 text-[48px] syne-font font-bold mb-2">
                  02
                </div>

                <div className="mb-3 bg-orange-300/20 w-fit p-2 rounded-xl">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle
                      cx="11"
                      cy="11"
                      r="8"
                      stroke="#F97316"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 11l2 2 4-4"
                      stroke="#F97316"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold mb-2">
                  Hum Google Pe Top Pe Dikhate Hain
                </h3>

                <p className="text-sm text-gray-400">
                  Google Search pe jab bhi koi buyer aapki category search kare
                  — aapka product sabse pehle dikhega. Virtually, like an
                  exhibition stall on Google.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="p-6 bg-[#1E293B] border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.08)] hover:bg-orange-300/20 transition duration-300">
                <div className="text-[#F97316]/20 syne-font text-[48px] font-bold mb-2">
                  03
                </div>

                <div className="mb-3 bg-orange-300/20 w-fit p-2 rounded-xl">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M4 4h6v6H4zM12 4h6v6h-6zM4 12h6v6H4z"
                      stroke="#F97316"
                      strokeWidth="1.3"
                    />
                    <circle
                      cx="15"
                      cy="15"
                      r="3"
                      stroke="#F97316"
                      strokeWidth="1.3"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold mb-2">State & City Filter Karo</h3>

                <p className="text-sm text-gray-400">
                  Pan-India chahiye ya sirf Gujarat, Maharashtra, Delhi? Aap
                  choose karo — hum usi geography ke buyers tak aapko pahunchate
                  hain.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="p-6 bg-[#1E293B] hover:bg-orange-300/20 transition duration-300">
                <div className="text-[#F97316]/20 syne-font text-[48px] font-bold mb-2">
                  04
                </div>

                <div className="mb-3 bg-orange-300/20 w-fit p-2 rounded-xl">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M4 17l4-4 3 3 4-5 4 2"
                      stroke="#F97316"
                      strokeWidth="1.3"
                    />
                    <rect
                      x="3"
                      y="3"
                      width="16"
                      height="14"
                      rx="2"
                      stroke="#F97316"
                      strokeWidth="1.3"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold mb-2">
                  Customised Inquiries Deliver
                </h3>

                <p className="text-sm text-gray-400">
                  Sirf relevant buyers ki inquiries — as per aapki requirement.
                  No junk leads. Direct phone & email visibility for maximum
                  conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1E293B] border-y border-[rgba(255,255,255,0.08)] px-6 py-12 text-white">
        <div className="max-w-[1100px] mx-auto">
          {/* TOP TEXT */}
          <p className="text-orange-500 text-md font-light mb-3">THE SHIFT</p>

          <h2 className="text-3xl syne-font md:text-5xl font-bold mb-3">
            Exhibition vs.{" "}
            <span className="text-orange-500">Inquiry Bazaar</span>
          </h2>

          <p className="text-gray-400 mb-12">
            Ek baar ka event vs. 365 din ki visibility. Aap khud decide karo.
          </p>

          {/* COMPARE GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT CARD (OLD) */}
            <div className=" border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <div className="flex items-center tracking-wider p-2 \ rounded-full w-fit bg-gray-100/20 gap-2 text-gray-400 mb-4 text-xs">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    stroke="#94A3B8"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M5 9l4-4M9 9L5 5"
                    stroke="#94A3B8"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                PHELE WALA TARIQA
              </div>

              <h3 className="text-2xl syne-font leading-snug font-semibold mb-4">
                Exhibition / Trade Fair
              </h3>

              <ul className="space-y-4 text-gray-300 text-sm">
                {[
                  "₹50,000–₹5,00,000 ka stall + travel + stay",
                  "Sirf 3–5 din ki visibility",
                  "Limited geography — ek city, ek event",
                  "Walk-in buyers — sab interested nahi hote",
                  "No data — kaun aaya, kya dekha, pata nahi",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="#475569"
                        strokeWidth="1"
                      />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="#E2E8F0"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT CARD (NEW) */}
            <div className="bg-orange-500/20 border border-orange-500/70 rounded-xl p-6 relative overflow-hidden">
              {/* subtle glow */}
              <div className="absolute inset-0 bg-orange-500/5 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 p-2  rounded-full w-fit bg-orange-100/20 text-orange-400 mb-4 text-xs">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="7"
                      cy="7"
                      r="6"
                      stroke="#F97316"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M4 7l2 2 4-4"
                      stroke="#F97316"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  INQUIRY BAZAAR WAY
                </div>

                <h3 className="text-2xl syne-font  font-semibold mb-4">
                  Google Pe Virtual Stall —
                  <br />
                  <span className="text-orange-500 ">365 Din, 24/7</span>
                </h3>

                <ul className="space-y-4 text-gray-300 text-sm">
                  {[
                    "Exhibition ke fraction pe — full year ki Google visibility",
                    "365 din, 24 ghante active — koi break nahi",
                    "Pan-India reach — ya specific state/city filter",
                    "Only high-intent buyers — jo actively search kar rahe hain",
                    "Full analytics — kitne log dekhe, kitne inquiries aayi",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          fill="rgba(249,115,22,0.15)"
                          stroke="#F97316"
                          strokeWidth="1"
                        />
                        <path
                          d="M5 8l2 2 4-4"
                          stroke="#F97316"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] text-white px-6 py-4 md:py-12">
        <div className="max-w-[1100px] mx-auto text-start">
          {/* TOP */}
          <p className="text-orange-500 text-sm tracking-wider font-light mb-3">WHAT YOU GET</p>

          <h2 className="text-3xl syne-font md:text-5xl font-bold leading-snug">
            Ek Platform.
            <br />
            <span className="text-orange-400">Poori Digital Exhibition.</span>
          </h2>

          <p className="text-gray-400  mt-4 max-w-xl ">
            Every feature designed to replace exhibitions — and do it better.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 md:mt-14">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-[#1E293B] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 text-left hover:-translate-y-1 hover:border hover:border-orange-500 hover:shadow-lg transition duration-300"
              >
                {/* ICON */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-400/10 border border-[rgba(255,255,255,0.08)]">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    {feat.icon}
                  </svg>
                </div>

                {/* TITLE */}
                <h3 className="font-semibold mb-2 text-lg">
                  <span className="text-orange-500">{feat.title[0]}</span>{" "}
                  {feat.title[1]}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-400">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E293B] text-white px-6 py-6">
        <div className="max-w-[1100px] mx-auto text-center">
          {/* TOP */}
          <p className="text-orange-400 tracking-wider text-sm font-md mb-3">INDUSTRIES WE SERVE</p>

          <h2 className="text-3xl syne-font md:text-5xl font-bold mb-5 md:mb-10">
            Aapki Category{" "}
            <span className="text-orange-500">Already Listed Hai</span>
          </h2>

          {/* GRID */}
          <div className="flex flex-wrap justify-center gap-3  md:pb-9">
            {industries.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] border border-[rgba(255,255,255,0.08)] rounded-full text-sm text-gray-300 hover:bg-orange-400/10 hover:border-orange-500 hover:text-white transition"
              >
                {/* DOT */}
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>

                {/* TEXT */}
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E293B] border-t border-[rgba(255,255,255,0.08)] px-6 py-6 text-white">
        <div className="max-w-[1100px] mx-auto">
          {/* TOP */}
          <p className="text-orange-500 tracking-wider text-sm font-md mb-3">Why Inquiry Bazaar</p>

          <h2 className="text-3xl syne-font md:text-5xl font-bold mb-4 md:mb-9">
            Numbers Jo{" "}
            <span className="text-orange-500">Convince Karte Hain</span>
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT: METRICS */}
            <div className="bg-[#1E293B]border border border-gray-600 rounded-xl p-8">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                Live Performance Metrics
              </p>

              <div className="space-y-4">
                {metrics.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-center items-center border p-4 rounded-2xl border-[rgba(255,255,255,0.06)] bg-orange-400/10    "
                  >
                    <span className="text-gray-400 text-center text-sm">
                      {item.label}
                    </span>
                    <span className="text-orange-500 font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: POINTS */}
            <div className="space-y-6">
              {points.map((item, i) => (
                <div key={i} className="flex gap-4">
                  {/* NUMBER */}
                  <div className="text-orange-400/20 syne-font font-bold text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>    
        </div>
      </section>

      <section className="relative bg-[#0F172A] px-6 py-7 md:py-12 text-white overflow-hidden">
        {/* GLOW BACKGROUND */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <p className="text-orange-500 tracking-wider text-sm font-md mb-3">READY TO GO DIGITAL?</p>

          <h2 className="text-3xl syne-font md:text-6xl font-bold leading-tight mb-4">
            Ab Agle
            <br />
            Exhibition Ka
            <br />
            <span className="text-orange-500">Wait Mat Karo.</span>
          </h2>

          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Aaj se aapka Google pe virtual stall live ho sakta hai. Buyers
            search kar rahe hain — kya aap visible hain?
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* PRIMARY BUTTON */}
            <a
              href="https://www.inquirybazaar.com"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition"
            >
              List My Business Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* OUTLINE BUTTON */}
            <a
              href="https://www.inquirybazaar.com"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-orange-500 hover:text-orange-500 transition"
            >
              Talk to Our Team
            </a>
          </div>

          {/* NOTE */}
          <p className="text-sm text-gray-500 mt-6">
            ✦ Free listing available &nbsp;·&nbsp; GST invoice provided
            &nbsp;·&nbsp; Setup in 24 hours
          </p>
        </div>
      </section>

     
    </>
  );
};

export default Exhibition;
