import type { FC } from "react";
import React, { useEffect, useRef, useState } from "react";
import HeaderArticle from "./HeaderArticle";
import useIntersectionObserver from "./IntersectionObserver";

interface SectionWhyProps {}

const SectionWhy: FC<SectionWhyProps> = () => {
  const [componentRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <>
      <div className="welcome-section-why">
        <div
          className={`
          py-12 text-center 
          fading-component ${isVisible ? "fade-right" : ""}
        `}
          ref={componentRef as any}
        >
          <HeaderArticle>
            <h3 className="text-[#5353AC] font-bold text-2xl mb-2">
              Tạo thói quen đọc tiếng Anh! 25 phút mỗi ngày, thời gian đọc sách!
            </h3>
            <p className="text-sm">
              Reading Time phát triển thói quen đọc tiếng Anh thông qua sự hướng
              dẫn đọc hàng ngày của giáo viên nước ngoài. Cuộc trò chuyện với
              người bản xứ trở nên tự nhiên hơn như một phần thưởng!
            </p>
          </HeaderArticle>

          <div className="flex flex-row flex-wrap items-center justify-center mt-14 gap-12">
            <div className="module cap rounded-full">
              <p>Huấn luyện 1:1 cùng giáo viên nước ngoài</p>
            </div>

            <div className="module cap rounded-full">
              <p>
                25 phút <br />
                 mỗi ngày
              </p>
            </div>

            <div className="module cap rounded-full">
              <p>Học trực tuyến</p>
            </div>
          </div>
        </div>

        <button className="px-[63px] bg-[#e7665e] rounded-[9px] mt-8 mb-8 p-4 text-white">
          Đăng ký để học thử 3 ngày
        </button>
      </div>
    </>
  );
};

export default SectionWhy;
