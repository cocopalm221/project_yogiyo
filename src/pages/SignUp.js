import React, { useState } from "react";
import SignDiv from "../styles/SignupCss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Post from "../util/Post";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  // const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });

  const registFunc = async (e) => {
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
    if (!enroll_company.address) {
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

    e.preventDefault();
    let body = {
      miId: userId,
      miPwd: setPw,
      miEmail: email,
      miPhone: tel,
      miNickname: nickName,
      miAddress: enroll_company.address,
      miStatus: 0,
    };

    console.log(body);
    try {
      await axios
        .put("http://192.168.0.9:9244/member/join", body)
        .then((response) => {
          if (response.data.status) {
            alert(response.data.message);
          } else {
            alert("정보수정 실패");
          }
        });
    } catch (error) {
      console.log(error);
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
        if (res.data.status) {
          setIdCheck(true);
          alert("등록이 가능합니다");
        } else {
          setIdCheck(false);
          alert("이미 등록된 아이디입니다.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("이미 등록된 아이디입니다.");
      });
  };

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
    setEnroll_company(e.target.value);
  };

  return (
    <div>
      <SignDiv>
        <NavLink to={"/"}>
          <img src="/images/logo2.png" alt="logo" className="login-logo" />
        </NavLink>
        <h2>회원가입</h2>
        <form>
          <div className="relative flex justify-start">
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
          <div className="relative flex justify-start">
            <label>비밀번호</label>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              autoComplete="true"
            />
          </div>
          <div className="relative flex justify-start">
            <label>비밀번호 확인</label>
            <input
              type="password"
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
              autoComplete="true"
            />
          </div>
          <div className="relative flex justify-start">
            <label>닉네임</label>
            <input
              type="text"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </div>
          <div className="relative flex justify-start">
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
          <div className="relative flex justify-start">
            <label>전화번호</label>
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="relative flex justify-start">
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
