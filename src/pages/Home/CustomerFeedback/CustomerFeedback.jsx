import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const CustomerFeedback = () => {
  const feedbackList = [
    {
      text: "Amazing quality and super comfortable! Highly recommended.",
      user: "Rahim",
    },
    {
      text: "Fast delivery and premium stitching. Will shop again!",
      user: "Karim",
    },
    {
      text: "Great designs and fabric quality. Loved it!",
      user: "Ayesha",
    },
    {
      text: "Excellent customer support and very fast response time.",
      user: "Nadia",
    },
    {
      text: "Affordable pricing with top-notch material. Impressed!",
      user: "Hasan",
    },
    {
      text: "Perfect fitting and trendy style. I will recommend this to my friends.",
      user: "Sultana",
    },
  ];
  return (
    <section className="px-6 md:px-16 text-center space-y-10">
      <h2 className="text-3xl font-bold">Customer Feedback</h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        {feedbackList.map((feedback, i) => (
          <SwiperSlide key={i}>
            <div className="w-full p-10 bg-base-200 text-center rounded-xl shadow-xl mx-auto max-w-3xl">
              <p className="text-lg max-w-2xl mx-auto mb-4">
                ❝ {feedback.text} ❞
              </p>
              <p className="font-semibold">- {feedback.user}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerFeedback;
