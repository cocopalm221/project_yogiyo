import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const OrderList = () => {
  const mynum = useSelector((state) => state.user.miSeq);
  const [myorder, setMyorder] = useState([]);

  useEffect(() => {
    const fetchOrderlist = async () => {
      const res = await axios.get(
        `http://192.168.0.9:9244/mypage/order?miSeq=${mynum}`
      );
      setMyorder(res.data);
    };
    fetchOrderlist();
  }, [mynum]);

  console.log(mynum);

  return (
    <div className="col-span-9 max-w-5xl ml-8">
      <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
        주문 내역
      </h1>

      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        <div className="flex border border-[#999] rounded-lg p-4 relative">
          <div className="w-24">
            <img src="/images/temp.png" alt="" className="w-full" />
          </div>
          <div className="p-4">
            <p className="pb-1.5 text-xl">{myorder[0].storeName}</p>
            <div className="flex items-center text-sm">
              <span>배달주문</span>
              <span className="px-1">{myorder[0].orderMenu[1].mniName}</span>
              <span className="px-1">{myorder[0].orderMenu[1].menuAmount}</span>
              <span className="px-1">{myorder[0].orderMenu[1].menuPrice}</span>
              <span className="px-1">{myorder[0].orderMenu[1].optionList[0].pmName}</span>
              <span className="px-1">{myorder[0].orderMenu[1].optionList[0].pmcAmount}</span>
              <span className="px-1">{myorder[0].orderMenu[1].optionList[0].pmPrice}</span>
              <span className="px-2">{myorder[0].orderDate}</span>
              <span className="px-2">{myorder[0].finishDate}</span>
              <span className="price">{myorder[0].price}</span>
              
              
            </div>
          </div>
          <div className="absolute right-6 top-[50%] translate-y-[-50%]">
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
