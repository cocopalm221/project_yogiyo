import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import DetailMainModal from "../components/DetailMainModal";
import StarRating from "../components/StarRating";

const ReviewList = () => {
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const closeModal = () => {
    setReviewModalVisible(false);
  };
  return (
    <div className="col-span-9 max-w-5xl ml-8">
      <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
        리뷰 목록
      </h1>
      {/* main */}
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {/* 박스 map */}
        <div
          className="flex border border-[#999] rounded-lg p-4 relative"
          onClick={() => {
            setReviewModalVisible(true);
          }}
        >
          <div className="w-24">
            <img src="/images/temp.png" alt="" className="w-full" />
          </div>
          <div className="p-4">
            <p className="pb-1.5 text-xl">파스토보이</p>
            <div className="flex items-center text-sm">
              <span>배달주문</span>
              <span className="px-1"> · </span>
              <span>2022.10.15</span>
            </div>
          </div>
          <div className="flex flex-col absolute right-6 top-[50%] translate-y-[-50%]">
            <button className="text-[#767676] text-sm pb-1">수정</button>
            <button className="text-[#767676] text-sm">삭제</button>
          </div>
        </div>
      </div>{" "}
      {reviewModalVisible && (
        <DetailMainModal
          width={700}
          height={800}
          top={50}
          visible={reviewModalVisible}
          onClose={closeModal}
        >
          {/* 헤더 */}
          <div className="relative flex justify-between items-center h-12 bg-[#fa0050] text-white px-4 font-bold text-lg">
            <p>작성한 리뷰</p>
            <AiOutlineCloseSquare size="26" className="cursor-pointer" />
          </div>
          {/* 내용 */}
          <div className="py-8 px-8">
            <div className="flex">
              <div className="w-36">
                <img src="/images/temp.png" alt="" className="w-full" />
              </div>
              <div className="ml-6 mt-3">
                <h1 className="text-xl font-bold">수우미칠곡본접</h1>
                <div className="flex items-center pt-1 pb-2">
                  <p className="border text-sm px-1 border-[#999]">배달주문</p>
                  <p className="pl-4">2022.10.15</p>
                </div>
                <StarRating starRatio={4.6} />
              </div>
              <div></div>
            </div>
          </div>
        </DetailMainModal>
      )}
    </div>
  );
};

export default ReviewList;
