import React from 'react';

const PackingEssentials = () => {
  const essentials = [
    {
      category: "Basic Trek Essentials",
      items: [
        "Rucksack (60-70 ltr with cover)",
        "Down Jacket",
        "Fleece",
        "Gloves (Woollen and Waterproof)",
        "Poncho or a Rain Coat",
        "Trekking Pole",
        "Head Torch",
        "Trek Shoes - Men or Women",
        "Trek Pant – 2 Nos. Preferred",
        "Day Pack (20-30 litres)"
      ]
    },
    {
      category: "Clothes",
      items: [
        "A pair of Thermals",
        "Warm Socks and cotton socks (2-3 pair)",
        "Woollen Cap",
        "Sun Cap",
        "Gloves (Woollen and waterproof)",
        "Extra Layering of Warm Clothing as per necessity",
        "Extra lowers for Nights",
        "Utensils: Plates, Spoon and Coffee Mug",
        "Photo ID proof",
        "Balaclava"
      ]
    },
    {
      category: "Personal Utilities",
      items: [
        "Sun Glasses (UV Protected)",
        "Hand Towel",
        "Sun Screen Lotion (Min SPF- 30 min)",
        "Moisturiser",
        "Lunch box, Coffee mug and spoon",
        "Water bottle or Hydration Bag",
        "Sandals",
        "Basic First Aid",
        "Energy Bars"
      ]
    },
    {
      category: "Toiletries",
      items: [
        "Toilet paper rolls",
        "Towels",
        "Wet wipes (unscented)",
        "Zip Lock Bags",
        "Sanitizing Toilet Spray",
        "Soap and Handwash (pocket sized)",
        "Tooth Paste and Tooth Brush"
      ]
    }
  ];

  return (
    <div className="pb-16 pt-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What should you pack for Pin Bhabha Pass Trek?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {essentials.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{section.category}</h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackingEssentials;