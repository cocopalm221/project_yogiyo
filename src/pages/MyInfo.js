import React, { useState } from "react";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import axios from "axios";
import * as s from "../styles/Styles";

const MyInfo = () => {
  const user = useSelector((state) => state.userInfo);
  console.log(user);
  const [pw, setPw] = useState(user.miPwd);
  const [newpw, setNewpw] = useState("");
  const [checkNickname, setCheckNickname] = useState(user.miNickname);
  const [number, setNumber] = useState(user.miPhone);

  const [enroll_company, setEnroll_company] = useState({
    address: user.miAddress,
  });
  const [popup, setPopup] = useState(false);
  const handleChange = (event) => {
    setEnroll_company({
      ...enroll_company,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleComplete = (e) => {
    e.preventDefault();
    setPopup(!popup);
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
    console.log(body);
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

  // useEffect(() => {
  //   const newInfo = {
  //     pw: user.miPwd,
  //     newpw: "",
  //     checkNickname: user.miNickname,
  //     number: user.miPhone,
  //   };
  //   setUserData(newInfo);
  // }, [user.miNickname, user.miPhone, user.miPwd]);

  return (
    <s.myinfo onSubmit={handleSubmit}>
      <div className="myinfo">
        <h1>계정 정보 수정</h1>
        <div className="totalinfo">
          <div className="password">
            <label htmlFor="defaultpassword">비밀번호</label>
            <input
              type="password"
              id="defaultpassword"
              value={pw}
              name="pw"
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
              name="newpw"
              placeholder="변경할 비밀번호를 입력"
              required
              minLength={10}
              maxLength={16}
              onChange={(e) => setNewpw(e.target.value)}
              autoComplete="on"
            />
          </div>
          <div className="number">
            <label htmlFor="number">전화번호</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="(수정가능)"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="nickname">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              placeholder="변경할 닉네임을 입력"
              name="checkNickname"
              required
              maxLength={20}
              minLength={3}
              value={checkNickname}
              onChange={(e) => setCheckNickname(e.target.value)}
            />
          </div>
          <div className="address">
            <label htmlFor="inputaddress">주소입력</label>
            <input
              type="text"
              id="inputaddress"
              placeholder="클릭시 주소검색"
              required={true}
              onChange={handleChange}
              value={enroll_company.address}
              onClick={handleComplete}
            />
            {popup && (
              <Post company={enroll_company} setcompany={setEnroll_company} />
            )}
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
