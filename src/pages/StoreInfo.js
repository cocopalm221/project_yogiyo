import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import DetailTabMenu from "../components/DetailTabMenu";
import StarRating from "../components/StarRating";
import DetailMain from "../components/DetailMain";
import DetailReview from "../components/DetailReview";
import DetailInfo from "../components/DetailInfo";
import DetailCart from "../components/DetailCart";

const StoreInfo = () => {
  const [tabCount, setTabCount] = useState(0);
  const { storeId } = useParams();

  console.log(storeId);

  return (
    <section className="flex gap-5 max-w-7xl mx-auto mb-2 mt-8">
      <section className="md:w-8/12 w-full">
        {/* top */}
        <div className="border rounded-t-xl">
          <p className="border-b p-4">네오피자-직영점</p>
          <div className="flex gap-5 py-2.5">
            <img src="/images/temp.png" alt="logo" className="w-28 ml-2.5" />
            <div>
              <div className="flex items-center gap-2 pt-1">
                <StarRating starRatio={4.6} width={90} />
                <p className="pt-1">4.6</p>
              </div>
              <div className="text-sm leading-relaxed text-[#999]">
                {/* <p className="text-[#FA0050]">16,900원 이상 주문 시 할인</p> */}
                <p>
                  최소주문금액 <span className="text-black">15,000원</span>
                </p>
                <p>
                  결제 <span className="text-black">신용카드,현금,</span>
                  <span className="text-brand">요기서결제</span>
                </p>
                <p>
                  배달시간 <span className="text-black">46분~56분</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="border-t p-3 flex items-center cursor-pointer"
            onClick={() => {
              setTabCount(2);
            }}
          >
            <p className="flex gap-1 items-center mr-10 whitespace-nowrap text-sm">
              <HiOutlineSpeakerphone />
              사장님 알림
            </p>
            <pre className="truncate text-xs">
              💥 네오피자 본점 👍🏻 리뷰이벤트 [사이드메뉴만 주문시 참여불가] 1.
              치즈 추가토핑 (두판 피자의 경우 한판만 적용) 2. 치즈크러스트 (두판
              피자의 경우 한판만 적용)
            </pre>
          </div>
        </div>
        {/* main */}
        <div>
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
        </div>
      </section>
      {/* cart */}
      <section className="max-w-sm h-fit sticky top-2.5">
        <DetailCart />
      </section>
    </section>
  );
};

export default StoreInfo;
