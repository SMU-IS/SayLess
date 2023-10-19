<template>
  <div class="flex justify-center md:mt-32 mt-12 w-full">
    <div
      class="chat-container d-flex flex flex-col h-full w-full md:w-3/4"
      style="height: 590px"
    >
      <ChatHeader
        :listing-data="listingDetails"
        :messages="messages"
        :sender="sender"
        @request="updateReqFlag"
        @accept="updateAcceptFlag"
      />
      <MessageList
        v-if="messages.length !== 0"
        class="w-full w-md-60 overflow-scroll"
        :messages="messages"
        :sender="sender"
      />
      <MessageInput :messages="messages" :sender="sender" @send="sendMessage" />
    </div>
  </div>
</template>

<script>
import MessageList from '@/components/Chat/MessageList.vue';
import MessageInput from '@/components/Chat/MessageInput.vue';
import ChatHeader from '@/components/Chat/ListingHeader.vue';
import { listingChatItem } from '@/data/listingChatItem.js';

export default {
  name: 'ChatDetails',
  components: {
    MessageList,
    MessageInput,
    ChatHeader,
  },
  data() {
    return {
      sender: 'bryan1122',
      messages: [],
      listingDetails: listingChatItem,
      chatId: null,
    };
  },
  mounted() {
    this.chatId = this.$route.params.chatId;
    if (this.chatId) {
      this.fetchChatData(this.chatId);
    }
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
      this.messages.push({
        sender: this.sender,
        messageText: message,
        timestamp: this.formatTimestamp(currentTime),
      });
    },
    updateReqFlag(bool) {
      this.listingDetails.requested = bool;
      this.sendMessage('Requested');
    },
    updateAcceptFlag(bool) {
      this.listingDetails.accepted = bool;
      this.sendMessage('Accepted');
    },

    async fetchChatData(chatId) {
      try {
        const chatDataModule = await import(`../data/chat${chatId}.js`);
        const chatData = chatDataModule.default;
        const listingDataModule = await import(`../data/listing${chatId}.js`);
        const listingData = listingDataModule.default;
        if (Array.isArray(chatData)) {
          this.messages = chatData;
        }
        if (typeof listingData == 'object') {
          this.listingDetails = listingData;
        }
      } catch (error) {
        this.messages = [];
      }
    },
  },
};
</script>
