import { groceries } from '@/data/inventoryData';
import { getCurrentDate, randomUniqueId } from '@/helpers/common';

const inventoryModule = {
  state: {
    user: {
      inventoryData:
        JSON.parse(localStorage.getItem('inventory-data')) || groceries,
    },
  },
  getters: {
    getInventoryData(state) {
      return state.user.inventoryData;
    },
  },
  mutations: {
    SET_INVENTORY_DATA(state, payload) {
      state.user.inventoryData.push({
        id: randomUniqueId(),
        item: payload,
        quantity: 2,
        doe: getCurrentDate(),
        category: 'Dairy',
      });

      localStorage.setItem(
        'inventory-data',
        JSON.stringify(state.user.inventoryData),
      );
    },
    REMOVE_INVENTORY_DATA(state, payload) {
      let id = state.user.inventoryData.findIndex(
        (result) => result.id == payload,
      );
      state.user.inventoryData.splice(id, 1);
      localStorage.setItem(
        'inventory-data',
        JSON.stringify(state.user.inventoryData),
      );
    },
  },
  actions: {
    async handleAddItem(context, { item }) {
      context.commit('SET_INVENTORY_DATA', item);
    },
    async handleRemoveItem(context, { id }) {
      context.commit('REMOVE_INVENTORY_DATA', id);
    },
  },
};

export { inventoryModule };
