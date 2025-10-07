import React, { useState, useEffect, useRef } from "react";

const CounterItem = ({ end, suffix, title, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = null;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="text-center px-4 py-6">
      <div className="text-4xl md:text-5xl xl:text-7xl font-bold text-[#5E5C5C] mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg text-gray-700 font-medium">{title}</div>
    </div>
  );
};

const Why = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Header Section */}
      <section className="w-full mt-5 pb-2 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <section className="mb-8">
              <div className="flex flex-col items-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1D3827] uppercase tracking-wider mb-4 bg-white/80 px-4 py-2 rounded-full border border-[#2a4b38]/30">
                  Why Choose Us
                </h3>
                <div className="w-36 h-[3px] bg-[#e1ed00]"></div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Features Section - Using Grid Layout */}
      <section className="container mx-auto xl:px-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                decoding="async"
                width={256}
                height={60}
                className="w-full max-w-[256px] h-auto mx-auto"
                src="https://www.thesearchingsouls.com/wp-content/uploads/2020/03/unnamed-1-1.png"
                alt="5 Star Rating"
              />
              <figcaption className="text-lg text-black mt-2">
                "5 Star Rated Company with over 3000+ Google Reviews. Delightful
                customer Experience Guaranteed"
              </figcaption>
            </figure>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                decoding="async"
                width={225}
                height={225}
                className="w-full max-w-[225px] h-auto mx-auto"
                src="https://www.thesearchingsouls.com/wp-content/uploads/2020/03/download.png"
                alt="Safety First"
                srcSet="https://www.thesearchingsouls.com/wp-content/uploads/2020/03/download.png 225w, https://www.thesearchingsouls.com/wp-content/uploads/2020/03/download-100x100.png 100w"
                sizes="(max-width: 225px) 100vw, 225px"
              />
              <figcaption className="text-lg text-black mt-2">
                "Safety First Approach. First Company in India to introduce
                Medical Tents."
              </figcaption>
            </figure>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                decoding="async"
                width={80}
                height={124}
                className="w-full max-w-[80px] h-auto mx-auto"
                src="https://www.thesearchingsouls.com/wp-content/uploads/2020/03/Devasheesh-in-Yellow-2.png"
                alt="Qualified Staff"
              />
              <figcaption className="text-lg text-black mt-2">
                "Qualified, Experienced, Supportive Tour Leaders and staff"
              </figcaption>
            </figure>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                decoding="async"
                width={155}
                height={66}
                className="w-full max-w-[155px] h-auto mx-auto"
                src="https://www.thesearchingsouls.com/wp-content/uploads/2020/03/reduce-620x264-Copy-3.png"
                alt="Soulful Travel"
              />
              <figcaption className="text-lg text-black mt-2">
                "Soulful and Responsible Travel"
              </figcaption>
            </figure>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center">
            <figure className="mb-4">
              <img
                decoding="async"
                width={112}
                height={102}
                className="w-full max-w-[112px] h-auto mx-auto"
                src="https://www.thesearchingsouls.com/wp-content/uploads/2020/03/elc-2.png"
                alt="Experiential Learning"
              />
              <figcaption className="text-lg text-black mt-2">
                "Experiential Learning"
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      {/* <section className="container mx-auto xl:px-28 mt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CounterItem end={5000} suffix="+" title="Treks and Tours" />
            <CounterItem end={96} suffix="%" title="Delighted Customer Index" />
            <CounterItem end={5} suffix=" Star" title="Rated Company" />
            <CounterItem end={25000} suffix="+" title="Happy Souls" />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Why;
