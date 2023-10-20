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
      communityListings: localStorage.getItem('community-sharing-data'),
      recipeListings: [],
      recipeIngredients: [],
    },
    listingChatItem: {
      id: 1,
      personId: 'bryanchua1122',
      listingTitle: 'Free Onions',
      latestMessage: 'Good morning!',
      requested: false,
      accepted: false,
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
    getCommunityListings(state) {
      return JSON.parse(state.user.communityListings);
    },
    getRecipe(state) {
      return state.user.recipeListings;
    },
    getChatId(state) {
      return state.listingChatItem.id;
    },
    getRequestedFlag(state) {
      return state.listingChatItem.requested;
    },
    getAcceptedFlag(state) {
      return state.listingChatItem.accepted;
    },
    getLatestMsg(state) {
      return state.listingChatItem.latestMessage;
    },
    getListingTitle(state) {
      return state.listingChatItem.listingTitle;
    },
    getListingImage(state) {
      return state.listingChatItem.listingImage;
    },
    getPersonId(state) {
      return state.listingChatItem.personId;
    },
    getProfilePic(state) {
      return state.listingChatItem.profilePic;
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
      state.user.name = payload;
      state.user.profilePicture = payload;
      localStorage.clear();
    },
    SET_COMMUNITY_SHARING_LISTINGS(state, payload) {
      state.user.communityListings = payload;
      localStorage.setItem('community-sharing-data', payload);
    },
    SET_RECIPE_INGREDIENTS(state, payload) {
      state.user.recipeIngredients = payload;
    },
    SET_RECIPE_LISTINGS(state, payload) {
      state.user.recipeListings = payload;
    },
    SET_ACCEPT_FLAG(state, payload) {
      state.listingChatItem.accepted = payload;
    },
    SET_REQUEST_FLAG(state, payload) {
      state.listingChatItem.requested = payload;
    },
    SET_LATEST_MSG(state, payload) {
      state.listingChatItem.latestMessage = payload;
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
    async fetchCommunityListings(context) {
      const apiURL = import.meta.env.VITE_GET_LISTING;
      const config = {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hbWUiLCJpYXQiOjE2OTc1MzM2OTR9.61Sb5M-ZYL74WZbkBKvBMBYfnylTOxtY3FhnS8k518Q',
        },
      };

      const { headers } = config;
      const response = await axios.get(apiURL, { headers });
      if (response) {
        const strData = JSON.stringify(response.data);
        context.commit('SET_COMMUNITY_SHARING_LISTINGS', strData);
      }
    },
    async getChatDetails(context) {
      const apiURL = import.meta.env.VITE_GET_CHATDETAILS;
      const response = await axios.get(apiURL);
      if (response) {
        context.commit('SET_CHATDETAILS', response.data);
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
