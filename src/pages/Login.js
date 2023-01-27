import React, { useState } from "react";
import LoginDiv from "../styles/LoginCss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/userslice";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [userID, setUserId] = useState("");
  const [pw, setPw] = useState("");

  const dispatch = useDispatch();

  const SignInFunc = async (e) => {
    e.preventDefault();
    if (!userID) {
      return alert("아이디를 입력하세요.");
    }
    if (!pw) {
      return alert("비밀번호를 입력하세요.");
    }

    let body = {
      miId: email,
      miPwd: pw,
    };

    try {
      axios
        .post("http://192.168.0.9:9244/member/login", body)
        .then((response) => {
          console.log(response);
          if (response.data.status) {
            alert("로그인 성공");
            console.log(response.data.loginUser);
            dispatch(login(response.data.loginUser));
            navigate("/mypage/myinfo");
          } else {
            alert("로그인 실패");
            console.log(response.data.status);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
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
            autoComplete="on"
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
