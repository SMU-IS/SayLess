<template>
  <div class="message-list p-2 basis-0 flex-1">
    <MessageComponent
      v-for="message in messages"
      :key="message.timestamp"
      :timestamp="message.timestamp"
      :message="message.messageText"
      :sender="message.sender"
      :current-user="sender"
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
    sender: {
      type: String,
      default: '',
    },
  },
};
</script>
