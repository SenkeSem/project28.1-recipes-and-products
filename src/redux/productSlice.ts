import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: string;
  title: string;
  subtitle?: string;
  calories: string;
  protein: string;
  fat: string;
  carb: string;
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
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push({
        id: action.payload.id,
        title: action.payload.title,
        calories: action.payload.calories,
        protein: action.payload.protein,
        fat: action.payload.fat,
        carb: action.payload.carb,
      });
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((prod) => prod.id !== action.payload);
    },
    // writeSubtitle(state, action: PayloadAction<Product>) {
    //   state.products = state.products.map((product) => {
    //     if (product.id === action.payload.id) {
    //       product.subtitle = action.payload.subtitle;
    //     } else {
    //       return product;
    //     }
    //   });
    // },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
