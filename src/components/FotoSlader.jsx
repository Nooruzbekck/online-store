import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import First from "../components/assets/image/First.png";
import Second from "../components/assets/image/Second.png";
import Third from "../components/assets/image/Third.png";
import Fourth from "../components/assets/image/Fourth.png";
import Shop from "../components/assets/image/SHOP ALL.png";
import styled from "styled-components";

export const FotoSlader = () => {
  return (
    <StyledSwiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <ShopAllText>
        <img src={Shop} alt="" />
      </ShopAllText>

      <SwiperSlide>
        <StyledSwiperSlaid src={First} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSwiperSlaide src={Second} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSwiperSlaide src={Fourth} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledSwiperSlaide src={Third} alt="" />
      </SwiperSlide>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 70%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSwiperSlaide = styled.img`
  width: 100%;
  height: 652px;
  margin-left: 14em;

  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  z-index: 20;
`;
const StyledSwiperSlaid = styled.img`
  width: 100%;
  height: 652px;
  margin-left: 8em;

  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  z-index: 20;
`;

const ShopAllText = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -10;
  text-align: center;
`;
