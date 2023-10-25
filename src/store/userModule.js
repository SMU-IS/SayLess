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

const userModule = {
  state: {
    user: {
      email: localStorage.getItem('email'),
      name: localStorage.getItem('name'),
      profilePicture: localStorage.getItem('profilePicture'),
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
  },
  mutations: {
    SET_DISPLAY_NAME_MANUAL(state, payload) {
      state.user.name = payload;
      localStorage.setItem('name', payload);
    },
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
  },
};

export { userModule };
