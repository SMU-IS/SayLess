<template>
  <div class="flex justify-center w-full md:my-28">
    <div
      class="chat-container d-flex flex flex-col w-full md:w-3/4 h-screen py-8 bg-main-dark md:rounded-xl md:h-[80vh]"
    >
      <ChatHeader
        v-if="details.listing"
        :messages="messages"
        :listing-id="details.listing.id"
        :correspondent-obj="correspondentObj"
        @request="updateReqFlag"
        @close="updateAvailableFlag"
      />
      <MessageList
        v-if="messages.length !== 0"
        ref="messageList"
        :messages="messages"
      />
      <MessageInput :messages="messages" @send="sendMessage" />
    </div>
  </div>
</template>

<script>
import MessageList from '@/components/Chat/MessageList.vue';
import MessageInput from '@/components/Chat/MessageInput.vue';
import ChatHeader from '@/components/Chat/ChatHeader.vue';
import io from 'socket.io-client';

export default {
  name: 'ChatDetails',
  components: {
    MessageList,
    MessageInput,
    ChatHeader,
  },
  data() {
    return {
      messages: [],
      socket: null,
      chatId: '',
      id: '6530d24110a9828679f8858a',
      listingId: '',
      correspondentObj: Object,
      details: [],
    };
  },
  mounted() {
    this.chatId = this.$route.params.chatId;
    this.initializeSocket();
    this.fetchData(this.chatId);
    this.getCorrespondent(this.details.participants);
  },
  methods: {
    formatTimestamp(timestamp) {
      const hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();

      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;
    },

    sendMessage(message) {
      let currentTime = new Date();
      currentTime = currentTime.toISOString();
      this.socket.emit('chat message', {
        chatroom: this.chatId,
        message: message,
        timestamp: currentTime,
      });
    },
    updateReqFlag(listingid) {
      this.$store.dispatch('setRequest', { listingid: listingid });
      this.sendMessage('Requested');
      this.$store.getters.getCommunityListings;
    },
    updateAvailableFlag(listingid) {
      this.$store.dispatch('setRequest', listingid);
      this.sendMessage('Deal Closed');
    },

    fetchData(chatid) {
      if (chatid) {
        const data = this.$store.getters.getChatRooms;
        if (data) {
          const selectedChatRoom = data.find((item) => item.id === chatid);
          if (selectedChatRoom) {
            const { participants, listing, createdOn, id } = selectedChatRoom;

            this.details = {
              participants: participants,
              listing: listing,
              createdOn: createdOn,
              id: id,
            };
          }
        }
      }
    },

    getCorrespondent(participants) {
      if (participants) {
        const correspondent = participants.find((item) => item.id !== this.id);
        this.correspondentObj = correspondent;
      }
    },

    initializeSocket() {
      const JWT =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTMwZDI0MTEwYTk4Mjg2NzlmODg1OGEiLCJ1c2VySWQiOiJZRzFJZ3RzdFFETmNxYTUwaEVjRXVFSEJhaFIyIiwiZW1haWwiOiJjeGFuZy4yMDIyQHNtdS5lZHUuc2ciLCJuYW1lIjoiSk9TSFVBIERBVklEIEFORyBDSFVOIFhJT05HIF8iLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAzNi8wMDcvdW5kZXJ0aGV3YXRlcmNvdmVyLmpwZyIsImlhdCI6MTY5NzcwOTg0OH0.wN1yj3wrxJHZpGmpHsCPHSiOUIvqdhMtRzVyt2HBxzc';
      this.socket = io('ws://54.252.152.169:8887', {
        extraHeaders: {
          'x-access-token': JWT,
        },
      });

      this.socket.on('connected', () => {
        this.socket.emit('login', {
          chatroom: this.chatId,
        });
      });
      this.socket.on('messageData', (event) => {
        this.messages = this.messages.concat(event);
        this.$store.dispatch('readChat', this.chatId);
        this.$nextTick(() => {
          if (this.$refs.messageList) {
            this.$refs.messageList.scrollToBottom();
          }
        });
      });
    },
  },
};
</script>
