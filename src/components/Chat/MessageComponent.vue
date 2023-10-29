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
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters(['getUserDetails']),
    messageClass() {
      return {
        'chat chat-end': this.sender.id == this.getUserDetails.userData.id,
        'chat chat-start': this.sender.id !== this.getUserDetails.userData.id,
      };
    },
    chatColor() {
      return {
        'chat-bubble min-h-0 bg-green text-white':
          this.sender.id == this.getUserDetails.userData.id,
        'chat-bubble min-h-0 text-white':
          this.sender.id !== this.getUserDetails.userData.id,
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
