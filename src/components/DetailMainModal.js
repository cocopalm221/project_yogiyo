import React, { useEffect } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const DetailMainModal = ({ visible, onClose, children }) => {
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
      onClose(e);
      e.stopPropagation();
    }
  };
  const close = (e) => {
    if (onClose) {
      onClose();
      e.stopPropagation();
    }
  };

  return (
    <>
      <ModalWrapper visible={visible} onClick={onMaskClick}>
        <ModalInner>
          <div className="flex justify-center border-b h-[60px] bg-white">
            <p className="text-[17px] leading-[60px]">메뉴상세</p>
            <GrClose
              className="absolute right-4 top-5 cursor-pointer"
              size="20"
              onClick={close}
            />
          </div>
          {children}
          <form
            className="h-[48px] flex fixed w-full bottom-0"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <button className="bg-[#555] text-white font-bold w-1/2">
              주문표에 추가
            </button>
            <button className="bg-[#fa0050] text-white font-bold w-1/2">
              주문하기
            </button>
          </form>
        </ModalInner>
      </ModalWrapper>
    </>
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
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  background-color: #fff;
  width: 460px;
  height: 600px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    top: 50%;
  }
`;

export default DetailMainModal;
