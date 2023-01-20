import React, { useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import CartModal from "./CartModal";

const DetailCart = () => {
  const [cartModalVisible, setCartModalVisible] = useState(false);

  return (
    <>
      <div className="md:col-span-4 max-w-sm h-fit sticky top-2.5">
        <div className="border rounded-t-xl overflow-hidden">
          <div className="bg-[#333] text-white p-3 flex items-center justify-between">
            주문표
            <FaTrash
              className="cursor-pointer"
              onClick={() => {
                setCartModalVisible(true);
              }}
            />
          </div>
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
              <div className="flex items-center">
                <AiOutlineMinusSquare
                  size="24"
                  color="#fa0050"
                  className="cursor-pointer"
                />
                <p className="px-2 font-bold">1</p>
                <AiOutlinePlusSquare
                  size="24"
                  color="#fa0050"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex items-center">
                <p className="mr-2">9,900원</p>
                <CgCloseR size="24" className="cursor-pointer" />
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
            <p className="text-[#fa0050] font-bold">합계: 9,900원</p>
          </div>
        </div>
        <button className="block w-full mt-2 bg-[#FA0050] text-white py-2.5 text-lg rounded">
          주문하기
        </button>
      </div>
      {cartModalVisible && (
        <CartModal
          visible={cartModalVisible}
          setCartModalVisible={setCartModalVisible}
        />
      )}
    </>
  );
};

export default DetailCart;
