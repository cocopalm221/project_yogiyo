import React from "react";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";

const StarRating = ({ starRatio, width, gap }) => {
  return (
    <div className="relative">
      <BgStarBox width={width} gap={gap}>
        <ImStarFull color="#c4c4c4" size={width ? width / 5 : "17px"} />
        <ImStarFull color="#c4c4c4" size={width ? width / 5 : "17px"} />
        <ImStarFull color="#c4c4c4" size={width ? width / 5 : "17px"} />
        <ImStarFull color="#c4c4c4" size={width ? width / 5 : "17px"} />
        <ImStarFull color="#c4c4c4" size={width ? width / 5 : "17px"} />
      </BgStarBox>
      <MainStarWrap
        width={width ? (starRatio * width) / 5 : (starRatio * 85) / 5}
        gap={gap}
      >
        <MainStarBox width={width} gap={gap}>
          <ImStarFull color="#FFA400" size={width ? width / 5 : "17px"} />
          <ImStarFull color="#FFA400" size={width ? width / 5 : "17px"} />
          <ImStarFull color="#FFA400" size={width ? width / 5 : "17px"} />
          <ImStarFull color="#FFA400" size={width ? width / 5 : "17px"} />
          <ImStarFull color="#FFA400" size={width ? width / 5 : "17px"} />
        </MainStarBox>
      </MainStarWrap>
    </div>
  );
};

const BgStarBox = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width + "px" : "85px")};
  gap: ${(props) => (props.gap ? props.gap + "px" : "")};
`;
const MainStarWrap = styled.div`
  position: absolute;
  top: 0px;
  overflow: hidden;
  width: ${(props) => props.width}px;
  gap: ${(props) => (props.gap ? props.gap + "px" : "")};
`;

const MainStarBox = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width + "px" : "85px")};
  gap: ${(props) => (props.gap ? props.gap + "px" : "")};
`;
export default StarRating;
