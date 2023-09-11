<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="196"
    height="132"
    viewBox="0 0 196 132"
    fill="none"
    class="absolute top-0 left-0"
  >
    <path
      d="M122.576 -255L195.231 -169.456L137.8 -95.2137L96.101 -43.9479L177.691 69.1544L107.13 131.3L74.943 88.5689L107.13 62.4864L-5.52424 -95.2137L122.576 -255Z"
      fill="#5840B9"
    />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="213"
    height="145"
    viewBox="0 0 213 145"
    fill="none"
    class="absolute top-0 right-0"
  >
    <path
      d="M-0.000189804 -87.1158L110.747 -105.329L144.801 -17.8616L167.264 44.286L306.235 32.6089L308.602 93.7767L38.0639 144.333L-0.000189804 -87.1158Z"
      fill="#A3DEFF"
    />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="365"
    height="302"
    viewBox="0 0 365 302"
    fill="none"
    class="absolute top-32 right-0"
  >
    <path
      d="M460.16 78.6812L407.255 0.726436L363.992 14.1472L185.632 148.062L123.468 23.5348L69.9311 58.0968L0.417398 213.905L114.063 143.984L182.808 301.969L460.16 78.6812Z"
      fill="#057A55"
    />
  </svg>

  <div class="flex flex-col justify-end h-screen px-6 gap-4 pb-12">
    <h3 class="w-75 text-white font-extrabold text-5xl mb-5">
      <a class="underline decoration-indigo-500 italic">Say Less</a>
      to saving the earth
    </h3>

    <CustomButton class="btn--success" @click="navigate">
      Get Started
    </CustomButton>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import PatternOne from '@/assets/PatternOne.svg';

export default {
  name: 'OnboardPage',
  components: { CustomButton },
  data: function () {
    return {
      PatternOne,
    };
  },
  methods: {
    navigate() {
      this.$router.push('/login');
    },
  },
};
</script>
