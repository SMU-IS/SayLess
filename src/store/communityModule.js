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
  async setRequest(context, { listingid }) {
    const apiURL = import.meta.env.VITE_SET_REQUEST;
    const config = {
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc',
      },
    };
    const { headers } = config;
    const postData = {
      listingid: listingid,
    };
    await axios.post(apiURL, postData, { headers });
  },
};

export { communityModule };
