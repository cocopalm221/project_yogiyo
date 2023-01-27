import React, { useState } from "react";
import LoginDiv from "../styles/LoginCss";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [userID, setUserId] = useState("");
  const [pw, setPw] = useState("");

  const SignInFunc = (e) => {
    e.preventDefault();
    if (!userID) {
      return alert("아이디를 입력하세요.");
    }
    if (!pw) {
      return alert("비밀번호를 입력하세요.");
    }
  };
  axios
    .post("http://192.168.0.9:9244/member/login", {
      miId: userID,
      miPwd: pw,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <div>
      <LoginDiv>
        <NavLink to={"/"}>
          <img src="/images/logo2.png" alt="logo" className="login-logo" />
        </NavLink>
        <h2>로그인</h2>
        <form>
          <label>아이디</label>
          <input
            type="text"
            required
            placeholder="아이디를 입력하세요."
            value={userID}
            onChange={(e) => setUserId(e.target.value)}
          />
          <label>비밀번호</label>
          <input
            type="password"
            required
            minLength={4}
            maxLength={10}
            placeholder="비밀번호를 입력하세요. / 최소 4자 ~ 최대 10자"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <span className="flex justify-end">아이디 찾기 | 비밀번호 찾기</span>
          <button onClick={(e) => SignInFunc(e)}>로그인</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          >
            회원가입
          </button>
        </form>
      </LoginDiv>
    </div>
  );
};

export default Login;
