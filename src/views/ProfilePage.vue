<template>
  <div class="flex justify-center items-center h-screen">
    <CustomButton
      button-color="btn--gradient"
      button-size="w-1/2"
      @click="logout"
    >
      Sign Out
    </CustomButton>
  </div>
</template>

<script>
import { goHome } from '@/helpers/goHome';
import CustomButton from '@/components/Button/CustomButton.vue';
import { getResponse } from '@/helpers/getResponse';

export default {
  name: 'ProfilePage',
  components: { CustomButton },
  methods: {
    navigateHome() {
      goHome(this.$router);
    },
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/login');
        getResponse('success', "You've logged out!");
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>
