import React from "react";
// ? Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// ? Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ? import required modules
import { Pagination, Navigation } from "swiper";

const SwiperCarousel = (props) => {
  const {
    slidesPerView,
    spaceBetween,
    slidesPerGroup,
    isLoop,
    swiperSlidesData,
  } = props;

  const renderSwiperSlides = () => {
    return swiperSlidesData.map((swiperSlideChild, index) => {
      return <SwiperSlide key={index}>{swiperSlideChild}</SwiperSlide>;
    });
  };

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      slidesPerGroup={slidesPerGroup}
      loop={isLoop}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {renderSwiperSlides()}
    </Swiper>
  );
};

export default SwiperCarousel;
