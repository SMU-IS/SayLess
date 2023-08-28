<template>
  <div class="flex justify-center items-center h-screen">
    <AuthenticationContainer bg-color="gradientY">
      <div class="flex flex-col justify-center items-center">
        <KeyIcon class="w-10 h-10" />
        <h3 class="mt-3 mb-3 text-center">
          Forgot password?
        </h3>

        <h4 class="text-center">
          We'll send you the instructions.
        </h4>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          class="space-y-6"
          @submit.prevent
        >
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-white"
            >Email Address</label>

            <CustomInput
              v-model="email"
              type="text"
              placeholder="e.g. johndoe@email.com"
              @enter-pressed="handleResetPassword"
            />
          </div>

          <CustomButton
            button-color="btn--whiteAlpha"
            @click="handleResetPassword"
          >
            <span v-if="isLoading">
              <CustomLoader />
            </span>

            <span v-else>Reset Password</span>
          </CustomButton>

          <div class="flex justify-end">
            <router-link
              to="/login"
              class="flex flex-row items-center gap-2 w-fit"
            >
              <ArrowLeftIcon class="h-4 w-4" />
              <p class="text-sm">
                Back to Log In
              </p>
            </router-link>
          </div>
        </form>
      </div>
    </AuthenticationContainer>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { getResponse } from '@/helpers/getResponse';
import CustomLoader from '@/components/Loader/CustomLoader.vue';
import { ArrowLeftIcon, KeyIcon } from '@heroicons/vue/24/solid';
import AuthenticationContainer from '@/components/Card/AuthenticationContainer.vue';
import CustomInput from '@/components/Form/CustomInput.vue';

export default {
  name: 'ResetPasswordPage',
  components: {
    CustomButton,
    CustomLoader,
    ArrowLeftIcon,
    KeyIcon,
    AuthenticationContainer,
    CustomInput,
  },
  data: function () {
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
            'Check your email for the link to reset password.'
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
