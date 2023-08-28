<template>
  <span
    class="text-base text-start font-extrabold tracking-tight text-white dark:text-white"
  >
    <slot>{{ cardTitle }}</slot>
  </span>
</template>
<script>
export default {
  name: 'CardTitle',
  props: {
    cardTitle: {
      type: String,
      default: 'Card Title',
    },
  },
};
</script>
