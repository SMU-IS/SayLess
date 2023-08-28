<template>
  <div class="flex flex-col h-screen items-center justify-center pb-52">
    <p class="font-semibold text-indigo-300">
      404
    </p>

    <h1 class="mt-4 font-bold tracking-tight text-white">
      Page not found
    </h1>

    <p class="mt-6 mb-6 leading-7 text-gray-200">
      Sorry, we couldn’t find the page you’re looking for.
    </p>

    <GradientButton
      size="w-1/2"
      @click="navigateHome"
    >
      Go Back Home
    </GradientButton>
  </div>
</template>

<script>
import GradientButton from '@/components/Button/GradientButton.vue';
import { goHome } from '@/helpers/goHome';

export default {
  name: 'PageNotFound',
  components: { GradientButton },
  methods: {
    navigateHome() {
      goHome(this.$router);
    },
  },
};
</script>
