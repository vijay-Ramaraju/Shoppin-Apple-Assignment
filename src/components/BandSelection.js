import React from "react";

const bands = [
  { id: 1, name: "Sport Band", price: 49 },
  { id: 2, name: "Leather Band", price: 99 },
  { id: 3, name: "Milanese Loop", price: 149 },
];

const BandSelection = ({ selectedBand, setSelectedBand }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Select Band</h2>
    <div className="flex space-x-4">
      {bands.map((band) => (
        <button
          key={band.id}
          onClick={() => setSelectedBand(band)}
          className={`p-4 border rounded-lg ${
            selectedBand?.id === band.id
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <div className="font-medium">{band.name}</div>
          <div className="text-sm text-gray-600">${band.price}</div>
        </button>
      ))}
    </div>
  </div>
);

export default BandSelection;
