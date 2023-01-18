import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const CartModal = ({ visible, setCartModalVisible }) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      setCartModalVisible(false);
      e.stopPropagation();
    }
  };
  const close = (e) => {
    setCartModalVisible(false);
    e.stopPropagation();
  };

  return (
    <ModalWrapper visible={visible} onClick={onMaskClick}>
      <ModalInner>
        <div>
          <div className="bg-[#333] px-4 py-3 text-white">저기요</div>
          <div className="text-sm p-4 border-b">
            주문 메뉴를 모두 삭제하시겠습니까?
          </div>
          <div className="text-sm text-end py-2 px-4">
            <button
              className="text-[#fa0050] border border-[#fa0050] py-1.5 px-3 mr-2"
              onClick={close}
            >
              취소
            </button>
            <button className="text-white bg-[#fa0050] border border-[#fa0050] py-1.5 px-3">
              확인
            </button>
          </div>
        </div>
      </ModalInner>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: ${(props) => (props.visible ? "block" : "none")};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  outline: none;
  z-index: 1000;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: absolute;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  top: 15%;
  left: 50%;
  width: 598px;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: 4px;
`;
export default CartModal;
