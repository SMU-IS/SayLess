<template>
  <div class="flex justify-center w-full md:my-28">
    <div
      class="chat-container d-flex flex flex-col w-full md:w-3/4 h-screen py-8 bg-main-dark md:rounded-xl md:h-[80vh]"
    >
      <ChatHeader
        v-if="details.listing"
        :messages="messages"
        :listing-id="details.listing[0].id"
        :correspondent-obj="correspondentObj"
        @request="updateReqFlag"
        @close="updateAvailableFlag"
      />
      <MessageList
        v-if="messages.length !== 0"
        ref="messageList"
        :messages="messages"
        :listing-id="details.listing[0].id"
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
import { mapGetters } from 'vuex';

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
      listingId: '',
      correspondentObj: Object,
      details: [],
    };
  },
  computed: {
    ...mapGetters(['getUserDetails']),
    getId() {
      return this.getUserDetails?.userData.id;
    },
  },
  watch: {
    $route(to, from) {
      this.messages = [];
      this.chatId = this.$route.params.chatId;
      this.initializeSocket();
      this.fetchData(this.chatId);
      this.getCorrespondent(this.details.participants);
    },
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
      if (this.message === 'requested') {
        this.$store.getters.getCommunityListings;
      }

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
    async updateAvailableFlag(listingid) {
      try {
        await this.$store.dispatch('closeListing', { listingid: listingid });
      } catch (err) {
        throw err;
      }

      this.sendMessage('Deal Closed');
      this.$store.getters.getCommunityListings;
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
        const correspondent = participants.find(
          (item) => item.id !== this.getId,
        );
        this.correspondentObj = correspondent;
      }
    },

    initializeSocket() {
      const token = JSON.parse(localStorage.getItem('user-data'));
      this.socket = io('ws://54.252.152.169:8887', {
        extraHeaders: {
          'x-access-token': token?.['x-access-token'],
        },
      });

      this.socket.on('connected', () => {
        this.socket.emit('login', {
          chatroom: this.chatId,
        });
      });
      this.socket.on('messageData', (event) => {
        this.messages = this.messages.concat(event);
        console.log('reading chat');
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
