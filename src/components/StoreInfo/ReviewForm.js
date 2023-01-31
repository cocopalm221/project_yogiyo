import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";
import StarRating from "../StarRating";

const ReviewForm = ({ closeModal, storeData }) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [tClicked, setTClicked] = useState([false, false, false, false, false]);
  const [dClicked, setDClicked] = useState([false, false, false, false, false]);
  const [qClicked, setQClicked] = useState([false, false, false, false, false]);
  const tasteScore = [0, 1, 2, 3, 4];
  const deliveryScore = [0, 1, 2, 3, 4];
  const quantityScore = [0, 1, 2, 3, 4];

  const array = [0, 1, 2, 3, 4];

  const handleStarClick = (arr, index, type) => {
    let clickStates = [...arr];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    type === "taste" && setTClicked(clickStates);
    type === "delivery" && setDClicked(clickStates);
    type === "quantity" && setQClicked(clickStates);
  };

  let tScore = tClicked.filter(Boolean).length;
  let qScore = qClicked.filter(Boolean).length;
  let dScore = dClicked.filter(Boolean).length;
  let average = ((tScore + qScore + dScore) / 3).toFixed(1);
  console.log(average);

  // console.log(tScore, qScore, dScore);

  return (
    <div className="text-center">
      <header className="relative flex items-center justify-between h-12 bg-[#fa0050] text-white px-4 font-bold text-lg">
        <p>{storeData.siName}</p>
        <AiOutlineCloseSquare
          size="26"
          className="cursor-pointer"
          onClick={closeModal}
        />{" "}
      </header>
      <section className="flex flex-col items-center py-8 gap-3 border-b">
        <h2 className="text-4xl">이 가게를 추천하시겠어요?</h2>
        <StarRating width={400} starRatio={average} gap={10} />
      </section>
      <section className="py-6">
        <p className="text-xl">이 가게에 대한 상세한 평가를 해주세요.</p>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-center items-center gap-4">
          <span className="text-4xl w-20">맛</span>
          <RatingBox>
            {tasteScore.map((el) => (
              <ImStarFull
                key={el}
                onClick={() => handleStarClick(tasteScore, el, "taste")}
                className={tClicked[el] && "yellow"}
                size="60"
              />
            ))}
          </RatingBox>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="text-4xl w-20">양</span>
          <RatingBox>
            {quantityScore.map((el) => (
              <ImStarFull
                key={el}
                onClick={() => handleStarClick(quantityScore, el, "quantity")}
                className={qClicked[el] && "yellow"}
                size="60"
              />
            ))}
          </RatingBox>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="text-4xl w-20">배달</span>
          <RatingBox>
            {deliveryScore.map((el) => (
              <ImStarFull
                key={el}
                onClick={() => handleStarClick(deliveryScore, el, "delivery")}
                className={dClicked[el] && "yellow"}
                size="60"
              />
            ))}
          </RatingBox>
        </div>
      </section>
      <form>
        <input
          type="text"
          placeholder="음식에 대한 솔직한 리뷰를 남겨주세요"
          className="w-11/12 p-4 h-[200px] mt-10 text-xl outline-none border rounded"
        />
      </form>
    </div>
  );
};
const RatingBox = styled.div`
  display: flex;
  gap: 10px;
  & svg {
    color: #c4c4c4;
    cursor: pointer;
  }
  :hover svg {
    color: #ffa400;
  }
  & svg:hover ~ svg {
    color: #c4c4c4;
  }
  .yellow {
    color: #ffa400;
  }
`;
export default ReviewForm;
