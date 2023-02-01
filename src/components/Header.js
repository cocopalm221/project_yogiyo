import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TOKEN } from "../store/Auth";
import { logout } from "../store/userslice";
import * as s from "../styles/Styles";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loginCheck, setLoginCheck] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.miStatus === 0) {
      setLoginCheck(0);
    } else if (user.miStatus === 1) {
      setLoginCheck(1);
    }
  }, [user.miStatus]);

  const signout = () => {
    // const { accessToken } = useSelector((state) => state.accessToken);
      dispatch(logout())
      // dispatch(DELETE_TOKEN());
      return navigate("/");   
  };

  // 해당 컴포넌트가 요청된 후 한 번만 실행되면 되기 때문에 useEffect 훅을 사용

  return (
    <div className="header">
      <s.headerInner>
        <img
          src="/images/logo.png"
          className="title"
          alt="logo"
          onClick={() => navigate("/")}
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
          {/* 로그아웃상태 1 로그인상태 0 */}
          {loginCheck ? null : (
            <button className="user" onClick={() => navigate("/mypage")}>
              <FaUser className="inline" /> {user.miNickname}님
            </button>
          )}

          {loginCheck ? (
            <button className="login" onClick={() => navigate("/login")}>
              로그인
            </button>
          ) : (
            <button className="login" onClick={() => signout()}>
              로그아웃
            </button>
          )}

          <button className="menu">주문표</button>
        </div>
      </s.headerInner>
    </div>
  );
};

export default Header;
