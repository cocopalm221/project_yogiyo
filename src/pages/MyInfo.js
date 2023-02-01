import React, { useState } from "react";
import { useSelector } from "react-redux";
import Post from "../util/Post";
import axios from "axios";
import * as s from "../styles/Styles";

const MyInfo = () => {
  const user = useSelector((state) => state.userInfo);
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

    try {
      axios
        .patch("http://192.168.0.9:9244/mypage/update", body)
        .then((response) => {
          if (response.data.status) {
            alert("정보수정 성공");
          } else {
            alert("정보수정 실패");
            console.log(response.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async () => {
    let pw = prompt('비밀번호를 입력하세요');
    let body = {
      miPwd: pw,
    };

    try {
      await axios
        .post("http://192.168.0.9:9244/member/deleteMember", body)
        .then((response) => {
          if (response.data.status) {
            alert("회원탈퇴 성공");
          } else {
            alert("회원탈퇴 실패");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="col-span-9 max-w-5xl ml-8">
      <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
        계정 정보
      </h1>
      {/* main */}
      <div>
        {/* 박스 map */}
        <s.myinfo>
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
          <div className="buttons">
            <button onClick={(e) => onConfirm(e)}>정보수정</button>
            <button onClick={(e) => onDelete(e)}>회원탈퇴</button>
          </div>
        </s.myinfo>
      </div>
    </div>
  );
};

export default MyInfo;
