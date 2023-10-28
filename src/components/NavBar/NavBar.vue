<template>
  <header class="flex justify-center">
    <div class="navBar bg-main-dark">
      <div v-for="link in navLinks" :key="link.id">
        <div
          :class="{ 'opacity-40': !isCurrentRoute(link.path) }"
          class="flex flex-col items-center gap-1 content-end"
          @click="navigateAround(link.path)"
        >
          <div>
            <img class="w-auto h-7" :src="link.icon" />
          </div>
          <span class="text-green text-sm self-end">{{ link.title }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { navLinks } from '@/data/navLinks.js';
import { scrollToTop } from '@/helpers/common';

export default {
  name: 'NavBar',
  data() {
    return {
      navLinks,
    };
  },
  methods: {
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
    navigateAround(path) {
      this.$router.push(path);
      scrollToTop();
    },
  },
};
</script>

<style scoped>
@tailwind components;

@layer components {
  .navBar {
    @apply flex flex-row items-end justify-between md:hidden bg-main-dark py-4 px-12 pb-6 fixed bottom-0 w-screen;
  }

  .icon-style {
    @apply w-7 h-7 mb-1 text-gray-300;
  }

  .icon-large {
    @apply w-14 h-14 mb-1 text-green-600;
  }
}
</style>
