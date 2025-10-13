import React, { useState } from "react";

const TrekItinerary = ({ data, title }) => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  return (
    <div id="trekitinerary" className="pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {title} Overview & Itinerary
          </h2>
          <p className="text-black max-w-6xl mx-auto text-left text-lg">
            {data.overview}
          </p>
        </div>

        {/* Special Features Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            What is special about {title}?
          </h3>
          <ul className="space-y-1">
            {data.specialFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-black mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <span className="text-black text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Itinerary Section */}
        <div className="bg-white overflow-hidden">
          <div className="">
            <h3 className="text-2xl font-bold text-gray-800">
              {title} ITINERARY
            </h3>
          </div>

          <div className="py-6">
            {data.days.map((day, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0 text-lg"
              >
                <button
                  className="w-full py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleTab(index)}
                  aria-expanded={activeTab === index}
                >
                  {/* Arrow at the start */}
                  <div className="flex items-center flex-1">
                    <div
                      className={`w-6 h-6 flex items-center justify-center mr-3 transition-transform duration-300 ${
                        activeTab === index ? "rotate-360" : "rotate-270"
                      }`}
                    >
                      <svg
                        className="w-6 h-6 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <polygon points="5,8 15,8 10,13" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-black">
                      {day.day} {day.details}
                    </h4>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeTab === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4">
                    <ul className="space-y-2 pl-6">
                      {day.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-black">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note Section */}
        <div className="">
          <p className="text-black text-lg font-medium">
            <strong>Note:</strong> {data.note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrekItinerary;
