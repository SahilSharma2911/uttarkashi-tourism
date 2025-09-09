import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const Upcoming = () => {
  const [currentSlides, setCurrentSlides] = useState({
    slider1: 0,
    slider2: 0,
    slider3: 0,
    slider4: 0,
  });

  const [isAnimating, setIsAnimating] = useState({
    slider1: false,
    slider2: false,
    slider3: false,
    slider4: false,
  });

  const [carouselEffect, setCarouselEffect] = useState('slide'); // slide, fade, zoom
  const [searchQuery, setSearchQuery] = useState("");

  // Trek data with images
  const trekData = {
    slider1: [
      {
        title: "PIN BHABA PASS",
        description:
          "The Pin Bhaba pass trek is a high altitude pass situated at an elevation of 4908 m above sea level. It connects the lush green Bhaba Valley to the stark and arid pin Valley in Spiti.",
        link: "/pin-bhabha-pass-trek/",
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2024/11/website-banner-scaled.webp",
      },
      {
        title: "PIN BHABA PASS",
        description:
          "It is a dramatic cross over trek and is one of the challenging options available for people who want to hit higher altitude.",
        link: "/pin-bhabha-pass-trek/",
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2023/06/Jumbo-Bag-2.webp",
      },
    ],
    slider2: [
      {
        title: "VALLEY OF FLOWER",
        description:
          "The Valley of Flowers is a breathtaking national park at 3,658 m, located in Bhyundar Valley, Chamoli district, Uttarakhand.",
        link: "/valley-of-flowers-and-hemkund-sahib/",
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-15.55.55_c78e9393-scaled.webp",
      },
      {
        title: "VALLEY OF FLOWER",
        description:
          "It's a UNESCO World Heritage Site with lush forests, rivers, and waterfalls.",
        link: "/valley-of-flowers-and-hemkund-sahib/",
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2024/11/website-banner-scaled.webp",
      },
    ],
    slider3: [
      {
        title: "HAMPTA PASS TREK",
        description:
          "Hampta Pass, one of the best treks in Kullu, Himachal Pradesh, lies at approx. 4,200 m in the Pir Panjal range, offering scenic views of both sides of the Himalayas.",
        link: "/hampta-pass-trek/",
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2023/06/Jumbo-Bag-2.webp",
      },
      {
        title: "HAMPTA PASS TREK",
        description:
          "The trail is easy to moderate, suitable for all trekkers, offering a complete shift in landscape from Manali's green valleys to Spiti's rocky terrain, with views of snow-clad peaks and glaciers.",
        link: "/hampta-pass-trek/",
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-15.55.55_c78e9393-scaled.webp",
      },
    ],
    slider4: [
      {
        title: "BHRIGU LAKE TREK",
        description:
          "Bhrigu Lake trek is a high altitude trek in Kullu district of Himanchal Pradesh. It is situated at an altitude of 4300 metres.",
        link: "/bhrigu-lake-trek/",
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2024/11/website-banner-scaled.webp",
      },
      {
        title: "BHRIGU LAKE TREK",
        description:
          "The view of stars is so clear that you will feel like you are watching a HD TV full of stars; If you are a photographer you can capture the beauty.",
        link: "/bhrigu-lake-trek/",
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2023/06/Jumbo-Bag-2.webp",
      },
    ],
  };

  const nextSlide = (sliderId) => {
    if (!isAnimating[sliderId]) {
      setIsAnimating(prev => ({ ...prev, [sliderId]: true }));
      setCurrentSlides((prev) => ({
        ...prev,
        [sliderId]: (prev[sliderId] + 1) % trekData[sliderId].length,
      }));
      setTimeout(() => setIsAnimating(prev => ({ ...prev, [sliderId]: false })), 800);
    }
  };

  const prevSlide = (sliderId) => {
    if (!isAnimating[sliderId]) {
      setIsAnimating(prev => ({ ...prev, [sliderId]: true }));
      setCurrentSlides((prev) => ({
        ...prev,
        [sliderId]:
          prev[sliderId] === 0
            ? trekData[sliderId].length - 1
            : prev[sliderId] - 1,
      }));
      setTimeout(() => setIsAnimating(prev => ({ ...prev, [sliderId]: false })), 800);
    }
  };

  const goToSlide = (sliderId, index) => {
    if (!isAnimating[sliderId] && index !== currentSlides[sliderId]) {
      setIsAnimating(prev => ({ ...prev, [sliderId]: true }));
      setCurrentSlides((prev) => ({ ...prev, [sliderId]: index }));
      setTimeout(() => setIsAnimating(prev => ({ ...prev, [sliderId]: false })), 800);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const intervals = {};

    Object.keys(trekData).forEach((sliderId) => {
      intervals[sliderId] = setInterval(() => {
        nextSlide(sliderId);
      }, 5000);
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const getCarouselClasses = () => {
    const baseClasses = "flex w-full h-full";
    
    switch (carouselEffect) {
      case 'fade':
        return `${baseClasses} transition-opacity duration-800 ease-in-out`;
      case 'zoom':
        return `${baseClasses} transition-all duration-800 ease-in-out transform`;
      default:
        return `${baseClasses} transition-transform duration-800 ease-in-out`;
    }
  };

  const getSlideTransform = (sliderId) => {
    const currentIndex = currentSlides[sliderId];
    
    switch (carouselEffect) {
      case 'fade':
        return { opacity: 1 };
      case 'zoom':
        return { 
          transform: `translateX(-${currentIndex * 100}%) scale(1.02)`,
        };
      default:
        return { transform: `translateX(-${currentIndex * 100}%)` };
    }
  };

  const getImageClasses = (index, sliderId) => {
    const currentIndex = currentSlides[sliderId];
    const baseClasses = "w-full h-full object-cover transition-all duration-800";
    
    if (carouselEffect === 'zoom') {
      return `${baseClasses} ${index === currentIndex ? 'scale-110' : 'scale-100'}`;
    }
    
    return baseClasses;
  };

  const SliderComponent = ({ sliderId, data }) => (
    <div className="relative w-full h-96 overflow-hidden shadow-lg group">
      {/* Slide Images Container */}
      <div className="relative w-full h-full">
        {carouselEffect === 'fade' ? (
          // Fade effect - stack images
          <div className="relative w-full h-full">
            {data.map((trek, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
                  index === currentSlides[sliderId] ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              </div>
            ))}
          </div>
        ) : (
          // Other effects - sliding container
          <div
            className={getCarouselClasses()}
            style={getSlideTransform(sliderId)}
          >
            {data.map((trek, index) => (
              <div key={index} className="min-w-full h-full relative overflow-hidden">
                <img
                  src={trek.image}
                  alt={trek.title}
                  className={getImageClasses(index, sliderId)}
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content Overlay with Enhanced Animations */}
      <div className="absolute inset-0 z-10">
        {carouselEffect === 'fade' ? (
          // Fade content overlay
          <div className="relative w-full h-full">
            {data.map((trek, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-800 ease-in-out ${
                  index === currentSlides[sliderId] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="text-center text-white px-6 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{trek.title}</h3>
                    <p className="text-base md:text-lg leading-relaxed mb-6 font-medium">
                      {trek.description}
                    </p>
                    <a
                      href={trek.link}
                      className="inline-block bg-[#FB2056] hover:bg-white hover:text-black border-white border text-white px-6 py-2 rounded-sm font-semibold transition-all duration-300 transform"
                    >
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Sliding content overlay
          <div
            className="flex w-full h-full transition-transform duration-800 ease-in-out"
            style={{ transform: `translateX(-${currentSlides[sliderId] * 100}%)` }}
          >
            {data.map((trek, index) => (
              <div
                key={index}
                className="min-w-full h-full flex items-center justify-center"
              >
                <div className="text-center text-white px-6 max-w-2xl mx-auto">
                  <div className={`flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${
                    index === currentSlides[sliderId] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{trek.title}</h3>
                    <p className="text-base md:text-lg leading-relaxed mb-6 font-medium">
                      {trek.description}
                    </p>
                    <a
                      href={trek.link}
                      className="inline-block bg-[#FB2056] hover:bg-white hover:text-black border-white border text-white px-6 py-2 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={() => prevSlide(sliderId)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300 cursor-pointer transform hover:scale-110 "
        disabled={isAnimating[sliderId]}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => nextSlide(sliderId)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300 cursor-pointer transform hover:scale-110"
        disabled={isAnimating[sliderId]}
      >
        <ChevronRight size={24} />
      </button>

      {/* Original Pagination Dots - Kept Exactly the Same */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(sliderId, index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlides[sliderId]
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            disabled={isAnimating[sliderId]}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-11/12 mx-auto bg-white">
      {/* Search Section */}
      <section className="mt-5">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <form
              onSubmit={handleSearch}
              className="relative w-full max-w-2xl"
            >
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your trek"
                className="w-full px-4 py-2 pr-12 border border-[#ccc] outline-none text-black"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 py-2.5 px-2 bg-black"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
          <div></div>
        </div>
      </section>


      {/* Header Section */}
      <section className="w-full mt-3 pb-5 md:pb-8">
        <div className="container mx-auto md:px-4">
          <div className="w-full">
            <div className="flex flex-col items-center">
              <div className="h-8"></div>
              <div className="mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-[#3a3a3a] tracking-wide">
                  UPCOMING SUMMER TREKS
                </h3>
              </div>
              <div className="w-36 h-[3px] bg-[#FB2056] mb-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trek Sliders Section */}
      <section className="w-full bg-white  md:px-28">
        <div className="container mx-auto md:px-4">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <SliderComponent sliderId="slider1" data={trekData.slider1} />
            <SliderComponent sliderId="slider2" data={trekData.slider2} />
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <SliderComponent sliderId="slider3" data={trekData.slider3} />
            <SliderComponent sliderId="slider4" data={trekData.slider4} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upcoming;