<template>
  <div class="navBar">
    <div
      v-for="link in navLinks"
      :key="link.id"
    >
      <router-link :to="link.path">
        <component
          :is="link.icon"
          :class="{ 'icon-style': true, 'icon-large': link.id === 2 }"
        />
      </router-link>
    </div>
  </div>
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
    @apply flex flex-row items-center justify-between px-8 bg-gray-700 border-gray-600 border rounded-full bottom-4 left-1/2 fixed opacity-95 z-50 w-80 h-16 -translate-x-1/2;
  }
  .icon-style {
    @apply w-7 h-7 mb-1 text-gray-300;
  }

  .icon-large {
    @apply w-14 h-14 mb-1 text-green-600;
  }
}
</style>
