import React from "react";
import { BiStore } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsSignpost } from "react-icons/bs";
import { GrDocumentUser } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import styled from "styled-components";
import convertToComma from "../../util/comma";

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
const DetailInfo = ({ infoData, findStore }) => {
  return (
    <DetailInfoWrapper>
      {infoData.map((data) => (
        <div key={data.siSeq}>
          {data.sdiOwnerNotice && (
            <div className="info-box">
              <div className="info-title">
                <HiOutlineSpeakerphone size="18" />
                <p>사장님알림</p>
              </div>
              <div className="info-content">
                <div className="flex flex-col">
                  <img src={data.onilmgPath} alt="사장님알림" />
                  <span>{data.sdiOwnerNotice}</span>
                </div>
              </div>
            </div>
          )}
          <div className="info-box">
            <div className="info-title">
              <BiStore size="18" />
              <p>업체정보</p>
            </div>
            <div className="info-content">
              <div>
                <p>영업시간</p>
                <span>{data.sdiOpenClose}</span>
              </div>
              <div>
                <p>전화번호</p>
                <span>{data.sdiPhone} (요기요 제공 번호)</span>
              </div>
              <div>
                <p>주소</p>
                <span> {data.sdiAdress}</span>
              </div>
              {findStore.siCleanInfo === 0 && (
                <div>
                  <p>부가정보</p>
                  <span>세스코멤버스 사업장</span>
                </div>
              )}
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
                <span>
                  {convertToComma(findStore && findStore.siMinOrderPrice)}원
                </span>
              </div>
              <div>
                <p>결제수단</p>
                <span>
                  {data.sdiPayment === 0 && "신용카드, 현금"}
                  {data.sdiPayment === 1 && "신용카드"}
                  {data.sdiPayment === 2 && "현금"}
                </span>
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
                <span>{data.biName}</span>
              </div>
              <div>
                <p>사업자등록번호</p>
                <span>{data.biBusinessNumber}</span>
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
                <span>{data.sdiOrigin}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </DetailInfoWrapper>
  );
};

export default DetailInfo;
