<template>
  <div
    class="flex lg:flex-row flex-col md:gap-12 md:justify-start justify-between h-screen"
  >
    <img src="../assets/Onboard.png" />

    <div class="flex flex-col mx-5 mb-5 md:justify-center md:gap-12">
      <div>
        <h3 class="w-75 text-white font-extrabold text-5xl mb-3">
          <a class="underline decoration-indigo-500 italic">{{ BRAND_NAME }}</a>
          Do More.
        </h3>

        <p class="font-semibold">Rescue Your Food Now.</p>
      </div>

      <div class="flex flex-col md:items-start items-center md:mt-0 mt-3">
        <div class="w-full lg:w-1/2">
          <CustomButton width="full" color="white" @click="navigate">
            Get Started
          </CustomButton>
        </div>
        <p class="text-center text-white text-md my-4">
          Already have an account? Login
          <span class="underline">
            <router-link to="/login"> here </router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { BRAND_NAME } from '@/constants';

export default {
  name: 'OnboardPage',
  components: { CustomButton },
  data() {
    return {
      BRAND_NAME,
    };
  },
  methods: {
    navigate() {
      this.$router.push('/signup');
    },
  },
};
</script>
