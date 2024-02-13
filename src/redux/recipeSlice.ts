import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Recipe = {
  id?: string;
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

    removeRecipe(state, action: PayloadAction<string | undefined>) {
      state.recipes = state.recipes.filter((prod) => prod.id !== action.payload);
    },
  },
});

export const { addRecipe, removeRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
