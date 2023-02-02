import * as s from "../styles/Styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CateList = () => {
  const [gagelist, setGagelist] = useState([]);

  useEffect(() => {
    const fetchCate = async () => {
      const response = await axios.get(
        "http://192.168.0.9:9244/mypage/storecate?page=0"
      );
      setGagelist(response.data.storeCate.storeCate);
    };
    fetchCate();
  }, []);

  return (
    <div className="cate-list">
      <s.bannersList>
        {gagelist.map((gagelist) => (
          <li key={gagelist.cSeq}>
            <Link to="/mainnav" className="text-center ">
              <img
                src={gagelist.scImage}
                alt={gagelist.scName}
                style={{
                  background: "white",
                  width: "200px",
                  height: "200px",
                  border: "#fa0050",
                }}
              />
            </Link>
          </li>
        ))}
      </s.bannersList>
    </div>
  );
};

export default CateList;
