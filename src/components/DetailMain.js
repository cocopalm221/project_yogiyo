import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import DetailMainModal from "./DetailMainModal";
import DetailSwiper from "./DetailSwiper";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const DetailMain = () => {
  const menuRef = useRef([]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="border border-t-0">
        <DetailSwiper />
      </div>
      <ul>
        {/* map current[index]*/}
        <DetailMenuBox
          ref={(elem) => (menuRef.current[0] = elem)}
          onClick={() => {
            menuRef.current[0].classList.toggle("active");
          }}
          className="active"
        >
          <DetailMenuTitle>
            인기메뉴
            <MdKeyboardArrowDown size={20} />
          </DetailMenuTitle>
          <DetailMenuList>
            {/* li map */}
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <div className="w-36 mr-4">
                <img src="/images/menutemp.png" alt="메뉴" className="w-full" />
              </div>
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
              <div className="w-36 mr-4">
                <img src="/images/menutemp.png" alt="메뉴" className="w-full" />
              </div>
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>{" "}
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <div className="w-36 mr-4">
                <img src="/images/menutemp.png" alt="메뉴" className="w-full" />
              </div>
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>{" "}
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <div className="w-36 mr-4">
                <img src="/images/menutemp.png" alt="메뉴" className="w-full" />
              </div>
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>
          </DetailMenuList>
        </DetailMenuBox>
        <DetailMenuBox
          ref={(elem) => (menuRef.current[1] = elem)}
          onClick={() => {
            menuRef.current[1].classList.toggle("active");
          }}
        >
          <DetailMenuTitle>
            1인분 주문
            <MdKeyboardArrowDown size={20} />
          </DetailMenuTitle>
          <DetailMenuList>
            {/* li map */}
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <div className="w-36 mr-4">
                <img src="/images/menutemp.png" alt="메뉴" className="w-full" />
              </div>
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
              <div className="w-36 mr-4">
                <img src="/images/menutemp.png" alt="메뉴" className="w-full" />
              </div>
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>{" "}
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <div className="w-36 mr-4">
                <img src="/images/menutemp.png" alt="메뉴" className="w-full" />
              </div>
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>{" "}
            <li
              className="menu-list-item"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              <div className="w-36 mr-4">
                <img src="/images/menutemp.png" alt="메뉴" className="w-full" />
              </div>
              <div>
                <p className="font-bold">반반한 피자 (2가지 맛)</p>
                <p className="text-sm text-[#999]">설명설명</p>
                <p>18,400원</p>
              </div>
            </li>
          </DetailMenuList>
        </DetailMenuBox>
      </ul>
      {modalVisible && (
        <DetailMainModal visible={modalVisible} onClose={closeModal}>
          <div className="h-[83%] overflow-y-scroll">
            <div>
              <img
                src="images/menutemp.png"
                alt="foodimg"
                className="w-full h-[220px]"
              />
            </div>
            <div className="text-center p-3 border-b">
              <p className="text-2xl ">메뉴이름</p>
              <p className="text-xs text-[#999] pt-1">메뉴설명</p>
            </div>
            <div className="flex justify-between text-[15px] p-4 border-b">
              <strong>가격</strong>
              <strong>11,900원</strong>
            </div>
            <InputBox>
              <InputTitle color={"#fa0050"}>
                <p>
                  맵기 추가 선택<span>(필수 선택)</span>
                </p>
              </InputTitle>
              <InputList>
                <label>
                  <div>
                    <input
                      type="radio"
                      name="필수"
                      value="파스타보이 오리지널"
                    />
                    <p>파스타보이 오리지널</p>
                  </div>
                  <span>+2,000원</span>
                </label>
              </InputList>
            </InputBox>
            <InputBox>
              <InputTitle>
                <p>
                  파스타 재료 추가<span>(추가선택 가능)</span>
                </p>
              </InputTitle>
              <InputList>
                <label>
                  <div>
                    <input type="checkbox" value="파스타보이 오리지널" />
                    <p>파스타보이 오리지널</p>
                  </div>
                  <span>+2,000원</span>
                </label>
              </InputList>
            </InputBox>
            <div className="flex justify-between items-center p-4 border-b font-bold">
              <p>수량</p>
              <div className="flex items-center">
                <AiOutlineMinusSquare size="24" className="cursor-pointer" />
                <span className="px-4">1</span>
                <AiOutlinePlusSquare size="24" className="cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-between items-center p-4 pb-5 font-bold bg-[#f0f0f0]">
              <p>총 주문금액</p>
              <div className="text-end">
                <p className="text-2xl  text-[#fa0050]">9,900원</p>
                <p className="text-xs font-medium">(최소주문금액 5,000원)</p>
              </div>
            </div>
          </div>
        </DetailMainModal>
      )}
    </>
  );
};

const DetailMenuBox = styled.div`
  border: 1px solid #e5e7eb;

  &.active svg {
    transform: rotate(180deg);
  }
  &.active > ul {
    height: auto;
  }
`;
const DetailMenuTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e5e7eb;
  padding: 12px 15px;
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
const DetailMenuList = styled.ul`
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
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d9d9d9;
  padding: 4px 16px 16px;
  }
`;
const InputTitle = styled.div`
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
`;
const InputList = styled.div`
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

    [type="radio"] {
      vertical-align: middle;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    [type="radio"]:checked {
      accent-color: #fa0050;
    }

    [type="checkbox"] {
      vertical-align: middle;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    [type="checkbox"]:checked {
      accent-color: #fa0050;
    }

    > div {
      display: flex;
      align-items: center;
      > p {
        padding-left: 8px;
      }
    }
  }
`;
export default DetailMain;
