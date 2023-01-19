import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MyPageCate = () => {
  const navigate = useNavigate();
  const cateRef = useRef([]);
  const [cateTabCount, setCateTabCount] = useState();
  return (
    <div className="fixed top-48 left-32 border rounded-xl border-[#999] overflow-hidden cursor-pointer">
      <div className="text-2xl">
        <div
          className={`px-16 py-4 border-b border-[#999] hover:bg-[#fa0050] hover:text-white ${
            cateTabCount === 0 ? "bg-[#fa0050] text-white" : ""
          }`}
          ref={(elem) => (cateRef.current[0] = elem)}
          onClick={() => {
            navigate("/wishlist");
            setCateTabCount(0);
          }}
        >
          주문내역
        </div>
        <div
          className={`px-16 py-4 border-b border-[#999] hover:bg-[#fa0050] hover:text-white ${
            cateTabCount === 1 ? "bg-[#fa0050] text-white" : ""
          }`}
          ref={(elem) => (cateRef.current[1] = elem)}
          onClick={() => {
            navigate("/wishlist");
            setCateTabCount(1);
          }}
        >
          계정정보
        </div>
        <div
          className={`px-16 py-4 border-b border-[#999] hover:bg-[#fa0050] hover:text-white ${
            cateTabCount === 2 ? "bg-[#fa0050] text-white" : ""
          }`}
          ref={(elem) => (cateRef.current[2] = elem)}
          onClick={() => {
            navigate("/wishlist");
            setCateTabCount(2);
          }}
        >
          리뷰목록
        </div>
        <div
          className={`px-16 py-4 hover:bg-[#fa0050] hover:text-white ${
            cateTabCount === 3 ? "bg-[#fa0050] text-white" : ""
          }`}
          ref={(elem) => (cateRef.current[3] = elem)}
          onClick={() => {
            navigate("/wishlist");
            setCateTabCount(3);
          }}
        >
          찜목록
        </div>
      </div>
    </div>
  );
};

export default MyPageCate;
