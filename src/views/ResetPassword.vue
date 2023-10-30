<template>
  <div
    class="flex justify-center items-center h-screen md:w-1/2 lg:w-1/3 md:mx-auto mx-6 text-black"
  >
    <CustomCard background="white" width="full">
      <div class="flex flex-col justify-center items-center mt-5 text-center">
        <img :src="Avocado" class="w-20 h-auto" />
        <h3 class="font-bold mt-3 mb-2">Forgot password?</h3>
        <p>Enter your email address to reset your password.</p>
      </div>

      <div class="mt-5 md:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent>
          <div class="flex flex-col gap-2">
            <label class="font-semibold" for="email">Email</label>
            <CustomInput
              v-model="email"
              type="text"
              placeholder="e.g. johndoe@email.com"
              @enter-pressed="handleResetPassword"
            />
          </div>

          <CustomButton width="full" color="black" @click="handleResetPassword">
            <span v-if="isLoading">
              <CustomLoader loading="isLoading" />
            </span>
            <span v-else>Reset Password</span>
          </CustomButton>

          <div class="flex justify-end py-3">
            <router-link
              to="/login"
              class="flex flex-row items-center gap-2 w-fit"
            >
              <ArrowLeftIcon class="h-4 w-4" />
              <p class="text-sm text-black">Back to Log In</p>
            </router-link>
          </div>
        </form>
      </div>
    </CustomCard>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { getResponse } from '@/helpers/getResponse';
import CustomLoader from '@/components/Loader/CustomLoader.vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import CustomCard from '@/components/Card/CustomCard.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import Avocado from '@/assets/Icons/Avocado.png';

export default {
  name: 'ResetPasswordPage',
  components: {
    CustomButton,
    CustomLoader,
    ArrowLeftIcon,
    CustomCard,
    CustomInput,
  },
  data() {
    return {
      email: '',
      isLoading: false,
      Avocado,
    };
  },
  methods: {
    async handleResetPassword() {
      if (this.email !== '') {
        this.isLoading = true;
        try {
          await this.$store.dispatch('resetPassword', {
            email: this.email,
          });
          getResponse(
            'success',
            'Check your email for the link to reset password.',
          );
          this.$router.push('/login');
        } catch (err) {
          this.isLoading = false;
          getResponse('error', getErrorMessage(err.message));
        }
      } else {
        this.isLoading = false;
        getResponse('error', getErrorMessage('!email'));
      }
    },
  },
};
</script>
