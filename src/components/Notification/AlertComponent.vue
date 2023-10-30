<template>
  <div>
    <!-- <transition name="fade" mode="out-in"> -->
    <transition>
      <div
        v-if="getNotificationVisibilty"
        class="alert shadow-lg flex flex-wrap justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info shrink-0 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div class="text-left">
          <h3 class="font-bold text-sm">{{ getNotificationMessage }}</h3>
          <div class="text-xs">Go to chat now!</div>
        </div>
        <div class="grid-rows-2">
          <button class="btn btn-xs" @click="closeAlert">Close</button>
          <button class="btn btn-xs btn-primary" @click="goChat">Chat</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AlertComponent',
  props: {
    showElement: Boolean,
  },
  data() {
    return {
      isVisible: this.showElement,
    };
  },
  computed: {
    ...mapGetters([
      'getNotificationVisibilty',
      'getNotificationMessage',
      'getNotificationRoom',
    ]),
  },
  methods: {
    closeAlert() {
      this.$store.dispatch('hideNotification');
    },
    goChat() {
      this.$router.push('/message/' + this.getNotificationRoom);
      this.$store.dispatch('hideNotification');
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
