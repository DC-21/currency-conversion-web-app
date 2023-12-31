import React from "react";
import Currency from './Currency'

const Hero = () => {
  return (
    <div className="w-full md:h-screen h-auto flex flex-col items-center justify-center md:py-4 py-12 px-3">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-3xl text-[#260c65] pb-4 font-bold">
          Online Currency Exchange Rates
        </p>
        <p className="text-center text-xl text-[#7560a5] pt-4">
          The 100% free solution for handling exchange rate conversions.
        </p>
        <p className="text-center text-xl text-[#7560a5]">
          Our currency conversion website provides live & historical exchange rate data ranging from 2000 until today.
        </p>
      </div>
      <div className="flex items-center justify-center pt-8">
        <Currency/>
      </div>
    </div>
  );
};

export default Hero;
