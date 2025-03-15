import { useNavigate } from "react-router-dom";

import { URL } from "../../config/Urls";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="border mb-3 d-flex justify-content-between py-2 px-5">
        <div className="" onClick={() => navigate(URL.HOME_PAGE)}>
          logo
        </div>
        <div className="" onClick={() => navigate(URL.CART)}>
          My Cart
        </div>
      </div>
    </header>
  );
};

export default Header;
