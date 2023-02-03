import React, { useState } from "react";
import * as s from "../styles/Styles";
import axios from "axios";
import { useNavigate } from "react-router";

const FindID = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [checknum, setChecknum] = useState(true);

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
    if (number === "") {
      setChecknum(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let body = {
      miPhone: number,
    };
    try {
      await axios
        .post("http://192.168.0.9:9244/member/searchId", body)
        .then((response) => {
          if (response.data.status) {
            alert(response.data.UserId);
          } else {
            alert("아이디 찾기 실패");
            console.log(response.data.status);
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <s.findid noValidate onSubmit={onSubmitHandler}>
      <div className="searchid">
        <img
          src="/images/logo2.png"
          className="title"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <p>아이디 찾기</p>
        <div className="number">
          <label htmlFor="searchid">전화번호</label>
          <input
            type="text"
            placeholder="(필수)휴대폰 전화번호 입력(-포함)"
            value={number}
            id="searchid"
            required
            onChange={onChangeNumber}
            autoFocus
          />
          {checknum && <p style={{ color: "red" }}>전화번호를 입력하세요</p>}
        </div>
      </div>
      <button type="submit" onSubmit={onSubmitHandler}>
        아이디 찾기
      </button>
    </s.findid>
  );
};

export default FindID;
