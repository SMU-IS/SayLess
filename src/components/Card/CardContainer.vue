<template>
  <div class="min-h-full bg-white border-0 rounded-lg shadow my-5">
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
