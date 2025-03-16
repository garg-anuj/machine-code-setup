import { useNavigate } from "react-router-dom";

import AddToCartBtn from "../AddToCartBtn";

import { EMPTY_OBJECT } from "./../../config/constantObj";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { image = "", category, title, price, id } = product || EMPTY_OBJECT;

  return (
    <div
      className="productCardContainer"
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <div className="productBox">
        <div className="">
          <img src={image} alt={title} className="img-fluid" />
        </div>

        <div className="productName">{category}</div>

        <div className="d-flex justify-content-around align-content-center w-100 pt-2">
          <div> {Math.floor(price)}$</div>
          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
