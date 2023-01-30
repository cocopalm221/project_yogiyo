import React, {useState, useEffect} from "react";
import CateNav from "../components/CateNav";
import axios from 'axios';

const MainNav = () => {
  const [categorys, setCategory] = useState([]);

  useEffect(()=>{
    const fetchCate = async () => {
      const response = await axios.get('http://192.168.0.9:9244/mypage/storecate?page=0');
      setCategory(response.data.storeCate.storeCate);
    }
    fetchCate();
  },[])
  
  return (
    <>
    <CateNav categorys={categorys}/>
    </>
  );
};

export default MainNav;
