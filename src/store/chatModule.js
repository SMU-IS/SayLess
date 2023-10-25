import axios from 'axios';

const chatModule = {
  state: { user: {} },
  getters: {},
  mutations: {},
  actions: {
    async getChatDetails(context) {
      const apiURL = import.meta.env.VITE_GET_CHATDETAILS;
      const response = await axios.get(apiURL);
      if (response) {
        context.commit('SET_CHATDETAILS', response.data);
      }
    },
  },
};

export { chatModule };
