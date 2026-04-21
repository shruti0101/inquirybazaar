"use client";

export default function FooterLinksUI({ data }) {
  const renderLinks = (items) => (
    <section className="w-full">
      <div className="flex flex-wrap gap-y-2">
        {items?.map((item, i) => (
          <span
            key={i}
            className="flex items-center flex-wrap min-w-0"
          >
            <a
              href={item.link}
              className="hover:underline break-words"
            >
              {item.title}
            </a>

            {i !== items.length - 1 && (
              <span className="mx-2 sm:mx-3 text-gray-500">|</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );

  return (
    <section className="w-full bg-gray-100 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 text-xs sm:text-sm text-gray-800 leading-relaxed">

      {/* CATEGORIES */}
      <div className="mb-4 sm:mb-6 w-full">
        <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">
          SHOP ALL CATEGORIES
        </h3>

        <div className="capitalize w-full">
          {renderLinks(data?.categories)}
        </div>
      </div>

      {/* SEARCHES */}
      <div>
        <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">
          POPULAR SEARCHES
        </h3>
        {renderLinks(data?.searches)}
      </div>

    </section>
  );
}