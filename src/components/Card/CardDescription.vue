<template>
  <div class="px-5">
    <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
      <slot>{{ children }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardDescription',
  props: {
    children: {
      type: String,
      default: '',
    },
  },
};
</script>
