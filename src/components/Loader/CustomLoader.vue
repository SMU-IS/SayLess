<template>
  <beat-loader :loading="loading" :color="color" :size="size" />
</template>

<script>
import BeatLoader from 'vue-spinner/src/BeatLoader.vue';

export default {
  name: 'CustomLoader',
  components: { BeatLoader },
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: '#fff',
    },
    size: {
      type: String,
      default: '10px',
    },
  },
};
</script>
