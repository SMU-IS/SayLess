<template>
  <div class="flex flex-col h-screen items-center justify-center pb-52">
    <p class="font-semibold text-indigo-300">404</p>

    <h1 class="mt-4 font-bold tracking-tight text-white">Page not found</h1>

    <p class="mt-6 mb-6 leading-7 text-gray-200">
      Sorry, we couldn’t find the page you’re looking for.
    </p>

    <CustomButton
      class="btn--gradient"
      button-size="md:w-40 w-1/2"
      @click="navigateHome"
    >
      Go Back Home
    </CustomButton>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { goHome } from '@/helpers/goHome';

export default {
  name: 'PageNotFound',
  components: { CustomButton },
  methods: {
    navigateHome() {
      goHome(this.$router);
    },
  },
};
</script>
