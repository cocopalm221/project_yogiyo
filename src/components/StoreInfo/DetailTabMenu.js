import React from "react";
import styled from "styled-components";

const DetailTabMenu = ({ tabCount, setTabCount, menuData, reviewData }) => {
  return (
    <TabContainer>
      <div
        onClick={() => setTabCount(0)}
        className={`${tabCount === 0 && "active"}`}
      >
        메뉴<span>{menuData.length}</span>
      </div>
      <div
        onClick={() => setTabCount(1)}
        className={`${tabCount === 1 && "active"}`}
      >
        클린리뷰<span>{reviewData.length}</span>
      </div>
      <div
        onClick={() => setTabCount(2)}
        className={`${tabCount === 2 && "active"}`}
      >
        정보
      </div>
    </TabContainer>
  );
};

const TabContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  > div {
    border: 1px solid #e5e7eb;
    border-right-style: none;
    padding: 10px 0px;

    > span {
      font-size: 12px;
      margin-left: 8px;
    }

    &:hover {
      background-color: #e5e7eb;
    }

    &:last-child {
      border-right-style: solid;
    }

    &.active {
      border-bottom: 5px solid #fa0050;
      color: #fa0050;
    }
  }
`;

export default DetailTabMenu;
