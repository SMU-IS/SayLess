<template>
  <div class="flex flex-col min-h-screen bg-main">
    <div v-if="isAuthenticated" class="hidden md:block fixed z-50 w-screen">
      <DesktopNavBar />
    </div>

    <main :class="childrenStyle">
      <router-view />
    </main>

    <div v-if="shouldDisplayNavBar">
      <NavBar />
    </div>

    <div class="w-screen hidden md:block">
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
    shouldDisplayNavBar() {
      const excludedRoutes = [
        'CommunitySharingDetails',
        'CommunitySharingAll',
        'InventoryPage',
        'RecipePage',
        'AddItem',
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
          this.getRouteName !== 'CommunitySharingDetails' &&
          this.getRouteName !== 'AddItem',
      };
    },
  },
};
</script>
