import React, { useState } from 'react';

const EnquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you shortly.');
  };

  return (
    <section className="w-11/12 mx-auto lg:px-24 mt-12">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Left Column - Form */}
          <div className="w-full lg:w-1/2 bg-[#1D3827] rounded-b-xl shadow-lg">
            <div className="mb-6 p-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                Send Enquiry & Get Itinerary on WhatsApp
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-xl p-6 text-black">
              <div>
                <label htmlFor="name" className="block  font-medium text-black  mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#dddddd] bg-[#666]/5 "
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="contact" className="block  font-medium text-black  mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 bg-[#666]/5  "
                  placeholder="Your contact number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block  font-medium text-black  mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300  bg-[#666]/5 "
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block  font-medium text-black  mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="1"
                  className="w-full px-4 py-3 border border-gray-300  bg-[#666]/5 "
                  placeholder="Any specific requirements or questions?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-black text-white rounded-full px-5 py-2.5"
              >
                Submit
              </button>
            </form>
          </div>
          
          {/* Right Column - Pricing */}
          <div className="w-full lg:w-1/2 text-black border border-gray-200 shadow-xl h-fit pb-5">
            <div className="bg-white rounded-xl overflow-hidden p-6">
              <div className="">
                <h2 className="text-2xl md:text-3xl font-bold text-center">Pin Bhabha Pass</h2>
              </div>
              
              <div className="py-2 px-6 border-t mt-5">
                <div className="flex justify-center items-center">
                  <span className="text-gray-500 line-through mr-3 text-lg">₹17950</span>
                  <span className="text-3xl font-bold text-green-600">₹16950</span>
                </div>
              </div>
              
              <div className="">
                <ul className="space-y-4 flex flex-col items-center justify-center">
                  <li className="flex items-start border-b border-gray-100 ">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Kafnu to Kaza all inclusive</span>
                  </li>
                  
                  <li className="flex items-start border-b border-gray-100">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Book Now at Just ₹ 4000</span>
                  </li>
                  
                  <li className="flex items-start border-b border-gray-100">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>We are largest Service providers in Uttarakhand. i.e No outsourcing</span>
                  </li>
                  
                  <li className="flex items-start border-b border-gray-100">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 极好的" clipRule="evenodd" />
                    </svg>
                    <span>Highest Rated Trekking Company in India</span>
                  </li>
                  
                  <li className="flex items-start border-b border-gray-100">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 极好的 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>First Company to Introduce Jumbo Bag (Includes all Trekking Gear)</span>
                  </li>
                  
                  <li className="flex items-start border-b border-gray-100">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0极好的-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Certified by IMF, ATAOI, Startup India, Uttarakhand Tourism, MSME and STU</span>
                  </li>
                  
                  <li className="flex items-start border-b border-gray-100">
                    <svg className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Top 10 Most Promising Adventure Travel Company in India</span>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;