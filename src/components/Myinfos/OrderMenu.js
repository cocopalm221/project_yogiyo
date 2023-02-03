import React from "react";
import Optionlist from "./Optionlist";

const OrderMenu = (ordermenu) => {
  return (
    <>
      {ordermenu.ordermenu.map((item, idx) => (
        <div className="flex-col" key={idx}>
          <div className="pb-1.5 text-xl">메뉴명 : {item.mniName}</div>
          <div className="pb-1.5 text-xl">수량 : {item.menuAmount}</div>
          <div className="pb-1.5 text-xl">가격 : {item.menuPrice}</div>
          <Optionlist optionlist={item.optionList}/>
        </div>
      ))}
    </>
  )
};

export default OrderMenu;
