import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-20">
      <h2 className="text-4xl font-bold mb-4">Design Your Perfect Watch</h2>
      <p className="text-gray-700 mb-6">
        Select a case, size, and band to create a custom look tailored just for
        you.
      </p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Start Customizing
      </button>
    </section>
  );
};

export default Hero;
