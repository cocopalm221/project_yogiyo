import React, { useState } from "react";
import Post from "../util/Post";
import * as s from "../styles/Styles";

import { BsFillCreditCardFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { useSelector } from "react-redux";
import convertToComma from "../util/comma";

const Payment = () => {
  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });
  const [popup, setPopup] = useState(false);
  const [paySwitch, setpaySwitch] = useState(true);
  const cart = useSelector((state) => state.cart);
  console.log(cart);

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

  const clickHandler = (e) => {
    e.preventDefault();
    setpaySwitch(!paySwitch);
  };

  const temp = cart.filter((item, i) => {
    return (
      cart.findIndex((item2) => {
        return item.siName === item2.siName;
      }) === i
    );
  });

  console.log(cart);
  const totalMoney = cart
    .map((item) => item.totalPrice)
    .reduce((sum, value) => (sum += value), 0);
  return (
    <s.payment>
      <div className="leftpay">
        <div className="deliverinfo">
          <h1>결제하기</h1>
          <span className="infotitle">배달 정보</span>
          <div className="address_search relative">
            <label htmlFor="address" className="mt-1">
              주소
            </label>
            <input
              className="user_enroll_text"
              placeholder="클릭 시 주소 검색"
              type="text"
              id="address"
              name="address"
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
            <label htmlFor="number" className="mt-1">
              전화번호
            </label>
            <input
              type="text"
              id="number"
              placeholder="전화번호를 입력하시오"
            />
          </div>
        </div>

        <div className="newLeftpay">
          <div className="paylist">
            <div className="paylisttitle">결제 수단</div>
            <div className="cashorcard">
              <button className="cash">
                <BsCashCoin className="inline mr-2 mb-1 " />
                현금결제
              </button>
              <button className="card">
                <BsFillCreditCardFill className="inline mr-2 mb-1" />
                신용카드
              </button>
            </div>
          </div>
          <div className="choosepay">
            <span className="choosepaytitle">할인 방법 선택</span>
            <form className="coupon">
              <label htmlFor="coupon">쿠폰</label>
              <input type="text" id="coupon" placeholder="쿠폰코드 입력" />
              <button className="apply">적용</button>
            </form>
          </div>
          <div className="deliverreq">
            <span className="reqtitle">주문 시 요청 사항</span>
            <div className="text">
              <textarea className="reqtext"></textarea>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-[370px] h-fit sticky top-2.5 min-w-[370px]">
        <div className="flex flex-col border rounded-t-xl overflow-hidden">
          <h2 className="text-xl border-b px-4 py-2 text-white bg-black">
            주문 내역
          </h2>
          <p className="px-4 py-2 border-b">{temp[0].siName}</p>
          {cart.map((item) => (
            <div
              className="flex justify-between p-4 bg-[#fff8eb]"
              key={item.key}
            >
              <p className="w-[200px]">
                {item.mniName} {item.pmName && <span> : {item.pmName}</span>} x{" "}
                {item.goodCount}
              </p>
              <p className="text-end font-bold">
                {convertToComma(item.totalPrice)}원
              </p>
            </div>
          ))}
          <div className="border-t px-4 py-3 text-end bg-[#fff8eb] text-brand font-bold">
            총 결제 금액: {convertToComma(totalMoney)}원
          </div>
        </div>
        <button className="w-full bg-brand rounded text-white p-3 mt-4">
          결제 하기
        </button>
      </section>
    </s.payment>
  );
};

export default Payment;
