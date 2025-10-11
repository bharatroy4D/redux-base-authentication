import React from "react";
import { useGetProductsQuery } from "../../../redux/feature/Products/ProductsApi";

const ProductList = () => {
  // RTK Query hook
  const { data, isLoading, isError } = useGetProductsQuery();

  // Safe default: যদি data undefined হয়, products will be empty array
  const products = data || [];

  // Loading state
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg animate-pulse">Loading products...</p>
      </div>
    );

  // Error state
  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        Failed to load products 😞
      </div>
    );

  // Empty state
  if (products.length === 0)
    return (
      <div className="text-center text-gray-500 font-medium mt-10">
        No products available.
      </div>
    );

  // Main product grid
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">All Products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id || p._id}
            className="border rounded-2xl shadow-sm p-4 hover:shadow-lg transition-shadow duration-200 bg-white"
          >
            <h3 className="text-indigo-600 font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600 mt-2">${p.price}</p>
            <button className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
