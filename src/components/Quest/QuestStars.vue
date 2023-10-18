<template>
  <header class="flex justify-center">
    <div class="flex gradientQuest">
      <div v-for="stars in sortedQuestCards" :key="stars.id">
        <span v-if="stars.checked">
          <StarIcon class="w-4 mx-1 fill-[#FFE993]" />
        </span>
        <p v-else>
          <StarIcon class="w-4 mx-1 fill-gray" />
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
  data() {
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
