import React, { useState, useEffect } from "react";
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
import { Mousewheel } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as s from "./styles/Styles";
import CateList from "./components/CateList";
import axios from "axios";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Main = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setBanners(response.data);
    };
    fetchBanner();
  }, []);

  return (
    <div className="mainDiv">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
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
        mousewheel={true}
        className="mySwiper"
        loop={true}
        autoplay={true}
        style={{
          width: "1500px",
          height: "600px",
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
      <CateList banners={banners} />
    </div>
  );
};

export default Main;
