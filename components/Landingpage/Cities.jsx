"use client";

const cities = [
  {
    name: "Delhi",
    iconSrc: "/city/india-gate.webp",
  },
  {
    name: "Bengaluru",
    iconSrc: "/city/bangalore.webp",
  },
  {
    name: "Chennai",
    iconSrc: "/city/chennai.webp",
  },
  {
    name: "Mumbai",
    iconSrc: "/city/mumbai.webp",
  },
  {
    name: "Ahmedabad",
    iconSrc: "/city/Ahmedabad.webp",
  },
  {
    name: "Kolkata",
    iconSrc: "/city/kolkata.webp",
  },
  {
    name: "Pune",
    iconSrc: "/city/pune.webp",
  },
  {
    name: "Surat",
    iconSrc: "/city/surat.webp",
  },
  {
    name: "Jaipur",
    iconSrc: "/city/jaipur.webp",
  },
  {
    name: "Hyderabad",
    iconSrc: "/city/hyd.webp",
  },
];

export default function TopCities() {
  return (
    <>
       <h2 className="text-2xl font-semibold text-gray-900 mb-5">
        Find Suppliers from Top Cities
      </h2>
    <div className="w-full px-6 py-10 bg-white">

      {/* Title */}
   

      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-10 justify-center">

        {cities.map(({ name, iconSrc }) => (
          <div
            key={name}
            className="flex flex-col items-center text-center space-y-3"
          >
            {/* Icon with exact size and circular bg */}
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
              <img
                src={iconSrc}
                alt={`${name} icon`}
                className="max-w-[60px] max-h-[60px]"
                loading="lazy"
              />
            </div>

            {/* City name */}
            <p className="text-base font-normal text-gray-900">
              {name}
            </p>
          </div>
        ))}

      </div>
    </div>
    </>
  );
}