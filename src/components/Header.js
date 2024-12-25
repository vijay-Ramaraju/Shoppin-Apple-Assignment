import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Watch Configurator</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="text-gray-700 hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#cta" className="text-gray-700 hover:underline">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
