import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Recipe = {
  id?: string;
  title: string;
  imageUrl: string;
  subtitle?: string;
  ingredients?: string[] | undefined;
  instructions?: string[];
  time?: [];
};

type SubtitleObject = {
  id?: string;
  subtitle?: string | undefined;
};

type IngredientObject = {
  id: string | undefined;
  ingredient: string;
};

type InstructionObject = {
  id: string | undefined;
  instruction: string;
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

    writeSubtitle(state, action: PayloadAction<SubtitleObject>) {
      state.recipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.subtitle = action.payload.subtitle;
        }
      });
    },

    addIngredient(state, action: PayloadAction<IngredientObject>) {
      state.recipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.ingredients
            ? recipe.ingredients.push(action.payload.ingredient)
            : (recipe.ingredients = [action.payload.ingredient]);
        }
      });
    },

    removeIngredient(state, action: PayloadAction<IngredientObject>) {
      state.recipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.ingredients = recipe.ingredients?.filter(
            (ingredient) => ingredient !== action.payload.ingredient,
          );
        }
      });
    },

    addInstruction(state, action: PayloadAction<InstructionObject>) {
      state.recipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.instructions
            ? recipe.instructions.push(action.payload.instruction)
            : (recipe.instructions = [action.payload.instruction]);
        }
      });
    },
  },
});

export const {
  addRecipe,
  removeRecipe,
  writeSubtitle,
  addIngredient,
  removeIngredient,
  addInstruction,
} = recipeSlice.actions;

export default recipeSlice.reducer;
