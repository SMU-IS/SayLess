<template>
  <header class="flex justify-center">
    <div class="navBar bg-main-dark">
      <div v-for="link in navLinks" :key="link.id">
        <router-link :to="link.path">
          <div class="flex flex-col items-center gap-1 content-end">
            <div>
              <img class="w-auto h-7" :src="link.icon" />
            </div>
            <span class="text-green text-sm self-end">{{ link.title }}</span>
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
  data() {
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
