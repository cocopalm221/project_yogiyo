import React, { useState } from "react";
import Post from "../components/Post";
import * as s from "../styles/Styles";

const Payment = () => {
  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });
  const [popup, setPopup] = useState(false);
  const [paySwitch, setpaySwitch] = useState(true);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (e, data) => {
    e.preventDefault()
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
            <div className="address_search">
              <label htmlFor="address">주소</label>
              <input
                className="user_enroll_text"
                placeholder="주소를 검색하시오"
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
            <input
              type="text"
              className="sangse"
              id="sangse"
              placeholder="상세주소입력"
            />
            <div className="number">
              <label htmlFor="number">전화번호</label>
              <input type="text" id="number" placeholder="전화번호 입력" />
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
              <button className="cash">현금</button>
              <button className="card">카드</button>
            </div>
          </div>
          <div className="choosepay">
            <div className="choosepaytitle">할인 방법 선택</div>
            <form className="coupon">
              <label htmlFor="coupon">쿠폰</label>
              <input type="text" id="coupon" placeholder="쿠폰코드 입력" />
              <button className="apply">적용</button>
            </form>
          </div>
        </div>
      )}

      <div className="rightpay">
        <div className="menulist">
          <h1 className="paytitle2">주문내역</h1>
          <div className="storename">신영남반점-2호점</div>
          <div className="menu1">새우간짜장 : 1개</div>
          <div className="deliveryfee">배달료 : 5000</div>
          <div className="totalpay">총 결제 금액 : 20000</div>
        </div>
        <button className="clickpay" onClick={() => clickHandler()}>
          결제하기
        </button>
      </div>
    </s.payment>
  );
};

export default Payment;
