import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Recipe = {
  id: string;
  title: string;
  imageUrl: string;
  subtitle?: string;
  ingredients?: [];
  instructions?: string[];
  time?: [];
};

type RecipeState = {
  recipes: Recipe[];
};

const initialState: RecipeState = {
  recipes: [],
};

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe(state, action: PayloadAction<Recipe>) {
      state.recipes.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        imageUrl: action.payload.imageUrl,
      });
    },

    // removeProduct(state, action: PayloadAction<string>) {
    //   state.products = state.products.filter((prod) => prod.id !== action.payload);
    // },
  },
});

export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
