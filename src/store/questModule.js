import axios from 'axios';

const questModule = {
  state: {
    user: {
      questData: localStorage.getItem('quest-data'),
    },
  },
  getters: {
    getQuestData(state) {
      return JSON.parse(state.user.questData);
    },
  },
  mutations: {
    SET_QUEST_DATA(state, payload) {
      state.user.questData = payload;
      localStorage.setItem('quest-data', payload);
    },
    UPDATE_QUEST_DATA(state, payload) {
      let challengeId = payload[0].challenge;
      let updatedStatus = payload[0].status;

      const storedData = localStorage.getItem('quest-data');
      if (storedData) {
        const jsonData = JSON.parse(storedData);
        const itemIndex = jsonData.findIndex(
          (x) => x.challenge.id === challengeId,
        );

        if (itemIndex !== -1) {
          jsonData[itemIndex].status = updatedStatus;
          state.user.questData = JSON.stringify(jsonData);
          localStorage.setItem('quest-data', JSON.stringify(jsonData));
        }
      }
    },
  },
  actions: {
    async fetchQuestData(context) {
      const apiURL = import.meta.env.VITE_GET_QUEST_DATA;
      const headers = {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc',
      };
      const response = await axios.get(apiURL, { headers });
      if (response) {
        const strData = JSON.stringify(response.data.challengeSet);
        context.commit('SET_QUEST_DATA', strData);
      }
    },
    async updateQuestStatus(context, { id, status }) {
      const apiURL = import.meta.env.VITE_QUEST_STATUS_COMPLETION_STATUS;
      const headers = {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc',
      };
      const data = {
        challengeId: id,
        status: status,
      };
      try {
        const response = await axios.post(apiURL, data, { headers });
        if (response) {
          let data = response.data.challengeSet;
          let result = data.filter((x) => x.challenge === id);
          context.commit('UPDATE_QUEST_DATA', result);
        }
      } catch (err) {
        throw err;
      }
    },
  },
};

export { questModule };
