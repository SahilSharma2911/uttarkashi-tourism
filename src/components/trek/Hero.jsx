import React from "react";

const Hero = () => {
  const slide = {
    image:
      "https://www.thesearchingsouls.com/wp-content/uploads/2025/07/New-Project-2025-07-10T141630.183.jpg",
    title: "Pin Bhabha Pass Trek",
    subtitle: "MOST DRAMATIC CROSS OVER TREK IN INDIA",
    // description:
    //   "Catering 10,000+ Trekkers Every Year!\nCall our Trek Experts on 8979920602, 8006074398",
    buttonText: "Book Now",
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[78vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/10 bg-opacity-40"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4 w-fit">
              {slide.title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white">
              {slide.subtitle}
            </h2>
            {/* <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {slide.description}
            </p> */}
            <button className="bg-[#FB2056] hover:bg-white hover:text-black border-white border text-white uppercase px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-300">
              {slide.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
