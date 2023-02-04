import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { ImStarFull } from "react-icons/im";
import { TbMessageCircle2 } from "react-icons/tb";
import Modal from "../components/Modal";
import StarRating from "../components/StarRating";
import timeForToday from "../util/date";

const ReviewList = () => {
  const mynum = useSelector((state) => state.userInfo.miSeq);
  const [myComment, setMycomment] = useState([]);
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

  const fetchCommentlist = async () => {
    const res = await axios.get(
      `http://192.168.0.9:9244/mypage/review?page=0&miSeq=${mynum}`
    );
    setMycomment(res.data.review.myReview);
  };

  useEffect(() => {
    fetchCommentlist();
  }, []);

  const deleteComment = async (reSeq) => {
    let body = {
      reSeq: reSeq,
      miSeq: mynum,
    };
    try {
      await axios
        .get(
          `http://192.168.0.9:9244/mypage/deleteReview?reSeq=${reSeq}&miSeq=${mynum}`,
          body
        )
        .then((res) => {
          if (res.data.status) {
            alert("리뷰 삭제 성공");
          } else {
            alert("리뷰 삭제 실패");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getFullDate = (_date) => {
    const year = new Date(_date).getFullYear();
    const month = new Date(_date).getMonth() + 1;
    const day = new Date(_date).getDate();
    return `${year}년 ${month}월 ${day}일`;
  };
  
  return (
    <div className="col-span-9 max-w-5xl ml-8">
      <h1 className="p-4 font-bold text-2xl border-b-2 border-black">
        리뷰 목록
      </h1>
      {/* main */}
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {/* 박스 map */}
        {myComment.length === 0 && (
          <p className="font-bold">리뷰목록이 없습니다.</p>
        )}
        {myComment.map((item) => (
          <div
            className="border border-[#999] rounded-lg relative"
            key={item.reSeq}
          >
            <div className="p-4">
              <p className="text-xl">{item.siName}</p>
              <div className="flex-col gap-10 text-sm">
                <p>메뉴 이름 : {item.mniName}</p>
                <p>배달주문 · {getFullDate(item.reRegDt)}</p>
                {item.roContent && <p>사장님 댓글 내용 : {item.roContent}</p>}
                {/* <span>회원 번호 : {item.miSeq}</span> */}
              </div>{" "}
              <div className="flex justify-end">
                <button
                  className="text-[#767676] text-sm mr-3"
                  onClick={() => {
                    openModal(item.reSeq);
                  }}
                >
                  리뷰보기
                </button>
                <button
                  className="text-[#767676] text-sm"
                  onClick={() => {
                    deleteComment(item.reSeq);
                  }}
                >
                  리뷰삭제
                </button>
              </div>
            </div>
            {reviewModalVisible && modalVisibleId === item.reSeq && (
              <Modal
                width={700}
                top={40}
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
                <div className="py-8 px-8 overflow-y-auto overflow-x-hidden">
                  <section className="flex">
                    <section className="flex flex-col gap-2 ml-6 mt-3">
                      <h1 className="text-xl font-bold">{item.siName}</h1>
                      <div className="flex items-center">
                        <p className="border text-xs p-1 border-[#999]">
                          배달주문
                        </p>
                        <p className="pl-4 text-sm">
                          {getFullDate(item.reRegDt)}
                        </p>
                      </div>
                      <li className="flex items-center my-1">
                        <StarRating starRatio={item.reScore} />
                        <span className="flex items-center text-xs text-[#999] gap-1">
                          <span className="text-[#e0e0e0]">ㅣ</span>
                          맛 <ImStarFull color="#FFA400" size="17px" />{" "}
                          {item.reTasteScore} 양
                          <ImStarFull color="#FFA400" size="17px" />{" "}
                          {item.reQuantityScore} 배달
                          <ImStarFull color="#FFA400" size="17px" />{" "}
                          {item.reDeliveryScore}
                        </span>
                      </li>
                    </section>
                  </section>
                  <ul className="mt-4 ml-6">
                    <li>
                      <p className="text-[#d1bc44] text-sm my-3">
                        {item.mniName}
                      </p>
                    </li>
                    <li>
                      <p className="mb-3">{item.reContent}</p>
                    </li>
                    {item.roContent && (
                      <li className="bg-[#f0f0f0] rounded p-4">
                        <div className="flex gap-2">
                          <TbMessageCircle2
                            className="scale-x-[-1]"
                            size="20"
                          />
                          <strong>사장님</strong>
                        </div>
                        <div className="pl-6"></div>
                      </li>
                    )}
                  </ul>
                </div>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;