import React, { useState } from 'react';

const TransportationAndReviews = () => {
  // Transportation data
  const transportationItems = [
    "No of Persons (5-7)  : Tata Sumo/Mahindra Bolero or Equivalent Vehicle",
    "No of Persons (8-13): Tempo Traveler",
    "Selection of vehicle depends on availability. In group departures vehicles are Non AC"
  ];

  // Sample review images
  const reviewImages = [
    "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aBT1.jpg",
    "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aDB2.jpg",
    "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aHP1.jpg",
    "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aKGL-1.jpg",
    "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aKK-New-2.jpg",
    "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/aSP1.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const totalSlides = Math.ceil(reviewImages.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Transportation Section */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">MODE OF TRANSPORTATION</h2>
            <ul className="space-y-2">
              {transportationItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div id="greview" className="pb-16 pt-5 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Reviews Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">3700+ 5 Star Google Reviews</h2>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                      {reviewImages
                        .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                        .map((image, imageIndex) => (
                          <div 
                            key={slideIndex * itemsPerView + imageIndex} 
                            className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
                          >
                            <img 
                              src={image} 
                              alt={`Google Review ${slideIndex * itemsPerView + imageIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4"
              aria-label="Previous reviews"
            >
              <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 1000 1000">
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 "
              aria-label="Next reviews"
            >
              <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 1000 1000">
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationAndReviews;