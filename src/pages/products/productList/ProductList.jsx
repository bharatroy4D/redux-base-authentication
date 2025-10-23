import React from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation
} from "../../../redux/feature/Products/ProductsApi";
import { FiTrash2 } from "react-icons/fi"; // Trash icon

const ProductList = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const products = data || [];

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id).unwrap();
        alert("✅ Product deleted successfully!");
      } catch (err) {
        console.error(err);
        alert("❌ Failed to delete product!");
      }
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg animate-pulse">Loading products...</p>
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        Failed to load products 😞
      </div>
    );

  if (products.length === 0)
    return (
      <div className="text-center text-gray-500 font-medium mt-10">
        No products available.
      </div>
    );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">All Products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id || p.id}
            className="border rounded-2xl shadow-sm p-4 hover:shadow-lg transition-shadow duration-200 bg-white"
          >
            {/* Product Image */}
            {p.imageUrl && (
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
            )}

            {/* Delete Icon below Image */}
            <div className="flex justify-end mb-2">
              <button
                onClick={() => handleDelete(p._id || p.id)}
                className="text-red-500 hover:text-red-700 transition"
                title="Delete Product"
              >
                <FiTrash2 size={20} />
              </button>
            </div>

            {/* Product Name & Price */}
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
