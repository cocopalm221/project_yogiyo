import React, { useState } from "react";
import * as s from "../styles/Styles";
import axios from "axios";
import { useNavigate } from "react-router";
import InfoModal from "../components/Myinfos/InfoModal";

const FindID = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  let checkNum = number === "" ? true : false;
  const [modalOpen, setModalOpen] = useState(false);
  const [searchid, setSearchid] = useState("");

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
    if (number) {
      checkNum = true;
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
            setSearchid(response.data.UserId);
            setModalOpen(true);
          } else {
            alert("아이디 찾기 실패");
            console.log(response.data.status);
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  console.log(searchid);
  return (
    <s.findid noValidate onSubmit={onSubmitHandler}>
      <div className="searchid">
        <img
          src="/images/logo2.png"
          className="title"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <h2>아이디 찾기</h2>
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

          {checkNum && (
            <p style={{ color: "red", marginTop: 10 + "px" }}>
              전화번호를 입력하세요
            </p>
          )}
        </div>
        <button className="idbutton" type="submit" onSubmit={onSubmitHandler}>
          아이디 찾기
        </button>
      </div>

      {modalOpen && (
        <InfoModal setModalOpen={setModalOpen} searchid={searchid} />
      )}
    </s.findid>
  );
};

export default FindID;
