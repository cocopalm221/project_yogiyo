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

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel]);

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
        style={{
          width: "100%",
          height: "600px",
          backgroundColor: "#fcdae6ff",
        }}
        spaceBetween={30}
        initialSlide={1}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        mousewheel={true}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 15,
          stretch: 5,
          depth: 50,
          modifier: 2,
          slideShadows: true,
        }}
        
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
        loop={true}
        autoplay={true}
        className="mySwiper"
      >
        <s.swiperPrev>
          <div className="swiper-button swiper-prev">
            <IoIosArrowBack />
          </div>
        </s.swiperPrev>
        {banners.slice(0, 10).map((banner, idx) => (
          <SwiperSlide key={banner.id} virtualIndex={idx}>
            <img src={banner.url} alt="idx" />
          </SwiperSlide>
        ))}
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
