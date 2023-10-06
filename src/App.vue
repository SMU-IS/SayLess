<template>
  <div
    class="relative bg-primary flex flex-col min-h-screen w-screen overflow-scroll"
  >
    <div
      :class="{
        'fixed top-0 left-0 right-0 navBarGradient bg-g-quest': isAuthenticated,
      }"
    ></div>

    <div :class="{ 'ml-6 mr-6 mt-6 mb-28': isAuthenticated }">
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

<style>
.navBarGradient {
  width: w-screen;
  height: 100px;
}
</style>
