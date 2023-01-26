import React, { useState, useEffect } from "react";
import * as s from "../styles/Styles";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

const CateNav = () => {
  const [banners, setBanners] = useState([]);

  useEffect(()=>{
    const fetchBanner = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setBanners(response.data);
    }
    fetchBanner();
  },[])

  const [storeCates, setstoreCate] = useState([]);
  useEffect(() => {
    const fetchstoreCate = async () => {
      const response = await axios.get('http://192.168.0.9:9244/mypage/storecate?page=0');
      setstoreCate(response.data.storeCate.storeCate);
    }
    fetchstoreCate();
  })

  return (
    <>
      <s.catenav>
        {storeCates.map((storeCate) => (
          <li key={storeCate.scSeq}>
            <button>{storeCate.scName}</button>
          </li>
        ))}
      </s.catenav>
      <s.stores>
        {banners.slice(0, 10).map((banner) => (
          <s.storeinner key={banner.id}>
            <div className="store-inner">
              <img src={banner.url} alt="" />
              <div className="storeinfo">
                <span className="title">{banner.title}</span>
                <div className="title-info">
                  <span className="star"><AiFillStar/></span>
                  <span className="review">리뷰 600</span>
                  <span className="comment">사장님댓글 6600</span>
                </div>
                <div className="title-payment">
                  <span className="here">요기서결제</span>
                  <span className="deliver">5000원 이상 배달</span>
                  <span className="time">25~35분</span>
                </div>
              </div>
            </div>
          </s.storeinner>
        ))}
      </s.stores>
    </>
  );
};

export default CateNav;
