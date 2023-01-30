import React, { useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import { useNavigate } from "react-router";

const Cart = () => {
  const [cartModalVisible, setCartModalVisible] = useState(false);

  const openModal = () => {
    setCartModalVisible(true);
  };
  const closeModal = () => {
    setCartModalVisible(false);
  };

  const navigate = useNavigate();
  const gopayment = () => {
    navigate("/payment");
  };

  return (
    <>
      <section className="border rounded-t-xl overflow-hidden">
        <header className="bg-[#333] text-white p-3 flex items-center justify-between">
          주문표
          <FaTrash
            className="cursor-pointer hover:text-brand hover:scale-110"
            onClick={openModal}
          />
        </header>
        {/* 장바구니 갯수 0 이면 ?  */}
        {/* <div className="text-center py-14">
            <p>주문표에 담긴 메뉴가 없습니다.</p>
          </div> */}
        {/* 장바구니 0이 아니면  : */}
        <div className="p-4 border-b">
          <div className="pb-4">
            <p>반마리&떡볶이: 뼈치킨, 후라이드, 홍익떡볶이</p>
          </div>
          <div className="flex font-bold justify-between items-center">
            <div className="flex items-center text-2xl">
              <AiOutlineMinusSquare className="cursor-pointer hover:text-brand" />
              <p className="px-2 font-bold text-base">1</p>
              <AiOutlinePlusSquare className="cursor-pointer hover:text-brand" />
            </div>
            <div className="flex items-center">
              <p className="mr-2">9,900원</p>
              <CgCloseR size="24" className="cursor-pointer hover:text-brand" />
            </div>
          </div>
        </div>
        {/* 최소 주문 금액 이하면 */}
        <div className="p-4 text-end text-sm">
          <p>배달요금 2,000원 별도</p>
          <p className="text-[#999]"> (30,000원 이상 주문시 배달무료)</p>
        </div>
        {/* 장바구니 0이 아니면 */}
        <div className="border-t text-end p-2 bg-[#fff8eb] ">
          <p className="text-brand font-bold">합계: 9,900원</p>
        </div>
      </section>
      <button
        className="block w-full mt-2 bg-brand text-white py-2.5 text-lg rounded"
        onClick={gopayment}
      >
        주문하기
      </button>

      {cartModalVisible && (
        <Modal
          visible={cartModalVisible}
          onClose={closeModal}
          width={598}
          top={15}
        >
          <div>
            <div className="bg-[#333] px-4 py-3 text-white">저기요</div>
            <div className="text-sm p-4 border-b">
              주문 메뉴를 모두 삭제하시겠습니까?
            </div>
            <div className="text-sm text-end py-2 px-4">
              <button
                className="text-brand border border-brand py-1.5 px-3 mr-2"
                onClick={closeModal}
              >
                취소
              </button>
              <button className="text-white bg-brand border border-brand py-1.5 px-3">
                확인
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
