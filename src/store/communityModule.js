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

    UPDATE_LISTINGS(state, payload) {
      let listingid = payload[0];
      let requestList = payload[1];
      const storedData = localStorage.getItem('community-sharing-data');
      if (storedData) {
        const jsonData = JSON.parse(storedData);
        const itemIndex = jsonData.findIndex((x) => x.id === listingid);
        if (itemIndex !== -1) {
          jsonData[itemIndex].requested = requestList;
          state.user.communityListings = JSON.stringify(jsonData);
          localStorage.setItem(
            'community-sharing-data',
            JSON.stringify(jsonData),
          );
        }
      }
    },
  },
  actions: {
    async fetchCommunityListings(context) {
      const apiURL = import.meta.env.VITE_GET_LISTING;
      const headers = {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc',
      };
      const response = await axios.get(apiURL, { headers });
      if (response) {
        const strData = JSON.stringify(response.data);
        context.commit('SET_COMMUNITY_SHARING_LISTINGS', strData);
      }
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
        listingId: listingid,
      };
      const response = await axios.post(apiURL, postData, { headers });
      if (response) {
        let result = [response.data.id, response.data.requested];
        context.commit('UPDATE_LISTINGS', result);
      }
    },
    async postCommunityListings(_, data) {
      try {
        const apiURL = import.meta.env.VITE_POST_LISTING;
        const headers = {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc',
        };
        await axios.post(apiURL, data, { headers });
      } catch (err) {
        throw err;
      }
    },
  },
};

export { communityModule };
