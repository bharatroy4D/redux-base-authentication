import React from "react";
import { useGetProductsQuery } from "../../redux/feature/Products/ProductsApi";

const ProductList = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>All Products</h2>
      {products?.map((p) => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
