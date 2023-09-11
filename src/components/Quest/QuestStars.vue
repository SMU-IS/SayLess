<template>
  <header class="flex justify-center">
    <div
      class="stars-container flex flex-row bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 border rounded-3xl px-4 py-1">
      <div v-for="stars in questCards" :key="stars.id">
        <p>{{ stars.checked }}</p>
        <StarIcon class="w-5 mx-1" />
      </div>
    </div>
  </header>
</template>

<script>
import { questCards } from '@/data/questCards.js';
import { StarIcon } from '@heroicons/vue/24/solid';

export default {
  name: 'QuestStars',
  components: {
    StarIcon,
  },
  data: function () {
    return {
      questCards,
    };
  },
};
</script>

<style scoped>
@tailwind components;

@layer components {
  .stars-container {
    box-shadow: 0px 0px 10px 0px #ffe993;
    border: 2px solid #ffe993;
  }
}
</style>
