<template>
  <div class="p-3">
    <slot>{{ children }}</slot>
  </div>
</template>

<script>
export default {
  name: 'CardFooter',
  props: {
    children: {
      type: String,
      default: '',
    },
  },
};
</script>
