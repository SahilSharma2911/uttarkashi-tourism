import React from 'react';

const RelatedTreks = () => {
  const treks = [
    {
      image: "https://www.thesearchingsouls.com/wp-content/uploads/2020/03/BL-T-1.jpg",
      title: "Bhrigu Lake Trek",
      description: "Bhrigu Lake is a high altitude trek in the himalayas of Kullu district of Himanchal Pradesh. It is situated at an altitude of 4300...",
      link: "https://www.thesearchingsouls.com/bhrigu-lake-trek/"
    },
    {
      image: "https://www.thesearchingsouls.com/wp-content/uploads/2021/06/HP-Thmb.jpg",
      title: "Hampta Pass Trek",
      description: "It is a pass in the Himalayas of Himachal Pradesh connecting Kullu and Spiti valley",
      link: "https://www.thesearchingsouls.com/hampta-pass-trek/"
    },
    {
      image: "https://www.thesearchingsouls.com/wp-content/uploads/2022/04/Thumbnail.jpg",
      title: "KASHMIR GREAT LAKES TREK",
      description: "It is indeed one of the most beautiful treks in the country. Like it is said if there is heaven it is there.....",
      link: "https://www.thesearchingsouls.com/kashmir-great-lakes-trek"
    },
    {
      image: "https://www.thesearchingsouls.com/wp-content/uploads/2023/03/Tarsar-Marsar-1.jpg",
      title: "Tarsar Marsar Trek",
      description: "The Tarsar Marsar Lake is an alpine lake located in Tral valley of Pulwama district in Jammu and Kashmir",
      link: "https://www.thesearchingsouls.com/tarsar-marsar-lake-trek/"
    }
  ];

  return (
    <div className="pb-16 pt-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Related Treks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treks.map((trek, index) => (
            <div key={index} className="bg-white overflow-hidden transition-transform duration-300 ">
              <img 
                src={trek.image} 
                alt={trek.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{trek.title}</h3>
                <p className="text-gray-700 mb-4">{trek.description}</p>
                <a
                  href={trek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#FB2056] uppercase tracking-wider text-sm font-semibold transition-colors"
                >
                  Learn More
                    <svg 
                    className="w-4 h-4 ml-2" 
                    fill="currentColor" 
                    viewBox="0 0 448 512"
                  >
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedTreks;