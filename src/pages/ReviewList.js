import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { ImStarFull } from "react-icons/im";
import { TbMessageCircle2 } from "react-icons/tb";
import Modal from "../components/Modal";
import StarRating from "../components/StarRating";

const ReviewList = () => {
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [modalVisibleId, setModalVisibleId] = useState("");
  const closeModal = () => {
    setReviewModalVisible(false);
    setModalVisibleId("");
  };

  const openModal = (id) => {
    setReviewModalVisible(true);
    setModalVisibleId(id);
  };

  return (
    <div className="col-span-9 max-w-5xl ml-8">
      <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
        리뷰 목록
      </h1>
      {/* main */}
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {/* 박스 map */}
        <div
          className="flex border border-[#999] rounded-lg p-4 relative"
          onClick={openModal}
        >
          <div className="w-24">
            <img src="/images/temp.png" alt="" className="w-full" />
          </div>
          <div className="p-4">
            <p className="pb-1.5 text-xl">파스토보이</p>
            <div className="flex items-center text-sm">
              <span>배달주문</span>
              <span className="px-1"> · </span>
              <span>2022.10.15</span>
            </div>
          </div>
          <div className="flex flex-col absolute right-6 top-[50%] translate-y-[-50%]">
            <button className="text-[#767676] text-sm pb-1">수정</button>
            <button className="text-[#767676] text-sm">삭제</button>
          </div>
        </div>
      </div>
      {reviewModalVisible && (
        <Modal
          width={700}
          height={800}
          top={50}
          visible={reviewModalVisible}
          onClose={closeModal}
        >
          {/* 헤더 */}
          <div className="relative flex justify-between items-center h-12 bg-[#fa0050] text-white px-4 font-bold text-lg">
            <p>작성한 리뷰</p>
            <AiOutlineCloseSquare
              size="26"
              className="cursor-pointer"
              onClick={closeModal}
            />
          </div>
          {/* 내용 */}
          <div className="py-8 px-8 overflow-y-auto overflow-x-hidden h-[752px]">
            <section className="flex">
              <img src="/images/temp.png" alt="" className="w-32" />
              <section className="flex flex-col gap-2 ml-6 mt-3">
                <h1 className="text-xl font-bold">수우미칠곡본접</h1>
                <div className="flex items-center">
                  <p className="border text-sm px-1 border-[#999]">배달주문</p>
                  <p className="pl-4">2022.10.15</p>
                </div>
                <li className="flex items-center my-1">
                  <StarRating starRatio={3.4} />
                  <span className="flex items-center text-xs text-[#999] gap-1">
                    <span className="text-[#e0e0e0]">ㅣ</span>
                    맛 <ImStarFull color="#FFA400" size="17px" /> 5 양
                    <ImStarFull color="#FFA400" size="17px" /> 5 배달
                    <ImStarFull color="#FFA400" size="17px" /> 5
                  </span>
                </li>
              </section>
            </section>
            <ul className="mt-4">
              <li className="flex items-center w-full mt-3 gap-2">
                <img src="/images/menutemp.png" className="w-1/2 " alt="temp" />
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
                <div className="flex gap-2">
                  <TbMessageCircle2 className="scale-x-[-1]" size="20" />
                  <strong>사장님</strong>
                </div>
                <div className="pl-6">
                  정말 죄송합니다...사진을 보니 너무 속상하네요 😭 다음에 이런
                  일이 있으면 가게로 연락주세요. 바로 조치해드리겠습니다. 그랬던
                  기사에겐 바로 얘기해서 다시 이런일 없도록 해야하는데...
                  지나버리면 누군지 알 수가 없어서, 또 이런일이 반복될 수
                  있어요. 다음엔 더욱 맛있게 드실 수 있도록 최선을 다하겠습니다.
                  또 찾아주세요~❤️
                </div>
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ReviewList;
