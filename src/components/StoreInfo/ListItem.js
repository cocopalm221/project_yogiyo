import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import Modal from "../Modal";
import convertToComma from "../../util/comma";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/cartSlice";
import { useNavigate } from "react-router";

const ListItem = ({ menuItem, menuData, storeData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleId, setModalVisibleId] = useState("");
  const dispatch = useDispatch();

  const openModal = (id) => {
    setModalVisible(true);
    setModalVisibleId(id);
  };

  const closeModal = (e) => {
    setModalVisible(false);
    setModalVisibleId("");
    setGoodCount(1);
    setCheckList([]);
    setRadioList({});
    setOptionPriceRadio({});
    setOprionPriceCheck({});
  };

  // 전체 가격
  const [totalPrice, setTotalPrice] = useState({});
  // 기본 제품 선택개수
  const [goodCount, setGoodCount] = useState(1);
  // 옵션 가격
  const [optionPriceRadio, setOptionPriceRadio] = useState({});
  const [optionPriceCheck, setOprionPriceCheck] = useState({});
  const [checkList, setCheckList] = useState([]);
  const [radioList, setRadioList] = useState({});

  const handleRadio = (e) => {
    const { checked, name, id: pm, value: price } = e.target;
    if (checked) {
      setRadioList({ ...radioList, [name]: pm });
      setOptionPriceRadio({ ...optionPriceRadio, [name]: price });
    }
  };

  const handleCheck = (e) => {
    const { checked, id: pm, value: prices } = e.target;
    if (checked) {
      setCheckList([...checkList, pm]);
      setOprionPriceCheck({ ...optionPriceCheck, [pm]: prices });
    } else {
      setCheckList(checkList.filter((el) => el !== pm));
      setOprionPriceCheck({ ...optionPriceCheck, [pm]: 0 });
    }
  };
  // 라디오버튼 가격
  let priceRadio = Object.values(optionPriceRadio)
    .map((price) => parseInt(price))
    .reduce((sum, value) => (sum += value), 0);
  // 체크 버튼 가격
  let priceCheck = Object.values(optionPriceCheck)
    .map((price) => parseInt(price))
    .reduce((sum, value) => (sum += value), 0);
  // 플러스메뉴 리스트
  const pmList = [
    ...Object.values(radioList),
    ...Object.values(checkList),
  ].toString();

  useEffect(() => {
    setTotalPrice((menuItem.mniPrice + priceRadio + priceCheck) * goodCount);
  }, [priceRadio, priceCheck, goodCount]);
  const navigate = useNavigate();
  return (
    <>
      <li
        className="flex py-4 px-2.5 items-center border-b border-[#e5e7eb] last:border-0"
        onClick={(e) => {
          e.stopPropagation();
          openModal(menuItem.mniSeq);
          setTotalPrice(menuItem.mniPrice);
        }}
      >
        <img
          src={`http://192.168.0.9:9244/menu/images/${menuItem.mniImg}`}
          alt={menuItem.mniName}
          className="w-36 mr-4 border"
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold">{menuItem.mniName}</p>
          <p>{convertToComma(menuItem.mniPrice)}원</p>
        </div>
      </li>
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
              src={`http://192.168.0.9:9244/menu/images/${menuItem.mniImg}`}
              alt={menuItem.mniName}
              className="w-10/12 mx-auto"
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
                          className="flex items-center justify-between mb-3"
                          key={uuid()}
                        >
                          {pmItem.pcMultiChoice === 0 ? (
                            <label className="flex text-sm cursor-pointer">
                              <input
                                type="radio"
                                id={pmItem.pmName}
                                name={pmItem.pcName}
                                value={pmItem.pmPrice}
                                onChange={handleRadio}
                                checked={Object.values(radioList).includes(
                                  pmItem.pmName
                                )}
                              />
                              <p className="pl-2">{pmItem.pmName}</p>
                            </label>
                          ) : (
                            <label className="flex text-sm cursor-pointer">
                              <input
                                type="checkbox"
                                id={pmItem.pmName}
                                name={pmItem.pcName}
                                value={pmItem.pmPrice}
                                onChange={handleCheck}
                                checked={
                                  checkList.includes(pmItem.pmName)
                                    ? true
                                    : false
                                }
                              />
                              <p className="pl-2">{pmItem.pmName}</p>
                            </label>
                          )}

                          {pmItem.pmPrice > 0 ? (
                            <span className="text-xs">
                              +{convertToComma(pmItem.pmPrice)}원
                            </span>
                          ) : (
                            <span className="text-xs">추가비용없음</span>
                          )}
                        </div>
                      )
                  )}
                </InputWrap>
              ))}
            <div className="flex justify-between items-center p-4 border-b font-bold">
              <p>수량</p>
              <div className="flex items-center text-2xl">
                <AiOutlineMinusSquare
                  className="cursor-pointer hover:text-brand"
                  onClick={() => {
                    if (goodCount > 1) {
                      setGoodCount(goodCount - 1);
                    }
                  }}
                />
                <span className="px-4 text-base">{goodCount}</span>
                <AiOutlinePlusSquare
                  className="cursor-pointer hover:text-brand"
                  onClick={() => {
                    setGoodCount(goodCount + 1);
                  }}
                />
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
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addCart({
                  // 메뉴 키값
                  key: uuid(),
                  // 메뉴이름(로제떡볶이1~2인분)
                  mniName: menuItem.mniName,
                  // 플러스메뉴이름(순한맛,밀떢 같은거)
                  pmName: pmList,
                  // 총주문금액
                  totalPrice: totalPrice,
                  // 수량
                  goodCount: goodCount,
                  // 개당가격
                  perPrice: totalPrice / goodCount,
                  // 가게 이름
                  siName: storeData.siName,
                  siSeq: storeData.siSeq,
                })
              );
              closeModal();
            }}
          >
            <button className="bg-[#555] w-1/2 p-4">주문표에 추가</button>
            <button
              className="bg-brand w-1/2"
              onClick={() => {
                dispatch(
                  addCart({
                    // 메뉴 키값
                    key: uuid(),
                    // 메뉴이름(로제떡볶이1~2인분)
                    mniName: menuItem.mniName,
                    // 플러스메뉴이름(순한맛,밀떢 같은거)
                    pmName: pmList,
                    // 총주문금액
                    totalPrice: totalPrice,
                    // 수량
                    goodCount: goodCount,
                    // 개당가격
                    perPrice: totalPrice / goodCount,
                    // 가게 이름
                    siName: storeData.siName,
                    siSeq: storeData.siSeq,
                  })
                );
                navigate("/payment");
              }}
            >
              주문하기
            </button>
          </form>
        </Modal>
      )}
    </>
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
