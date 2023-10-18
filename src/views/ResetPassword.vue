<template>
  <div class="flex justify-center items-center h-screen mx-5 text-black">
    <CustomCard background="white" width="full">
      <div class="flex flex-col justify-center items-center mt-5">
        <KeyIcon class="w-10 h-10" />
        <h3 class="mt-3 mb-3 text-center">Forgot password?</h3>

        <h4 class="text-center">We'll send you the instructions.</h4>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent>
          <div class="flex flex-col gap-2">
            <label for="email" class="block text-sm font-medium leading-6"
              >Email Address</label
            >

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
import { ArrowLeftIcon, KeyIcon } from '@heroicons/vue/24/solid';
import CustomCard from '@/components/Card/CustomCard.vue';
import CustomInput from '@/components/Form/CustomInput.vue';

export default {
  name: 'ResetPasswordPage',
  components: {
    CustomButton,
    CustomLoader,
    ArrowLeftIcon,
    KeyIcon,
    CustomCard,
    CustomInput,
  },
  data() {
    return {
      email: '',
      isLoading: false,
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
          this.$router.push('/');
        } catch (err) {
          this.isLoading = false;
          getResponse('error', getErrorMessage(err.message));
          throw err.message;
        }
      } else {
        this.isLoading = false;
        getResponse('error', getErrorMessage('!email'));
      }
    },
  },
};
</script>
