import * as s from "../styles/Styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CateList = () => {
  const [gagelist, setGagelist] = useState([]);

  useEffect(() => {
    const fetchCate = async () => {
      const response = await axios.get(
        "http://192.168.0.5:9244/mypage/storecate?page=0"
      );
      setGagelist(response.data.storeCate.storeCate);
    };
    fetchCate();
    AOS.init();
  }, []);

  const variants = {
    hidden: {
      opacity: 0.2,
      y: 15,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };
  return (
    <div className="cate-list">
      <s.bannersList>
        {gagelist.map((gagelist, i) => (
          <motion.li
            key={gagelist.scSeq}
            initial="hidden"
            animate="visible"
            variants={variants}
            custom={i}
            whileHover={{ scale: 1.15 }}
            transition={{
              type: "spring",
              bounce: 3,
              stiffness: 600,
              damping: 5,
              velocity: 3,
            }}
            drag
            dragSnapToOrigin
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            className="bg-rose-500 relative"
          >
            <p className="scName">{gagelist.scName}</p>
            <Link to="/mainnav">
              <img
                src={`http://192.168.0.5:9244/cate/images/${gagelist.scImage}`}
                alt={gagelist.scName}
                style={{
                  background: "white",
                  width: "220px",
                  height: "220px",
                  objectFit: "contain",
                  overflow: "hidden",
                }}
              />
            </Link>
          </motion.li>
        ))}
      </s.bannersList>
    </div>
  );
};

export default CateList;
