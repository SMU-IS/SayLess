<template>
  <span class="text-sm font-semibold text-slate-400 dark:text-slate-400">
    <slot>{{ cardSubTitle }}</slot>
  </span>
</template>
<script>
export default {
  name: 'CardSubTitle',
  props: {
    cardSubTitle: {
      type: String,
      default: 'Card Subtitle',
    },
  },
};
</script>
