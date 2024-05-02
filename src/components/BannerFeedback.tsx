import type { FC } from "react";
import React, { useState } from "react";
import HeaderArticle from "./HeaderArticle";
import Model from "./Model";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const VideosYoutube = [
  {
    thumbnail: "https://img.youtube.com/vi/R8tVc0BDM54/sddefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=R8tVc0BDM54&t=4s",
    desc: "“Việc đọc sách nên được thực hiện ở một nơi thoải mái, nhưng tôi nghĩ sẽ rất tốt nếu có thể thực hiện việc đó ở nhà hàng ngày với giáo viên dạy đọc.”",
    author: "Giám đốc Reading Time 유형구 원",
  },
  {
    thumbnail: "https://img.youtube.com/vi/fwUvp2lEtn0/sddefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=R8tVc0BDM54&t=4s",
    desc: "“Tôi đã lo lắng liệu con tôi có thể tham gia các lớp học tiếng Anh trực tuyến từ khi còn nhỏ hay không, nhưng nhờ có giáo viên tốt bụng nên tôi đã có thể vui vẻ.”",
    author: "Mẹ của bé  김현욱 어 8 tuổi",
  },
];
interface BannerFeedBackProps {}

const BannerFeedBack: FC<BannerFeedBackProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="pt-[80px]">
        <HeaderArticle>
          <h3 className="text-[#5353AC] font-bold text-2xl mb-2">
            Đánh giá thực tế
          </h3>
          <p className="text-sm">
            Hãy xem đánh giá trải nghiệm thực tế của Reading Time trong video.
          </p>

          <div className="mt-[40px]">
            <Swiper
              className="welcome-banner"
              slidesPerView={1}
              style={{
                minHeight: 340,
              }}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
            >
              {VideosYoutube.map((dataset) => (
                <SwiperSlide
                  key={dataset.thumbnail}
                  className="flex flex-col text-left"
                >
                  <div className="video_image" onClick={openModal}>
                    <img
                      src={dataset.thumbnail}
                      className="object-contain"
                      alt=""
                    />
                  </div>
                  <p className="mt-[20px] leading-5 text-sm">{dataset.desc}</p>
                  <p className="mt-[30px]">{dataset.author}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </HeaderArticle>
      </div>

      <Model onClose={closeModal} open={showModal}>
        <div className="w-[100vw] h-[450px] relative">
          <iframe
            className="w-[90%] h-full absolute"
            height="450"
            src="https://www.youtube.com/embed/R8tVc0BDM54?si=rwmQ7j8cGHaRy9pu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </Model>
    </>
  );
};

export default BannerFeedBack;
