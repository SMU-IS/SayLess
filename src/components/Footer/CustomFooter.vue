<template>
  <footer
    class="flex justify-between items-center footer py-10 px-20 bg-neutral text-neutral-content"
  >
    <aside>
      <img :src="Avocado" class="w-1/4" />
      <p class="mt-5 tracking-widest">
        {{ BRAND_NAME }} <br />
        {{ BRAND_TAGLINE }}
      </p>
    </aside>

    <div class="flex flex-row tooltip" data-tip="Scroll To Top">
      <svg class="animate-bounce w-6 h-6 cursor-pointer" @click="scrollToTop">
        <ChevronDoubleUpIcon class="w-10 h-10" />
      </svg>
    </div>
  </footer>
</template>

<script>
import { ChevronDoubleUpIcon } from '@heroicons/vue/24/solid';
import { scrollToTop } from '@/helpers/common';
import Avocado from '@/assets/Icons/Avocado.png';
import { BRAND_NAME, BRAND_TAGLINE } from '@/constants';

export default {
  name: 'CustomFooter',
  components: { ChevronDoubleUpIcon },
  data() {
    return {
      Avocado,
      BRAND_NAME,
      BRAND_TAGLINE,
    };
  },
  methods: {
    scrollToTop,
  },
};
</script>
