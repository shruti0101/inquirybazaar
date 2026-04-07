"use client";


export default function VideoSection() {
  return (
    <section className="w-full bg-white py-5">
      <div className="w-full px-4 md:px-10">
        {/* HEADING */}
        <div className="text-center mb-7">
       

          <h2 className="text-4xl  font-semibold text-black">
          ABOUT US

          </h2>
          <p>How to work B2B</p>

        </div>

        <div className="grid grid-cols-1 gap-6 px-20">
      

          {/* VIDEO 2 */}
          <div className="relative group rounded-xl overflow-hidden border border-white">
            {/* GLOW */}
            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition duration-500 z-10" />

            <iframe
              className="w-full  h-[260px] md:h-[390px]"
              src="https://www.youtube.com/embed/UaN-ZPn7Br4"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

    
    </section>
  );
}
