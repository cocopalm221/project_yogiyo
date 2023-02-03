import React from "react";
import { ImStarFull } from "react-icons/im";
import { TbMessageCircle2 } from "react-icons/tb";
import timeForToday from "../../util/date";
import getAverage from "../../util/getAverage";
import StarRating from "../StarRating";

const DetailReview = ({ reviewData, storeData }) => {
  const reScore = reviewData.map((data) => data.reScore);
  const tasteScore = reviewData.map((data) => data.reTasteScore);
  const quantityScore = reviewData.map((data) => data.reQuantityScore);
  const deliveryScore = reviewData.map((data) => data.reDeliveryScore);

  console.log(reviewData);

  return (
    <>
      <div className="flex justify-center items-center border border-t-0 py-7">
        <div className="flex flex-col items-center pr-8">
          <p className="text-5xl tracking-wide pb-1">{getAverage(reScore)}</p>
          <StarRating starRatio={getAverage(reScore)} width={110} />
        </div>
        <div className="text-xs px-8 border-l">
          <div className="flex items-center pb-1">
            <p className="w-7">맛</p>
            <StarRating starRatio={getAverage(tasteScore)} />
          </div>
          <div className="flex items-center pb-1">
            <p className="w-7">양</p>
            <StarRating starRatio={getAverage(quantityScore)} />
          </div>
          <div className="flex items-center">
            <p className="w-7">배달</p>
            <StarRating starRatio={getAverage(deliveryScore)} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border border-t-0 text-xs px-4 py-2">
        <p>
          리뷰 <strong>{reviewData.length}</strong>개
          <span className="text-[#999] mx-1">I</span>
          사장님댓글 <strong>{storeData.ownerReviewCnt ?? 0}</strong>개
        </p>
      </div>
      <div>
        {/* ul map */}
        {reviewData &&
          reviewData.map((data) => (
            <ul className="p-4 border border-t-0" key={data.reSeq}>
              <li>
                <strong className="mr-2">{data.miNickname}</strong>
                <span className="text-xs text-[#999]">
                  {timeForToday(data.reRegDt)}
                </span>
              </li>
              <li className="flex items-center my-1">
                <StarRating starRatio={data.reScore} />
                <span className="flex items-center text-xs text-[#999] gap-1">
                  <span className="text-[#e0e0e0]">ㅣ</span>
                  맛 <ImStarFull color="#FFA400" size="17px" />
                  {data.reTasteScore} 양
                  <ImStarFull color="#FFA400" size="17px" />
                  {data.reQuantityScore} 배달
                  <ImStarFull color="#FFA400" size="17px" />
                  {data.reDeliveryScore}
                </span>
              </li>
              <li className="flex items-center w-full mt-3 gap-2">
                {/* <img src={data.riName} className="w-1/2 " alt={data.mniName} /> */}
              </li>
              <li>
                <p className="text-[#d1bc44] text-sm my-3">{data.mniName}</p>
              </li>
              <li>
                <p className="mb-3">{data.reContent}</p>
              </li>
              {data.roContent && (
                <li className="bg-[#f0f0f0] rounded p-4">
                  <div className="flex gap-2">
                    <TbMessageCircle2 className="scale-x-[-1]" size="20" />
                    <strong>{data.owiNickname}</strong>
                  </div>
                  <div className="pl-6">{data.roContent}</div>
                </li>
              )}
            </ul>
          ))}
      </div>
    </>
  );
};

export default DetailReview;
