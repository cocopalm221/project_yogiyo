import * as s from "../styles/Styles";
import { Link } from "react-router-dom";

const CateList = ({ banners }) => {
  return (
    <div className="cate-list">
      <s.bannersList>
        {banners.slice(0, 15).map((banner) => (
          <li key={banner.id}>
            <Link to="/mainnav">
              <img src={banner.url} alt={banner.id} />
            </Link>
          </li>
        ))}
      </s.bannersList>
    </div>
  );
};

export default CateList;
