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
  width: 100%;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 2rem;

  li {
    width: 200px;
    height: 200px;
    position: relative;
    object-fit: contain;
    overflow: hidden;
    border-radius: 50%;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #000;
    }
  }
`;

//CateNav
export const catenav = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 2rem;
  gap: 15px;
  flex-wrap: wrap;
  .cateAll-bt {
    font-weight: 900;
  }
  button {
    width: 120px;
    border: 1px solid #fa0050;
    width: 140px;
    height: 50px;
    overflow: hidden;
    border-radius: 15px;
    padding: 0.3rem 1rem;
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

//Login
export const login = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .inputs {
    display: flex;
    flex-direction: column;
    .id {
      display: flex;
      input {
        background: #eee;
        padding: 16px;
        margin: 8px 0;
        width: 100%;
        border: 0;
        outline: none;
        border-radius: 20px;
        box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
      }
    }
    .password {
      display: flex;
      input {
        background: #eee;
        padding: 16px;
        margin: 8px 0;
        width: 100%;
        border: 0;
        outline: none;
        border-radius: 20px;
        box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
      }
    }
  }

  .login {
    button {
      border-radius: 20px;
      border: none;
      outline: none;
      font-size: 12px;
      font-weight: bold;
      padding: 15px 45px;
      margin: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
    }
  }
`;

// Payment
export const payment = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 32px 0px 8px;
  .leftpay {
    padding: 1rem;
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    width: 50%;
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
    padding: 1rem;
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    width: 50%;
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
        font-size: 1.8rem;
        font-weight: 600;
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

    .choosepay {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 2rem;
      margin: 0;
      .choosepaytitle {
        font-size: 1.2rem;
        font-weight: 600;
        border-bottom: 1px solid #fa0050;
        padding: 10px 5px;
      }
      .coupon {
        width: 100%;
        display: flex;

        label {
          width: calc(100%-75%-100px);
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        input {
          width: 75%;
          input {
            width: 75%;
            background: whitesmoke;
            border-radius: 15px;
            padding: 5px 10px;
            margin-left: 10px;
          }
          .apply {
            width: 80px;
            .apply {
              width: 80px;
              color: #000;
              border: 1px solid #fa0050;
              border-radius: 20px;
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }

  .rightpay {
    width: 22%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    .menulist {
      display: flex;
      flex-direction: column;
      gap: 1rem 0;
      padding: 1rem;

      h1 {
        font-size: 1.8rem;
        color: #000;
        font-weight: 600;
      }
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
  width: 100%;
  height: 100%;
  input {
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
    .password,
    .passwordcheck,
    .address,
    .number,
    .email {
      display: flex;
      justify-content: space-between;
      gap: 0 2rem;
      label {
        font-size: 1.25rem;
        font-weight: 500;
      }
      input {
        border: 1px solid gray;
        /* width: 300px; */
        border-radius: 10px;
      }
    }
    .nickname {
      display: flex;
      justify-content: space-between;
      gap: 0 2rem;
      label {
        font-size: 1.25rem;
        font-weight: 500;
      }
      input {
        border: 1px solid gray;
        /* width: 300px; */
        border-radius: 10px;
        transform: translateX(135px);
      }
      .nickchange {
        transform: translateX(120px);
        background: #fa0050;
        color: #fff;
        border-radius: 10px;
        padding: 0.5rem;
      }
    }
  }
  .confirm {
    width: 200px;
    padding: 10px 15px;
    background-color: #fa0050;
    border: 1px solid #fff;
    color: #fff;
    margin-bottom: 10px;
    border-radius: 25px;
    font-weight: 600;
    transform: translateX(100%);
    margin-top: 2rem;
  }
`;
