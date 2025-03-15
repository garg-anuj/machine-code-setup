import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import { useCallback } from "react";

import { EMPTY_OBJECT } from "./../../config/constantObj";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { image = "", category, name, price, id } = product || EMPTY_OBJECT;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCartBtn = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(addToCart(product));
    },
    [dispatch, product]
  );

  return (
    <div
      className="productCardContainer"
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <div className="productBox">
        <div className="">
          <img src={image} alt={name} className="img-fluid" />
        </div>

        <div className="productName">{category}</div>

        <div className="d-flex justify-content-around align-content-center w-100 pt-2">
          <div> {Math.floor(price)}$</div>
          <div className="addToCartBtn">
            <button onClick={handleAddToCartBtn}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
