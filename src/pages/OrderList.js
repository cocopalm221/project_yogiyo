import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import OrderMenu from "../components/Myinfos/OrderMenu";

const OrderList = () => {
  const mynum = useSelector((state) => state.userInfo.miSeq);
  const [myorder, setMyorder] = useState([]);

  useEffect(() => {
    const fetchOrderlist = async () => {
      const res = await axios.get(
        `http://192.168.0.9:9244/mypage/order?miSeq=${mynum}`
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
        {myorder.length === 0 && <p className="font-bold">주문내역이 없습니다.</p>}
        {myorder.map((item, idx) => (
          <div className="flex border border-[#999] rounded-lg p-4 relative">
            <div className="w-24">
              <img src="/images/temp.png" alt="" className="w-full" />
            </div>
            <div className="p-4">
              <p className="pb-1.5 text-xl">매장명:{item.storeName}</p>
              <p className="pb-1.5 text-xl">주문일자:{item.orderDate}</p>
              <p className="pb-1.5 text-xl">총 가격:{item.price}</p>
              <div className="flex items-center text-sm">
                <OrderMenu ordermenu={myorder[idx].orderMenu} />
              </div>
            </div>
            <div className="absolute right-6 top-[50%] translate-y-[-50%]"></div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default OrderList;
