import React from "react";
import { useState } from "react";
import DetailTabMenu from "../components/DetailTabMenu";
import StarRating from "../components/StarRating";
import DetailMain from "../components/DetailMain";
import DetailReview from "../components/DetailReview";
import DetailInfo from "../components/DetailInfo";
import DetailCart from "../components/DetailCart";

const StoreInfo = () => {
  const [tabCount, setTabCount] = useState(0);

  return (
    <div className="mt-8">
      <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto my-2">
        <div className="md:col-span-8 col-span-12">
          {/* top */}
          <div className="border rounded-t-xl">
            <p className="border-b py-3 px-4">네오피자-직영점</p>
            <div className="flex py-2.5">
              <div className="ml-2.5 w-28">
                <img src="/images/temp.png" alt="logo" className="w-full" />
              </div>
              <div className="pl-5">
                <div className="flex items-center pt-1">
                  <StarRating starRatio={4.6} width={90} />
                  <p className="pt-1 ml-2">4.6</p>
                </div>
                <div className="text-sm leading-relaxed text-[#999]">
                  {/* <p className="text-[#FA0050]">16,900원 이상 주문 시 할인</p> */}
                  <p>
                    최소주문금액 <span className="text-black">15,000원</span>
                  </p>
                  <p>
                    결제 <span className="text-black">신용카드,현금,</span>
                    <span className="text-[#FA0050]">요기서결제</span>
                  </p>
                  <p>
                    배달시간 <span className="text-black">46분~56분</span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="border-t text-sm p-3 flex cursor-pointer"
              onClick={() => {
                setTabCount(2);
              }}
            >
              <p className="mr-10 whitespace-nowrap">사장님 알림</p>{" "}
              <p className="truncate">
                💥 네오피자 본점 👍🏻 리뷰이벤트 [사이드메뉴만 주문시 참여불가] 1.
                치즈 추가토핑 (두판 피자의 경우 한판만 적용) 2. 치즈크러스트
                (두판 피자의 경우 한판만 적용)
              </p>
            </div>
          </div>
          {/* main */}
          <>
            <DetailTabMenu tabCount={tabCount} setTabCount={setTabCount} />
            <div className={tabCount === 0 ? "block" : "hidden"}>
              <DetailMain />
            </div>
            <div className={tabCount === 1 ? "block" : "hidden"}>
              <DetailReview />
            </div>
            <div className={tabCount === 2 ? "block" : "hidden"}>
              <DetailInfo />
            </div>
          </>
          {/* cart */}
        </div>
        <DetailCart />
      </div>
    </div>
  );
};

export default StoreInfo;
