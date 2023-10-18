<template>
  <div class="flex justify-center items-center h-screen mx-5 text-black">
    <CustomCard background="white" size="large" width="full">
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

      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-5" @submit.prevent>
          <div class="flex flex-col gap-2">
            <label class="font-semibold" for="email">Email</label>

            <CustomInput
              v-model="email"
              type="text"
              placeholder="e.g. johndoe@email.com"
              @enter-pressed="handleLogin"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="font-semibold">Password</label>

            <CustomInput
              v-model="password"
              type="password"
              placeholder="Password"
              @enter-pressed="handleLogin"
            />
          </div>

          <div class="flex justify-between text-xs lg:text-sm">
            <div class="flex flex-row items-center mb-4">
              <label for="default-checkbox" class="ml-2 cursor-pointer"
                >Remember me</label
              >
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

          <div class="flex flex-col w-full border-opacity-50 pb-8">
            <CustomButton color="black" width="full" @click="handleLogin">
              <span v-if="isLoading">
                <CustomLoader loading="isLoading" />
              </span>
              <p v-else>Sign in</p>
            </CustomButton>
            <div class="divider">or</div>
            <CustomButton color="black" width="full" @click="loginViaGoogle">
              <div class="flex items-center justify-center gap-5">
                <img src="../assets/GoogleIcon.png" class="w-5 h-5" />
                <p>Sign In With Google</p>
              </div>
            </CustomButton>
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
import GoogleIcon from '@/assets/GoogleIcon.png';
import { FingerPrintIcon } from '@heroicons/vue/24/solid';
import CustomInput from '@/components/Form/CustomInput.vue';
import { validateLoginFields } from '@/helpers/validateForm';
import CustomCard from '@/components/Card/CustomCard.vue';

export default {
  name: 'LoginPage',
  components: {
    CustomButton,
    CustomLoader,
    FingerPrintIcon,
    CustomInput,
    CustomCard,
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
