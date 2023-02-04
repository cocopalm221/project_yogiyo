import React from "react";
import * as s from "../../styles/Styles";

const InfoModal = (props) => {
  const closeModal = () => {
    props.setModalOpen(false);
  };
  return (
    <s.infomodal>
      <div className="inner">
        <p className="searchid">{props.searchid}</p>
        <button
          classname="confirm"
          onClick={() => {
            closeModal();
          }}
        >
          확인
        </button>
      </div>
    </s.infomodal>
  );
};

export default InfoModal;
