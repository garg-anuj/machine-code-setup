import { useSelector } from "react-redux";

const Cart = () => {
  const selector = useSelector((state) => state.cart);
  console.log(selector);
  return <div className="h-100"></div>;
};

export default Cart;
