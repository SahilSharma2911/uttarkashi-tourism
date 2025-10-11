import React, { useState } from "react";

const TrekItinerary = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  // Trek itinerary data
  const itinerary = [
    {
      day: "Day 1: Shimla to Kafnu",
      details:
        "Drive Distance: 200 km | Drive Duration: 7-8 hours | Altitude: 2450 m",
      content: [
        "Pick up from Shimla bus stand at 6:30 AM",
        "Breakfast and lunch on the way",
        "Overnight stay in a guest house in Kafnu Village.",
      ],
    },
    {
      day: "Day 2: Kafnu to Mulling",
      details:
        "Trek: 11 km | Trek Duration: 7-8 hrs hours | Altitude gain: 2450 m to 3200 m",
      content: [
        "Trek to Mulling after breakfast",
        "First half is a gradual ascend second half slightly difficult",
        "Today's trail is mostly forest covered",
        "Packed lunch for the day",
        "Overnight in Camps at Mulling",
      ],
    },
    {
      day: "Day 3: Mulling to Karah",
      details:
        "Trek distance: 6 km | Trek Duration: 5 hours | Altitude gain: 3200 ft to 3,550 m",
      content: [
        "Leave for Karah Camp site after breakfast",
        "Today's trek is easy only the last 1 km is a steep ascend",
        "Hot lunch will be served at camp site",
        "Evening acclimatisation activities",
        "Overnight in camps",
      ],
    },
    {
      day: "Day 4: Rest and Acclimatisation at Karah",
      details: "",
      content: [
        "This day is kept for rest and acclimatisation.",
        "Some team games and acclimatisation activities will be conducted by our team",
      ],
    },
    {
      day: "Day 5: Kara to Phutsirang",
      details:
        "Trek distance: 5 km | Trek Duration: 5-6 hours | Altitude loss: 3550 m to 4200 ft",
      content: [
        "Leave for the Phutsirang camp site after breakfast",
        "Today is a continuous ascend.",
  "You will get to witness alpine ridges, river valleys, and panoramic Himalayan views",
        "Hot lunch will be served at camp site",
      ],
    },
    {
      day: "Day 6: Phutsirang to Bwaldar Via Bhabha Pass",
      details:
        "Trek distance: 12 km | Trek Duration: 12 hours | Altitude gain: 4200 m to 4900 ft",
      content: [
        "Today we start early at 2-3 AM in the morning",
        "This is the most difficult day of the trek",
        "Limited water sources so carry enough water from the camp site",
        "Keep floaters/Sandals for river crossing",
        "Packed lunch for the day",
        "Arrival at camps around evening.",
      ],
    },
    {
      day: "Day 7: Bwaldar to Mudh and Drive to Kaza",
      details: "",
      content: [
        "This is last day of the trek and probably the easiest",
        "Mudh is small village in Spiti and is 50 Km from Kaza",
        "Overnight in kaza",
      ],
    },
    {
      day: "Day 8: Kaza to Manali",
      details: "Drive: 200 Km",
      content: [
        "Leave early in the morning for Manali",
        "Its a long and tiring drive",
        "Expected arrival in Manali by 7:00 PM",
      ],
    },
  ];

  // Special features of the trek
  const specialFeatures = [
    "Takes you to a staggering altitude of 4908 m above sea level",
  "Explores lush green valleys, alpine meadows and serene riverbanks",
    "Experience apple laden kafnu village and the arid mudh village in Spiti",
    "Forest, Meadows, Snow, Wildflowers, Rivers - Everything you can expect from a trek is delivered",
    "Less crowded and offbeat - not much people traverse on this trails",
  ];

  return (
    <div id="trekitinerary" className="pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Kyarkoti Harsil Trek Overview & Itinerary
          </h2>
          <p className="text-black max-w-6xl mx-auto text-left text-lg">
            The Kyarkoti Harsil Trek is a scenic 4N 5D trek around the Harsil
            region of Uttarakhand. Expect alpine forests, river valleys, and
            panoramic Himalayan views. This itinerary outlines day-by-day
            details for the trek.
          </p>
        </div>

        {/* Special Features Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            What is special about Kyarkoti Harsil Trek?
          </h3>
          <ul className="space-y-1">
            {specialFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-black mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" /> {/* black dot */}
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
              KYARKOTI HARSIL TREK ITINERARY
            </h3>
          </div>

          <div className="py-6">
            {itinerary.map((day, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0 text-lg"
              >
                <button
                  className="w-full py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleTab(index)}
                  aria-expanded={activeTab === index}
                >
                  {/* 🔽 Arrow at the start */}
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
                        <polygon points="5,8 15,8 10,13" /> {/* Triangle */}
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
            <strong>Note:</strong> It is advised to keep a 9th day i.e a buffer
            day for this trek in case of bad weather or any unforeseen
            situation. In case the buffer day is not used you can stay back in
            Manali. If the buffer day is used then you need to Pay Rs. 2500
            extra to the trek leader for the extra day used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrekItinerary;
