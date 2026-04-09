"use client";

import { Factory, BarChart4, Focus , Globe } from "lucide-react";

export default function IndustrySection() {
  return (
    <section className="w-full py-8 px-4 bg-gradient-to-b from-[#f6e9e4] to-[#f3dfd6] relative overflow-hidden">
      
      {/* subtle stars */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full blur-sm"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-white rounded-full blur-sm"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-white rounded-full blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

       
       
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Card 1 */}
          <Card
            icon={<Factory className="w-8 h-8 text-orange-500" />}
            title="Har Industry, Har Category — Sab Yahan Hai"
            desc="Ek platform jahan har type ka business connect hota hai"
          />

          {/* Card 2 */}
          <Card
            icon={<BarChart4 className="w-8 h-8 text-orange-500" />}
            title="Chhota ho ya bada supplier — sabko equal growth"
            desc="Opportunity sabke liye same, growth aapke effort ke hisaab se"
          />

          {/* Card 3 */}
          <Card
            icon={<Focus className="w-8 h-8 text-orange-500" />}
            title="Jo aap bechte ho, uske buyers yahan milenge"
            desc="Right product ke liye right audience target ki jaati hai"
          />

          {/* Card 4 */}
          <Card
            icon={<Globe className="w-8 h-8 text-orange-500" />}
            title="India se lekar Global market tak reach"
            desc="Aapka business sirf local nahi, global level tak grow karega"
          />

        </div>
      </div>
    </section>
  );
}


/* Reusable Card */
function Card({ icon, title, desc }) {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 text-center">
      
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-xl bg-orange-50">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-md font-semibold text-gray-700 leading-snug mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        {desc}
      </p>
    </div>
  );
}