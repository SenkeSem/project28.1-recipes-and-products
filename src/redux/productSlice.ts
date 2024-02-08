import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    addProduct(state, action: PayloadAction<string>) {
      state.products.push({
        id: new Date().toISOString(),
        title: action.payload,
      });
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((prod) => prod.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
