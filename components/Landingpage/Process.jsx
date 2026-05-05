"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "📝",
      title: "Post Your Requirement",
      desc: "Describe what you need — product, quantity, specs. It takes less than 2 minutes.",
    },
    {
      number: "02",
      icon: "🔍",
      title: "We Match Suppliers",
      desc: "Our system finds verified suppliers who match your exact requirement from our network.",
    },
    {
      number: "03",
      icon: "💬",
      title: "Receive Quotes",
      desc: "Get competitive quotes on your mobile and dashboard within hours — not days.",
    },
    {
      number: "04",
      icon: "🤝",
      title: "Close the Deal",
      desc: "Compare, negotiate, and close with confidence. All suppliers are GST-verified.",
    },
  ];

  return (
    <section className="bg-[#0e2347] py-4 md:py-10 px-4">
      <div className="max-w-[1200px] mx-auto text-center">

<p className="text-[#ec771c]">Simple Process</p>
        {/* TITLE */}
        <h2 className="text-white text-[25px] md:text-[42px] font-bold mb-12">
          How InquiryBazaar Works
        </h2>

        {/* STEPS */}
     {/* STEPS */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 relative">

  {steps.map((step, index) => (
    <div key={index} className="relative text-left">

      {/* BIG FADED NUMBER */}
      <span className="
        absolute 
        -top-6 md:-top-12 
        left-0 
        text-[50px] md:text-[90px] 
        font-bold text-white/5 select-none
      ">
        {step.number}
      </span>

      {/* ICON BOX */}
      <div className="
        w-[48px] h-[48px] md:w-[60px] md:h-[60px]
        rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
        flex items-center justify-center 
        text-[18px] md:text-[22px] 
        mb-3 md:mb-6 shadow-inner
      ">
        {step.icon}
      </div>

      {/* ARROW (ONLY DESKTOP) */}
      {index !== steps.length - 1 && (
        <div className="hidden md:block absolute top-[30px] right-[-35px] text-white/30 text-xl">
          →
        </div>
      )}

      {/* TITLE */}
      <h3 className="text-white text-[15px] md:text-[18px] font-semibold mb-2 md:mb-3 leading-tight">
        {step.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-white/80 text-[12px] md:text-[14px] leading-relaxed">
        {step.desc}
      </p>

    </div>
  ))}

</div>
      </div>
    </section>
  );
}