import React from "react";
import DetailStarRating from "./DetailStarRating";
import { ImStarFull } from "react-icons/im";
import { TbMessageCircle2 } from "react-icons/tb";

const DetailReview = () => {
  return (
    <div>
      <div className="flex justify-center items-center border border-t-0 py-8">
        <div className="flex flex-col items-center pr-8">
          <p className="text-5xl tracking-wide pb-1">4.6</p>
          <DetailStarRating starRatio={4.6} />
        </div>
        <div className="text-xs px-8 border-l">
          <div className="flex items-center pb-1">
            <p className="w-7">맛</p>
            <DetailStarRating starRatio={4.8} />
          </div>
          <div className="flex items-center pb-1">
            <p className="w-7">양</p>
            <DetailStarRating starRatio={4.7} />
          </div>
          <div className="flex items-center">
            <p className="w-7">배달</p>
            <DetailStarRating starRatio={4.7} />
          </div>
        </div>
      </div>
      <div className="border border-t-0 text-xs">
        <p className="p-4">
          리뷰 <strong>2917</strong>개
          <span className="text-[#999999] mx-1">I</span>
          사장님댓글 <strong>439</strong>개
        </p>
      </div>
      <div>
        {/* ul map */}
        <ul className="p-4 border border-t-0">
          <li>
            <strong className="mr-2">hk**님</strong>
            <span className="text-xs text-[#999999]">어제</span>
          </li>
          <li className="flex items-center my-1">
            <DetailStarRating starRatio="3.4" />
            <span className="flex items-center text-xs text-[#999999]">
              <span className="text-[#e0e0e0] mx-1">ㅣ</span>
              맛 <ImStarFull color="#FFA400" size="17px" className="mx-1" /> 5
              양 <ImStarFull color="#FFA400" size="17px" className="mx-1" /> 5
              배달 <ImStarFull color="#FFA400" size="17px" className="mx-1" /> 5
            </span>
          </li>
          <li className="w-1/2 mt-3">
            <img src="images/temp.png" className="w-full" alt="temp" />
          </li>
          <li>
            <p className="text-[#d1bc44] text-sm my-3">
              페파로니피자/1(사이즈선택(중),추가 선택(요거트소스 추가))
            </p>
          </li>
          <li>
            <p className="mb-3">
              역시 피자는 네오피자만한게 없어요 가격이 인상되서 조금
              아쉽긴합니다 가성비 좋은 맛있는 피자
            </p>
          </li>
          <li className="bg-[#f0f0f0] rounded p-4">
            <div className="flex">
              <TbMessageCircle2 className="scale-x-[-1]" size="20" />
              <strong className="mx-2">사장님</strong>
            </div>
            <div className="pl-6">
              정말 죄송합니다...사진을 보니 너무 속상하네요 😭 다음에 이런 일이
              있으면 가게로 연락주세요. 바로 조치해드리겠습니다. 그랬던 기사에겐
              바로 얘기해서 다시 이런일 없도록 해야하는데... 지나버리면 누군지
              알 수가 없어서, 또 이런일이 반복될 수 있어요. 다음엔 더욱 맛있게
              드실 수 있도록 최선을 다하겠습니다. 또 찾아주세요~❤️
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailReview;
