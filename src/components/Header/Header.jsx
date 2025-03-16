import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

import { URL } from "../../config/Urls";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const carCount = useSelector((state) => state.cart.totalQuantity) || false;

  return (
    <header>
      <div className="border mb-3 d-flex justify-content-between py-2 px-5">
        <button
          className="cursor-pointer border-0 rounded-2 px-4"
          onClick={() => navigate(URL.HOME_PAGE)}
        >
          Logo
        </button>
        <div className="cartBtn" onClick={() => navigate(URL.CART)}>
          <FaCartShopping />
          {carCount && (
            <div className="cartCount">{carCount > 99 ? "99+" : carCount}</div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
