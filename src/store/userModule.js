import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { auth } from '@/utils/firebaseConfig';
import axios from 'axios';

const userModule = {
  state: {
    user: {
      email: localStorage.getItem('email'),
      name: localStorage.getItem('name'),
      userDetails: localStorage.getItem('user-data'),
      firebaseData: [],
    },
  },
  getters: {
    getEmail(state) {
      return state.user.email;
    },
    getName(state) {
      return state.user.name !== 'null' ? state.user.name : null;
    },
    getFirebaseData(state) {
      return state.user.firebaseData;
    },
    getUserDetails(state) {
      return JSON.parse(state.user.userDetails);
    },
  },
  mutations: {
    SET_DISPLAY_NAME_MANUAL(state, payload) {
      state.user.name = payload;
      localStorage.setItem('name', payload);
    },
    SET_USER(state, payload) {
      state.user.firebaseData = payload;
      state.user.email = payload.email;
      state.user.name = payload.displayName;
      localStorage.setItem('email', payload.email);
      localStorage.setItem('name', payload.displayName);
    },
    SET_FIREBASE_USER_DETAILS(state, payload) {
      state.user.firebaseUserData = payload;
    },
    SET_LOGGED_OUT(state, payload) {
      state.user.email = payload;
      state.user.name = payload;
      state.user.profilePicture = payload;
      localStorage.clear();
    },
    SET_USER_DETAILS(state, payload) {
      state.user.userDetails = payload;
      localStorage.setItem('user-data', payload);
    },
  },
  actions: {
    async register(context, { name, email, password }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (response) {
        context.commit('SET_USER', response.user);
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          context.commit('SET_DISPLAY_NAME_MANUAL', name);
        });
      }
    },
    async authenticateUser(context, data) {
      const apiURL = import.meta.env.VITE_AUTHENTICATE_USER_RETRIEVE_USER_DATA;
      const response = await axios.post(apiURL, data);
      if (response) {
        const strData = JSON.stringify(response.data);
        context.commit('SET_USER_DETAILS', strData);
      }
    },
    async login(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit('SET_USER', response.user);
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
      }
    },
  },
};

export { userModule };
