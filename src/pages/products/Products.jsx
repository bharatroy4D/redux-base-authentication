import React from "react";
import ProductList from "./productList/ProductList";
import AddProduct from "./AddProducts/AddProduct";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        🛒 Product Management Dashboard
      </h1>

      {/* 2-column layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Product List */}
        <div className="lg:w-7/12 bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
          <ProductList />
        </div>

        {/* Right Column: Add Product Form */}
        <div className="lg:w-5/12 bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default Products;
