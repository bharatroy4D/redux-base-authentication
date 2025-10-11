import React from "react";
import ProductList from "./productList/ProductList";
import AddProduct from "./AddProducts/AddProduct";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-24">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🛒 Product Management
      </h1>

      {/* 2-column layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Product List */}
        <div className="lg:w-7/12 bg-white rounded-2xl shadow-md p-6">
          <ProductList />
        </div>

        {/* Right Column: Add Product Form */}
        <div className="lg:w-5/12 bg-white rounded-2xl shadow-md p-6">
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default Products;
