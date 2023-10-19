<template>
  <div :class="messageClass">
    <div class="chat-header text-white text-bold mb-1">
      {{ sender }}
    </div>
    <div class="chat-bubble">{{ message }}</div>
    <div class="chat-footer text-white">
      <time class="text-xs opacity-50">{{ timestamp }}</time>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    timestamp: String,
    message: String,
    sender: String,
    currentUser: String,
  },
  computed: {
    messageClass() {
      return {
        'chat chat-end': this.sender == this.currentUser,
        'chat chat-start': this.sender !== this.currentUser,
      };
    },
  },
};
</script>
