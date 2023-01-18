import React from "react";
import { BiStore } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsSignpost } from "react-icons/bs";
import { GrDocumentUser } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import styled from "styled-components";

const DetailInfoWrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-top: none;
  .info-box {
    padding: 14px 6px 6px;
    .info-title {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #999;
      padding: 0px 6px 12px;
      margin: 0px 10px;

      > svg {
        margin-right: 6px;
      }

      > p {
        font-weight: bold;
      }
    }
    .info-content {
      padding: 0px 6px 8px;
      margin: 14px 10px 0px;
      > div {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 12px 0px;
        > p {
          color: #999;
          width: 100px;
        }
      }
    }
  }
`;
const DetailInfo = () => {
  return (
    <DetailInfoWrapper>
      <div className="info-box">
        <div className="info-title">
          <HiOutlineSpeakerphone size="18" />
          <p>사장님알림</p>
        </div>
        <div className="info-content">
          <div>
            <span>내용</span>
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="info-title">
          <BiStore size="18" />
          <p>업체정보</p>
        </div>
        <div className="info-content">
          <div>
            <p>영업시간</p>
            <span>11:30 - 12:30</span>
          </div>
          <div>
            <p>주소</p>
            <span> 대구광역시 동구 신천동 538-49 1층</span>
          </div>
          <div>
            <p>부가정보</p>
            <span>세스코멤버스 사업장</span>
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="info-title">
          <AiOutlineCreditCard size="18" />
          <p>결제정보</p>
        </div>
        <div className="info-content">
          <div>
            <p>최소주문금액</p>
            <span>15,000원</span>
          </div>
          <div>
            <p>결제수단</p>
            <span>신용카드, 현금,요기서결제</span>
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="info-title">
          <GrDocumentUser size="18px" />
          <p>사업자정보</p>
        </div>
        <div className="info-content">
          <div>
            <p>상호명</p>
            <span>주식회사우주소년</span>
          </div>
          <div>
            <p>사업자등록번호</p>
            <span>148-86-01339</span>
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="info-title">
          <BsSignpost size="18" />
          <p>원산지 정보</p>
        </div>
        <div className="info-content">
          <div>
            <span>원산지 정보 </span>
          </div>
        </div>
      </div>
    </DetailInfoWrapper>
  );
};

export default DetailInfo;
