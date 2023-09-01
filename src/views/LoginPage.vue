<template>
  <div class="flex justify-center items-center h-screen">
    <AuthenticationContainer bg-color="bg-white">
      <div class="flex flex-col justify-center items-center">
        <FingerPrintIcon class="h-10 w-10" />
        <h3 class="mt-3 text-black tracking-tight font-extrabold text-2xl">
          Welcome back
        </h3>
        <p class="text-black text-sm mt-2">
          Don't have an account? Sign up
          <span class="underline font-bold text-indigo">
            <router-link to="/signup"> here </router-link>
          </span>
        </p>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          class="space-y-5"
          @submit.prevent
        >
          <div class="flex flex-col gap-2">
            <label
              class="font-semibold"
              for="email"
            >Email</label>

            <CustomInput
              v-model="email"
              type="text"
              placeholder="e.g. johndoe@email.com"
              @enter-pressed="handleLogin"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label
              for="password"
              class="font-semibold"
            >Password</label>

            <CustomInput
              v-model="password"
              type="password"
              placeholder="Password"
              @enter-pressed="handleLogin"
            />
          </div>

          <div class="flex justify-between text-xs lg:text-sm">
            <div class="flex flex-row items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              >
              <label
                for="default-checkbox"
                class="ml-2 cursor-pointer font-medium text-slate-600"
              >Remember me</label>
            </div>

            <div>
              <router-link
                to="/reset-password"
                class="font-medium text-slate-600"
              >
                Forgot Password?
              </router-link>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <CustomButton
              class="btn--success"
              @click="handleLogin"
            >
              <span v-if="isLoading">
                <CustomLoader />
              </span>

              <p v-else>
                Sign in
              </p>
            </CustomButton>

            <div class="flex justify-center items-center w-full">
              <hr
                class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"
              >
              <span
                class="absolute px-3 font-medium text-gray-200 -translate-x-1/2 bg-white left-1/2"
              >or</span>
            </div>

            <CustomButton
              button-color="btn--whiteAlpha"
              @click="loginViaGoogle"
            >
              <div class="flex flex-row gap-3">
                <img
                  class="h-5 w-auto"
                  :src="GoogleIcon"
                  alt="Google Icon"
                >
                <span class="font-bold">Sign in With Google</span>
              </div>
            </CustomButton>
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
import GoogleIcon from '@/assets/GoogleIcon.png';
import { FingerPrintIcon } from '@heroicons/vue/24/solid';
import AuthenticationContainer from '@/components/Card/AuthenticationContainer.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import { validateLoginFields } from '@/helpers/validateForm';

export default {
  name: 'LoginPage',
  components: {
    CustomButton,
    CustomLoader,
    FingerPrintIcon,
    AuthenticationContainer,
    CustomInput,
  },
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      GoogleIcon,
    };
  },
  methods: {
    async handleLogin() {
      const validateForm = validateLoginFields(this.email, this.password);
      if (validateForm) {
        this.isLoading = true;
        try {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
          this.$router.push('/');
          getResponse('success', `Welcome ${this.email}!`);
        } catch (err) {
          this.isLoading = false;
          getResponse('error', getErrorMessage(err.message));
        }
      } else {
        this.isLoading = false;
        getResponse('error', getErrorMessage(''));
      }
    },
    async loginViaGoogle() {
      try {
        await this.$store.dispatch('loginViaGoogle');
        this.$router.push('/');
        const getEmail = this.$store.getters.getEmail;
        getResponse('success', `Welcome, ${getEmail}!`);
      } catch (err) {
        getResponse('error', getErrorMessage(err.message));
      }
    },
  },
};
</script>
