<template>
  <div class="p-5">
    <h5
      class="text-xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[20px]"
    >
      <slot>{{ children }}</slot>
    </h5>
  </div>
</template>

<script>
export default {
  name: 'CardHeader',
  props: {
    children: {
      type: String,
      default: '',
    },

  },
};
</script>
