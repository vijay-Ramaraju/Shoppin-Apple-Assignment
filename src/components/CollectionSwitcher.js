import React from "react";

const CollectionSwitcher = ({ collections, onSwitch }) => {
  return (
    <div className="text-center">
      <select
        onChange={(e) => onSwitch(e.target.value)}
        className="p-2 border border-gray-300 rounded-md text-base cursor-pointer text-center"
      >
        {collections.map((collection) => (
          <option
            key={collection}
            value={collection}
            className="text-black font-medium hover:text-sky-500"
          >
            {collection}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CollectionSwitcher;
