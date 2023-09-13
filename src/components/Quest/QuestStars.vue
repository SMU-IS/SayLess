<template>
  <header class="flex justify-center">
    <div class="stars-container">
      <div v-for="stars in sortedQuestCards" :key="stars.id">
        {{ stars.id }}
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
import { sortByState } from '@/helpers/Sort/sortByState';

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
      return sortByState(this.questCards);
    },
  },
};
</script>

<style scoped>
@tailwind components;

@layer components {
  .stars-container {
    @apply flex flex-row bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 border shadow-2xl rounded-3xl px-4 py-1 border-2 border-yellow-300;
  }
}
</style>
@/helpers/sortByState
