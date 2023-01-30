import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import Modal from "../Modal";
import convertToComma from "../../util/comma";

const ListItem = ({ menuItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleId, setModalVisibleId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const openModal = (id) => {
    setModalVisible(true);
    setModalVisibleId(id);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
    setModalVisibleId("");
  };
  return (
    <li
      className="flex py-4 px-2.5 items-center border-b border-[#e5e7eb] last:border-0"
      onClick={(e) => {
        e.stopPropagation();
        openModal(menuItem.mniSeq);
        setTotalPrice(menuItem.mniPrice);
      }}
    >
      <img src={menuItem.mniImg} alt={menuItem.mniName} className="w-36 mr-4" />
      <div className="flex flex-col gap-2">
        <p className="font-bold">{menuItem.mniName}</p>
        <p>{convertToComma(menuItem.mniPrice)}원</p>
      </div>
      {modalVisible && modalVisibleId === menuItem.mniSeq && (
        <Modal
          visible={modalVisible}
          onClose={closeModal}
          width={480}
          height={620}
          top={40}
        >
          {/* modal header */}
          <div className="relative flex justify-center items-center border-b p-4 text-xl">
            <p>메뉴상세</p>
            <GrClose
              className="absolute right-4 cursor-pointer"
              onClick={closeModal}
            />
          </div>
          {/* modal content */}
          <section className="overflow-y-auto h-[81%]">
            <img
              src="/images/menutemp.png"
              alt="foodimg"
              className="w-full h-[220px]"
            />
            <div className="text-center p-3 border-b">
              <p className="text-2xl p-1">{menuItem.mniName}</p>
            </div>
            <div className="flex justify-between p-4 border-b">
              <strong>가격</strong>
              <strong>{convertToComma(menuItem.mniPrice)}원</strong>
            </div>

            {menuItem.plusmenu
              .filter((element, i) => {
                return (
                  menuItem.plusmenu.findIndex((element2) => {
                    return element.pcName === element2.pcName;
                  }) === i
                );
              })
              .map((pluscate) => (
                <InputWrap key={uuid()}>
                  {console.log(pluscate)}
                  <h3 className="font-bold py-3">
                    {pluscate.pcName}
                    {pluscate.pcEssentialChoice === 0 ? (
                      <span className="text-xs font-normal ml-1.5 text-brand">
                        (필수선택)
                      </span>
                    ) : (
                      <span>(추가선택가능)</span>
                    )}
                  </h3>
                  {menuItem.plusmenu.map(
                    (pmItem) =>
                      pluscate.pcName === pmItem.pcName && (
                        <div
                          className="flex flex-col items-between"
                          key={uuid()}
                        >
                          {console.log(pmItem)}
                          <label className="flex justify-between items-center text-sm mb-3.5 cursor-pointer">
                            <div className="flex items-center">
                              {pmItem.pcMultiChoice === 0 ? (
                                <input
                                  type="radio"
                                  name={pmItem.pcName}
                                  value=""
                                />
                              ) : (
                                <input
                                  type="checkbox"
                                  name={pmItem.pcName}
                                  value=""
                                />
                              )}

                              <p className="pl-2">{pmItem.pmName}</p>
                            </div>
                            {pmItem.pmPrice > 0 ? (
                              <span className="text-xs">
                                +{convertToComma(pmItem.pmPrice)}원
                              </span>
                            ) : (
                              <span className="text-xs">추가비용없음</span>
                            )}
                          </label>
                        </div>
                      )
                  )}
                </InputWrap>
              ))}
            <div className="flex justify-between items-center p-4 border-b font-bold">
              <p>수량</p>
              <div className="flex items-center text-2xl">
                <AiOutlineMinusSquare className="cursor-pointer hover:text-brand" />
                <span className="px-4 text-base">1</span>
                <AiOutlinePlusSquare className="cursor-pointer hover:text-brand" />
              </div>
            </div>
            <div className="flex justify-between items-center p-4 font-bold bg-[#f0f0f0]">
              <p>총 주문금액</p>
              <div className="text-end">
                <p className="text-2xl text-brand">{totalPrice}원</p>
                <p className="text-xs font-medium">(최소주문금액 5,000원)</p>
              </div>
            </div>
          </section>
          {/* modal footer */}
          <form
            className="flex fixed w-full bottom-0 text-white font-bold"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <button className="bg-[#555] w-1/2 p-4">주문표에 추가</button>
            <button className="bg-brand w-1/2">주문하기</button>
          </form>
        </Modal>
      )}
    </li>
  );
};
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d9d9d9;
  padding: 4px 16px 16px;

  input {
    vertical-align: middle;
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #fa0050;
  }
`;
export default ListItem;
