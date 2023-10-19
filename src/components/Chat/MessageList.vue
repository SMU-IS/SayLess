<template>
  <div class="message-list p-2 basis-0 flex-1">
    <Message
      v-for="message in messages"
      :timestamp="message.timestamp"
      :message="message.messageText"
      :sender="message.sender"
      :currentUser="sender"
    />
  </div>
</template>

<script>
import Message from '@/components/Chat/Message.vue';

export default {
  name: 'MessageList',
  props: {
    messages: Object,
    sender: String,
  },
  components: {
    Message,
  },
};
</script>
