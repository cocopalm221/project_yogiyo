import React from "react";
import { Outlet } from "react-router";
import MyPageCate from "../components/MyPageCate";

const MyPage = () => {
  return (
    <div className="grid grid-cols-12 mt-8 max-w-screen-2xl gap-12 mx-auto">
      <MyPageCate />
      <Outlet />
    </div>
  );
};

export default MyPage;
