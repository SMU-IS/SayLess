<template>
  <div class="bg-gray-900 flex flex-col w-screen min-h-screen overflow-hidden">
    <div :class="{ 'mt-6 mb-28': isAuthenticated }">
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
