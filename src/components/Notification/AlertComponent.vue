<template>
  <div>
    <transition>
      <div
        v-if="
          getNotificationVisibilty &&
          $route.params.chatId != getNotificationRoom
        "
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
          {{ startHideCountDown() }}
          <h3 class="font-bold text-sm">
            {{ getNotificationMessage }}
          </h3>
          <div class="text-xs">Go to chat now!</div>
        </div>
        <div class="grid-rows-2">
          <CustomButton color="ghost" size="small" @click="closeAlert"
            >Close</CustomButton
          >
          <CustomButton color="gradient" size="small" @click="goChat"
            >Chat</CustomButton
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'AlertComponent',
  components: { CustomButton },
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
    startHideCountDown() {
      setTimeout(() => {
        this.closeAlert();
      }, 3000);
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
