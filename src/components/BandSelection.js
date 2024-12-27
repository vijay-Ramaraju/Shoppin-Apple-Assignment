import React from "react";

const BandSelector = ({ bands, onSelect }) => {
  return (
    <div className="max-w-[100%]">
      <div className="flex overflow-x-auto gap-2 text-black md:justify-center md:items-center  px-2">
        {bands.map((band) => (
          <button
            key={band.id}
            onClick={() => onSelect(band)}
            className="border  md:mt-1 border-gray-300 rounded-md bg-gray-200 cursor-pointer text-center flex-shrink-0 h-10 font-bold px-4 py-2 hover:shadow-lg transition-shadow"
          >
            <p>{band.type}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BandSelector;
