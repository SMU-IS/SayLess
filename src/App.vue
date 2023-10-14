<template>
  <div
    class="relative bg-primary flex flex-col min-h-screen w-screen overflow-auto"
  >
    <div :class="{ 'ml-6 mr-6 mb-28 z-0': isAuthenticated }">
      <router-view />
    </div>

    <div v-if="isAuthenticated">
      <NavBar />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';

export default {
  components: { NavBar },
  computed: {
    isAuthenticated() {
      return this.$store.getters.getEmail;
    },
    authenticateRoute() {
      return (
        this.$route.name === 'LoginPage' ||
        this.$route.name === 'SignUpPage' ||
        this.$route.name === 'ResetPasswordPage'
      );
    },
  },
};
</script>
