<template>
  <div
    class="flex justify-center items-center h-screen md:w-1/2 md:mx-auto mx-6 text-black"
  >
    <CustomCard background="white" size="large" width="full">
      <div class="flex flex-col justify-center items-center">
        <img :src="Avocado" class="w-20 h-auto" />
        <h3 class="font-bold text-center mt-3">Get Started</h3>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-5">
          <div class="flex flex-col gap-2">
            <label for="email">Name</label>

            <CustomInput
              v-model="name"
              type="text"
              placeholder="e.g. John Doe"
              @enter-pressed="handleRegister"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="email">Email Address</label>

            <CustomInput
              v-model="email"
              type="text"
              placeholder="e.g. johndoe@email.com"
              @enter-pressed="handleRegister"
            />
          </div>

          <div class="flex flex-col gap-2">
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
            <input id="rmb" type="checkbox" class="checkbox checkbox-sm" />
            <label for="rmb" class="ml-2 cursor-pointer"
              >I agree with the <span>Terms & Conditions. </span>
            </label>
          </div>

          <CustomButton width="full" @click="handleRegister">
            <span v-if="isLoading">
              <CustomLoader :loading="isLoading" />
            </span>
            <p v-else>Register</p>
          </CustomButton>
        </form>

        <p class="text-center text-black text-sm mt-12">
          Already have an account? Login
          <span class="underline text-midnight font-bold">
            <router-link to="/login"> here </router-link>
          </span>
        </p>
      </div>
    </CustomCard>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { getResponse } from '@/helpers/getResponse';
import CustomLoader from '@/components/Loader/CustomLoader.vue';
import CustomCard from '@/components/Card/CustomCard.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import { validateSignUpFields, isPasswordMatch } from '@/helpers/validateForm';
import Avocado from '@/assets/Icons/Avocado.png';
import { mapGetters } from 'vuex';
import { getTokenId } from '@/helpers/getTokenId';

export default {
  name: 'SignUpPage',
  components: {
    CustomButton,
    CustomLoader,
    CustomCard,
    CustomInput,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
      Avocado,
    };
  },
  computed: {
    ...mapGetters(['getEmail', 'getFirebaseData']),
  },
  methods: {
    async handleRegister() {
      const validateForm = validateSignUpFields(
        this.name,
        this.email,
        this.password,
        this.confirmPassword,
      );
      if (validateForm) {
        this.isLoading = true;

        const isMatch = isPasswordMatch(this.password, this.confirmPassword);
        if (isMatch) {
          try {
            await this.$store.dispatch('register', {
              name: this.name,
              email: this.email,
              password: this.password,
            });
            this.$router.push('/');
            getResponse('success', `Welcome, ${this.email}`);
            this.createUserDB();
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
    async createUserDB() {
      const tokenId = getTokenId();
      tokenId.then(async (id) => {
        const data = {
          accessTokenId: id,
          userId: this.getFirebaseData.uid,
          name: this.name,
          email: this.getFirebaseData.email,
          profilePic: this.getFirebaseData.photoURL,
        };
        await this.$store.dispatch('createUserDB', data);
      });
    },
  },
};
</script>
