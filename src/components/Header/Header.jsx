import { Link } from "react-router-dom";

import { URL } from "../../config/Urls";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="border">
        <div className="">logo</div>
        <div className="">
          <Link to={URL.CART}>My Cart</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
