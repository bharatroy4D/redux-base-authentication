import React, { useState } from "react";
import { useAddProductMutation } from "../../../redux/feature/Products/ProductsApi";

const AddProduct = () => {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const [form, setForm] = useState({ name: "", price: "", imageUrl: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.imageUrl) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }
    try {
      await addProduct(form).unwrap();
      setMessage("✅ Product added successfully!");
      setForm({ name: "", price: "", imageUrl: "" });
    } catch (error) {
      setMessage("❌ Failed to add product!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Image URL</label>
          <input
            type="text"
            placeholder="https://URL"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transition"
        >
          {isLoading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-gray-600 font-medium">{message}</p>
      )}
    </div>
  );
};

export default AddProduct;
