"use client";

import { useState } from "react";

export default function AboutPage({ content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="px-8 mt-3 bg-white">

      <div
        className={`prose max-w-none transition-all duration-300 overflow-hidden ${
          expanded ? "max-h-full" : "max-h-[620px]"
        }`}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {/* Button Wrapper */}
      <div className="flex justify-center w-full mt-4  py-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-6 py-2 rounded-full bg-gray-300 hover:bg-gray-200 text-gray-800 shadow-sm border border-gray-300 transition-all duration-200"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>

    </section>
  );
}