import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import styled from "styled-components";
import convertToComma from "../../util/comma";

const DetailSwiper = ({ repMenuData }) => {
  repMenuData.length > 8 && repMenuData.splice(8, repMenuData.length);
  console.log(repMenuData);
  return (
    <SwiperContainer
      navigation={true}
      scrollbar={{
        hide: true,
      }}
      slidesPerView={2.5}
      spaceBetween={0}
      modules={[Scrollbar, Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4.5,
        },
      }}
      className="mySwiper"
    >
      {/* map */}
      {repMenuData.map((item) => (
        <SwiperSlide key={item.mniSeq}>
          <div className="w-40 border">
            <img src={item.mniImg} className="w-full" alt={item.mniName} />
            <div className="p-2">
              <p className="whitespace-nowrap truncate font-bold">
                {item.mniName}
              </p>
              <p className="text-sm">{convertToComma(item.mniPrice)}원</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
};

const SwiperContainer = styled(Swiper)`
  padding-bottom: 8px;
  z-index: 0;
  .swiper-wrapper {
    padding: 15px;
  }
  .swiper-button-prev {
    left: 0;
    background: url("/images/btn-left.png") no-repeat;
    width: 40px;
    height: 40px;
    background-size: 40px;
  }

  .swiper-button-prev::after {
    display: none;
  }
  .swiper-button-next {
    right: 0;
    background: url("/images/btn-right.png") no-repeat;
    width: 40px;
    height: 40px;
    background-size: 40px;
  }
  .swiper-button-next::after {
    display: none;
  }
`;

export default DetailSwiper;
