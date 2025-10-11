import React from 'react';

const CallToAction = ({ data }) => {
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto text-center flex flex-col lg:flex-row gap-3 items-center justify-around">
        <h2 className="text-3xl font-bold text-blue-600">
          {data.heading}
        </h2>
        <a
          href={data.bookingUrl}
          className="inline-flex items-center justify-center px-8 py-4 bg-green-400 border text-white font-semibold rounded-xl uppercase transition-colors shadow-lg"
        >
          <span>{data.buttonText}</span>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;