<template>
  <div
    class="relative bg-midnight flex flex-col min-h-screen w-screen overflow-auto"
  >
    <div v-if="isAuthenticated">
      <DesktopNavBar />
    </div>

    <div :class="{ 'mx-6 mb-28 z-0': isAuthenticated }">
      <router-view />
    </div>

    <div v-if="isAuthenticated">
      <NavBar />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import DesktopNavBar from '@/components/NavBar/DesktopNavBar.vue';

export default {
  components: { NavBar, DesktopNavBar },
  computed: {
    isAuthenticated() {
      return this.$store.getters.getEmail;
    },
  },
};
</script>
