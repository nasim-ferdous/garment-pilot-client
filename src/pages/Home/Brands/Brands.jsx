import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brands = [
    {
      img: "https://media.istockphoto.com/id/858325998/photo/you-are-your-own-brand.jpg?s=1024x1024&w=is&k=20&c=-6FvxnTZTDQ8UnTx-aL6wuddsfM6EupakZ6Y4DShXSA=",
    },
    {
      img: "https://i.ibb.co/RTvwG8n8/Nike-logo.webp",
    },
    {
      img: "https://i.ibb.co/ycvvXBp9/hermas.jpg",
    },
    {
      img: "https://i.ibb.co/SDQtMVd8/H-M-Logo-svg.png",
    },
    {
      img: "https://i.ibb.co/HDy30s2M/dorji-bari.png",
    },
    {
      img: "https://i.ibb.co/v6XWyFTY/arong.png",
    },
  ];
  return (
    <div className="px-6 md:px-16 text-center space-y-10">
      <h2 className="text-3xl font-bold">Our Brands</h2>

      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand.img} alt="brands" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
