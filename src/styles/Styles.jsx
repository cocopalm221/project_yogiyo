import styled from "styled-components";

//Header

export const headerInner = styled.div`
  height: 70px;
  background: #fa0050;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  img {
    width: 130px;
    object-fit: contain;
    margin: 0 auto;
    cursor: pointer;
  }

  .search-list {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .compass {
      font-size: 2.5rem;
      color: #fff;
      margin-right: 10px;
      cursor: pointer;
    }
    .searcher {
      width: 400px;
      height: 40px;
      border-radius: 20px;
      padding: 2px 15px;
      transition: all 1s;
      &:focus {
        background-color: #e0e0e0;
        outline: none;
      }
    }
    button {
      position: absolute;
      right: 0px;
      border-radius: 0 20px 20px 0;
      font-size: 2rem;
      width: 50px;
      height: 40px;
      background: #fa0050;
      color: #fff;
      border: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 10px;
    white-space: nowrap;
    button {
      background: #fff;
      height: 40px;
      padding: 0 15px;
      border-radius: 20px;
    }
  }
`;

//Main
export const bannerwrap = styled.div`
  background: #817a7a;
`;

export const swiperPrev = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  z-index: 10;
  cursor: pointer;
  .swiper-prev {
    font-size: 5rem;
    color: #aaaaaa;
  }
`;

export const swiperNext = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  z-index: 10;
  cursor: pointer;
  .swiper-next {
    font-size: 5rem;
    color: #aaaaaa;
  }
`;

// CateList

export const showAll = styled.button`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 20px;
  transform: translateX(100%);
`;

export const bannersList = styled.ul`
  max-width: 1700px;
  width: 100%;
  margin: 0 auto;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 2rem;

  li {
    width: 220px;
    height: 220px;
    position: relative;
    object-fit: contain;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #fa0050;
    p {
      position: absolute;
      top: 20%;
      left: 20%;
      /* transform: translate(-50%, -50%); */
      font-size: 1.05rem;
      font-weight: 600;
    }
  }
`;

//CateNav
export const sortbt = styled.div`
  .sort-down {
    position: relative;
    width: 200px;
    margin: 30px 338px 30px auto;
    box-shadow: 0 4px 5px 0 #00000026;
    #dropdown {
      left: 0;
      visibility: hidden;
      position: absolute;
    }
    .dropdownLabel {
      display: flex;
      justify-content: space-between;
      padding: 12px;
    }
    .downlist {
      display: none;
      position: absolute;
      width: 100%;
      left: 0;
      background: white;
      box-shadow: 0 4px 5px 0 #00000026;
    }
    #dropdown:checked + label + div {
      display: block;
      border-top: 1px solid #00000026;
    }
    .caretIcon {
      font-size: 1.5rem;
      color: #fa0050;
      transition: transform 250ms ease-out;
    }
    #dropdown:checked + label > .caretIcon {
      transform: rotate(-180deg);
    }
    .downlist ul {
      list-style-type: none;
      padding: 12px;
      margin: 0;
    }
    .downlist ul li {
      margin: 0.8rem 0;
      cursor: pointer;
    }
  }
`;
export const catenav = styled.ul`
  width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 2rem;
  gap: 15px;
  flex-wrap: wrap;
  .form {
    width: 110px;
    height: 40px;
    padding: 5px 10px;
    outline: none;
    border-radius: 15px;
    background: whitesmoke;
  }
  .formbt {
    width: 40px;
    background: #fa0050;
    color: #fff;
    font-size: 1.25rem;
    svg {
      stroke-width: 3;
    }
  }
  .cateAll-bt {
    font-weight: 900;
  }
  button {
    width: 130px;
    height: 40px;
    overflow: hidden;
    border: 1px solid #fa0050;
    border-radius: 15px;
    padding: 5px 10px;
    font-weight: 500;
  }
`;

export const stores = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  gap: 1rem;
  justify-content: center;
  justify-items: center;
`;

export const storeinner = styled.div`
  width: 600px;
  height: 180px;
  border-radius: 15px;
  border: 1px solid #767676;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .store-inner {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    img {
      width: 120px;
      height: 120px;
      margin-right: 2.5rem;
    }
    .storeinfo {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
`;

// Payment
export const payment = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 32px 0px 8px;
  max-width: 1280px;
  margin: 0 auto;
  .leftpay {
    padding: 1rem;
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    width: 66.6666%;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 1.8rem;
      color: #000;
      font-weight: 600;
    }
    .deliverinfo {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      .infotitle {
        font-size: 1rem;
        font-weight: 600;
        border-bottom: 1px solid #fa0050;
        padding: 10px 5px;
      }
      .address_search {
        display: flex;
        gap: 0 2rem;
        padding: 0 16px;
        white-space: nowrap;
        input {
          width: 85%;
          outline: none;
          background: whitesmoke;
          padding: 5px 10px;
          margin-left: 10px;
          border-radius: 15px;
        }
      }
      .number {
        display: flex;
        margin-bottom: 1rem;
        padding: 0 16px;
        white-space: nowrap;
        input {
          width: 85%;
          outline: none;
          background: whitesmoke;
          margin-left: 10px;
          padding: 5px 10px;
          border-radius: 15px;
        }
      }
    }
    .deliverreq {
      display: flex;
      flex-direction: column;

      .reqtitle {
        font-size: 1rem;
        font-weight: 600;
        border-bottom: 1px solid #fa0050;
        padding: 10px 5px;
      }
      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        .reqtext {
          width: 100%;
          height: 200px;
          outline: none;
          background: #f3f3f3;
        }
      }
    }
  }

  .newLeftpay {
    display: flex;
    flex-direction: column;
    gap: 4rem 0;
    gap: 4rem 0;
    .paylist {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem 0;
      gap: 2rem 0;
      .paylisttitle {
        font-size: 1rem;
        font-weight: 600;
        border-bottom: 1px solid #fa0050;
        padding: 10px 5px;
      }
      .cashorcard {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 3rem;

        .cash {
          font-size: 1.2rem;
          border: 1px solid #d1d1d1;
          border-radius: 20px;
          padding: 1rem 4rem;
          :hover {
            box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
          }
        }
        .card {
          font-size: 1.2rem;
          border: 1px solid #d1d1d1;
          border-radius: 20px;
          padding: 1rem 4rem;
          :hover {
            box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  .choosepay {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin: 0;
    .choosepaytitle {
      font-size: 1rem;
      font-weight: 600;
      border-bottom: 1px solid #fa0050;
      padding: 10px 5px;
    }
    .coupon {
      width: 100%;
      display: flex;
      padding: 0 16px;
      label {
        width: calc(100%-75%-100px);
        font-size: 1rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.25rem;
      }
      input {
        width: 75%;
        background: whitesmoke;
        border-radius: 15px;
        padding: 5px 10px;
        margin-left: 10px;
      }
      .apply {
        width: 80px;
        color: #000;
        border: 1px solid #fa0050;
        border-radius: 20px;
        margin-left: 1rem;
      }
    }
  }

  .rightpay {
    width: 22%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    h1 {
      font-size: 1.8rem;
      color: #000;
      font-weight: 600;
      padding: 1rem;
    }
    .menulist {
      display: flex;
      flex-direction: column;
      gap: 1rem 0;
      padding: 1rem;
      .storename {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        padding: 10px 5px;
        background: whitesmoke;
        border-radius: 15px;
      }
      .totalpay {
        font-weight: 600;
      }
    }
    .clickpay {
      background: #fa0050;
      padding: 5px 1rem;
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 1rem;
      border-radius: 5px;
    }
  }
`;

// MyInfo

export const myinfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem 0;
  width: 100%;
  height: 100%;
  label {
    font-size: 1rem;
    line-height: 36px;
    font-weight: 600;
    width: 120px;
  }
  input {
    padding: 5px 10px;
    border: 1px solid gray;
    width: 600px;
    border-radius: 10px;
    outline: none;
    transition: all 0.5s;
    &:hover {
      background: #eeeeee;
    }
  }

  .totalinfo {
    display: flex;
    flex-direction: column;
    gap: 1.5rem 0;
    margin-top: 2rem;
    margin-right: auto;
    .password,
    .passwordcheck,
    .number,
    .nickname,
    .address {
      display: flex;
      width: 600px;
      justify-content: space-between;
    }
  }

  .buttons {
    display: flex;
    gap: 0 3rem;
    button {
      color: #fff;
      background: #fa0050;
      border-radius: 20px;
      width: 165px;
      height: 46px;
    }
  }
`;

// findid

export const findid = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 1rem 0;
  background: #f5f5f5;

  .searchid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem 0;
    img {
      width: 200px;
    }
    p {
      font-size: 1.5rem;
      text-align: center;
    }
    .number {
      label {
        font-size: 1.5rem;
        transform: translate(50%, 50%);
      }
      input {
        width: 700px;
        height: 50px;
        border-radius: 20px;
        padding: 1rem;
        background: #efefef;

        margin-left: 2rem;
        &:focus {
          outline-color: #fa0050;
        }
      }
    }
    .idbutton {
      font-size: 1.2rem;
      font-weight: 550;
      padding: 5px 10px;
      background: #fa0050;
      border-radius: 10px;
      color: #ffffff;
    }
  }
`;

export const findpw = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 1rem 0;
  background: #f5f5f5;

  .searchpw {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem 0;
    img {
      width: 200px;
    }
    p {
      font-size: 1.5rem;
      text-align: center;
    }
    .number,
    .searchid {
      label {
        font-size: 1.5rem;
        transform: translate(50%, 50%);
      }
      input {
        width: 700px;
        height: 50px;
        border-radius: 20px;
        padding: 1rem;
        background: #efefef;
        margin-left: 2rem;
        &:focus {
          outline-color: #fa0050;
        }
      }
    }
    .pwbutton {
      font-size: 1.2rem;
      font-weight: 550;
      padding: 5px 10px;
      background: #fa0050;
      border-radius: 10px;
      color: #ffffff;
    }
  }
`;
export const infomodal = styled.div`
  position: absolute;
  transform: translate((50%, 50%));
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #fa0050;
  background: #bbacac;
  transition: all 1s;
  z-index: 10;
  .inner {
    display: flex;
    flex-direction: column;
    p {
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
    }
    .confirm {
      text-align: center;
      width: 200px;
      height: 30px;
      padding: 10px 20px;
    }
  }
`;
