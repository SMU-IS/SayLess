<template>
  <img
    class="p-8 rounded-t-lg"
    :height="imgHeight"
    :src="cardImage"
    cover
  >
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    cardImage: {
      type: null,
      default: '',
    },
    imgHeight: {
      type: null,
      default: 'auto',
    },
  },
};
</script>
