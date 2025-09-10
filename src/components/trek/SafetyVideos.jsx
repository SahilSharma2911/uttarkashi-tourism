import React from 'react';

const SafetyVideos = () => {
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Safety with TSS Video */}
          <div className="bg-white overflow-hidden">
            <h3 className="text-xl md:text-2xl text-center font-bold text-gray-800 p-2 border-b">Safety with TSS</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-64"
                src="https://www.youtube.com/embed/eUUtMhlHYAE"
                title="Safety at Himalayan trek with TSS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* TSS Jumbo Bag Video */}
          <div className="bg-white overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center p-2 border-b">TSS Jumbo Bag</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-64"
                src="https://www.youtube.com/embed/0uZkt8wGP1g"
                title="Jumbo Bag - A one stop solution for all your trekking needs | TheSearchingSouls"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyVideos;