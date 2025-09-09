import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image:
        "https://www.thesearchingsouls.com/wp-content/uploads/2024/11/website-banner-scaled.webp",
      title: "EXPLORE THE HIMALAYAS",
      subtitle: "MOST RELIABLE TREKKING COMMUNITY IN INDIA",
      description:
        "Catering 10,000+ Trekkers Every Year!\nCall our Trek Experts on 8979920602, 8006074398",
      buttonText: "Read More",
    },
    {
      image:
        "https://www.thesearchingsouls.com/wp-content/uploads/2023/06/Jumbo-Bag-2.webp",
      title: "TSS Jumbo BAG",
      subtitle: "Complete Rental Solution for Trekkers",
      description: "Get all your trekking gear in one comprehensive package",
      buttonText: "Read More",
    },
    {
      image:
        "https://www.thesearchingsouls.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-15.55.55_c78e9393-scaled.webp",

      title: "Spiritual Tours",
      subtitle: "Uttarakhand Char Dham Yatra",
      description: "Experience the divine journey through sacred destinations",
      buttonText: "Read More",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-screen overflow-hidden">
      {/* Slide Images Container */}
      <div className="relative w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/10 bg-opacity-40"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 text-white rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer"
        disabled={isAnimating}
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
        disabled={isAnimating}
      >
        <ChevronRight size={30} />
      </button>

      {/* Content Overlay - Text moves with slides */}
      <div className="absolute inset-0 z-10">
        <div
          className="flex w-full h-full transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full flex items-center justify-center"
            >
              <div className="text-center text-white px-6 max-w-4xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-xl font-medium mb-4 bg-[#FB2056] w-fit px-1 border-b border-white">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-6 text-white">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                    {slide.description}
                  </p>
                  <button className="bg-[#FB2056] hover:bg-white hover:text-black border-white border text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform pointer-events-auto">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation - Smaller size, current white, others gray */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
