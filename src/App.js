import React from "react";
import Header from "./components/Header";
import Main from "./Main";
import MainNav from "./pages/MainNav";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import StoreInfo from "./pages/StoreInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WishList from "./pages/WishList";
import MyPage from "./pages/MyPage";
import ReviewList from "./pages/ReviewList";
import OrderList from "./pages/OrderList";
import MyInfo from "./pages/MyInfo";

const App = () => {
  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/mainnav" element={<MainNav />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/storeinfo/:storeId" element={<StoreInfo />}></Route>
          <Route path="/mypage" element={<MyPage />}>
            <Route index element={<OrderList />} />
            <Route path="orderlist" element={<OrderList />} />
            <Route path="reviewlist" element={<ReviewList />} />
            <Route path="wishList" element={<WishList />} />
            <Route path="myinfo" element={<MyInfo />} />
          </Route>
        </Routes>
      </>
      <Footer />
    </Router>
  );
};

export default App;
