import React from "react";
import * as s from "../styles/Styles";
import { Link } from "react-router-dom";
import { AiFillStar} from "react-icons/ai";

const CateNav = ({ banners }) => {
  return (
    <>
      <s.catenav>
        <button>전체보기</button>
        {banners.slice(0, 8).map((banner) => (
          <li key={banner.id}>
            <Link to="/">
              <button>{banner.title}</button>
            </Link>
          </li>
        ))}
      </s.catenav>

      <s.stores>
        {banners.slice(0, 10).map((banner) => (
          <s.storeinner key={banner.id}>
            <div className="store-inner">
              <img src={banner.url} alt="" />
              <div className="storeinfo">
                <span className="title">파스토보이{banner.id}</span>
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
