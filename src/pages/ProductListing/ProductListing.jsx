import ProductCard from "../../components/ProductCard/ProductCard";
import { API_URl } from "../../config/apiUrl";
import useApiFetcher from "../../hooks/useApiFetcher";

const ProductListing = () => {
  const [products, isProductLoading, error] = useApiFetcher(API_URl.PRODUCTS);

  if (isProductLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!products && products.length < 1) {
    return <div>No Products Found</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
