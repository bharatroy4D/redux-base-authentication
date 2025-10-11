import React, { useState } from "react";
import { useAddProductMutation } from "../../../redux/feature/Products/ProductsApi";

const AddProduct = () => {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const [form, setForm] = useState({ name: "", price: "", imageUrl: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.imageUrl) {
      setMessage("Please fill in all fields.");
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
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            placeholder="https://URL"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
        >
          {isLoading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-600 font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default AddProduct;
