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
      profilePicture: localStorage.getItem('profilePicture'),
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
    getProfilePicture(state) {
      return state.user.profilePicture !== 'null'
        ? state.user.profilePicture
        : null;
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
      state.user.profilePicture = payload.photoURL;
      localStorage.setItem('email', payload.email);
      localStorage.setItem('name', payload.displayName);
      localStorage.setItem('profilePicture', payload.photoURL);
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
      } else {
        throw new Error('Unable to register user');
      }
    },
    async createUserDB(_, data) {
      // to update end point
      const apiURL = import.meta.env.VITE_CREATE_USER_IN_DB;
      // to remove
      const headers = {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc',
      };
      await axios.post(apiURL, data, { headers });
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
    async fetchUser(context) {
      const apiURL = import.meta.env.VITE_GET_USER;
      const config = {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc',
        },
      };
      const data = {
        userId: '6530d24110a9828679f8858a',
      };
      const response = await axios.post(apiURL, data, config);
      if (response) {
        const strData = JSON.stringify(response.data);
        context.commit('SET_USER_DETAILS', strData);
      }
    },
  },
};

export { userModule };
