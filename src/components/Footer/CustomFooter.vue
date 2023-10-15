<template>
  <div class="hidden md:block">
    <footer
      class="flex justify-between items-center footer py-10 px-20 bg-neutral text-neutral-content"
    >
      <aside>
        <img :src="Avocado" class="w-1/4" />
        <p class="mt-5">
          Wasteless Kitchen<br />
          Saving the Earth Since 2023.
        </p>
      </aside>

      <div class="flex flex-row">
        <svg class="animate-bounce w-6 h-6 cursor-pointer" @click="scrollToTop">
          <ChevronDoubleUpIcon class="w-10 h-10" />
        </svg>
      </div>
    </footer>
  </div>
</template>

<script>
import { ChevronDoubleUpIcon } from '@heroicons/vue/24/solid';
import { scrollToTop } from '@/helpers/common';
import Avocado from '@/assets/Icons/Avocado.png';

export default {
  name: 'CustomFooter',
  components: { ChevronDoubleUpIcon },
  data() {
    return {
      Avocado,
    };
  },
  methods: {
    scrollToTop,
  },
};
</script>
