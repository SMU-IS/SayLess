<template>
  <div :class="paddingLR">
    <p :class="`card-description ${textColor}`">
      <slot>{{ children }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardDescription',
  props: {
    paddingLR: {
      type: String,
      default: 'px-5',
    },
    children: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: 'text-black',
    },
  },
};
</script>

<style scoped>
@tailwind components

@layer components {
  .card-description {
    @apply mb-3 text-sm dark:text-gray-400;
  }
}
</style>
