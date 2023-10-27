<template>
  <div :class="messageClass">
    <div class="chat-header mb-1">
      <p class="text-white text-bold text-xs truncate w-20">
        {{ sender.name }}
      </p>
    </div>
    <div :class="chatColor">{{ message }}</div>
    <div class="chat-footer text-white">
      <time class="text-xs opacity-50">{{ formatTimestamp(timestamp) }}</time>
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
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentUser: '6530d24110a9828679f8858a',
    };
  },
  computed: {
    messageClass() {
      return {
        'chat chat-end': this.sender.id == this.currentUser,
        'chat chat-start': this.sender.id !== this.currentUser,
      };
    },
    chatColor() {
      return {
        'chat-bubble min-h-0 bg-green text-white':
          this.sender.id == this.currentUser,
        'chat-bubble min-h-0 text-white': this.sender.id !== this.currentUser,
      };
    },
  },
  methods: {
    formatTimestamp(timestamp) {
      timestamp = new Date(timestamp);
      const hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();

      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;
    },
  },
};
</script>
