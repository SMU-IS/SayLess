<template>
  <div
    class="flex items-center fixed top-0 left-0 right-0 bg-midnight bg-gradient-header bg-cover z-10 w-screen md:hidden h-20"
  >
    <ArrowLeftIcon
      v-if="showBackBtn"
      class="ml-5 h-7 w-7 text-white"
      @click="emitHeaderClick"
    />
    <h3 class="text-white ml-6">
      <slot>{{ children }}</slot>
    </h3>
  </div>
</template>

<script>
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'ParentHeader',
  components: { ArrowLeftIcon },
  props: {
    showBackBtn: {
      type: Boolean,
      default: false,
    },
    children: {
      type: String,
      default: '',
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
