import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

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
            <ProductCard product={cart} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
