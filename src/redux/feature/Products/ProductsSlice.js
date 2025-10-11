import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      { id: 1, name: "Wireless Headphone", price: 120 },
      { id: 2, name: "Bluetooth Speaker", price: 85 },
      { id: 3, name: "Smart Watch", price: 150 },
    ],
    selectedProduct: null,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    addProduct: (state, action) => {
      const newProduct = { id: Date.now(), ...action.payload };
      state.products.push(newProduct);
    },

    updateProduct: (state, action) => {
      const { id, name, price } = action.payload;
      const existingProduct = state.products.find((p) => p.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
      }
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const {
  setSelectedProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = ProductSlice.actions;

export default ProductSlice.reducer;
