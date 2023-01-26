import React from "react";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";

const StarRating = ({ starRatio, width }) => {
  return (
    <div className="relative">
      <BgStarBox width={width}>
        <ImStarFull color="gray" size={width ? width / 5 : "17px"} />
        <ImStarFull color="gray" size={width ? width / 5 : "17px"} />
        <ImStarFull color="gray" size={width ? width / 5 : "17px"} />
        <ImStarFull color="gray" size={width ? width / 5 : "17px"} />
        <ImStarFull color="gray" size={width ? width / 5 : "17px"} />
      </BgStarBox>
      <MainStarWrap
        width={width ? (starRatio * width) / 5 : (starRatio * 85) / 5}
      >
        <MainStarBox width={width}>
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
`;
const MainStarWrap = styled.div`
  position: absolute;
  top: 0px;
  overflow: hidden;
  width: ${(props) => props.width}px;
`;

const MainStarBox = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width + "px" : "85px")};
`;
export default StarRating;
