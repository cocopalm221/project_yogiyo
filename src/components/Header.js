import React from "react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FiCompass } from 'react-icons/fi'
import * as s from '../styles/Styles';
// import logo from '../../public/images/logo2.png';

const Header = () => {

  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  }
  const goLogin = () => {
    navigate('/login');
  }


  return (
    <div className="header">
      <s.headerInner>
        <img src ='images/logo.png' className="title" alt="ddd" onClick={goMain}/>
        <div className='search-list'>
          <div className="compass"><FiCompass/></div>
          <input type="search" className="searcher" name="q" placeholder='위치 입력'></input>
          <button type='button' id='search_btn'><FiSearch/></button>
        </div>
        <div className="buttons">
          <button className="login" onClick={goLogin}>로그인</button>
          <button className="menu">주문표</button>
        </div>
        </s.headerInner>
    </div>
  );
};

export default Header;
