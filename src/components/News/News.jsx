import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsButton from "../Button/NewsButton";

import newsData from "../../data/news.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./news.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const News = () => {
  return (
    <div className="px-6 flex flex-col my-16 lg:px-20">
      <div className="text-center">
        <h1 className="font-medium text-3xl mb-4">News and Event</h1>
        <p className="md:px-10 mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla viverra lacinia. Vestibulum fermentum sodales luctus.
          Vivamus volutpat vehicula ex nec consectetur.
        </p>
      </div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {newsData.map((items) => (
          <SwiperSlide key={items.id}>
            <img className="w-[90%]" src={items.url} alt="" />
            <div className="absolute bottom-0 left-[5%] w-[90%] h-full md:h-1/2 lg:w-1/2 lg:h-full xl:h-[60%] bg-black opacity-50 lg:opacity-80 lg:rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-[5%] w-[90%] h-full md:h-1/2 lg:w-1/2 lg:h-full xl:h-[60%] px-3 py-10 text-white lg:rounded-tr-3xl flex flex-col items-center justify-end sm:justify-center lg:px-10 lg:py-10 lg:gap-6 lg:text-start">
              <h1 className=" text-base sm:text-xl md:text-2xl xl:text-3xl">
                {items.name}
              </h1>
              <p className="text-base hidden lg:block">{items.desc}</p>
              <NewsButton />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
