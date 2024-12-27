import React from "react";

const SaveShare = ({ selectedCase, selectedBand, selectedSize }) => {
  const handleSave = () => {
    // Logic for saving or sharing
    alert("Configuration saved!");
  };

  return (
    <div className="p-5 text-center">
      <button
        onClick={handleSave}
        className="bg-blue-500 h-10 w-24 rounded-full text-white font-bold border-none"
      >
        Save
      </button>
    </div>
  );
};

export default SaveShare;
