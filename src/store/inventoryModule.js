import axios from 'axios';

const inventoryModule = {
  state: {
    user: {
      inventoryData: localStorage.getItem('inventory-data'),
    },
  },
  getters: {
    getInventoryData(state) {
      return JSON.parse(state.user.inventoryData);
    },
  },
  mutations: {
    SET_INVENTORY_DATA(state, payload) {
      state.user.inventoryData = payload;
      localStorage.setItem('inventory-data', payload);
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
    async sendImageEdenAI(_, data) {
      const apiURL = import.meta.env.VITE_SEND_IMAGE_EDEN_AI;
      const headers = {
        'x-access-token': data.token,
      };
      await axios.post(apiURL, data, { headers });
    },
  },
};

export { inventoryModule };
