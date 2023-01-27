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
import axios from "axios";
import { useEffect } from "react";

const StoreInfo = () => {
  const [menuData, setMenuData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [infoData, setInfoData] = useState([]);
  const [tabCount, setTabCount] = useState(0);

  const { storeId } = useParams();

  const fetchData = async () => {
    try {
      const params = {
        siseq: storeId,
      };

      const resultMenu = await axios.get(
        "http://192.168.0.9:9244/menu/list?siSeq=12"
      );
      const resultInfo = await axios.get(
        "http://192.168.0.9:9244/store/detail",
        {
          params,
        }
      );
      const resultReview = await axios.get(
        "http://192.168.0.9:9244/store/review",
        {
          params,
        }
      );

      setMenuData(resultMenu.data.list);
      setInfoData(resultInfo.data.result.list);
      setReviewData(resultReview.data.result.list);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(menuData);
  // console.log(infoData);
  // console.log(reviewData);
  useEffect(() => {
    fetchData();
  }, []);
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
                  결제
                  {infoData.map((data) => (
                    <span className="text-black" key={data.siSeq}>
                      {data.sdiPayment === 0 && " 신용카드, 현금"}
                      {data.sdiPayment === 1 && " 신용카드"}
                      {data.sdiPayment === 2 && " 현금"}
                    </span>
                  ))}
                </p>
                <p>
                  배달시간 <span className="text-black">46분~56분</span>
                </p>
              </div>
            </div>
          </div>
          {infoData.map(
            (data) =>
              data.sdiOwnerNotice && (
                <div
                  key={data.siSeq}
                  className="border-t p-3 flex items-center cursor-pointer"
                  onClick={() => {
                    setTabCount(2);
                  }}
                >
                  <p className="flex gap-1 items-center mr-10 whitespace-nowrap text-sm">
                    <HiOutlineSpeakerphone />
                    사장님 알림
                  </p>
                  <pre className="truncate text-xs">{data.sdiOwnerNotice}</pre>
                </div>
              )
          )}
        </div>
        {/* main */}
        <div>
          <DetailTabMenu tabCount={tabCount} setTabCount={setTabCount} />
          <div className={tabCount === 0 ? "block" : "hidden"}>
            <DetailMain menuData={menuData} />
          </div>
          <div className={tabCount === 1 ? "block" : "hidden"}>
            <DetailReview reviewData={reviewData} />
          </div>
          <div className={tabCount === 2 ? "block" : "hidden"}>
            <DetailInfo infoData={infoData} />
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
