<template>
  <div :class="['card', 'bg-white shadow-xl text-black', customClass]">
    <div class="card-body items-left text-left">
      <div class="bg-white min-h-[60px] sm:min-h-[150px]">
        <img :src="icon" :alt="altText" class="w-1/2" />
      </div>

      <h2 class="card-title">{{ title }}</h2>
      <p class="text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContainerSecond',
  props: {
    customClass: {
      type: String,
      default: 'xs:w-48',
    },
    icon: {
      type: String,
      default: '',
    },
    altText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>
