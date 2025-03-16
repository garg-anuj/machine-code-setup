import { useParams } from "react-router-dom";

import AddToCartBtn from "../../components/AddToCartBtn";

import useApiFetcher from "../../hooks/useApiFetcher";
import { EMPTY_OBJECT } from "../../config/constantObj";
import { API_URl } from "../../config/apiUrl";
import "./productDetails.css";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, isProductLoading, error] = useApiFetcher(
    `${API_URl.PRODUCTS}${id}`
  );

  if (isProductLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No Products Found</div>;
  }

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
