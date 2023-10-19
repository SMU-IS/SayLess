<template>
  <nav
    class="grid grid-cols-3 items-center rounded-b-xl fixed top-0 w-full bg-gradient-header border-gray-200 h-20"
  >
    <ArrowLeftIcon class="ml-3 h-7 w-7" @click="emitHeaderClick" />
    <h3 class="text-center font-semibold">
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
