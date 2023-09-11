<template>
  <div :class="paddingHeader">
    <h5
      :class="`font-bold tracking-tight dark:text-white min-h-[20px] ${textColor}`"
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
    paddingHeader: {
      type: String,
      default: 'p-5',
    },
    textColor: {
      type: String,
      default: 'text-black',
    },
  },
};
</script>

<style scoped>
@tailwind components;

@layer components {
  .card-header {
    @apply text-2xl font-bold tracking-tight  dark:text-white min-h-[20px];
  }
}
</style>
