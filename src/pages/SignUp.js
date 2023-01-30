import React, { useState } from "react";
import SignDiv from "../styles/SignupCss";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";

const SignUp = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");

  const registFunc = (e) => {
    e.preventDefault();
    if (!userId) {
      return alert("아이디를 입력하세요");
    }
    if (!pw) {
      return alert("비밀번호를 입력하세요");
    }
    if (!pwCheck) {
      return alert("비밀번호 확인을 입력하세요");
    }
    if (pw !== pwCheck) {
      return alert("비밀번호는 같아야 합니다.");
    }
    if (!nickName) {
      return alert("닉네임을 입력하세요");
    }
    if (!address) {
      return alert("주소를 입력하세요");
    }
    if (!tel) {
      return alert("전화번호를 입력하세요");
    }
    if (!email) {
      return alert("이메일을 입력하세요");
    }
    if (!idCheck) {
      return alert("아이디 중복확인을 하세요");
    }
  };
  const [idCheck, setIdCheck] = useState(false);
  const idCheckFn = (e) => {
    e.preventDefault();
    if (!userId) {
      return alert("아이디를 입력해주세요.");
    }
    const body = {
      miId: userId,
    };
    axios
      .post("http://192.168.0.9:9244/member/dupchkId", body)
      .then((res) => {
        if (res.data.success) {
          if (res.data.check) {
            setIdCheck(true);
            alert("등록이 가능합니다");
          } else {
            setIdCheck(false);
            alert("이미 등록된 닉네임입니다.");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });
  const [popup, setPopup] = useState(false);
  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };
  const handleComplete = (e, data) => {
    e.preventDefault();
    setPopup(!popup);
    setAddress(e.target.value);
  };

  return (
    <div>
      <SignDiv>
        <NavLink to={"/"}>
          <img src="/images/logo2.png" alt="logo" className="login-logo" />
        </NavLink>
        <h2>회원가입</h2>
        <form>
          <div>
            <label>아이디</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <button className="idcheck" onClick={(e) => idCheckFn(e)}>
              중복확인
            </button>
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input
              type="password"
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
            />
          </div>
          <div>
            <label>닉네임</label>
            <input
              type="text"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </div>
          <div className="relative">
            <label>주소</label>
            <input
              type="text"
              placeholder="클릭 시 주소 검색"
              value={enroll_company.address}
              onChange={handleInput}
              onClick={handleComplete}
            />
            {popup && (
              <Post company={enroll_company} setcompany={setEnroll_company} />
            )}
          </div>
          <div>
            <label>전화번호</label>
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div>
            <label>이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              registFunc(e);
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
