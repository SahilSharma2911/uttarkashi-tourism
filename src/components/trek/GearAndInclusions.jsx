import React from 'react';

const GearAndInclusions = ({ data }) => {
  return (
    <div>
      {/* Gear Rental Section */}
      <div className="py-12 px-4 bg-[#F6EFEf]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Ready for Adventure? Rent Your Trek Gear Today
          </h2>
          <a
            href={data.rentalUrl}
            className="inline-flex items-center justify-center px-6 py-2 border border-white shadow-md bg-green-500 text-white font-semibold rounded-2xl  transition-colors"
          >
            <span>Rent Now</span>
            <svg 
              className="w-5 h-5 ml-2" 
              fill="currentColor" 
              viewBox="0 0 448 512"
            >
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Inclusions & Exclusions Section */}
      <div id="trekdetail" className="pt-16 pb-3 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Inclusions Column */}
            <div className="border-gray-300 border shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">INCLUSIONS</h2>
              <ul className="space-y-4">
                {data.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Exclusions Column */}
            <div className="border-gray-300 border shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">EXCLUSIONS</h2>
              <ul className="space-y-4">
                {data.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 448 512"
                    >
                      <path d="M278.06 256L444.48 89.57c4.69-4.69 4.69-12.29 0-16.97-32.8-32.8-85.99-32.8-118.79 0L210.18 188.12l-24.86-24.86c4.31-10.92 6.68-22.81 6.68-35.26 0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c4.54 0 8.99-.32 13.36-.93L142.29 256l-32.93 32.93c-4.37-.61-8.83-.93-13.36-.93-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-12.45-2.37-24.34-6.68-35.26l24.86-24.86L325.69 439.4c32.8 32.8 85.99 32.8 118.79 0 4.69-4.68 4.69-12.28 0-16.97L278.06 256zM96 160c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zm0 256c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearAndInclusions;