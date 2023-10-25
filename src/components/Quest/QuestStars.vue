<template>
  <header class="flex justify-center">
    <div class="flex gradientQuest">
      <div v-for="stars in sortedQuestCards" :key="stars.id">
        <span v-if="stars.completed">
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
import { StarIcon } from '@heroicons/vue/24/solid';
import { sortByState } from '@/helpers/Sort/sortByState';
import { mapGetters } from 'vuex';

export default {
  name: 'QuestStars',
  components: {
    StarIcon,
  },
  props: {
    challengeStatus: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(['getQuestData']),
    sortedQuestCards() {
      return sortByState(this.getQuestData.challenges);
    },
  },
};
</script>
