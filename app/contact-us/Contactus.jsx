import React from 'react'

const Contactus = () => {
  return (
    <div>
     <section
  style={{ backgroundImage: "url(/bgcontact.png)" }}
  className="bg-cover bg-center h-[50vh]  md:h-[70vh] relative"
>

  <div className="relative z-10 flex h-full flex-col items-center mt-10 md:mt-20 justify-center text-center px-4">
    <h2 className="text-4xl md:text-6xl font-bold text-black">
      Contact Us
    </h2>

    <p className="mt-4 max-w-2xl text-black text-lg md:text-xl">
      We're here to help. Reach out to us for any questions,
      support, or business inquiries.
    </p>


  </div>
</section>



<section className="bg-gray-100 shadow-2xl border border-gray-200 py-8 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-medium text-gray-900 mb-8">
      Get a quick solution to all your queries.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Customer Service */}
      <div>
        <p className="text-gray-900 text-lg font-medium">
          Customer Service No.
        </p>
        <a
          href="tel:01146710423"
          className="text-[#5a6f84] text-2xl hover:text-black transition"
        >
         +91 7303486777
        </a>
      </div>

      {/* Help */}
      <div>
        <p className="text-gray-900 text-lg font-medium">
          Help
        </p>
        <a
          href="mailto:helpdesk@tradeindia.com"
          className="text-[#5a6f84] text-2xl hover:text-black transition break-all"
        >
          care@inquirybazaar.com
        </a>
      </div>

      {/* Write to Us */}
      <div>
        <p className="text-gray-900 text-lg font-medium">
          Write to us
        </p>
        <a
          href="mailto:customercare@tradeindia.com"
          className="text-[#5a6f84] text-2xl hover:text-black transition break-all"
        >
          care@inquirybazaar.com
        </a>
      </div>
    </div>
  </div>
</section>



<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-10">
      
      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border">
        <h2 className="text-3xl font-bold mb-2">
          Send Us a Message
        </h2>

        <p className="text-gray-600 mb-6">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>


          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Office Details */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">
          Contact Information
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Head Office
            </h3>
            <p className="text-gray-600 leading-relaxed">
       Office No. 605-606, 6th Floor, Best Business Park, <br />
Netaji Subhash Place, Delhi, 110034


            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Phone
            </h3>
            <a
              href="tel:+911234567890"
              className="text-gray-600 hover:text-black"
            >
              +91 7303486777
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Email
            </h3>
            <a
              href="mailto:info@yourcompany.com"
              className="text-gray-600 hover:text-black"
            >
              care@inquirybazaar.com
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Business Hours
            </h3>
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 6:30 PM
            </p>
            <p className="text-gray-600">
              Sunday: Closed
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Customer Support
            </h3>
            <p className="text-gray-600">
              Available 24/7 for urgent inquiries.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Contactus
