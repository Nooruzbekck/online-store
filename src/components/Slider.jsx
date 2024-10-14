import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { useRef } from "react";

import First from "../components/assets/image/First.png";
import Second from "../components/assets/image/Second.png";
import Third from "../components/assets/image/Third.png";
import Fourth from "../components/assets/image/Fourth.png";
import Shop from "../components/assets/image/SHOP ALL.png";

export const FotoSlider = () => {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    swiper.slides[swiper.activeIndex].classList.add("active");
  };

  return (
    <StyledSwiper
      ref={swiperRef}
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{ delay: 3000 }}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      onSlideChange={handleSlideChange}
      onInit={handleSlideChange}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
    >
      <ShopAllText>
        <img src={Shop} alt="Shop All" />
      </ShopAllText>

      <SwiperSlide>
        <StyledSlide src={First} alt="First" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSlide src={Second} alt="Second" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSlide src={Fourth} alt="Fourth" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSlide src={Third} alt="Third" />
      </SwiperSlide>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledSlide = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
  transition: transform 0.5s ease;

  &.active {
    transform: scale(1.1);
    z-index: 10;
  }
`;

const ShopAllText = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  text-align: center;
`;
