import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

const features = [
  {
    title: "Customizable Bands",
    description: "Choose from a variety of bands.",
    image: "link-to-image1.png",
  },
  {
    title: "Stylish Cases",
    description: "Select from premium materials.",
    image: "link-to-image2.png",
  },
  {
    title: "Multiple Sizes",
    description: "Find the size that fits you.",
    image: "link-to-image3.png",
  },
];

const carouselSlides = [
  {
    title: "Comfortable Fit",
    description: "Designed for all-day wear.",
    image: "link-to-carousel1.png",
  },
  {
    title: "Durable Materials",
    description: "Crafted to last.",
    image: "link-to-carousel2.png",
  },
  {
    title: "Water Resistance",
    description: "Built for all environments.",
    image: "link-to-carousel3.png",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Carousel slides={carouselSlides} />
      <section id="features" className="py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
