import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import { useCallback } from "react";

import { EMPTY_OBJECT } from "../../config/constantObj";
// import "./AddToCartBtn.css";

//  TODO : -  need to optimize instead of array we will store in cart item in hashMap

const AddToCartBtn = ({ product }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.items);

  const { id } = product || EMPTY_OBJECT;

  const handleAddToCartBtn = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(addToCart(product));
    },
    [dispatch, product]
  );

  const handleIncreaseBtn = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(addToCart(product));
    },
    [dispatch, product]
  );

  const handleDecreaseBtn = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(removeFromCart(id));
    },
    [dispatch, id]
  );

  const isItemInCart = cartData.find((item) => item.id === id);

  if (isItemInCart?.quantity === 0 || !isItemInCart?.quantity) {
    return (
      <div className="addToCartBtn">
        <button onClick={handleAddToCartBtn}>Add</button>
      </div>
    );
  }

  return (
    <>
      <div className="counterBtn">
        <button className="decrementBtn" onClick={handleDecreaseBtn}>
          -
        </button>
        {isItemInCart?.quantity}
        <button className="incrementBtn" onClick={handleIncreaseBtn}>
          +
        </button>
      </div>
    </>
  );
};

export default AddToCartBtn;
