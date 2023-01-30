import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import * as s from "../styles/Styles";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.userInfo);
  console.log(user);
  const [loginCheck, setLoginCheck] = useState(true);

  useEffect(() => {
    if (!user.miStatus) {
      setLoginCheck(false);
    }
  }, [user.miStatus]);

  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  const goLogin = () => {
    navigate("/login");
  };
  const gomyInfo = () => {
    navigate("/mypage/myinfo");
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
          <button className="user" onClick={gomyInfo}>
            <FaUser />
          </button>
          {loginCheck ? (
            <button className="login" onClick={goLogin}>
              로그인
            </button>
          ) : (
            <button className="login" onClick={gomyInfo}>
              {user.miNickname}님
            </button>
          )}
          <button className="menu">주문표</button>
        </div>
      </s.headerInner>
    </div>
  );
};

export default Header;
