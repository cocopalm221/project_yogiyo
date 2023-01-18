import styled from "styled-components";

//Header

export const headerInner = styled.div`
  height: 100px;
  background: #fa0050;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .title {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-list {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .compass {
      font-size: 3rem;
      color: #fff;
      margin-right: 10px;
    }
    .searcher {
      width: 300px;
      height: 50px;
      border-radius: 20px;
      transition: all 1s;
      &:focus {
        background-color: #c99090;
        outline: none;
      }
    }
    button {
      position: absolute;
      right:120px;
      border-radius: 0 20px 20px 0;
      font-size: 2rem;
      width: 50px;
      height: 50px;
      background: #fa0050;
      color: #fff;
      border: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .buttons {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background: #fff;
      padding: 10px 25px;
      border-radius: 20px;
    }
    .menu {
      margin-left: 10px;
    }
  }
`;

//Main
export const bannerwrap = styled.div`
  background: #817a7a;
`

export const swiperPrev = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  z-index: 10;
  cursor: pointer;
  .swiper-prev {
    font-size: 5rem;
    color: #fff;
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
    color: #fff;
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
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  li {
    width: 200px;
    height: 200px;
    object-fit: contain;
    overflow: hidden;
    border-radius: 50%;
  }
`;

//CateNav
export const catenav = styled.div`
  display: flex;
  list-style: none;
  padding: 2rem;
  button {
    width: 160px;
    height: 60px;
    border: 1px solid #fa0050;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 20px;
    padding: 0.5rem;
    font-weight: 550;
  }
`;

export const stores = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
  gap: 2rem;
  justify-content: center;
`;
export const storeinner = styled.div`
  height: 250px;
  width: 650px;
  border-radius: 15px;
  border: 1px solid #767676;
  display: flex;
  justify-content: center;
  align-items: center;
  .store-inner {
    display: flex;

    img {
      width: 80px;
      height: 80px;
    }
    .storeinfo {
      display: flex;
      flex-direction: column;
      .titie-info {
        display: flex;
        svg {
          width: 10px;
          height: 10px;
          display: inline-block;
        }
      }
    }

    .title-info {
      .review {
        border-right: 2px solid gray;
        padding-right: 5px;
      }
      .comment {
        padding-left: 5px;
      }
    }

    .title-payment {
      .here {
        border-right: 2px solid gray;
        padding-right: 5px;
      }
      .deliver {
        padding-left: 5px;
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
export const payment = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 2rem 0 2rem;
  .leftpay {
    margin: 0;
    padding: 1rem;
    border: 2px solid black;
    width: 50%;
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0;
      background: #3b3939;
      box-shadow: 1px 1px 3px 1px #dadce0;
      font-size: 2.5rem;
      color: white;
      font-weight: 600;
    }
    .deliverinfo {
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem 0;
      > input {
        width: 85%;
        height: 50px;
        outline: none;
        background: whitesmoke;
        margin: 0;
        margin-left: 80px;
      }
      .infotitle {
        font-size: 1.5rem;
        background: #ddd8d8;
        font-weight: 500;
        box-shadow: 1px 1px 3px 1px #dadce0;
        border: 1px solid black;
        padding: 10px 5px;
        margin: 0;
      }
      .address_search {
        display: flex;
        margin: 0;
        gap: 0 2rem;
        label {
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
        }
        input {
          width: 85%;
          height: 50px;
          outline: none;
          background: whitesmoke;
          margin: 0;
        }
      }

      .number {
        display: flex;
        margin: 0;
        margin-bottom: 1rem;
        label {
          font-size: 1.3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
        }
        input {
          width: 85%;
          height: 50px;
          outline: none;
          background: whitesmoke;
          margin: 0;
        }
      }
    }
    .deliverreq {
      display: flex;
      flex-direction: column;
      margin: 0;
      .reqtitle {
        font-size: 1.5rem;
        background: #ddd8d8;
        font-weight: 500;
        box-shadow: 1px 1px 3px 1px #dadce0;
        border: 1px solid black;
        padding: 10px 5px;
        margin: 0;
      }
      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        .reqtext {
          width: 700px;
          height: 200px;
          outline: none;
          background: #d1c8c8;
        }
      }
    }
  }
  .newLeftpay {
    margin: 0;
    padding: 1rem;
    border: 2px solid black;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap:4rem 0;
    .paylist {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap:2rem 0;
      .paylisttitle {
        width: 100%;
        font-size: 1.5rem;
        background: #ddd8d8;
        font-weight: 500;
        box-shadow: 1px 1px 3px 1px #dadce0;
        border: 1px solid black;
        padding: 10px 5px;
        margin: 0;
      }
      .cashorcard {
        display: flex;
        gap: 0 8rem;

        .cash {
          font-size: 2.5rem;
          font-weight: 600;
          border: 4px solid black;
          border-radius: 20px;
          padding: 1rem 4rem;
        }
        .card {
          font-size: 2.5rem;
          font-weight: 600;
          border: 4px solid black;
          border-radius: 20px;
          padding: 1rem 4rem;
        }
      }
    }

    .choosepay{
      display: flex;
      flex-direction: column;
      width:100%;
      gap:2rem;
      margin:0;
      .choosepaytitle{
        width: 100%;
        font-size: 1.5rem;
        background: #ddd8d8;
        font-weight: 500;
        box-shadow: 1px 1px 3px 1px #dadce0;
        border: 1px solid black;
        padding: 10px 5px;
        margin: 0;
      }
      .coupon{
        width:100%;
        display:flex;
        margin:0;
        label{
          width:calc(100%-75%-100px);
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        input{
          width:75%;
          background: #b8b2b2;
          padding:1rem 0;
        }
        .apply{
          width:80px;
          background: black;
          color:#fff;
          border-radius: 20px;
          margin-left: 1rem;
        }
      }
    }
  }

  .rightpay {
    border: 2px solid black;
    width: 22%;
    display: flex;
    flex-direction: column;
    margin: 0;
    justify-content: space-between;
    .menulist {
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem 0;
      padding: 1rem;

      .paytitle2 {
        background: #3b3939;
        box-shadow: 1px 1px 3px 1px #dadce0;
        font-size: 2.5rem;
        color: white;
        font-weight: 600;
        margin: 0;
        width: 100%;
      }
      .storename {
        width: 100%;
        font-size: 1.5rem;
        background: #ddd8d8;
        font-weight: 500;
        box-shadow: 1px 1px 3px 1px #dadce0;
        border: 1px solid black;
        padding: 10px 5px;
        margin: 0;
      }
      .totalpay {
        width: 100%;
        border: 2px solid black;
      }
    }
    .clickpay {
      width: 100%;
      background: gray;
      padding: 5px 1rem;
      font-size: 2rem;
      color: #fff;
      margin-bottom: 1rem;
    }
  }
`;
