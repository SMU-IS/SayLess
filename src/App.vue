<template>
  <div class="bg-gray-900 flex flex-col w-screen min-h-screen overflow-hidden">
    <div v-if="isAuthenticated">
      <NavHeader />
    </div>

    <div :class="{ 'mt-20 mb-28': isAuthenticated }">
      <router-view />
    </div>

    <div v-if="isAuthenticated">
      <NavBar />
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/Navigation/NavHeader.vue';
import NavBar from '@/components/NavBar/NavBar.vue';

export default {
  components: { NavHeader, NavBar },
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
