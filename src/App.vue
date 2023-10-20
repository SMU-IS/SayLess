<template>
  <div
    class="relative bg-main flex flex-col min-h-screen w-screen overflow-auto"
  >
    <div v-if="isAuthenticated">
      <DesktopNavBar />
    </div>

    <div :class="childrenStyle">
      <router-view />
    </div>

    <div
      v-if="
        isAuthenticated &&
        getRouteName !== 'CommunitySharingDetails' &&
        getRouteName !== 'CommunitySharingAll'
      "
    >
      <NavBar />
    </div>

    <div v-if="isAuthenticated">
      <CustomFooter />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import DesktopNavBar from '@/components/NavBar/DesktopNavBar.vue';
import CustomFooter from '@/components/Footer/CustomFooter.vue';

export default {
  components: { NavBar, DesktopNavBar, CustomFooter },
  computed: {
    isAuthenticated() {
      return this.$store.getters.getEmail;
    },
    getRouteName() {
      return this.$route.name;
    },
    childrenStyle() {
      return {
        'mx-6 md:mx-12':
          this.isAuthenticated && this.getRouteName !== 'QuestPage',
      };
    },
  },
};
</script>
