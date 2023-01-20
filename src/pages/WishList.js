import React from "react";
import { ImHeart, ImStarFull } from "react-icons/im";
import MyPageCate from "../components/MyPageCate";

const WishList = () => {
  return (
    <div className="grid grid-cols-12 mt-8 max-w-screen-2xl gap-12 mx-auto">
      <MyPageCate />
      <div className="col-span-9 max-w-5xl ml-8">
        <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
          찜 목록
        </h1>
        {/* main */}
        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          {/* 박스 map */}
          <div className="flex border border-[#999] rounded-lg p-4 relative">
            <div className="w-24">
              <img src="/images/temp.png" alt="" className="w-full" />
            </div>
            <div className="p-4">
              <p className="pb-1.5 text-xl">파스토보이</p>
              <div className="flex items-center text-sm">
                <ImStarFull color="#ffa400" size="20" />
                <span className="pl-2">4.5</span>
                <span className="pl-1"> (6,709)</span>
                <span className="px-1"> · </span>
                <span>포장가능</span>
              </div>
            </div>
            <ImHeart
              className="absolute right-6 top-[50%] translate-y-[-50%]"
              color="#fa0050"
              size="28"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
