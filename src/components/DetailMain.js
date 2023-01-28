import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import DetailMainModal from "./DetailMainModal";
import DetailSwiper from "./DetailSwiper";
import { GrClose } from "react-icons/gr";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import convertToComma from "../util/comma";
import { v4 as uuid } from "uuid";

const DetailMain = ({ menuData }) => {
  const menuRef = useRef([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleId, setModalVisibleId] = useState("");

  const openModal = (id) => {
    setModalVisible(true);
    setModalVisibleId(id);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalVisibleId("");
  };

  // console.log(menuData);

  const tempMenuData = menuData.map((menu) => {
    return {
      mcName: menu.mcName,
      mcExplanation: menu.mcExplanation,
    };
  });

  const menuSubData = tempMenuData.filter((item, i) => {
    return (
      tempMenuData.findIndex((item2) => {
        return item.mcName === item2.mcName;
      }) === i
    );
  });

  return (
    <>
      <section className="border border-t-0">
        <DetailSwiper />
      </section>
      <ul>
        {/* map current[index]*/}
        {menuSubData.map((menu, index) => (
          <MenuWrap
            ref={(elem) => (menuRef.current[index] = elem)}
            onClick={() => {
              menuRef.current[index].classList.toggle("active");
            }}
            className={index === 0 && "active"}
            key={index}
          >
            <h3 className="title">
              {menu.mcName}
              <MdKeyboardArrowDown size={20} />
            </h3>
            <ul className="list">
              {menu.mcExplanation && (
                <p className="border-b px-4 py-2 text-xs text-[#957e6e]">
                  {menu.mcExplanation}
                </p>
              )}
              {/* li map */}
              {menuData.map(
                (list) =>
                  menu.mcName === list.mcName && (
                    <li
                      className="menu-list-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(list.mniSeq);
                      }}
                      key={list.mniSeq}
                    >
                      <img
                        src="/images/menutemp.png"
                        alt="메뉴"
                        className="w-36 mr-4"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="font-bold">{list.mniName}</p>
                        <p>{convertToComma(list.mniPrice)}원</p>
                      </div>
                      {modalVisible && modalVisibleId === list.mniSeq && (
                        <DetailMainModal
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
                              className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer"
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
                              <p className="text-2xl p-1">{list.mniName}</p>
                            </div>
                            <div className="flex justify-between p-4 border-b">
                              <strong>가격</strong>
                              <strong>{convertToComma(list.mniPrice)}원</strong>
                            </div>

                            {list.plusmenu
                              .filter((element, i) => {
                                return (
                                  list.plusmenu.findIndex((element2) => {
                                    return element.pcName === element2.pcName;
                                  }) === i
                                );
                              })
                              .map((pluscate) => (
                                <InputWrap key={uuid()}>
                                  <p className="input-title">
                                    {pluscate.pcName}
                                    {pluscate.pcEssentialChoice === 0 ? (
                                      <span className="text-brand">
                                        (필수선택)
                                      </span>
                                    ) : (
                                      <span>(추가선택가능)</span>
                                    )}
                                  </p>
                                  {list.plusmenu.map(
                                    (pm) =>
                                      pluscate.pcName === pm.pcName && (
                                        <div
                                          className="input-list"
                                          key={uuid()}
                                        >
                                          {console.log(pm)}
                                          <label>
                                            <div>
                                              {pm.pcMultiChoice === 0 ? (
                                                <input
                                                  type="radio"
                                                  name={pm.pcName}
                                                  value=""
                                                />
                                              ) : (
                                                <input
                                                  type="checkbox"
                                                  name={pm.pcName}
                                                  value=""
                                                />
                                              )}

                                              <p>{pm.pmName}</p>
                                            </div>
                                            {pm.pmPrice > 0 ? (
                                              <span className="text-xs">
                                                +{convertToComma(pm.pmPrice)}원
                                              </span>
                                            ) : (
                                              <span className="text-xs">
                                                추가비용없음
                                              </span>
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
                                <p className="text-2xl text-brand">9,900원</p>
                                <p className="text-xs font-medium">
                                  (최소주문금액 5,000원)
                                </p>
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
                            <button className="bg-[#555] w-1/2 p-4">
                              주문표에 추가
                            </button>
                            <button className="bg-brand w-1/2">주문하기</button>
                          </form>
                        </DetailMainModal>
                      )}
                    </li>
                  )
              )}
            </ul>
          </MenuWrap>
        ))}
      </ul>
    </>
  );
};

const MenuWrap = styled.li`
  border: 1px solid #e5e7eb;

  &.active svg {
    transform: rotate(180deg);
  }
  &.active > ul {
    height: auto;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e5e7eb;
    padding: 12px 15px;
    border-bottom: 1px solid #e5e7eb;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  .list {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    height: 0;
    overflow: hidden;
    .menu-list-item {
      display: flex;
      padding: 16px 10px;
      align-items: center;
      border-bottom: 1px solid #e5e7eb;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
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

  .input-title {
    font-size: 15px;
    font-weight: bold;
    padding: 8px 0px;
    > span {
      font-size: 12px;
      margin-left: 6px;
      font-weight: normal;
    }
  }

  .input-list {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    > label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      margin-bottom: 10px;
      cursor: pointer;

      > div {
        display: flex;
        align-items: center;
        > p {
          padding-left: 8px;
        }
      }
    }
  }
`;

export default DetailMain;
