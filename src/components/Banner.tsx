import type { FC } from "react";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface BannerProps {}
const Banners = [
  "https://www.reading-time.co.kr/resources/img/main/vis4_210906.jpg",
  "https://www.reading-time.co.kr/resources/img/main/vis2.jpg",
  "https://www.reading-time.co.kr/resources/img/main/vis1.jpg",
];
const Banner: FC<BannerProps> = () => {
  const [currentIndexBanner, setCurrentIndexBanner] = useState<number>(0);
  return (
    <>
      <Swiper
        className="welcome-banner"
        slidesPerView={1}
        style={{
          minHeight: 340,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => {
          setCurrentIndexBanner(swiper.realIndex);
        }}
      >
        {Banners.map((dataset) => (
          <SwiperSlide key={dataset}>
            <img src={dataset} alt="" className="object-cover min-h-[340px]" />
          </SwiperSlide>
        ))}
      </Swiper>

      <ul className="flex flex-row gap-4 mt-8 items-center justify-center">
        {Banners.map((dataset, index) => (
          <li
            className={`w-4 h-4 ${
              currentIndexBanner === index ? "bg-[#E7665E]" : "bg-[#D9D9D9]"
            } rounded-full`}
            key={dataset}
          ></li>
        ))}
      </ul>

      <button className="px-[63px] bg-[#e7665e] rounded-[9px] mt-8 mb-8 p-4 text-white">
        Đăng ký học thử ngay
      </button>
    </>
  );
};

export default Banner;
