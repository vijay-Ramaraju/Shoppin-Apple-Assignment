import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Carousel = ({ slides }) => {
  return (
    <section className="py-10">
      {" "}
      <h2 className="text-2xl font-semibold text-center mb-6">
        {" "}
        Explore Features{" "}
      </h2>{" "}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >
        {" "}
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {" "}
            <div className="flex flex-col items-center text-center">
              {" "}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-64 h-64 object-cover rounded-md mb-4"
              />{" "}
              <h3 className="text-lg font-semibold">{slide.title}</h3>{" "}
              <p className="text-gray-600">{slide.description}</p>{" "}
            </div>{" "}
          </SwiperSlide>
        ))}{" "}
      </Swiper>{" "}
    </section>
  );
};

export default Carousel;
