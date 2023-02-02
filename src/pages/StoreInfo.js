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
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

const StoreInfo = () => {
  const [storeAllData, setStoreAllData] = useState([]);
  const [repMenuData, setRepMenuData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [infoData, setInfoData] = useState([]);
  const [tabCount, setTabCount] = useState(0);

  //loading
  const [loading, setLoading] = useState(null);

  const { storeId } = useParams();

  const fetchData = async () => {
    setLoading(true);
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

      const resultRepMenu = await axios.get("http://192.168.0.9:9244/menu/", {
        params,
      });
      setStoreAllData(resultStore.data.list);
      setMenuData(resultMenu.data.list);
      setInfoData(resultInfo.data.result.list);
      setReviewData(resultReview.data.result.list);
      setRepMenuData(resultRepMenu.data.list);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const storeData =
    storeAllData.length !== 0 &&
    storeAllData.find((data) => data.siSeq === parseInt(storeId));

  useEffect(() => {
    fetchData();
  }, []);

  const cart = useSelector((state) => state.cart);
  return (
    <section className="flex gap-5 max-w-7xl mx-auto mb-2 mt-8">
      <section className="md:w-8/12 w-full">
        {/* top */}
        <div className="border rounded-t-xl">
          <p className="border-b p-4">{storeData.siName}</p>
          <div className="flex gap-5 py-2.5">
            <img
              src={`http://192.168.0.9:9244/store/images/${storeData.siUri}`}
              alt={storeData.siName}
              className="w-28 ml-2.5"
            />
            <div>
              <div className="flex items-center gap-2 pt-1">
                <StarRating starRatio={storeData.average ?? null} width={90} />
                <p className="pt-1">{storeData?.average?.toFixed(1)}</p>
              </div>
              <div className="text-sm leading-relaxed text-[#999]">
                {/* <p className="text-[#FA0050]">16,900원 이상 주문 시 할인</p> */}
                <p>
                  최소주문금액{" "}
                  <span className="text-black">
                    {convertToComma(storeData.siMinOrderPrice)}원
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
                  <span className="text-black">{storeData.diTime}</span>
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
          <DetailTabMenu
            tabCount={tabCount}
            setTabCount={setTabCount}
            menuData={menuData}
            reviewData={reviewData}
          />
          <div className={tabCount === 0 ? "block" : "hidden"}>
            <DetailMain
              menuData={menuData}
              storeData={storeData}
              repMenuData={repMenuData}
            />
          </div>
          <div className={tabCount === 1 ? "block" : "hidden"}>
            <DetailReview reviewData={reviewData} storeData={storeData} />
          </div>
          <div className={tabCount === 2 ? "block" : "hidden"}>
            <DetailInfo infoData={infoData} storeData={storeData} />
          </div>
        </div>
      </section>
      {/* cart */}
      <section className="max-w-[370px] h-fit sticky top-2.5 min-w-[370px]">
        <Cart storeData={storeData} />
      </section>
      {loading && <LoadingSpinner />}
    </section>
  );
};

export default StoreInfo;
