import React, { useState } from "react";

const EnquirySection = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will contact you shortly.");
  };

  return (
    <section className="w-10/12 mx-auto py-12 px-4 bg-white">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Left Column - Form */}
        <div className="w-full lg:w-1/2 bg-[#1D3827] rounded-xl shadow-lg">
          <div className="mb-6 p-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wider text-center bg-[#1D3827]/80 px-4 py-2 rounded-full border border-white/30">
              Send Enquiry & Get Itinerary
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white rounded-xl p-6 text-[#1D3827]"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm md:text-base font-semibold text-[#1D3827] mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#2a4b38]/50 bg-[#2a4b38]/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e1ed00] transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm md:text-base font-semibold text-[#1D3827] mb-1"
              >
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#2a4b38]/50 bg-[#2a4b38]/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e1ed00] transition-all duration-300"
                placeholder="Your contact number"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-semibold text-[#1D3827] mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#2a4b38]/50 bg-[#2a4b38]/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e1ed00] transition-all duration-300"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base font-semibold text-[#1D3827] mb-1"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-[#2a4b38]/50 bg-[#2a4b38]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e1ed00] transition-all duration-300"
                placeholder="Any specific requirements or questions?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2a4b38] hover:bg-[#e1ed00] hover:text-[#1D3827] text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column - Pricing */}
        <div className="w-full lg:w-1/2 bg-white border border-[#2a4b38]/30 rounded-xl shadow-lg p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1D3827] uppercase tracking-wider text-center bg-white/80 px-4 py-2 rounded-full border border-[#2a4b38]/30 mb-6">
            {data.trekName}
          </h2>
          <div className="py-4 border-t border-[#2a4b38]/20">
            <div className="flex justify-center items-center">
              <span className="text-2xl md:text-3xl font-bold text-[#2a4b38]">
                {data.price}
              </span>
            </div>
          </div>
          <ul className="space-y-4">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-start border-b border-[#2a4b38]/20 py-2">
                <svg
                  className="w-5 h-5 text-[#e1ed00] mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm md:text-base text-[#1D3827]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;