import React from 'react';

const RelatedTreks = ({ data }) => {
  return (
    <div className="pb-16 pt-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Related Treks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((trek, index) => (
            <div 
              key={index} 
              className="bg-white overflow-hidden transition-transform duration-300"
            >
              <img 
                src={trek.image} 
                alt={trek.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {trek.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {trek.description}
                </p>
                <a
                  href={trek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#1D3827] uppercase tracking-wider text-sm font-semibold transition-colors"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="currentColor" 
                    viewBox="0 0 448 512"
                  >
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedTreks;