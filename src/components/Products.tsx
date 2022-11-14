import { ProductType } from "../types/ProductType";
import InputProduct from "./InputProduct";
import Product from "./Product";

const Products = ({
  products,
  addProduct,
}: {
  products: ProductType[];
  addProduct: (name: string, price: string) => void;
}) => {
  return (
    <div className="products">
      <h2>Products</h2>
      <InputProduct addProduct={addProduct} />
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p style={{ marginLeft: "10px" }}>No products to show!</p>
      )}
    </div>
  );
};

export default Products;
