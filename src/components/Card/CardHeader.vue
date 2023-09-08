<template>
  <div class="p-5">
    <h5
      :class="`font-bold tracking-tight  dark:text-white min-h-[20px] ${textColor}`"
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
    textColor:{
      type: String,
      default: 'text-black',
    }

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