<template>
  <div class="flex justify-center mt-32 w-full">
    <div
      class="chat-container d-flex flex flex-col h-full w-full md:w-3/4"
      style="height: 590px"
    >
      <ChatHeader
        :listingData="listingDetails"
        :messages="messages"
        :sender="sender"
      />
      <MessageList
        class="w-full w-md-60 overflow-scroll"
        v-if="messages.length !== 0"
        :messages="messages"
        :sender="sender"
      />
      <MessageInput @send="sendMessage" :messages="messages" :sender="sender" />
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
    async fetchChatData(chatId) {
      try {
        const chatDataModule = await import(`../data/chat${chatId}.js`);
        const chatData = chatDataModule.default;
        const listingDataModule = await import(`../data/listing${chatId}.js`);
        const listingData = listingDataModule.default;
        if (Array.isArray(chatData)) {
          this.messages = chatData;
          console.log('YES');
        }
        if (typeof listingData == 'object') {
          this.listingDetails = listingData;
          console.log('YES');
        }
      } catch (error) {
        console.error('Error fetching chat data:', error);
        this.messages = [];
      }
    },
  },
  mounted() {
    this.chatId = this.$route.params.chatId;
    if (this.chatId) {
      this.fetchChatData(this.chatId);
    }
  },
};
</script>
