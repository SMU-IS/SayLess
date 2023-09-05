<template>
  <button
    type="button"
    :class="`${buttonColor} w-fit h-fit`"
  >
    <KeyIcon class="w-5 h-5" />
  </button>
</template>

<script>
import { KeyIcon } from '@heroicons/vue/24/solid';
export default {
  name: 'IconButton',
  components: { KeyIcon },
  props: {
    buttonColor: {
      type: String,
      default: 'btn--primary',
    },
    textSize: {
      type: String,
      default: 'text-sm',
    },
    buttonSize: {
      type: String,
      default: 'w-full',
    },
  },
};
</script>
