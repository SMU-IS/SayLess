import axios from 'axios';

const recipeModule = {
  state: {
    user: {
      recipeListings: [],
      recipeIngredients: [],
    },
  },
  getters: {
    getRecipe(state) {
      return state.user.recipeListings;
    },
  },
  mutations: {
    SET_RECIPE_INGREDIENTS(state, payload) {
      state.user.recipeIngredients = payload;
    },
    SET_RECIPE_LISTINGS(state, payload) {
      state.user.recipeListings = payload;
    },
  },
  actions: {
    async addRecipes(context, { ingredientsList }) {
      const apiURL = import.meta.env.VITE_GET_RECIPE;
      const headers = {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hbWUiLCJpYXQiOjE2OTc1MzM2OTR9.61Sb5M-ZYL74WZbkBKvBMBYfnylTOxtY3FhnS8k518Q',
      };
      const data = {
        ingredient: ingredientsList,
      };
      const response = await axios.post(apiURL, data, { headers });
      if (response) {
        context.commit('SET_RECIPE_LISTINGS', response.data.results);
      }
    },
  },
};

export { recipeModule };
