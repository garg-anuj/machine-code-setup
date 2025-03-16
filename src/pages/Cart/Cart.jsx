import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";

const Cart = () => {
  const selector = useSelector((state) => state?.cart);

  if (!selector?.items.length) {
    return <div>Cart is empty</div>;
  }
  const carts = selector?.items;
  const totalPrice = selector?.totalAmount;
  return (
    <div className="h-100 w-25">
      <div> Total Amount : {Math.floor(totalPrice)}</div>
      {carts?.map((cart, idx) => {
        return (
          <div key={idx}>
            <CartCard product={cart} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
