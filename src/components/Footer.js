import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Watch Configurator. All rights reserved.</p>
        <div className="space-x-4 mt-4">
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
