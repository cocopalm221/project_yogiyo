import React from "react";
import Header from "./components/Header";
import Main from "./Main";
import MainNav from "./pages/MainNav";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/mainnav" element={<MainNav/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/payment" element={<Payment/>}></Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;
