import React from "react";

const sizes = [
  { id: 1, name: "41mm", price: 0 },
  { id: 2, name: "45mm", price: 30 },
];

const SizeSelection = ({ selectedSize, setSelectedSize }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Select Size</h2>
    <div className="flex space-x-4">
      {sizes.map((size) => (
        <button
          key={size.id}
          onClick={() => setSelectedSize(size)}
          className={`p-4 border rounded-lg ${
            selectedSize?.id === size.id
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <div className="font-medium">{size.name}</div>
          <div className="text-sm text-gray-600">
            {size.price === 0 ? "No extra cost" : `+ $${size.price}`}
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default SizeSelection;
