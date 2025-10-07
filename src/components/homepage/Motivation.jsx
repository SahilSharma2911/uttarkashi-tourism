import React from "react";

const Motivation = () => {
  return (
    <div className="w-11/12 mx-auto pb-12">
      {/* Header Section */}
      <section className="w-full mt-5 pb-2">
        <div className="container mx-auto md:px-4">
          <div className="w-full">
            <section className="mb-8">
              <div className="flex flex-col items-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1D3827] uppercase tracking-wider mb-4 bg-white/80 px-4 py-2 rounded-full border border-[#2a4b38]/30">
                  What TREKKERS SAY - Our MotiVATION
                </h3>
                <div className="w-36 h-[3px] bg-[#e1ed00]"></div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="w-full xl:px-20">
        <div className="container mx-auto md:px-4">
          {/* First Row of Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Video 1 */}
            <div className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/RZ4c9bO2wd0"
                  title="What our trekker's say about us ?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 2 */}
            <div className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/GXghFfNnbnI"
                  title="Why Dayara Bugyal Trek with TheSearchingSouls?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 3 */}
            <div className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/FJRlatTqguU"
                  title="Kedarkantha Trek Experience with TheSearchingSouls"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 4 */}
            <div className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/RdavQt4ge28"
                  title="Why The Searching souls is the best trekking company in India"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Second Row of Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Video 5 */}
            <div className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Bdkb4aEpBuo"
                  title="Our Motivation -1 | Roopkund Trek Feedback | The Searching Souls"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 6 */}
            <div className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/kl7AAGgXyMw"
                  title="Our Motivation -2 || Nag Tibba Trek || The Searching Souls"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 7 */}
            <div className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/t5be03Cbgnw"
                  title="Our Motivation-3 | Tungnath Trek Feedback | TheSearchingSouls"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 8 */}
            <div className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/L_PwMilBt-w"
                  title="Kasoor by Prateek Kuhad: The Trekking Edition"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Motivation;
