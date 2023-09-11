<template>
  <header class="flex justify-center">
    <div class="navBar">
      <div
        v-for="link in navLinks"
        :key="link.id"
      >
        <router-link :to="link.path">
          <component
            :is="link.icon"
            class="fill-[#fff] icon-style"
          />
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
