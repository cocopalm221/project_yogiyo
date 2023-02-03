import React, { useState, useEffect } from "react";
import * as s from "../styles/Styles";
import axios from "axios";
import { useNavigate } from "react-router";
import InfoModal from "../components/Myinfos/InfoModal";

const FindPw = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const [checknum, setChecknum] = useState(true);
  const [checkid, setCheckid] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchpw, setSearchpw] = useState("");

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  
  useEffect(() => {
    if (number.length > 0) {
      setChecknum(false);
    } else if (number.length === 0) {
      setChecknum(true);
    }
    if (id.length > 0) {
      setCheckid(false);
    } else if (id.length === 0) {
      setCheckid(true);
    }
  }, [id, number]);

  const onChangeid = (e) => {
    setId(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let body = {
      miId: id,
      miPhone: number,
    };
    try {
      await axios
        .post("http://192.168.0.9:9244/member/searchPwd", body)
        .then((response) => {
          if (response.data.status) {
            setSearchpw(response.data.UserPwd);
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

  return (
    <s.findpw noValidate onSubmit={onSubmitHandler}>
      <div className="searchpw">
        <img
          src="/images/logo2.png"
          className="title"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <p>비밀번호 찾기</p>
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
          {checknum && (
            <p style={{ color: "red", fontSize: "1rem" }}>
              전화번호를 입력하세요
            </p>
          )}
        </div>
        <div className="searchid">
          <label htmlFor="searchid">아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            id="searchid"
            required
            onChange={onChangeid}
            autoFocus
          />
          {checkid && (
            <p style={{ color: "red", fontSize: "1rem" }}>
              아이디를 입력하세요
            </p>
          )}
        </div>
      </div>
      <button type="submit" onSubmit={onSubmitHandler}>
        아이디 찾기
      </button>
      {modalOpen && (
        <InfoModal setModalOpen={setModalOpen} searchid={searchpw} />
      )}
    </s.findpw>
  );
};

export default FindPw;
