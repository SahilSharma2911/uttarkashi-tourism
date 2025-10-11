import React from "react";
import { ArrowRight } from "lucide-react";

const NavigationButtons = ({ data }) => {
  return (
    <div className="w-10/12 mx-auto my-12 px-4 bg-white">
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((button) => (
          <div key={button.id} className="w-full sm:w-auto">
            <a
              href={button.href}
              className="
                flex
                items-center
                justify-center
                bg-[#2a4b38]
                hover:bg-[#e1ed00]
                hover:text-[#1D3827]
                text-white
                font-semibold
                text-sm
                md:text-base
                py-3
                px-6
                rounded-full
                transition-all
                duration-300
                shadow-md
                hover:shadow-lg
                w-full
                sm:w-auto
              "
            >
              <span className="flex items-center">
                <span>{button.text}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationButtons;