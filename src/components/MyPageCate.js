import React, { useState } from "react";
import { useNavigate } from "react-router";

const MyPageCate = () => {
  const navigate = useNavigate();
  const [cateTabCount, setCateTabCount] = useState(0);
  return (
    <div className="col-span-2 h-fit sticky top-8 mt-16 border rounded border-[#999] overflow-hidden cursor-pointer">
      <div className="text-lg text-center">
        <div
          className={`py-4 border-b border-[#999] hover:bg-[#fa0050] hover:text-white ${
            cateTabCount === 0 && "bg-[#fa0050] text-white"
          }`}
          onClick={() => {
            setCateTabCount(0);
            navigate("/mypage/orderlist");
          }}
        >
          주문내역
        </div>
        <div
          className={`py-4 border-b border-[#999] hover:bg-[#fa0050] hover:text-white ${
            cateTabCount === 1 && "bg-[#fa0050] text-white"
          }`}
          onClick={() => {
            navigate("/mypage/myinfo");
            setCateTabCount(1);
          }}
        >
          계정정보
        </div>
        <div
          className={`py-4 border-b border-[#999] hover:bg-[#fa0050] hover:text-white ${
            cateTabCount === 2 && "bg-[#fa0050] text-white"
          }`}
          onClick={() => {
            setCateTabCount(2);
            navigate("/mypage/reviewlist");
          }}
        >
          리뷰목록
        </div>
        <div
          className={`py-4 hover:bg-[#fa0050] hover:text-white ${
            cateTabCount === 3 && "bg-[#fa0050] text-white"
          }`}
          onClick={() => {
            setCateTabCount(3);
            navigate("/mypage/wishlist");
          }}
        >
          찜목록
        </div>
      </div>
    </div>
  );
};

export default MyPageCate;
