import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <img src={image} alt={title} className="w-32 h-32 object-cover" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
