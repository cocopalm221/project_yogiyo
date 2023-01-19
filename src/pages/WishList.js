import React from "react";
import { ImStarFull } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import MyPageCate from "../components/MyPageCate";

const WishList = () => {
  return (
    <>
      <MyPageCate />
      <div className="max-w-5xl mx-auto mt-8">
        <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
          찜 목록
        </h1>
        {/* main */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {/* 박스 map */}
          <div className="flex border border-[#999] rounded-xl p-4 relative">
            <div className="w-24">
              <img src="/images/temp.png" alt="" className="w-full" />
            </div>
            <div className="px-6 py-4">
              <p className="pb-2 text-2xl">파스토보이</p>
              <div className="flex items-center">
                <ImStarFull color="#ffa400" size="20" />
                <span className="pl-1 text-base">5.0 (6,709)</span>
                <span className="px-1"> · </span>
                <span>포장가능</span>
              </div>
            </div>
            <FaHeart
              className="absolute right-6 top-[50%] translate-y-[-50%]"
              color="#fa0050"
              size="28"
            />
          </div>{" "}
          {/* 박스 map */}
          <div className="flex border border-[#999] rounded-xl p-4 relative">
            <div className="w-24">
              <img src="/images/temp.png" alt="" className="w-full" />
            </div>
            <div className="px-6 py-4">
              <p className="pb-2 text-2xl">파스토보이</p>
              <div className="flex items-center">
                <ImStarFull color="#ffa400" size="20" />
                <span className="pl-1 text-base">5.0 (6,709)</span>
                <span className="px-1"> · </span>
                <span>포장가능</span>
              </div>
            </div>
            <FaHeart
              className="absolute right-6 top-[50%] translate-y-[-50%]"
              color="#fa0050"
              size="28"
            />
          </div>{" "}
          {/* 박스 map */}
          <div className="flex border border-[#999] rounded-xl p-4 relative">
            <div className="w-24">
              <img src="/images/temp.png" alt="" className="w-full" />
            </div>
            <div className="px-6 py-4">
              <p className="pb-2 text-2xl">파스토보이</p>
              <div className="flex items-center">
                <ImStarFull color="#ffa400" size="20" />
                <span className="pl-1 text-base">5.0 (6,709)</span>
                <span className="px-1"> · </span>
                <span>포장가능</span>
              </div>
            </div>
            <FaHeart
              className="absolute right-6 top-[50%] translate-y-[-50%]"
              color="#fa0050"
              size="28"
            />
          </div>{" "}
          {/* 박스 map */}
          <div className="flex border border-[#999] rounded-xl p-4 relative">
            <div className="w-24">
              <img src="/images/temp.png" alt="" className="w-full" />
            </div>
            <div className="px-6 py-4">
              <p className="pb-2 text-2xl">파스토보이</p>
              <div className="flex items-center">
                <ImStarFull color="#ffa400" size="20" />
                <span className="pl-1 text-base">5.0 (6,709)</span>
                <span className="px-1"> · </span>
                <span>포장가능</span>
              </div>
            </div>
            <FaHeart
              className="absolute right-6 top-[50%] translate-y-[-50%]"
              color="#fa0050"
              size="28"
            />
          </div>{" "}
          {/* 박스 map */}
          <div className="flex border border-[#999] rounded-xl p-4 relative">
            <div className="w-24">
              <img src="/images/temp.png" alt="" className="w-full" />
            </div>
            <div className="px-6 py-4">
              <p className="pb-2 text-2xl">파스토보이</p>
              <div className="flex items-center">
                <ImStarFull color="#ffa400" size="20" />
                <span className="pl-1 text-base">5.0 (6,709)</span>
                <span className="px-1"> · </span>
                <span>포장가능</span>
              </div>
            </div>
            <FaHeart
              className="absolute right-6 top-[50%] translate-y-[-50%]"
              color="#fa0050"
              size="28"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
