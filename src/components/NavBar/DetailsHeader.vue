<template>
  <nav
    class="flex justify-between items-center rounded-b-lg fixed top-0 z-50 w-full bg-white border-b border-gray-200 h-16"
  >
    <ChevronLeftIcon
      class="h-7 w-7"
      @click="emitHeaderClick"
    />

    <h3 class="flex items-center justify-center flex-1 text-center font-sans font-semibold">
      <slot>{{ children }}</slot>
    </h3>

    <div />
  </nav>
</template>
<script>
import { ChevronLeftIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'DetailsHeader',
  components: { ChevronLeftIcon },
  props: {
    children: {
      type: String,
      default: 'Hello',
    },
  },
  emits: ['header-click'],
  methods: {
    emitHeaderClick() {
      this.$emit('header-click');
    },
  },
};
</script>
