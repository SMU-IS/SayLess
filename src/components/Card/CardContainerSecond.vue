<template>
  <div :class="['card', 'bg-base-100 shadow-xl', customClass]">
    <div class="card-body items-center text-center">
      <img :src="icon" :alt="altText" class="rounded-xl" />
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
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
