import React from "react";

const Certificate = () => {
  return (
    <div className="py-4 md:py-8">
      {/* Certificates and Recognition Section */}
      <section className="w-full md:mt-3">
        <div className="container mx-auto md:px-4">
          <div className="w-full">
            <section className="mb-8">
              <div className="flex flex-col items-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1D3827] uppercase tracking-wider mb-4 bg-white/80 px-4 py-2 rounded-full border border-[#2a4b38]/30">
                  CERTIFICATES AND RECOGNITION
                </h3>
                <div className="w-36 h-[3px] bg-[#e1ed00]"></div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Logos Grid */}
      <section className="container mt-5 md:mt-0 mx-auto xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          {/* IMF Logo */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                src="https://www.thesearchingsouls.com/wp-content/uploads/2025/05/IMF-loogo.png"
                alt="IMF Logo"
                className="w-full max-w-[200px] h-auto mx-auto"
              />
            </figure>
          </div>

          {/* ALLIED Logo */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                src="https://www.thesearchingsouls.com/wp-content/uploads/2024/08/ALLIED-logo-1024x857.jpg"
                alt="ALLIED Logo"
                className="w-full max-w-[200px] h-auto mx-auto"
              />
            </figure>
          </div>

          {/* UK Logo */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                src="https://www.thesearchingsouls.com/wp-content/uploads/2019/12/UK-Logo.jpg"
                alt="UK Logo"
                className="w-full max-w-[200px] h-auto mx-auto"
              />
            </figure>
          </div>

          {/* Startup India Logo */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                src="https://www.thesearchingsouls.com/wp-content/uploads/2022/03/startupindia_Logo.png"
                alt="Startup India Logo"
                className="w-full max-w-[200px] h-auto mx-auto"
              />
            </figure>
          </div>

          {/* MSME Logo */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                src="https://www.thesearchingsouls.com/wp-content/uploads/2020/03/Micro-Small-Medium-Enterprises-1.png"
                alt="MSME Logo"
                className="w-full max-w-[200px] h-auto mx-auto"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* In The Media Section */}
      {/* <section className="w-full">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className="flex flex-col items-center">
              <div className="h-8"></div>
              <div className="mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 tracking-wide">
                  IN THE MEDIA
                </h3>
              </div>
              <div className="w-48 h-[3px] bg-[#1D3827] mb-8"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Recognition Section */}
      {/* <section className=" mx-4 -mt-5">
        <div className="flex flex-col items-center justify-center">
          <div className="flex-shrink-0">
            <figure className="text-center">
              <a
                href="#"
                className="inline-block bg-white p-4"
              >
                <img
                  src="https://www.thesearchingsouls.com/wp-content/uploads/2020/03/215_Silicon_India.png"
                  alt="Silicon India"
                  className="h-20 object-contain"
                />
              </a>
              <figcaption className="mt-2 text-sm text-gray-600"></figcaption>
            </figure>
          </div>
          <div className="text-center md:text-left text-gray-800 -mt-6">
            <h3 className="text-xl md:text-2xl font-bold">
              "10 Most Promising Adventure Sporting and Trekking Companies –
              2020"
            </h3>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Certificate;
