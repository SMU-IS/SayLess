<template>
  <div class="p-5">
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
