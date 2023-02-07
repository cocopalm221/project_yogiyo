import React, { useState, useEffect } from "react";
import { ImHeart, ImStarFull } from "react-icons/im";
import { useSelector } from "react-redux";
import axios from "axios";

const WishList = () => {
  const mynum = useSelector((state) => state.userInfo.miSeq);
  const [mywish, setMywish] = useState("");

  useEffect(() => {
    const fetchOrderlist = async () => {
      const res = await axios.get(
        `http://192.168.0.5:9244/mypage/store?page=0&miSeq=${mynum}`
      );
      setMywish(res.data.store);
    };
    fetchOrderlist();
  }, []);

  return (
    <div className="col-span-9 max-w-5xl ml-8">
      <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
        찜 목록
      </h1>
      {/* main */}
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {/* 박스 map */}
        {mywish.status === false && (
          <p className="font-bold">{mywish.message}</p>
        )}
        {mywish.length === 0 && (
          <p className="font-bold">주문내역이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
