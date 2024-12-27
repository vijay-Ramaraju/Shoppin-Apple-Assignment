import React from "react";

const PriceCalculator = ({ selectedCase, selectedBand, selectedSize }) => {
  const totalPrice = (selectedCase?.price || 0) + (selectedBand?.price || 0);

  return (
    <div className="p-5 bg-gray-100 border border-gray-300 rounded-lg w-4/5 max-w-sm text-center mt-10">
      <h2 className="text-xl font-semibold">Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default PriceCalculator;
