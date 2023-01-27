import React from "react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import * as s from "../styles/Styles";

const Header = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  const goLogin = () => {
    navigate("/login");
  };
  const goMypage = () => {
    navigate("/mypage");
  };

  return (
    <div className="header">
      <s.headerInner>
        <img
          src="/images/logo.png"
          className="title"
          alt="logo"
          onClick={goMain}
        />
        <div className="search-list">
          <div className="compass">
            <FiCompass />
          </div>
          <input
            type="search"
            className="searcher"
            name="q"
            placeholder="위치 입력"
          ></input>
          <button type="button" id="search_btn">
            <FiSearch />
          </button>
        </div>
        <div className="buttons">
          <button className="user" onClick={goMypage}>
            <FaUser />
          </button>
          <button className="login" onClick={goLogin}>
            로그인
          </button>
          <button className="menu">주문표</button>
        </div>
      </s.headerInner>
    </div>
  );
};

export default Header;
