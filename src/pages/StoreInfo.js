import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import StarRating from "../components/StarRating";
import Cart from "../components/Cart";
import DetailTabMenu from "../components/StoreInfo/DetailTabMenu";
import DetailMain from "../components/StoreInfo/DetailMain";
import DetailReview from "../components/StoreInfo/DetailReview";
import DetailInfo from "../components/StoreInfo/DetailInfo";
import convertToComma from "../util/comma";

const StoreInfo = () => {
  const [storeData, setStoreData] = useState([]);
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

      const resultStore = await axios.get(
        "http://192.168.0.9:9244/api/alllist"
      );

      const resultMenu = await axios.get("http://192.168.0.9:9244/menu/list", {
        params,
      });
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

      setStoreData(resultStore.data.list);
      setMenuData(resultMenu.data.list);
      setInfoData(resultInfo.data.result.list);
      setReviewData(resultReview.data.result.list);
    } catch (error) {
      console.log(error);
    }
  };

  const findStore =
    storeData.length !== 0 &&
    storeData.find((data) => data.siSeq === parseInt(storeId));

  // console.log(findStore);
  // console.log(storeData);
  // console.log(menuData);
  // console.log(infoData);
  // console.log(reviewData);

  // console.log(findStore);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="flex gap-5 max-w-7xl mx-auto mb-2 mt-8">
      <section className="md:w-8/12 w-full">
        {/* top */}
        <div className="border rounded-t-xl">
          <p className="border-b p-4">{findStore.siName}</p>
          <div className="flex gap-5 py-2.5">
            <img
              src={findStore.siUri}
              alt={findStore.siName}
              className="w-28 ml-2.5"
            />
            <div>
              <div className="flex items-center gap-2 pt-1">
                <StarRating
                  starRatio={findStore && findStore.average}
                  width={90}
                />
                <p className="pt-1">{findStore.average}</p>
              </div>
              <div className="text-sm leading-relaxed text-[#999]">
                {/* <p className="text-[#FA0050]">16,900원 이상 주문 시 할인</p> */}
                <p>
                  최소주문금액{" "}
                  <span className="text-black">
                    {convertToComma(findStore && findStore.siMinOrderPrice)}원
                  </span>
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
                  배달시간{" "}
                  <span className="text-black">{findStore.diTime}</span>
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
            <DetailInfo infoData={infoData} findStore={findStore} />
          </div>
        </div>
      </section>
      {/* cart */}
      <section className="max-w-sm h-fit sticky top-2.5">
        <Cart />
      </section>
    </section>
  );
};

export default StoreInfo;
