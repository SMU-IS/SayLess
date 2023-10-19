import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/utils/firebaseConfig';
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: {
      email: localStorage.getItem('email'),
      name: localStorage.getItem('name'),
      profilePicture: localStorage.getItem('profilePicture'),
      foodListings: [],
      recipeListings: [],
      recipeIngredients: [],
    },
  },
  getters: {
    getEmail(state) {
      return state.user.email;
    },
    getName(state) {
      return state.user.name !== 'null' ? state.user.name : null;
    },
    getProfilePicture(state) {
      return state.user.profilePicture !== 'null'
        ? state.user.profilePicture
        : null;
    },
    getFood(state) {
      return state.user.foodListings;
    },
    getRecipe(state) {
      return state.user.recipeListings;
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.email = payload.email;
      state.user.name = payload.displayName;
      state.user.profilePicture = payload.photoURL;
      localStorage.setItem('email', payload.email);
      localStorage.setItem('name', payload.displayName);
      localStorage.setItem('profilePicture', payload.photoURL);
    },
    SET_LOGGED_OUT(state, payload) {
      state.user.email = payload;
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('profilePicture');
    },
    SET_FOOD_LISTINGS(state, payload) {
      state.user.foodListings = payload;
    },
    SET_RECIPE_INGREDIENTS(state, payload) {
      state.user.recipeIngredients = payload;
    },
    SET_RECIPE_LISTINGS(state, payload) {
      state.user.recipeListings = payload;
    },
  },
  actions: {
    async register(context, { email, password }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (response) {
        context.commit('SET_USER', response.user);
      } else {
        throw new Error('Unable to register user');
      }
    },
    async login(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit('SET_USER', response.user);
      } else {
        throw new Error('login failed');
      }
    },
    async logout(context) {
      await signOut(auth);
      context.commit('SET_LOGGED_OUT', null);
    },
    async resetPassword(_, { email }) {
      await sendPasswordResetEmail(auth, email);
    },
    async loginViaGoogle(context) {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      if (response) {
        context.commit('SET_USER', response.user);
      } else {
        throw new Error('login failed');
      }
    },
    async getFoodListings(context) {
      const apiURL = import.meta.env.VITE_GET_LISTING;
      const config = {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hbWUiLCJpYXQiOjE2OTc1MzM2OTR9.61Sb5M-ZYL74WZbkBKvBMBYfnylTOxtY3FhnS8k518Q',
        },
      };

      const { headers } = config;
      const response = await axios.get(apiURL, { headers });
      // console.log(response.data);
      if (response) {
        context.commit('SET_FOOD_LISTINGS', response.data);
      }
    },
    async addRecipes(context, { ingredientsList }) {
      const data = [...ingredientsList];
      const apiURL = import.meta.env.VITE_GET_RECIPE;
      const postData = {
        ingredient: data,
      };
      const response = await axios.post(apiURL, postData);
      if (response) {
        context.commit('SET_RECIPE_LISTINGS', response.data.results);
      }
    },
  },
});

export default store;
