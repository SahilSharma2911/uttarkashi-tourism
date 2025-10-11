import React from "react";

const Hero = ({ data }) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover"
      />
      {/* Original overlay */}
      <div className="absolute inset-0 bg-black/10 bg-opacity-40"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 bg-[#1D3827]/80 px-4 py-2 rounded-full border border-white/30 uppercase tracking-wider">
              {data.title}
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              {data.subtitle}
            </h2>
            <button className="bg-[#2a4b38] hover:bg-[#e1ed00] hover:text-[#1D3827] border border-white/50 text-white uppercase px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;