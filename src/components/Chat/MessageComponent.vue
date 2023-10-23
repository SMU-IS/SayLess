<template>
  <div :class="messageClass">
    <div class="chat-header text-white text-bold mb-1">
      {{ sender }}
    </div>
    <div :class="chatColor">{{ message }}</div>
    <div class="chat-footer text-white">
      <time class="text-xs opacity-50">{{ timestamp }}</time>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageComponent',
  props: {
    timestamp: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    sender: {
      type: String,
      default: '',
    },
    currentUser: {
      type: String,
      default: '',
    },
  },
  computed: {
    messageClass() {
      return {
        'chat chat-end': this.sender == this.currentUser,
        'chat chat-start': this.sender !== this.currentUser,
      };
    },
    chatColor() {
      return {
        'chat-bubble bg-green text-white': this.sender == this.currentUser,
        'chat-bubble text-white': this.sender !== this.currentUser,
      };
    },
  },
};
</script>
