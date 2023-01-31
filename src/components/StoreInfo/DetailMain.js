import React from "react";
import DetailSwiper from "./DetailSwiper";
import MenuList from "./MenuList";

const DetailMain = ({ menuData }) => {
  const menuList = menuData.filter((item, i) => {
    return (
      menuData.findIndex((item2) => {
        return item.mcName === item2.mcName;
      }) === i
    );
  });

  return (
    <>
      <section className="border border-t-0">
        <DetailSwiper />
      </section>
      <ul>
        {/* map current[index]*/}
        {menuList.map((list, index) => (
          <MenuList key={index} list={list} index={index} menuData={menuData} />
        ))}
      </ul>
    </>
  );
};

export default DetailMain;
