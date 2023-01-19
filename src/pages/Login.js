import React, { useState } from "react";
import LoginDiv from "../styles/LoginCss";
// import Logo from "../../public/images/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const SignInFunc = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("이메일을 입력하세요.");
    }
    if (!pw) {
      return alert("비밀번호를 입력하세요.");
    }
  };
  return (
    <div>
      <LoginDiv>
        <NavLink to={"/"}>
          <img src="/images/logo2.png" alt="logo" className="login-logo" />
        </NavLink>
        <h2>로그인</h2>
        <form>
          <label>이메일</label>
          <input
            type="email"
            required
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default Login