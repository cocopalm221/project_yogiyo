import React, { useState } from "react";
import Optionlist from "./Optionlist";
import Modal from "../Modal";
import ReviewForm from "../StoreInfo/ReviewForm";

const OrderMenu = (ordermenu) => {
  return (
    <>
      {ordermenu.ordermenu.map((item, idx) => (
        <div className="flex-col text-sm gap-y-1.5" key={idx}>
          <div>메뉴명 : {item.mniName}</div>
          <div>수량 : {item.menuAmount}</div>
          <div>가격 : {item.menuPrice}</div>
          <Optionlist optionlist={item.optionList} />
        </div>
      ))}
    </>
  );
};

export default OrderMenu;
