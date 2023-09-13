<template>
  <header class="flex justify-center">
    <div
      class="stars-container flex flex-row bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 border rounded-3xl px-4 py-1"
    >
      <div v-for="stars in sortedQuestCards" :key="stars.id">
        {{ stars.checked }}
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
import { sortData } from '@/helpers/sortData';

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
      return sortData(this.questCards);
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
