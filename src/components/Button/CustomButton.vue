<template>
  <button
    type="button"
    :class="`${buttonColor} ${textSize} ${widthSize}`"
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    buttonText: {
      type: String,
      default: '',
    },
    buttonColor: {
      type: String,
      default: 'btn--primary',
    },
    textSize: {
      type: String,
      default: 'text-sm',
    },
    widthSize: {
      type: String,
      default: 'w-full',
    },
  },
};
</script>

<style scoped>
@import './styles.css';
</style>
