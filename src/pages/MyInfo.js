import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import MyPageCate from "../components/MyPageCate";
import axios from "axios";
import * as s from "../styles/Styles";

const MyInfo = () => {
  const [pw, setPw] = useState("");
  const [newpw, setNewpw] = useState("");
  const [checkNickname, setCheckNickname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [nicknameMsg, setNicknameMsg] = useState("");

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
  };

  const onCheckNickname = async (e) => {
    e.preventDefault();
    // const body = {
    //   miNickname : checkNickname,
    // }
    try {
      const res = await axios.get("http://192.168.0.9:9244/mypage/update");
      const { result } = res.data.status;
      if (!result) {
        setNicknameMsg("이미 등록된 닉네임입니다. 다시 입력해주세요.");
        alert({ nicknameMsg });
        setCheckNickname(false);
      } else {
        setNicknameMsg("사용 가능한 닉네임입니다.😊");
        alert({ nicknameMsg });
        setCheckNickname(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onConfirm = async (e) => {
    e.preventDefault();
    let body = {
      pwd: pw,
      newPwd: newpw,
      phone: number,
      nickname: checkNickname,
      address: enroll_company.address,
    };
    try {
      axios
        .patch("http://192.168.0.9:9244/mypage/update", body)
        .then((response) => {
          if (response.data.status) {
            alert("정보수정 성공");
          } else {
            alert("정보수정 실패");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <s.myinfo>
      <div className="myinfo">
        <h1>계정 정보 수정</h1>
        <div className="totalinfo">
          <div className="password">
            <label htmlFor="defaultpassword">비밀번호</label>
            <input
              type="password"
              id="defaultpassword"
              value={pw}
              placeholder="영문+숫자+특수문자 조합 10자리 이상"
              onChange={(e) => setPw(e.target.value)}
              autoComplete="on"
            />
          </div>
          <div className="passwordcheck">
            <label htmlFor="newpassword">새 비밀번호</label>
            <input
              type="password"
              id="newpassword"
              value={newpw}
              placeholder="변경할 비밀번호를 입력"
              required
              minLength={10}
              maxLength={16}
              onChange={(e) => setNewpw(e.target.value)}
              autoComplete="on"
            />
          </div>
          <div className="nickname">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              placeholder="변경할 닉네임을 입력"
              required
              maxLength={20}
              minLength={3}
              value={checkNickname}
              onChange={(e) => setCheckNickname(e.target.value)}
            />
            <button className="nickchange" onClick={(e) => onCheckNickname(e)}>
              닉네임 변경
            </button>
          </div>
          <div className="address">
            <label htmlFor="inputaddress">주소입력</label>
            <input
              type="text"
              id="inputaddress"
              placeholder="클릭시 주소검색"
              required={true}
              onChange={handleInput}
              value={enroll_company.address}
              onClick={handleComplete}
            />
            {popup && (
              <Post company={enroll_company} setcompany={setEnroll_company} />
            )}
          </div>
          <div className="number">
            <label htmlFor="number">전화번호</label>
            <input
              type="text"
              id="number"
              placeholder="(수정가능)"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="(수정가능)"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button className="confirm" onClick={(e) => onConfirm(e)}>
          수정하기
        </button>
      </div>
    </s.myinfo>
  );
};

export default MyInfo;
