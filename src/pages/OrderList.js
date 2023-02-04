import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import ReviewForm from "../components/StoreInfo/ReviewForm";

const OrderList = () => {
  const mynum = useSelector((state) => state.userInfo.miSeq);
  const [myorder, setMyorder] = useState([]);
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [reviewModalVisibleId, setReviewModalVisibleId] = useState("");

  const openModal = (id) => {
    setReviewModalVisible(true);
    setReviewModalVisibleId(id);
  };
  const closeModal = () => {
    setReviewModalVisible(false);
    setReviewModalVisibleId("");
  };

  useEffect(() => {
    const fetchOrderlist = async () => {
      const res = await axios.get(
        `http://192.168.0.9:9244/mypage/briefOrder?miSeq=${mynum}`
      );
      if (res.data.list) {
        setMyorder(res.data.list);
      } else if (res.data === []) {
        setMyorder(res.data);
      }
    };
    fetchOrderlist();
  }, []);

  return (
    <div className="col-span-9 max-w-5xl ml-8">
      <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
        주문 내역
      </h1>

      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {myorder.length === 0 && (
          <p className="font-bold">주문내역이 없습니다.</p>
        )}
        {myorder.map((item, idx) => (
          <div
            className="flex items-center border border-[#999] rounded-lg relative p-2"
            key={item.orderNum}
          >
            <div>
              <p className="text-lg font-semibold">{item.storeName}</p>
              {/* <p className="text-sm">주문번호 : {item.orderNum}</p> */}
              <p className="text-sm">주문일자 : {item.orderDate}</p>
              <p className="text-sm">메뉴명 : {item.menuName}</p>
              <p className="text-sm">총 수량 : {item.menuTotal}개</p>
              <p className="text-sm">
                총 가격 : {item.price?.toLocaleString()}원
              </p>{" "}
              <button
                className="absolute right-4 border p-1 rounded border-[#999] top-[50%] translate-y-[-50%] text-xs"

                onClick={() => {
                  openModal(item.orderNum);
                }}
              >
                리뷰 작성
              </button>
            </div>
            <div className="absolute right-6 top-[50%] translate-y-[-50%]"></div>{" "}
            {reviewModalVisible && reviewModalVisibleId === item.orderNum && (
              <Modal
                width={800}
                height={900}
                visible={reviewModalVisible}
                top={50}
                onClose={closeModal}
              >
                <ReviewForm
                  closeModal={closeModal}
                  oiOrderNum={item.oiOrderNum}
                  storeData={item}
                />
              </Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
