import React from "react";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";

const DetailStarRating = ({ starRatio }) => {
  return (
    <div className="relative">
      <div className="flex w-[85px]">
        <ImStarFull color="gray" size="17px" />
        <ImStarFull color="gray" size="17px" />
        <ImStarFull color="gray" size="17px" />
        <ImStarFull color="gray" size="17px" />
        <ImStarFull color="gray" size="17px" />
      </div>
      <StarWrap width={starRatio ? (starRatio * 85) / 5 : "70px"}>
        <div className="flex w-[85px]">
          <ImStarFull color="#FFA400" size="17px" />
          <ImStarFull color="#FFA400" size="17px" />
          <ImStarFull color="#FFA400" size="17px" />
          <ImStarFull color="#FFA400" size="17px" />
          <ImStarFull color="#FFA400" size="17px" />
        </div>
      </StarWrap>
    </div>
    // </div>
  );
};
const StarWrap = styled.div`
  position: absolute;
  top: 0px;
  overflow: hidden;
  width: ${(props) => props.width}px;
`;
export default DetailStarRating;
