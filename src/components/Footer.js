import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full my-16">
      <img src="/images/logo3.png" alt="footer-logo" className="w-24"></img>
      <div className="ml-12 text-sm">
        <span className="after:content-['|'] after:mx-2.5">
          서울시 서초구 서초대로38길 12 마제스타시티 타워2 17층
        </span>
        <span>대표이사 : 서성원</span>
        <br />
        <Link
          to="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118868802"
          className="after:content-['|'] after:mx-2.5"
        >
          사업자등록번호:221-88-68802
        </Link>
        <span>통신판매업신고:제 2018-서울서초-2635호</span>
        <br />
        <Link
          to="mailto:aaa@jeogiyo.com"
          className="after:content-['|'] after:mx-2.5"
        >
          개인정보담당자:{" "}
          <span className="text-slate-400">aaa@jeogiyo.com</span>
        </Link>
        <Link
          to="mailto:bbb@jeogiyo.com"
          className="after:content-['|'] after:mx-2.5"
        >
          제휴문의: <span className="text-slate-400">bbb@jeogiyo.com</span>
        </Link>
        <Link to="mailto:ccc@jeogiyo.com">
          고객만족센터: <span className="text-slate-400">ccc@jeogiyo.com</span>
        </Link>
      </div>
    </div>
  );
};
export default Footer;