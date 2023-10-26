<template>
  <div
    ref="messageList"
    class="message-list p-2 basis-0 flex-1 w-full w-md-60 overflow-scroll"
  >
    <MessageComponent
      v-for="message in messages"
      :key="message.id"
      :timestamp="message.createdOn"
      :message="message.message"
      :sender="message.sender"
    />
  </div>
</template>

<script>
import MessageComponent from '@/components/Chat/MessageComponent.vue';

export default {
  name: 'MessageList',
  components: {
    MessageComponent,
  },
  props: {
    messages: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      const messageList = this.$refs.messageList;
      if (messageList) {
        messageList.scrollTop = messageList.scrollHeight;
      }
    },
  },
};
</script>
