<template>
  <img class="rounded-t-lg" :src="src" :alt="alt" />
</template>

<script>
export default {
  name: 'CardImg',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
};
</script>
