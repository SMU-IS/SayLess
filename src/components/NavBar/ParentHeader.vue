<template>
  <div
    class="flex items-center fixed top-0 left-0 right-0 bg-primary bg-gradient-header bg-cover z-10 w-screen md:hidden h-24"
  >
    <h3 class="text-white ml-6">
      <slot>{{ children }}</slot>
    </h3>
  </div>
</template>
<script>
export default {
  name: 'ParentHeader',
  props: {
    children: {
      type: String,
      default: '',
    },
  },
};
</script>
