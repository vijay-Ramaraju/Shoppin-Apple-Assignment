import React from "react";

const WatchPreview = ({ selectedCase, selectedSize, selectedBand }) => {
  return (
    <div className="w-4/5 max-w-[600px] text-center text-black font-semibold mt-0">
      <p className="font-semibold mt-0">
        {selectedSize ? selectedSize : "46"}mm{" "}
        <span>{selectedCase ? selectedCase.color : "Black"}</span>{" "}
        <span>{selectedCase ? selectedCase.material : "Aluminium"}</span> Case
        with <span>{selectedBand ? selectedBand.color : "Black"}</span>{" "}
        <span>{selectedBand ? selectedBand.type : "Solo loop"}</span>
      </p>
    </div>
  );
};

export default WatchPreview;
