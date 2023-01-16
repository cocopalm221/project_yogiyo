import React from "react";
import SignDiv from "../styles/SignupCss";
import Logo from "../styles/images/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SignDiv>
        <NavLink to={"/"}>
          <img src={Logo} alt="logo" className="login-logo" />
        </NavLink>
        <h2>회원가입</h2>
        <form>
          <div>
            <label>아이디</label>
            <input type="text" />
          </div>
          <div>
            <label>비밀번호</label>
            <input type="password" />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input type="password" />
          </div>
          <div>
            <label>닉네임</label>
            <input type="text" />
          </div>
          <div>
            <label>주소</label>
            <input type="text" />
            {"  "}
            <input type="text" placeholder="상세주소 입력" />
          </div>
          <div>
            <label>전화번호</label>
            <input type="tel" />
          </div>
          <div>
            <label>이메일</label>
            <input type="email" />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            가입하기
          </button>
        </form>
      </SignDiv>
    </div>
  );
};

export default SignUp;
