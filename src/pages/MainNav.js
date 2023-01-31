import React, {useState, useEffect} from "react";
import CateNav from "../components/CateNav";
import axios from 'axios';

const MainNav = () => {
  const [banners, setBanners] = useState([]);

  useEffect(()=>{
    const fetchBanner = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setBanners(response.data);
    }
    fetchBanner();
  },[])
  
  return (
    <>
    <CateNav banners={banners}/>
    </>
  );
};

export default MainNav;
