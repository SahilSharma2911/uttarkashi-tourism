import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const trekData = {
    slider1: [
      {
        title: "Pin Bhaba Pass",
        subtitle: "Starting from ₹499, 5D/4N",
        description:
          "The Pin Bhaba pass trek is a high altitude pass situated at an elevation of 4908 m above sea level. It connects the lush green Bhaba Valley to the stark and arid pin Valley in Spiti.",
        link: "/pin-bhabha-pass-trek/",
        image: "/chardham-yatra.webp",
      },
      {
        title: "Pin Bhaba Pass",
        subtitle: "Starting from ₹499, 5D/4N",
        description:
          "It is a dramatic cross over trek and is one of the challenging options available for people who want to hit higher altitude.",
        link: "/pin-bhabha-pass-trek/",
        image: "/jumbo-bag.webp",
      },
    ],
    slider2: [
      {
        title: "Valley of Flower",
        subtitle: "Starting from ₹499, 5D/4N",
        description:
          "The Valley of Flowers is a breathtaking national park at 3,658 m, located in Bhyundar Valley, Chamoli district, Uttarakhand.",
        link: "/valley-of-flowers-and-hemkund-sahib/",
        image: "/tss-banner.webp",
      },
      {
        title: "Valley of Flower",
        subtitle: "Starting from ₹499, 5D/4N",
        description:
          "It's a UNESCO World Heritage Site with lush forests, rivers, and waterfalls.",
        link: "/valley-of-flowers-and-hemkund-sahib/",
        image: "/chardham-yatra.webp",
      },
    ],
    slider3: [
      {
        title: "Hampta Pass Trek",
        subtitle: "Starting from ₹499, 5D/4N",
        description:
          "Hampta Pass, one of the best treks in Kullu, Himachal Pradesh, lies at approx. 4,200 m in the Pir Panjal range, offering scenic views of both sides of the Himalayas.",
        link: "/hampta-pass-trek/",
        image: "/jumbo-bag.webp",
      },
      {
        title: "Hampta Pass Trek",
        subtitle: "Starting from ₹499, 5D/4N",
        description:
          "The trail is easy to moderate, suitable for all trekkers, offering a complete shift in landscape from Manali's green valleys to Spiti's rocky terrain, with views of snow-clad peaks and glaciers.",
        link: "/hampta-pass-trek/",
        image: "/tss-banner.webp",
      },
    ],
    slider4: [
      {
        title: "Bhrigu Lake Trek",
        subtitle: "Starting from ₹499, 5D/4N",
        description:
          "Bhrigu Lake trek is a high altitude trek in Kullu district of Himanchal Pradesh. It is situated at an altitude of 4300 metres.",
        link: "/bhrigu-lake-trek/",
        image: "/chardham-yatra.webp",
      },
      {
        title: "Bhrigu Lake Trek",
        subtitle: "Starting from ₹499, 5D/4N",
        description:
          "The view of stars is so clear that you will feel like you are watching a HD TV full of stars; If you are a photographer you can capture the beauty.",
        link: "/bhrigu-lake-trek/",
        image: "/jumbo-bag.webp",
      },
    ],
  };

  const nextSlide = (sliderId) => {
    if (!isAnimating[sliderId]) {
      setIsAnimating((prev) => ({ ...prev, [sliderId]: true }));
      setCurrentSlides((prev) => ({
        ...prev,
        [sliderId]: (prev[sliderId] + 1) % trekData[sliderId].length,
      }));
      setTimeout(
        () => setIsAnimating((prev) => ({ ...prev, [sliderId]: false })),
        800
      );
    }
  };

  const prevSlide = (sliderId) => {
    if (!isAnimating[sliderId]) {
      setIsAnimating((prev) => ({ ...prev, [sliderId]: true }));
      setCurrentSlides((prev) => ({
        ...prev,
        [sliderId]:
          prev[sliderId] === 0
            ? trekData[sliderId].length - 1
            : prev[sliderId] - 1,
      }));
      setTimeout(
        () => setIsAnimating((prev) => ({ ...prev, [sliderId]: false })),
        800
      );
    }
  };

  const goToSlide = (sliderId, index) => {
    if (!isAnimating[sliderId] && index !== currentSlides[sliderId]) {
      setIsAnimating((prev) => ({ ...prev, [sliderId]: true }));
      setCurrentSlides((prev) => ({ ...prev, [sliderId]: index }));
      setTimeout(
        () => setIsAnimating((prev) => ({ ...prev, [sliderId]: false })),
        800
      );
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

  const SliderComponent = ({ sliderId, data }) => (
    <div className="relative w-full h-96 overflow-hidden shadow-lg rounded-xl">
      {/* Slide Images Container */}
      <div className="relative w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentSlides[sliderId] * 100}%)` }}
        >
          {data.map((trek, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={trek.image}
                alt={trek.title}
                className="w-full h-full object-cover"
              />
              {/* Hero-style overlay */}
              <div className="absolute inset-0 bg-black/10 bg-opacity-40"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => prevSlide(sliderId)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-[#2a4b38]/80 hover:bg-[#2a4b38] rounded-full p-2 transition-all duration-300 backdrop-blur-sm cursor-pointer"
        disabled={isAnimating[sliderId]}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => nextSlide(sliderId)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-[#2a4b38]/80 hover:bg-[#2a4b38] rounded-full p-2 transition-all duration-300 backdrop-blur-sm cursor-pointer"
        disabled={isAnimating[sliderId]}
      >
        <ChevronRight size={28} />
      </button>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10">
        <div
          className="flex w-full h-full transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentSlides[sliderId] * 100}%)` }}
        >
          {data.map((trek, index) => (
            <a
              key={index}
              href={trek.link}
              className="min-w-full h-full flex items-center justify-center"
            >
              <div className="text-center text-white px-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 bg-[#1D3827]/80 px-4 py-2 rounded-full border border-white/30 uppercase tracking-wider">
                    {trek.title}
                  </h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4">
                    {trek.subtitle}
                  </h4>
                  <p className="text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto">
                    {trek.description}
                  </p>
                  <button className="bg-[#2a4b38] hover:bg-[#e1ed00] hover:text-[#1D3827] border border-white/50 text-white px-6 py-2 rounded-full text-base font-semibold transition-all duration-300">
                    Click Here
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(sliderId, index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlides[sliderId]
                ? "bg-[#e1ed00] scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            disabled={isAnimating[sliderId]}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-10/12 mx-auto bg-white py-12 px-4">
      {/* Search Section */}
      {/* <section className="mb-8">
        <div className="flex justify-center">
          <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your trek"
              className="w-full px-4 py-3 border border-[#2a4b38] bg-[#1D3827]/80 text-white placeholder-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e1ed00] transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-[#2a4b38] hover:bg-[#e1ed00] hover:text-[#1D3827] rounded-full transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section> */}

      {/* Header Section */}
      <section className="mb-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1D3827] uppercase tracking-wider mb-4 bg-white/80 px-4 py-2 rounded-full border border-[#2a4b38]/30">
            Upcoming Winter Treks
          </h3>
          <div className="w-36 h-[3px] bg-[#e1ed00]"></div>
        </div>
      </section>

      {/* Trek Sliders Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Row */}
          <div>
            <SliderComponent sliderId="slider1" data={trekData.slider1} />
          </div>
          <div>
            <SliderComponent sliderId="slider2" data={trekData.slider2} />
          </div>
          {/* Second Row */}
          <div>
            <SliderComponent sliderId="slider3" data={trekData.slider3} />
          </div>
          <div>
            <SliderComponent sliderId="slider4" data={trekData.slider4} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upcoming;