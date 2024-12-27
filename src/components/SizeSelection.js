import React from "react";

const SizeSelection = ({ sizes, onSelect }) => {
  return (
    <div className="text-center flex flex-wrap justify-between items-center  p-2 gap-1" >
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className=" text-sm border-none outline-none h-10 rounded-md bg-gray-300 font-semibold px-2"
        >
          {size}mm
        </button>
      ))}
    </div>
  );
};

export default SizeSelection;
