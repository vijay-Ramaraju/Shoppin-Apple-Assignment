import React from "react";

const cases = [
  { id: 1, name: "Aluminum", price: 399 },
  { id: 2, name: "Stainless Steel", price: 699 },
  { id: 3, name: "Titanium", price: 799 },
];

const CaseSelection = ({ selectedCase, setSelectedCase }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Select Case</h2>
    <div className="flex space-x-4">
      {cases.map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedCase(item)}
          className={`p-4 border rounded-lg ${
            selectedCase?.id === item.id
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <div className="font-medium">{item.name}</div>
          <div className="text-sm text-gray-600">${item.price}</div>
        </button>
      ))}
    </div>
  </div>
);

export default CaseSelection;
