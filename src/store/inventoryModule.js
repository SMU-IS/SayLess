import axios from 'axios';

const inventoryModule = {
  state: {
    user: {
      inventoryData: localStorage.getItem('inventory-data'),
      EDEN_AI_DATA: [],
    },
  },
  getters: {
    getInventoryData(state) {
      return JSON.parse(state.user.inventoryData);
    },
    getEdenAIData(state) {
      return state.user.EDEN_AI_DATA;
    },
  },
  mutations: {
    SET_INVENTORY_DATA(state, payload) {
      state.user.inventoryData = payload;
      localStorage.setItem('inventory-data', payload);
    },
    SET_EDEN_AI_DATA(state, payload) {
      state.user.EDEN_AI_DATA = payload;
    },
  },
  actions: {
    async fetchInventory(context) {
      const token = JSON.parse(localStorage.getItem('user-data'));
      const apiURL = import.meta.env.VITE_GET_INVENTORY;
      const headers = {
        'x-access-token': token?.['x-access-token'],
      };
      const response = await axios.get(apiURL, { headers });
      if (response) {
        const strData = JSON.stringify(response.data);
        context.commit('SET_INVENTORY_DATA', strData);
      }
    },
    async handleAddItem(_, data) {
      const apiURL = import.meta.env.VITE_ADD_INVENTORY;
      const headers = {
        'x-access-token': data.token,
      };
      await axios.post(apiURL, data, { headers });
    },
    async sendImageEdenAI(context, data) {
      const apiURL = import.meta.env.VITE_SEND_IMAGE_EDEN_AI;
      const headers = {
        'x-access-token': data.token,
      };
      const response = await axios.post(apiURL, data, { headers });
      if (response) {
        context.commit('SET_EDEN_AI_DATA', response.data[0].item_lines);
      }
    },
  },
};

export { inventoryModule };
