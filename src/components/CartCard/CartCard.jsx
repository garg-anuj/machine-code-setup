import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";

import { EMPTY_OBJECT } from "./../../config/constantObj";
import "./cartCard.css";

const CartCard = ({ product }) => {
  const {
    image = "",
    category,
    name,
    price,
    id,
    quantity,
  } = product || EMPTY_OBJECT;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleAddToCartBtn = (event) => {
  //   event.stopPropagation();
  //   dispatch(addToCart(product));
  // };

  const handleIncreaseBtn = (event) => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleDecreaseBtn = (event) => {
    event.stopPropagation();
    dispatch(removeFromCart(id));
  };

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
          {/* <div> {Math.floor(price)}$</div>
          <div className="addToCartBtn">
            <button onClick={handleAddToCartBtn}>Add</button>
          </div> */}
          <div className="counterBtn">
            <button className="decrementBtn" onClick={handleDecreaseBtn}>
              -
            </button>
            {quantity}
            <button className="incrementBtn" onClick={handleIncreaseBtn}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
