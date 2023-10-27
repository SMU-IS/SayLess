import axios from 'axios';

const recipeModule = {
  state: {
    user: {
      recipeListings: [],
      recipeIngredients: ['egg', 'butter'],
      recipePrompt: [],
      recipeDetails: {},
      recipeDetailsInit: false,
    },
  },
  getters: {
    getRecipe(state) {
      return state.user.recipeListings;
    },
    getRecipePrompt(state) {
      return state.user.recipePrompt.splice(0, 10);
    },
    getIngredient(state) {
      return state.user.recipeIngredients;
    },
    getRecipeDetail(state) {
      return state.user.recipeDetails;
    },
    getRecipeDetailInit(state) {
      return state.user.recipeDetailsInit;
    },
  },
  mutations: {
    SET_RECIPE_INGREDIENTS(state, payload) {
      state.user.recipeIngredients = payload;
    },
    SET_RECIPE_LISTINGS(state, payload) {
      state.user.recipeListings = payload;
    },
    SET_RECIPE_PROMPT(state, payload) {
      state.user.recipePrompt = payload;
    },
    SET_RECIPE_DETAILS(state, payload) {
      state.user.recipeDetails = payload;
    },
    SET_RECIPE_DETAILS_INIT(state, payload) {
      state.user.recipeDetailsInit = payload;
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
        context.commit('SET_RECIPE_PROMPT', response.data.prompt);
      }
    },
    async fetchRecipeDetails(context, recipeId) {
      const apiURL = import.meta.env.VITE_GET_RECIPE_DETAILS;
      const headers = {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZTkyN2RhNjMyNTAyMDgwNGUwNDIiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIxIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiREFWSUQgQU5HIENIVU4gWElPTkcgXyIsInByb2ZpbGVQaWMiOiJodHRwczovL2kua3ltLWNkbi5jb20vZW50cmllcy9pY29ucy9vcmlnaW5hbC8wMDAvMDM2LzAwNy91bmRlcnRoZXdhdGVyY292ZXIuanBnIiwiaWF0IjoxNjk4MzkzMDgwfQ.EuIPYW_KiW5aYrfcrS-GyNPwb0MBq-GD0tQZqP_-Sdc',
      };
      const data = {
        rid: recipeId,
      };
      const response = await axios.post(apiURL, data, { headers });
      if (response) {
        console.log(response);
        context.commit('SET_RECIPE_DETAILS', response.data);
        context.commit('SET_RECIPE_DETAILS_INIT', true);
      }
    },
  },
};

export { recipeModule };
