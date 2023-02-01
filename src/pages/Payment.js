import React, { useState } from "react";
import Post from "../util/Post";
import * as s from "../styles/Styles";

import { BsFillCreditCardFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { useSelector } from "react-redux";

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

  return (
    <s.payment>
      {paySwitch ? (
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
          <div className="deliverreq">
            <span className="reqtitle">주문 시 요청 사항</span>
            <div className="text">
              <textarea className="reqtext"></textarea>
            </div>
          </div>
        </div>
      ) : (
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
        </div>
      )}

      <div className="rightpay">
        <h1>주문내역</h1>
        {cart.map((item) => (
          <div className="menulist" key={item.mniSeq}>
            <div className="storename"></div>
            <div className="menu1 ml-2">{item.goodCount}개</div>
            <div className="deliveryfee ml-2">배달료 : 5000</div>
            <div className="totalpay ml-2">{item.totalPrice} </div>
          </div>
        ))}

        <button className="clickpay" onClick={() => clickHandler()}>
          결제하기
        </button>
      </div>
    </s.payment>
  );
};

export default Payment;
