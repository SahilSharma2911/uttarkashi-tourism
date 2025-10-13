import React from "react";

const PackingEssentials = ({ data,title }) => {
  return (
    <div className="pb-16 pt-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What should you pack for {title}?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {section.category}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackingEssentials;
