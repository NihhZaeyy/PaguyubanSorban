import React from "react";
import gallery from "../../data/gallery.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./gallery.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const GallerySection = () => {
  const last = 4 + Math.floor(Math.random() * (gallery.length - 4));
  const first = last - 4;

  const y = 4 + Math.floor(Math.random() * (gallery.length - 4));
  const x = y - 4;

  return (
    <div className="px-6 flex flex-col my-16 lg:px-20">
      <div className="text-center">
        <h1 className="font-medium text-3xl mb-4">Galeri Kegiatan</h1>
        <p className="md:px-10 mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla viverra lacinia. Vestibulum fermentum sodales luctus.
          Vivamus volutpat vehicula ex nec consectetur.
        </p>
      </div>
      <div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-500">
        <div>
          <h2 className="font-medium text-lg">Kegiatan Internal</h2>
        </div>
        <div className="grid gap-2 lg:grid-cols-2">
          {gallery.slice(first, last).map((items) => (
            <div key={items.id}>
              <img src={items.url} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6 pb-4 border-b-2 border-gray-500">
        <div>
          <h2 className="font-medium text-lg">Kegiatan Eksternal</h2>
        </div>
        <div className="grid gap-2 lg:grid-cols-2">
          {gallery.slice(x, y).map((items) => (
            <div key={items.id}>
              <img src={items.url} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 mb-2">
        <h2 className="font-medium text-lg">Kegiatan Lainnya</h2>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          {gallery.map((items) => (
            <SwiperSlide key={items.id}>
              <img src={items.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySection;
