<template>
  <div :class="`card-container ${bgColor}`">
    <slot>{{ cardChildren }}</slot>
  </div>
</template>
<script>
export default {
  name: 'AuthenticationContainer',
  props: {
    cardChildren: {
      type: null,
      default: '',
    },
    bgColor: {
      type: String,
      default: 'gradientX',
    },
  },
};
</script>
  
  <style scoped>
  @tailwind components;
  
  @layer components {
    .card-container {
      @apply rounded-lg w-full mx-6 md:w-1/2 lg:w-1/3 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)];
    }
  }
  </style>