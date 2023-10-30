import axios from 'axios';

const chatModule = {
  state: {
    user: {
      chat: [],
      chatroomDetails: localStorage.getItem('chatroom-data'),
    },
  },
  getters: {
    getChatRooms(state) {
      return JSON.parse(state.user.chatroomDetails);
    },
  },
  mutations: {
    SET_CHATROOMDETAILS(state, payload) {
      state.user.chatroomDetails = payload;
      localStorage.setItem('chatroom-data', payload);
    },
    SET_CHAT(state, payload) {
      state.user.chat = payload;
    },
  },
  actions: {
    async fetchChatRoomDetails(context) {
      const token = JSON.parse(localStorage.getItem('user-data'));
      const apiURL = import.meta.env.VITE_GET_CHATROOM;
      const headers = {
        'x-access-token': token?.['x-access-token'],
      };
      const response = await axios.get(apiURL, { headers });
      if (response) {
        const strData = JSON.stringify(response.data);
        context.commit('SET_CHATROOMDETAILS', strData);
        return response.data;
      }
    },
    async createChat(context, { chat }) {
      const token = JSON.parse(localStorage.getItem('user-data'));
      const apiURL = import.meta.env.VITE_CREATE_CHAT;
      const headers = {
        'x-access-token': token?.['x-access-token'],
      };
      const postData = {
        chat: chat,
      };
      await axios.post(apiURL, postData, { headers });
    },

    async createChatRoom(context, { participants, listing }) {
      const token = JSON.parse(localStorage.getItem('user-data'));
      const apiURL = import.meta.env.VITE_CREATE_CHATROOM;
      const headers = {
        'x-access-token': token?.['x-access-token'],
      };
      const postData = {
        participants: participants,
        listing: listing,
      };
      const response = await axios.post(apiURL, postData, { headers });
      return response.data.id;
    },
    async readChat(context, chatroomId) {
      const token = JSON.parse(localStorage.getItem('user-data'));
      const apiURL = import.meta.env.VITE_READ_CHAT;
      const headers = {
        'x-access-token': token?.['x-access-token'],
      };
      const postData = {
        chatroomId: chatroomId,
      };
      await axios.post(apiURL, postData, { headers });
    },
  },
};

export { chatModule };
