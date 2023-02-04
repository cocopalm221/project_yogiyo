import React, { useState, useEffect } from "react";
import * as s from "../styles/Styles";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import StarRating from "./StarRating";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const CateNav = ({ categorys }) => {
  const [gages, setGages] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const [search, setSearch] = useState("");

  //loading
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchGage = async () => {
      try {
        const result = await axios.get("http://192.168.0.9:9244/api/alllist");
        setGages(result.data.list);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGage();
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === "") {
      alert("검색어를 입력하세요");
    } else {
      const filterData = gages.filter((gage) => gage.siName === search);
      setGages(filterData);
    }
    setSearch("");
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const cateSearch = (i) => {
    axios
      .get("http://192.168.0.9:9244/api/alllist")
      .then((res) => setRefresh(res.data.list));
    const filterData = refresh.filter((gage) => gage.scName === i);
    setGages(filterData);
  };

  const reFresh = async () => {
    await axios
      .get("http://192.168.0.9:9244/api/alllist")
      .then((res) => setGages(res.data.list));
  };

  return (
    <>
      <s.catenav>
        <form onSubmit={(e) => onSearch(e)}>
          <input
            type="text"
            value={search}
            placeholder="가게명 검색"
            onChange={onChangeSearch}
            className="form mr-2"
          />
          <button type="submit" className="formbt">
            <FiSearch />
          </button>
        </form>
        <button
          className="cateAll-bt"
          onClick={() => {
            reFresh();
          }}
        >
          전체보기
        </button>
        {categorys.slice(1).map((category) => (
          <li key={category.scSeq}>
            <button onClick={() => cateSearch(category.scName)}>
              {category.scName}
            </button>
          </li>
        ))}
      </s.catenav>
      <s.sortbt>
        <div className="sort-down">
          <input id="dropdown" type="checkbox" />
          <label className="dropdownLabel" for="dropdown">
            <div>정렬 기준 선택</div>
            <RiArrowDownSFill className="caretIcon" />
          </label>
          <div className="downlist">
            <ul>
              <li>리뷰 많은 순</li>
              <li>댓글 많은 순</li>
              <li>별점 높은 순</li>
            </ul>
          </div>
        </div>
      </s.sortbt>
      <s.stores>
        {gages.map((gage) => (
          <Link to={`/storeinfo/${gage.siSeq}`}>
            <s.storeinner key={gage.siSeq}>
              <div className="store-inner">
                <img
                  src={`http://192.168.0.9:9244/store/images/${gage.siUri}`}
                  alt=""
                />
                <div className="storeinfo">
                  <span className="title">{gage.siName}</span>
                  <div>
                    <span className="text-lg text-yellow-400 drop-shadow-sm shadow-black flex items-center gap-2">
                      <StarRating starRatio={gage.average} />
                      <p className="text-sm">{gage.average}</p>
                    </span>
                    <span>리뷰 {gage.reviewcnt}</span>
                    <span className="text-sm">I </span>
                    <span>사장님댓글 {gage.ownerReviewCnt}</span>
                    <br />
                    <span className="text-rose-600">요기서결제</span>
                    <span className="text-sm"> I </span>
                    <span className="text-gray-500">
                      {gage.siMinOrderPrice}원 이상 배달
                    </span>
                    <span className="text-sm"> I </span>
                    <span className="text-gray-500">{gage.diTime}</span>
                  </div>
                </div>
              </div>
            </s.storeinner>
          </Link>
        ))}
      </s.stores>
      {loading && <LoadingSpinner />}
    </>
  );
};

export default CateNav;
