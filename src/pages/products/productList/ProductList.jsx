import React from "react";
import { useGetProductsQuery, useDeleteProductMutation } from "../../../redux/feature/Products/ProductsApi";
import { FiTrash2 } from "react-icons/fi";

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

  if (isLoading) return <p className="text-gray-500 animate-pulse text-center mt-10">Loading products...</p>;
  if (isError) return <p className="text-red-500 text-center mt-10">Failed to load products.</p>;
  if (products.length === 0) return <p className="text-gray-500 text-center mt-10">No products available.</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">All Products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id || p.id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
            {p.imageUrl && (
              <img src={p.imageUrl} alt={p.name} className="w-full h-48 object-cover rounded-lg mb-3" />
            )}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-indigo-600 font-semibold text-lg">{p.name}</h3>
              <button
                onClick={() => handleDelete(p._id || p.id)}
                className="text-red-500 hover:text-red-700 transition"
                title="Delete Product"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-3">${p.price}</p>
            <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
