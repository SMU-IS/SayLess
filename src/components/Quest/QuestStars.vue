<template>
  <header class="flex justify-center">
    <div
      class="stars-container flex flex-row bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 border rounded-3xl px-4 py-1">
      <div v-for="stars in sortedQuestCards " :key="stars.id">
        <!-- <p>{{ stars.checked }}</p> -->
        <!-- <StarIcon class="w-5 mx-1" /> -->
        <span v-if="stars.checked">
          <StarIcon class="w-5 mx-1 fill-[#FFE993]" />
        </span>

        <p v-else>
          <StarIcon class="w-5 mx-1 fill-gray" />
        </p>
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
  computed: {
    sortedQuestCards() {
      // Create a new array with the sorted elements without modifying the original questCards array
      return [...this.questCards].sort((a, b) => {
        if (a.checked && !b.checked) {
          return -1; // a comes before b
        } else if (!a.checked && b.checked) {
          return 1; // b comes before a
        } else {
          return 0; // no change in order
        }
      });
    },
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
