<template>
  <div class="flex justify-center items-center h-screen">
    <AuthenticationContainer bg-color="gradientZ">
      <div class="flex flex-col justify-center items-center">
        <IdentificationIcon class="w-10 h-10" />
        <h3 class="mt-3 text-center text-white">
          Get Started
        </h3>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-5">
          <div>
            <label for="email">Email Address</label>

            <CustomInput
              v-model="email"
              type="text"
              placeholder="e.g. johndoe@email.com"
              @enter-pressed="handleRegister"
            />
          </div>

          <div>
            <label for="password">Password</label>
            <div class="flex flex-row gap-3 pb-3">
              <CustomInput
                v-model="password"
                type="password"
                placeholder="Password"
                @enter-pressed="handleRegister"
              />

              <CustomInput
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                @enter-pressed="handleRegister"
              />
            </div>
          </div>

          <div class="flex flex-row items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            >
            <label
              for="default-checkbox"
              class="ml-2 cursor-pointer text-sm"
            >I agree with the <span>Terms & Conditions.</span></label>
          </div>

          <CustomButton
            button-color="btn--whiteAlpha"
            @click="handleRegister"
          >
            <span v-if="isLoading">
              <CustomLoader />
            </span>

            <p v-else>
              Register
            </p>
          </CustomButton>
        </form>

        <p class="text-center text-white text-sm mt-12">
          Already have an account? Login
          <span class="underline">
            <router-link to="/login"> here </router-link>
          </span>
        </p>
      </div>
    </AuthenticationContainer>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { getResponse } from '@/helpers/getResponse';
import CustomLoader from '@/components/Loader/CustomLoader.vue';
import { IdentificationIcon } from '@heroicons/vue/24/solid';
import AuthenticationContainer from '@/components/Card/AuthenticationContainer.vue';
import CustomInput from '@/components/Form/CustomInput.vue';

export default {
  name: 'SignUpPage',
  components: {
    CustomButton,
    CustomLoader,
    IdentificationIcon,
    AuthenticationContainer,
    CustomInput,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
    };
  },
  methods: {
    async handleRegister() {
      if (
        this.email !== '' &&
        this.password !== '' &&
        this.confirmPassword !== ''
      ) {
        this.isLoading = true;
        if (this.password === this.confirmPassword) {
          try {
            await this.$store.dispatch('register', {
              email: this.email,
              password: this.password,
            });
            this.$router.push('/');
            getResponse('success', `Welcome, ${this.email}`);
          } catch (err) {
            this.isLoading = false;
            getResponse('error', getErrorMessage(err.message));
            throw err.message;
          }
        } else {
          this.isLoading = false;
          getResponse('error', 'Password does not match.');
        }
      } else {
        this.isLoading = false;
        getResponse('error', getErrorMessage(''));
      }
    },
  },
};
</script>
