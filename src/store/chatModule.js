import axios from 'axios';

const chatModule = {
  state: {
    user: {
      chat: [],
      chatroomDetails: localStorage.getItem('chatroom-data'),
      showNotification: false,
      notificationMessage: '',
      notificationRoom: '',
    },
  },
  getters: {
    getChatRooms(state) {
      return JSON.parse(state.user.chatroomDetails);
    },
    getNotificationVisibilty(state) {
      return state.user.showNotification;
    },
    getNotificationMessage(state) {
      return state.user.notificationMessage;
    },
    getNotificationRoom(state) {
      return state.user.notificationRoom;
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
    SET_SHOWNOTIFICATION(state, payload) {
      state.user.showNotification = payload;
    },
    SET_NOTIFICATIONMESSAGE(state, payload) {
      state.user.notificationMessage = payload;
    },
    SET_NOTIFICATIONROOM(state, payload) {
      state.user.notificationRoom = payload;
    },
  },
  actions: {
    hideNotification(context) {
      context.commit('SET_SHOWNOTIFICATION', false);
    },
    showNotification(context, { notimsg, room }) {
      context.commit('SET_SHOWNOTIFICATION', true);
      context.commit('SET_NOTIFICATIONMESSAGE', notimsg);
      context.commit('SET_NOTIFICATIONROOM', room);
    },
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
