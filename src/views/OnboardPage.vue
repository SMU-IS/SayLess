<template>
  <div class="flex md:flex-row flex-col md:gap-12 justify-between h-screen">
    <img src="../assets/Onboard.png" />

    <div class="flex flex-col mx-5 mb-5 md:justify-center md:gap-12">
      <h3 class="w-75 text-white font-extrabold text-5xl mb-5 mt-12">
        <a class="underline decoration-indigo-500 italic">Wasteless Kitchen</a>
        to saving the earth
      </h3>

      <div class="flex flex-col md:items-start items-center">
        <div class="w-full lg:w-1/2">
          <CustomButton width="full" color="white" @click="navigate">
            Get Started
          </CustomButton>
        </div>
        <p class="text-center text-white text-md my-4">
          Already have an account? Login
          <span class="underline text-green-50">
            <router-link to="/login"> here </router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'OnboardPage',
  components: { CustomButton },
  methods: {
    navigate() {
      this.$router.push('/signup');
    },
  },
};
</script>
