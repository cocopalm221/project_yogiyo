import React from "react";

const OrderList = () => {
  return (
    <div className="col-span-9 max-w-5xl ml-8">
      <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
        주문 내역
      </h1>
      {/* main */}
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {/* 박스 map */}
        <div className="flex border border-[#999] rounded-lg p-4 relative">
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
          <div className="absolute right-6 top-[50%] translate-y-[-50%]">
            <button className="text-[#767676] text-sm">삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
