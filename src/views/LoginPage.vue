<template>
  <div class="flex justify-center items-center h-screen mx-5 text-black">
    <CustomCard background="white" size="large" width="full">
      <div class="flex flex-col justify-center items-center">
        <img :src="Avocado" class="w-20 h-auto" />
        <h3 class="mt-3 text-black tracking-tight font-bold">
          Log in to your account
        </h3>
        <p class="text-black text-sm mt-2">
          Don't have an account? Sign up
          <span class="underline font-bold text-midnight">
            <router-link to="/signup"> here </router-link>
          </span>
        </p>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
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
              <input id="rmb" type="checkbox" class="checkbox checkbox-sm" />
              <label for="rmb" class="ml-2 cursor-pointer">Remember me</label>
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
                <CustomLoader :loading="isLoading" />
              </span>
              <p v-else>Sign in</p>
            </CustomButton>
            <div class="divider">or</div>
            <CustomButton color="black" width="full" @click="loginViaGoogle">
              <div class="flex items-center justify-center gap-5">
                <img src="../assets/GoogleIcon.png" class="w-5 h-5" />
                <p>Continue with Google</p>
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
import CustomInput from '@/components/Form/CustomInput.vue';
import { validateLoginFields } from '@/helpers/validateForm';
import CustomCard from '@/components/Card/CustomCard.vue';
import Avocado from '@/assets/Icons/Avocado.png';
import { getTokenId } from '@/helpers/getTokenId';

export default {
  name: 'LoginPage',
  components: {
    CustomButton,
    CustomLoader,
    CustomInput,
    CustomCard,
  },
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      GoogleIcon,
      Avocado,
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
          getResponse('success', `Welcome, ${this.email}!`);

          const tokenId = getTokenId();
          tokenId.then(() => {
            // console.log(id);
            // send to backend
          });
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

        const tokenId = getTokenId();
        tokenId.then(() => {
          // console.log(id);
          // send to backend
        });
      } catch (err) {
        getResponse('error', getErrorMessage(err.message));
      }
    },
  },
};
</script>
