import axios from 'axios';
import { getResponse } from '@/helpers/getResponse';

const questModule = {
  state: {
    count: parseInt(localStorage.getItem('count-state')) || 0,
    user: {
      questData: localStorage.getItem('quest-data'),
    },
  },
  getters: {
    getQuestData(state) {
      return JSON.parse(state.user.questData);
    },
    getCount(state) {
      return state.count;
    },
  },
  mutations: {
    SET_INCREMENT_COUNT(state) {
      state.count += 1;
      localStorage.setItem('count-state', state.count);
    },
    SET_DECREMENT_COUNT(state) {
      state.count -= 1;
      localStorage.setItem('count-state', state.count);
    },
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
    incrementCount(context) {
      context.commit('SET_INCREMENT_COUNT');
    },
    decrementCount(context) {
      context.commit('SET_DECREMENT_COUNT');
    },
    async fetchQuestData(context) {
      const token = JSON.parse(localStorage.getItem('user-data'));
      const apiURL = import.meta.env.VITE_GET_QUEST_DATA;
      const headers = {
        'x-access-token': token?.['x-access-token'],
      };
      const response = await axios.get(apiURL, { headers });
      if (response) {
        const strData = JSON.stringify(response.data.challengeSet);
        context.commit('SET_QUEST_DATA', strData);
      }
    },
    async updateQuestStatus(context, { id, status }) {
      const token = JSON.parse(localStorage.getItem('user-data'));
      const apiURL = import.meta.env.VITE_QUEST_STATUS_COMPLETION_STATUS;
      const headers = {
        'x-access-token': token?.['x-access-token'],
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
        getResponse('error', err.message);
      }
    },
  },
};

export { questModule };
