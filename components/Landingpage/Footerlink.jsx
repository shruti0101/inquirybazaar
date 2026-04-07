"use client";

export default function FooterLinksUI({ data }) {
  const renderLinks = (items) => (

    <section className="w-full">


    <div className="flex flex-wrap">
      {items?.map((item, i) => (
        <span key={i} className="flex items-center">
          <a href={item.link} className="hover:underline">
            {item.title}
          </a>
          {i !== items.length - 1 && (
            <span className="mx-3 text-gray-800">|</span>
          )}
        </span>
      ))}
    </div>
    </section>
  );

  return (
    <section className="w-full bg-gray-100 px-6 md:px-16 py-6 text-sm text-gray-800">

      <div className="mb-4">
        <h3 className="font-semibold text-black mb-1">
          SHOP ALL CATEGORIES
        </h3>
        {renderLinks(data?.categories)}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-black mb-1">
          SHOP ALL BRANDS
        </h3>
        {renderLinks(data?.brands)}
      </div>

      <div>
        <h3 className="font-semibold text-black mb-1">
          POPULAR SEARCHES
        </h3>
        {renderLinks(data?.searches)}
      </div>

    </section>
  );
}