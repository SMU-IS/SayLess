<template>
  <header class="flex justify-center">
    <div class="navBar">
      <div v-for="link in navLinks" :key="link.id">
        <router-link :to="link.path">
          <div class="flex flex-col items-center gap-1">
            <div class="w-7">
              <img :src="link.icon" />
            </div>
            <span class="text-green-light">{{ link.title }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { navLinks } from '@/data/navLinks.js';

export default {
  name: 'NavBar',
  data: function () {
    return {
      navLinks,
    };
  },
};
</script>

<style scoped>
@tailwind components;

@layer components {
  .navBar {
    @apply flex flex-row items-center justify-between md:hidden bg-primary py-4 px-8 fixed bottom-0 w-11/12 mb-4;
  }

  .icon-style {
    @apply w-7 h-7 mb-1 text-gray-300;
  }

  .icon-large {
    @apply w-14 h-14 mb-1 text-green-600;
  }
}
</style>
