<template>
  <div
    class="min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
  >
    <slot> {{ children }}</slot>
  </div>
</template>

<script>
export default {
  name: 'CardContainer',
  props: {
    children: {
      type: String,
      default: '',
    },
  },
};
</script>
