<template>
  <nav
    class="absolute grid grid-cols-3 items-center rounded-b-xl top-0 w-full bg-ghost h-20 md:hidden"
  >
    <ArrowLeftIcon class="ml-5 h-7 w-7" @click="emitHeaderClick" />
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
