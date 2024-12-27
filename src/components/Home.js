import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <nav className="mt-5 ml-3 md:mt-2 md:ml-2">
        <a
          href="https://www.apple.com/shop/buy-watch/apple-watch"
          className="flex"
        >
          <img
            src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1734954726/header_images_apple_watches_swxgrm.jpg"
            alt="Apple Watch"
            width="80"
            height="18"
          />
        </a>
      </nav>
      <div className="flex flex-row justify-center ml-2 mt-3 p-5 mb-1 md:justify-start md:mt-10">
        <div>
          <p className="text-lg md:text-2xl text-black mb-0">
            Apple Watch Studio
          </p>
          <h1 className="text-black text-3xl md:text-6xl font-semibold mt-1">
            Choose a case.
            <br />
            Pick a band.
            <br />
            Create your own style.
          </h1>
          <Link to="/case" className="no-underline text-inherit">
            <button className="bg-blue-500 text-white h-10 rounded-lg font-bold px-5 mt-3">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1734963198/Apple-Watch-Series-10-watch-face-Flux-240909_inline.jpg.large-removebg-preview_okrfbw.png"
        alt="watch face"
        className="h-auto mx-auto mt-0"
      />
    </div>
  );
};

export default Home;
