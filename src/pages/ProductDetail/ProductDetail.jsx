import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EMPTY_OBJECT } from "../../config/constantObj";

import "./productDetails.css";
import AddToCartBtn from "../../components/AddToCartBtn/AddToCartBtn";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct({ ...response.data, quantity: 0 });
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [id]);

  if (!product) return <div>Loading...</div>;
  const { image, title, price, description } = product || EMPTY_OBJECT;

  return (
    <div className="container">
      <div className="productionDetailBox h-50">
        <div>
          <img className="img-fluid" src={image} alt={name} />
        </div>
        <div className="productionDetailInfo">
          <div className="py-2 fw-bold">
            <span className="fw-400">{title}</span>
          </div>
          <div className="py-2">Price : {Math.floor(price)}$</div>
          <div>
            <div>Description :- </div>
            {description}
          </div>

          <div className="py-3">
            <AddToCartBtn product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
