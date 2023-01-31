import React, { useState, useEffect } from "react";
import * as s from "../styles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const CateNav = ({ banners }) => {
  const navigator = useNavigate();
  const gostore = () => {
    navigator("/storeinfo/12");
  };
  return (
    <>
      <s.catenav>
        <button
          className="cateAll-bt"
          onClick={() => {
            navigator("/");
          }}
        >
          <FiSearch className="inline mb-1 mr-1" />
          전체보기
        </button>
        {banners.slice(0, 8).map((banner) => (
          <li key={banner.id}>
            <Link to="/">
              <button>{banner.title}</button>
            </Link>
          </li>
        ))}
      </s.catenav>
      <div className="flex justify-end mr-48">
        <button
          type="button"
          className="py-2 px-4 border-black border rounded-xl flex justify-end mt-3 mb-2 "
        >
          정렬 기준 선택
        </button>
      </div>
      <s.stores>
        {banners.slice(0, 10).map((banner) => (
          <s.storeinner key={banner.id}>
            <div className="store-inner" onClick={gostore}>
              <img src={banner.url} alt="" />
              <div className="storeinfo">
                <span className="title">파스토보이{banner.id}</span>
                <div>
                  <span className="text-lg text-yellow-400 drop-shadow-sm shadow-black">
                    <AiFillStar className="inline text-yellow-400 text-xl mr-2" />
                    5.0
                  </span>
                  <span className="before:content-['|'] before:mx-2.5">
                    리뷰 600
                  </span>
                  <span className="before:content-['|'] before:mx-2.5">
                    사장님댓글 6600
                  </span>
                  <br />
                  <span className="text-rose-600">요기서결제</span>
                  <span className="before:content-['|'] before:mx-2.5 text-gray-500">
                    5000원 이상 배달
                  </span>
                  <span className="before:content-['|'] before:mx-2.5 text-gray-500">
                    25~35분
                  </span>
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
