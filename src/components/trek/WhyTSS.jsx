import React from 'react';

const WhyTSS = () => {
  const features = [
    {
      image: "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Higesht-Rated.jpg",
      title: "Highest Rated",
      description: "Top-rated trekking company with excellent customer reviews"
    },
    {
      image: "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Jumbo-Bag.jpg",
      title: "First Jumbo Bag",
      description: "Innovative all-in-one trekking gear solution"
    },
    {
      image: "https://www.thesearchingsouls.com/wp-content/uploads/2021/10/Easy-rescheduling.jpg",
      title: "Easy Rescheduling",
      description: "Flexible booking and rescheduling options"
    }
  ];

  return (
    <div id="why" className="px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why book with TSS?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white shadow-md overflow-hidden transition-transform duration-300">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTSS;