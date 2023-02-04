import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/core";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as s from "./styles/Styles";
import CateList from "./components/CateList";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Main = () => {
  

  return (
    <div className="mainDiv">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 15,
          stretch: 2,
          modifier: 2,
        }}
        className="mySwiper"
        loop={true}
        autoplay={true}
        style={{
          width: "1600px",
          height: "500px",
          marginTop: 100 + "px",
          objectFit: "cover",
        }}
      >
        <s.swiperPrev>
          <div className="swiper-button swiper-prev">
            <IoIosArrowBack />
          </div>
        </s.swiperPrev>

        <SwiperSlide style={{ textAlign: "center", overflow: "hidden" }}>
          <img
            src="/images/banner1.jpg"
            alt=""
            style={{ display: "inline", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center", overflow: "hidden" }}>
          <img
            src="/images/banner2.jpg"
            alt=""
            style={{ display: "inline", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center", overflow: "hidden" }}>
          <img
            src="/images/banner3.jpg"
            alt=""
            style={{ display: "inline", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center", overflow: "hidden" }}>
          <img
            src="/images/banner4.jpg"
            alt=""
            style={{ display: "inline", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center", overflow: "hidden" }}>
          <img
            src="/images/banner5.jpg"
            alt=""
            style={{ display: "inline", objectFit: "cover" }}
          />
        </SwiperSlide>

        <s.swiperNext>
          <div className="swiper-button swiper-next">
            <IoIosArrowForward />
          </div>
        </s.swiperNext>
      </Swiper>
      <CateList/>
    </div>
  );
};

export default Main;
