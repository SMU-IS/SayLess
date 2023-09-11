<template>
  <nav
    class="flex items-center grid grid-cols-3 rounded-b-lg fixed top-0 w-full bg-white border-gray-200 h-16"
  >
    <ArrowLeftIcon class="ml-3 h-7 w-7" @click="emitHeaderClick" />

    <h3 class="text-center font-sans font-semibold">
      <slot>{{ children }}</slot>
    </h3>

    <div />
  </nav>
</template>
<script>
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'DetailsHeader',
  components: { ArrowLeftIcon },
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
