import React from "react";

const Weakend = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Header Section */}
      <section className="w-full mt-5 pb-8">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className="flex flex-col items-center">
              <div className="h-8"></div>
              <div className="mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-[#3a3a3a] tracking-wide">
                  WEEKEND TREKKING AND TOURS
                </h3>
              </div>
              <div className="w-42 h-[3px] bg-[#FB2056] mb-8"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:px-32">
        <div className="relative w-full h-96 overflow-hidden shadow-lg group">
          <div
            className="flex w-full h-full transition-transform duration-800 ease-in-out"
          >
            <div className="min-w-full h-full relative">
              <img
                src={
                  "https://www.thesearchingsouls.com/wp-content/uploads/2023/06/Jumbo-Bag-2.webp"
                }
                alt={"#"}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
          {/* Centered content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-6 max-w-2xl mx-auto mt-3">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Tungnath Chandrashila
                </h3>
                <p className="text-base md:text-xl mb-6 font-medium">
                  Hike to the highest Shiva temple of the world is a perfect
                  weekend destination in the Himalayas for trek enthusiasts.
                </p>
                <a
                  href={"/"}
                  className="inline-block bg-[#FB2056] hover:bg-white hover:text-black border-white border text-white px-6 py-2 rounded-sm font-semibold transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weakend;