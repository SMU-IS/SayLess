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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc',
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
