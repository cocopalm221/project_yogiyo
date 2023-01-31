import React, { useState, useEffect } from "react";
import * as s from "../styles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import StarRating from "./StarRating";
import axios from "axios";

const CateNav = ({ categorys }) => {
  const navigator = useNavigate();
  const [gages, setGages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchGage = async () => {
      try {
        const result = await axios.get("http://192.168.0.9:9244/api/alllist");
        setGages(result.data.list);
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
      const filterData = gages.filter((gage) => gage.siName == search);
      setGages(filterData);
      console.log(filterData);
    }
    setSearch("");
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const cateSearch = (go) => {
    console.log(go);
    const filterData = gages.filter((gage) => gage.scName === go );
    setGages(filterData);
    console.log(filterData);
  };

  return (
    <>
      <s.catenav>
        <form onSubmit={(e) => onSearch(e)}>
          <input
            type="text"
            value={search}
            placeholder="제목을 입력하세요"
            onChange={onChangeSearch}
            className="form"
          />
          <button type="submit" className="formbt">
            Search
          </button>
        </form>
        <button
          className="cateAll-bt"
          onClick={() => {
            navigator("/");
          }}
        >
          <FiSearch className="inline mb-1 mr-1" />
          전체보기
        </button>
        {categorys.slice(0, 6).map((category) => (
          <li key={category.scSeq}>
            <button onClick={() => cateSearch(category.scName)}>
              {category.scName}
            </button>
          </li>
        ))}
      </s.catenav>
      <button
        type="button"
        className="py-2 px-4 border-black border rounded-xl"
      >
        정렬 기준 선택
      </button>
      <s.stores>
        {gages.map((gage) => (
          <Link to={`/storeinfo/${gage.siSeq}`}>
            <s.storeinner key={gage.siSeq}>
              <div className="store-inner">
                <img src={gage.siUri} alt="" />
                <div className="storeinfo">
                  <span className="title">{gage.siName}</span>
                  <div>
                    <span className="text-lg text-yellow-400 drop-shadow-sm shadow-black">
                      <StarRating starRatio={gage.scSeq} />
                    </span>
                    <span className="before:content-['|'] before:mx-2.5">
                      {gage.reviewcnt}
                    </span>
                    <span className="before:content-['|'] before:mx-2.5">
                      사장님댓글 {gage.ownerReviewCnt}
                    </span>
                    <br />
                    <span className="text-rose-600">요기서결제</span>
                    <span className="before:content-['|'] before:mx-2.5 text-gray-500">
                      {gage.siMinOrderPrice}원 이상 배달
                    </span>
                    <span className="before:content-['|'] before:mx-2.5 text-gray-500">
                      {gage.diTime}
                    </span>
                  </div>
                </div>
              </div>
            </s.storeinner>
          </Link>
        ))}
      </s.stores>
    </>
  );
};

export default CateNav;
