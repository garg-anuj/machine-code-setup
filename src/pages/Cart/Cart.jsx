import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const Cart = () => {
  const selector = useSelector((state) => state.cart);

  if (!selector?.items.length) {
    return <div>Cart is empty</div>;
  }
  const carts = selector?.items;
  return (
    <div className="h-100">
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
