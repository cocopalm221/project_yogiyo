import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import DetailMainModal from "./DetailMainModal";
import DetailSwiper from "./DetailSwiper";
import { GrClose } from "react-icons/gr";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const DetailMain = () => {
  const menuRef = useRef([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleId, setModalVisibleId] = useState();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <section className="border border-t-0">
        <DetailSwiper />
      </section>
      <ul>
        {/* map current[index]*/}
        <MenuWrap
          ref={(elem) => (menuRef.current[0] = elem)}
          onClick={() => {
            menuRef.current[0].classList.toggle("active");
          }}
          className="active"
        >
          <h3 className="title">
            인기메뉴
            <MdKeyboardArrowDown size={20} />
          </h3>
          <ul className="list">
            {/* li map */}
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <img
                src="/images/menutemp.png"
                alt="메뉴"
                className="w-36 mr-4"
              />
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <img
                src="/images/menutemp.png"
                alt="메뉴"
                className="w-36 mr-4"
              />
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>
          </ul>
        </MenuWrap>
        <MenuWrap
          ref={(elem) => (menuRef.current[1] = elem)}
          onClick={() => {
            menuRef.current[1].classList.toggle("active");
          }}
        >
          <h3 className="title">
            1인분 주문
            <MdKeyboardArrowDown size={20} />
          </h3>
          <ul className="list">
            {/* li map */}
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <img
                src="/images/menutemp.png"
                alt="메뉴"
                className="w-36 mr-4"
              />
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <img
                src="/images/menutemp.png"
                alt="메뉴"
                className="w-36 mr-4"
              />
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>
          </ul>
        </MenuWrap>
      </ul>
      {modalVisible && (
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
              <p className="text-2xl ">메뉴이름</p>
              <p className="text-sm text-[#999] pt-1">메뉴설명</p>
            </div>
            <div className="flex justify-between p-4 border-b">
              <strong>가격</strong>
              <strong>11,900원</strong>
            </div>
            <InputWrap color="#fa0050">
              <div className="title">
                <p>
                  맵기 추가 선택<span>(필수 선택)</span>
                </p>
              </div>
              <div className="list">
                <label>
                  <div>
                    <input type="radio" name="" value="" />
                    <p>파스타보이 오리지널</p>
                  </div>
                  <span>+2,000원</span>
                </label>
              </div>
            </InputWrap>

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
        </DetailMainModal>
      )}
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

  .title {
    > p {
      font-size: 15px;
      font-weight: bold;
      padding: 8px 0px;
      > span {
        font-size: 12px;
        margin-left: 6px;
        font-weight: normal;
        color: ${(props) => props.color || "black"};
      }
    }
  }

  .list {
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
