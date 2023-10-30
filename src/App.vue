<template>
  <div class="flex flex-col min-h-screen bg-main">
    <div v-if="isAuthenticated" class="hidden md:block fixed z-50 w-screen">
      <DesktopNavBar />
      <div class="float-right mr-3">
        <AlertComponent />
      </div>
    </div>

    <main :class="childrenStyle">
      <div
        class="md:hidden w-full flex justify-center"
        style="position: fixed; top: 1rem; left: 0; z-index: 20"
      >
        <AlertComponent />
      </div>
      <router-view />
    </main>

    <div v-if="shouldDisplayNavBar">
      <NavBar />
    </div>

    <div v-if="isAuthenticated" class="w-screen hidden md:block relative">
      <CustomFooter />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import DesktopNavBar from '@/components/NavBar/DesktopNavBar.vue';
import CustomFooter from '@/components/Footer/CustomFooter.vue';
import AlertComponent from '@/components/Notification/AlertComponent.vue';
import io from 'socket.io-client';

export default {
  components: { NavBar, DesktopNavBar, CustomFooter, AlertComponent },
  data() {
    return {
      hasAlert: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.getEmail;
    },
    getRouteName() {
      return this.$route.name;
    },
    shouldDisplayNavBar() {
      const excludedRoutes = [
        'CommunitySharingDetails',
        'CommunitySharingAll',
        'InventoryPage',
        'RecipePage',
        'RecipeDetail',
        'AddItem',
        'chat-details',
        'RewardsPage',
      ];
      return (
        this.isAuthenticated && !excludedRoutes.includes(this.getRouteName)
      );
    },
    childrenStyle() {
      return {
        'mx-6 md:mx-12 lg:mx-20 mb-44 min-h-screen':
          this.isAuthenticated &&
          this.getRouteName !== 'QuestPage' &&
          this.getRouteName !== 'chat-details' &&
          this.getRouteName !== 'CommunitySharingDetails' &&
          this.getRouteName !== 'AddItem' &&
          this.getRouteName !== 'ProfilePage',
      };
    },
  },
  mounted() {
    this.initializeSocket();
  },
  methods: {
    initializeSocket() {
      const token = JSON.parse(localStorage.getItem('user-data'));
      // this.socket = io('ws://54.252.152.169:8887', {
      console.log(token?.['x-access-token']);
      this.socket = io('ws://localhost:8887', {
        extraHeaders: {
          'x-access-token': token?.['x-access-token'],
        },
      });

      this.socket.on('connected', () => {
        this.socket.emit('chatNotification', {});
        console.log('connected');
      });
      this.socket.on('notiMessage', (event) => {
        let message = event;
        if (this.$route.params.chatId != message.chatroom) {
          this.$store.dispatch('showNotification', {
            notimsg: message.message,
            room: message.chatroom,
          });
        }
      });
    },
  },
};
</script>
