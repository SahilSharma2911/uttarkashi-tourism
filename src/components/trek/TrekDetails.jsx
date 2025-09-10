import React from "react";

const TrekDetails = () => {
  // Trek details data
  const trekDetails = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8"
        >
          <path
            fill="#1e0f00"
            d="M47,44H38V42h8V10H2V42h8v2H1a1,1,0,0,1-1-1V9A1,1,0,0,1,1,8H47a1,1,0,0,1,1,1V43A1,1,0,0,1,47,44Z"
          ></path>
          <path
            fill="#1e0f00"
            d="M47,10H1A1,1,0,0,1,0,9V1A1,1,0,0,1,1,0H47a1,1,0,0,1,1,1V9A1,1,0,0,1,47,10ZM2,8H46V2H2Z"
          ></path>
          <rect fill="#1e0f00" x="4" y="4" width="2" height="2"></rect>
          <rect fill="#1e0f00" x="8" y="4" width="2" height="2"></rect>
          <rect fill="#1e0f00" x="12" y="4" width="2" height="2"></rect>
          <path
            fill="#1e0f00"
            d="M24,48A17,17,0,1,1,41,31,17,17,0,0,1,24,48Zm0-32A15,15,0,1,0,39,31,15,15,0,0,0,24,16Z"
          ></path>
          <path
            fill="#1e0f00"
            d="M24,35a4,4,0,1,1,4-4A4,4,0,0,1,24,35Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,24,29Z"
          ></path>
          <rect
            fill="#1e0f00"
            x="13.57"
            y="33.17"
            width="8.18"
            height="2"
            transform="translate(-13.42 11.51) rotate(-26.57)"
          ></rect>
          <rect
            fill="#1e0f00"
            x="28.56"
            y="31.7"
            width="2"
            height="9.73"
            transform="translate(-17.19 31.61) rotate(-45)"
          ></rect>
          <rect fill="#1e0f00" x="11" y="30" width="2" height="2"></rect>
          <rect fill="#1e0f00" x="23" y="42" width="2" height="2"></rect>
          <rect fill="#1e0f00" x="23" y="18" width="2" height="2"></rect>
          <rect fill="#1e0f00" x="35" y="30" width="2" height="2"></rect>
        </svg>
      ),
      title: "Trek Duration",
      description: "8 Days",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-8 h-8"
        >
          <polygon points="8 56 10.11 49 8 42 21 49 8 56"></polygon>
          <path d="M47.5,50H24a1,1,0,0,1,0-2H47.5a4.5,4.5,0,0,0,0-9h-31a6.5,6.5,0,1,1,0-13H40a1,1,0,0,1,0,2H16.5a4.5,4.5,0,0,0,0,9h31a6.5,6.5,0,0,1,0,13Z"></path>
          <path d="M43,25a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0V24A1,1,0,0,1,43,25Z"></path>
          <polygon points="43 16 53 16 50 12.04 53 8 43 8 43 16"></polygon>
          <circle cx="43" cy="27" r="3"></circle>
        </svg>
      ),
      title: "Trek Distance",
      description: "41 Km",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-8 h-8"
        >
          <path
            fill="#000000"
            d="M255.259247,341.311523 C258.602386,336.503448 261.862000,332.080597 264.794403,327.450562 C267.167023,323.704254 266.370605,319.276489 265.842438,315.341858 C264.270691,303.633453 262.067688,292.009338 260.078705,280.357880 C259.792297,278.680115 260.225067,277.843323 262.071960,277.992950 C270.731476,278.694397 279.400391,279.292786 288.047607,280.119843 C289.459045,280.254822 290.239990,281.779144 291.050140,283.072845 C299.938873,297.266632 308.855988,311.443726 317.909393,325.532806 C321.062836,330.440247 318.392822,335.101685 317.564026,339.697662 C315.707367,349.993439 313.170837,360.165161 311.034943,370.413147 C310.554871,372.716431 309.371704,374.369934 307.269318,374.922302 C284.279999,380.962402 265.572937,395.220551 245.546921,406.945923 C244.858063,407.349243 244.163895,407.743958 243.464890,408.129395 C240.523239,409.751526 237.508453,413.508423 234.753098,412.540833 C232.198181,411.643585 230.909576,407.310669 228.916000,404.598907 C226.739014,401.637665 223.503235,399.870880 220.399445,398.185608 C218.023438,396.895477 217.684158,396.419983 219.375793,393.977081 C231.398483,376.614960 243.177628,359.084259 255.259247,341.311523 z"
          ></path>
        </svg>
      ),
      title: "Difficulty Level",
      description: "Moderate to Difficult",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-235 162 128 128"
          className="w-8 h-8"
        >
          <path
            fill="#282828"
            d="M-171,181l-64,90h128L-171,181z M-171,211.3l-8.8,17.1v-19.6l-13,9.4l21.8-30.8l24.4,34.3l-12.7-10.4l3.7,19.5 L-171,211.3z"
          ></path>
        </svg>
      ),
      title: "Altitude",
      description: "16100 Ft.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-8 h-8"
        >
          <line
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="0"
            y1="47"
            x2="64"
            y2="47"
          ></line>
          <line
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="10"
            y1="37"
            x2="0"
            y2="37"
          ></line>
          <line
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="64"
            y1="37"
            x2="54"
            y2="37"
          ></line>
          <line
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="32"
            y1="15"
            x2="32"
            y2="4"
          ></line>
          <line
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="14"
            y1="23"
            x2="6"
            y2="15"
          ></line>
          <line
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            x1="50"
            y1="23"
            x2="58"
            y2="15"
          ></line>
          <path
            fill="#000000"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M48.159,47C49.96,44.096,51,40.669,51,37 c0-10.493-8.506-19-19-19s-19,8.507-19,19c0,3.668,1.04,7.094,2.841,9.998"
          ></path>
        </svg>
      ),
      title: "Best Season",
      description: "July- Early Sept",
    },
  ];

  // Add-ons data
  const addOns = [
    "Transportation available at ₹ 3500/person from Shimla to Kafnu and Kaza to Manali",
    "Back Pack offloading ₹ 4000/person",
  ];

  return (
    <div className="pb-8 pt-2 w-11/12 mx-auto">
      <div className=" mx-auto lg:px-24">
        {/* Main container */}
        <div className="flex gap-3 flex-col lg:flex-row">
          {/* Trek details section */}
          <div className=" w-full lg:w-1/3 border border-gray-300 p-3">
            <div className="grid grid-cols-1 gap-6">
              {trekDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center border-b border-gray-300 gap-2"
                >
                  <div className="">{detail.icon}</div>
                  <div className="">
                    <h3 className="font-medium text-xl text-black">
                      {detail.title}
                    </h3>
                    <p className="text-[#FB2056] font-semibold text-xl">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing section */}
          <div className=" w-full lg:w-1/3 border border-gray-300 p-3">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex items-center justify-center flex-col">
                <p className="font-bold text-black mb-2">Trek Fees</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#FB2056]">
                    ₹16950
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ₹17950
                  </span>
                </div>
                <p className="text-gray-600 mt-1 text-xs">Kafnu to Kaza</p>
              </div>

              <div className="bg-[#FB2056]/5 p-4 text-center">
                <h5 className="font-medium text-gray-800 mb-2">
                  Call our Pin Bhabha Pass Expert Mr. Devasheesh to know more
                  about the trek
                </h5>
                <a
                  href="tel:+918979920602"
                  className="inline-flex items-center justify-center px-10 py-2 bg-[#FB2056] transition-colors text-sm rounded-2xl"
                >
                  Call Now
                </a>
              </div>

              <div className="border-t pb-5">
                <h2 className="text-xl font-bold text-center text-gray-600 mb-6">
                  ADD ONS
                </h2>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  {addOns.map((addOn, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{addOn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Add-ons section */}

          {/* Calendar and booking section */}
          <div className=" w-full lg:w-1/3 border border-gray-300 p-3">
            <div className="max-w-md mx-auto text-center">
              <p className="text-gray-600 mb-4">
                Check availability and book your trek
              </p>

              {/* Calendar placeholder - you would integrate a proper calendar component here */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="text-center py-8 text-gray-500">
                  <p>Calendar would be displayed here</p>
                  <p className="text-sm mt-2">Available dates highlighted</p>
                </div>
              </div>

              <a
                href="https://thesearchingsouls.com/trek/book/pin-bhabha-pass"
                className="inline-flex items-center justify-center px-6 py-3 border border-white sgado bg-[#FB2056] text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-md"
              >
                <span>Book Now</span>
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
        </div>
      </div>
    </div>
  );
};

export default TrekDetails;
