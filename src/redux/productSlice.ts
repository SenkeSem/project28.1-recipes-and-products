import { createSlice } from '@reduxjs/toolkit';

type Product = {
  id: string;
  title: string;
};

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push({
        id: new Date().toISOString(),
        title: action.payload.title,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
