export default function ShippingDeliveryPolicy() {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-16 mt-4 md:mt-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-[#eb6425]/10 px-4 py-2 text-sm font-semibold text-[#eb6425]">
            Policies
          </span>

          <h1 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Shipping & Delivery Policy
          </h1>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#eb6425]"></div>
        </div>

        {/* Content Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
          {/* Intro */}
          <p className="text-lg leading-8 text-gray-700">
            Inquiry Bazaar is an online platform that connects buyers and
            sellers. Inquiry Bazaar does not sell, pack, ship, deliver, or
            transport any products listed on the platform.
          </p>

          {/* Shipping Responsibility */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-[#0f172a]">
              Shipping Responsibility
            </h2>

            <p className="leading-8 text-gray-700">
              All shipping and delivery arrangements are managed solely by the
              respective seller. Products may be shipped by the seller through:
            </p>

            <ul className="mt-5 space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#eb6425]"></span>
                <span className="text-gray-700">
                  Their own logistics network, or
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#eb6425]"></span>
                <span className="text-gray-700">
                  Third-party courier and logistics service providers.
                </span>
              </li>
            </ul>
          </div>

          {/* Delivery Timeline */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-[#0f172a]">
              Delivery Timeline
            </h2>

            <p className="leading-8 text-gray-700">
              The estimated delivery time, if provided, is determined by the
              seller and may vary depending on the product, location,
              availability, and logistics partner. Buyers are advised to confirm
              delivery schedules directly with the seller before placing an
              order.
            </p>
          </div>

          {/* Shipping Charges */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-[#0f172a]">
              Shipping Charges
            </h2>

            <p className="leading-8 text-gray-700">
              Any shipping, handling, packing, freight, or logistics charges
              shall be determined by the seller and may vary based on:
            </p>

            <ul className="mt-5 space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#eb6425]"></span>
                <span className="text-gray-700">
                  Product type and quantity
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#eb6425]"></span>
                <span className="text-gray-700">Delivery location</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#eb6425]"></span>
                <span className="text-gray-700">
                  Shipping method selected
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#eb6425]"></span>
                <span className="text-gray-700">
                  Seller's shipping policies
                </span>
              </li>
            </ul>
          </div>

          {/* Delays */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-[#0f172a]">
              Delays & Delivery Issues
            </h2>

            <p className="leading-8 text-gray-700">
              Inquiry Bazaar shall not be responsible for any delays, damages,
              losses, failed deliveries, or other shipping-related issues. Any
              concerns regarding shipment status, delivery timelines, tracking
              information, or logistics charges must be addressed directly with
              the seller.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-2xl border border-[#eb6425]/20 bg-[#fff8f4] p-6">
            <h2 className="mb-4 text-2xl font-bold text-[#0f172a]">
              Disclaimer
            </h2>

            <p className="leading-8 text-gray-700">
              Inquiry Bazaar acts solely as a platform for facilitating business
              inquiries between buyers and sellers. Inquiry Bazaar does not
              assume any responsibility or liability for shipping, delivery,
              transportation, logistics services, or fulfillment of orders
              conducted between users of the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}