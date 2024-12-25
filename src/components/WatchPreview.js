import React from "react";

const WatchPreview = ({ selectedCase, selectedSize, selectedBand }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Watch Preview</h2>
      <div className="border p-4 rounded-md text-center">
        {/* Preview Case */}
        {selectedCase ? (
          <div>
            <img
              src={selectedCase.image} // Assuming there's an `image` property in the `selectedCase` object
              alt={selectedCase.name}
              className="w-24 h-24 mx-auto"
            />
            <p className="mt-2 font-semibold">{selectedCase.name}</p>
          </div>
        ) : (
          <p className="text-gray-500">No case selected</p>
        )}

        {/* Preview Size */}
        {selectedSize ? (
          <p className="mt-4 text-sm text-gray-700">
            Selected Size: {selectedSize.name}
          </p>
        ) : (
          <p className="mt-4 text-sm text-gray-500">No size selected</p>
        )}

        {/* Preview Band */}
        {selectedBand ? (
          <div>
            <p className="mt-2 text-sm text-gray-700">{selectedBand.name}</p>
            <img
              src={selectedBand.image} // Assuming there's an `image` property in the `selectedBand` object
              alt={selectedBand.name}
              className="w-24 h-6 mx-auto"
            />
          </div>
        ) : (
          <p className="text-sm text-gray-500 mt-2">No band selected</p>
        )}
      </div>
    </div>
  );
};

export default WatchPreview;
