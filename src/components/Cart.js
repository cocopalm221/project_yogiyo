import React, { useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { allDelete, decrement, increment, onDelete } from "../store/cartSlice";
import convertToComma from "../util/comma";
import Modal from "./Modal";

const Cart = ({ storeData }) => {
  const [cartModalVisible, setCartModalVisible] = useState(false);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
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

  const perPrice = cart.map((item) => item.totalPrice);
  const totalMoney = perPrice.reduce((sum, value) => (sum += value), 0);

  return (
    <>
      <section className="border rounded-t-xl overflow-hidden">
        <header className="bg-[#333] text-white p-3 flex items-center justify-between">
          주문표
          {cart.length > 0 && (
            <FaTrash
              className="cursor-pointer hover:text-brand hover:scale-110"
              onClick={openModal}
            />
          )}
        </header>
        <section className="max-h-[300px] overflow-y-auto">
          {cart.length === 0 && (
            <div className="text-center py-14">
              <p>주문표에 담긴 메뉴가 없습니다.</p>
            </div>
          )}

          {/* 장바구니 0이 아니면  : */}
          {cart.length > 0 &&
            cart.map((item) => (
              <div className="p-4 border-b" key={item.key}>
                <div className="pb-4">
                  <p>
                    {item.mniName}
                    {item.pmName && <span> : {item.pmName}</span>}
                  </p>
                </div>
                <div className="flex font-bold justify-between items-center">
                  <div className="flex items-center text-2xl">
                    <AiOutlineMinusSquare
                      className="cursor-pointer hover:text-brand"
                      onClick={() => {
                        dispatch(decrement(item.key));
                      }}
                    />
                    <p className="px-2 font-bold text-base">{item.goodCount}</p>
                    <AiOutlinePlusSquare
                      className="cursor-pointer hover:text-brand"
                      onClick={() => {
                        dispatch(increment(item.key));
                        console.log(cart);
                      }}
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2">
                      {convertToComma(item.perPrice * item.goodCount)}원
                    </p>
                    <CgCloseR
                      size="24"
                      className="cursor-pointer hover:text-brand"
                      onClick={() => {
                        dispatch(onDelete(item.key));
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </section>
        {/* 총 가격이 최소 주문 금액 이하면 */}
        {totalMoney < storeData.siMinOrderPrice && (
          <p className="p-3 text-end text-sm border-t bg-[#f3f3f3]">
            최소주문금액: {convertToComma(storeData.siMinOrderPrice)}원 이상
          </p>
        )}

        {/* 장바구니 0이 아니면 */}
        {totalMoney > 0 && (
          <div className=" text-end p-2 bg-[#fff8eb]  border-t">
            <p className="text-brand font-bold">
              합계: {convertToComma(totalMoney)}원
            </p>
          </div>
        )}
      </section>
      <button
        className={`block w-full mt-2  py-2.5 text-lg rounded ${
          totalMoney === 0
            ? "pointer-events-none bg-[lightgray] text-white"
            : "bg-brand text-white"
        }`}
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
              <button
                className="text-white bg-brand border border-brand py-1.5 px-3"
                onClick={() => {
                  dispatch(allDelete());
                  closeModal();
                }}
              >
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
