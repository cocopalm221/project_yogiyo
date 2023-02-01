import React, { useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import ListItem from "./ListItem";

const MenuList = ({ list, index, menuData }) => {
  const menuRef = useRef([]);

  return (
    <MenuWrap
      ref={(elem) => (menuRef.current[index] = elem)}
      onClick={() => {
        menuRef.current[index].classList.toggle("active");
      }}
      className={index === 0 && "active"}
    >
      <h3 className="flex justify-between items-center bg-[#e5e7eb] px-4 py-3 cursor-pointer">
        {list.mcName}
        <MdKeyboardArrowDown size={20} />
      </h3>
      <ul className="flex flex-col cursor-pointer h-0 overflow-hidden">
        {list.mcExplanation && (
          <p className="border-b px-4 py-2 text-xs text-[#957e6e]">
            {list.mcExplanation}
          </p>
        )}
        {/* li map */}
        {menuData.map(
          (menuItem) =>
            list.mcName === menuItem.mcName && (
              <ListItem
                menuItem={menuItem}
                key={menuItem.mniSeq}
                menuData={menuData}
              />
            )
        )}
      </ul>
    </MenuWrap>
  );
};

const MenuWrap = styled.li`
  border: 1px solid #e5e7eb;

  &.active svg {
    transform: rotate(180deg);
  }
  &.active > ul {
    height: auto;
  }
`;

export default MenuList;
