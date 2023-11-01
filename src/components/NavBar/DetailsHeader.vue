<template>
  <nav
    class="md:absolute fixed bg-main right-0 grid grid-cols-3 items-center rounded-b-xl top-0 w-full bg-ghost h-20 md:top-20 md:px-6 left-0"
  >
    <ArrowLeftIcon class="w-5 ml-5 cursor-pointer" @click="emitHeaderClick" />
    <h3 class="text-center text-base font-semibold">
      <slot>{{ children }}</slot>
    </h3>
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
