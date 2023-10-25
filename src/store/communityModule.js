import axios from 'axios';

const communityModule = {
  state: {
    user: {
      communityListings: localStorage.getItem('community-sharing-data'),
    },
  },
  getters: {
    getCommunityListings(state) {
      return JSON.parse(state.user.communityListings);
    },
  },
  mutations: {
    SET_COMMUNITY_SHARING_LISTINGS(state, payload) {
      state.user.communityListings = payload;
      localStorage.setItem('community-sharing-data', payload);
    },
  },
  actions: {
    async fetchCommunityListings(context) {
      const apiURL = import.meta.env.VITE_GET_LISTING;
      const headers = {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hbWUiLCJpYXQiOjE2OTc1MzM2OTR9.61Sb5M-ZYL74WZbkBKvBMBYfnylTOxtY3FhnS8k518Q',
      };
      const response = await axios.get(apiURL, { headers });
      if (response) {
        const strData = JSON.stringify(response.data);
        context.commit('SET_COMMUNITY_SHARING_LISTINGS', strData);
      }
    },
  },
};

export { communityModule };
