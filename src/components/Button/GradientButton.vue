<template>
  <button
    type="button"
    class="btn--gradient"
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script>
export default {
  name: 'GradientButton',
  props: {
    buttonText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
@import './styles.css';
</style>
