<template>
  <div class="flex flex-col mx-4 justify-center items-center mt-32">
    <CardContainer
      class="flex flex-col items-center text-center bg-g-quest2 w-3/4 border !rounded-3xl relative p-2"
    >
      <CardHeader class="text-2xl !p-2 mt-2" text-color="text-white">
        Quest 1
      </CardHeader>

      <CardDescription text-color="text-gray-700">
        COMPLETE CHALLENGES
      </CardDescription>

      <CardFooter class="absolute !p-0 top-[-1rem]">
        <QuestStars />
      </CardFooter>
    </CardContainer>

    <div class="w-1/2">
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white"
          >Flowbite</span
        >
        <span class="text-sm font-medium text-blue-700 dark:text-white"
          >45%</span
        >
      </div>
      <div class="w-full bg-slate-700 rounded-full h-2 dark:bg-gray-700">
        <div class="bg-g-quest2 h-2 rounded-full" style="width: 45%" />
      </div>
    </div>
  </div>
  <ChallengesContainer />
</template>

<script>
import CardContainer from '@/components/Card/CardContainer.vue';
import CardDescription from '@/components/Card/CardDescription.vue';
import CardHeader from '@/components/Card/CardHeader.vue';
import CardFooter from '@/components/Card/CardFooter.vue';
import ChallengesContainer from '@/components/Quest/ChallengesContainer.vue';
import QuestStars from '@/components/Quest/QuestStars.vue';

export default {
  name: 'QuestPage',
  components: {
    CardContainer,
    CardDescription,
    CardHeader,
    ChallengesContainer,
    CardFooter,
    QuestStars,
  },
  data: function () {
    return {
      email: this.$store.getters.getEmail,
    };
  },
  methods: {
    navigateToForm() {
      this.$router.push('/form');
    },
  },
};
</script>
