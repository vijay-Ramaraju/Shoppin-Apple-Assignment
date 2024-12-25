import React from "react";

const WatchDisplay = ({ selectedBand, selectedCase, price }) => {
  return (
    <div className="text-center my-8">
      <div className="flex justify-center">
        <img
          src={selectedCase.image}
          alt={selectedCase.name}
          className="h-64 object-contain"
        />
      </div>
      <p className="mt-4 text-gray-700">
        <strong>APPLE WATCH SERIES 10</strong>
        <br />
        {selectedCase.name} with {selectedBand.name}
        <br />
        <span className="text-lg text-black font-semibold">From ${price}</span>
      </p>
    </div>
  );
};

export default WatchDisplay;
