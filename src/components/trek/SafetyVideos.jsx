import React from 'react';

const SafetyVideos = ({ data }) => {
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((video, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <h3 className="text-xl md:text-2xl text-center font-bold text-gray-800 p-2 border-b">
                {video.title}
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-64"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyVideos;