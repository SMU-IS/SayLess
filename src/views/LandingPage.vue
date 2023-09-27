<template>
  <div class="flex flex-col mx-4 justify-center items-center">
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
  </div>

  <MySVGComponent class="m-auto mt-5 -mb-5" />

  <ChallengesContainer />
</template>

<script>
import CardContainer from '@/components/Card/CardContainer.vue';
import CardDescription from '@/components/Card/CardDescription.vue';
import CardHeader from '@/components/Card/CardHeader.vue';
import CardFooter from '@/components/Card/CardFooter.vue';
import ChallengesContainer from '@/components/Quest/ChallengesContainer.vue';
import QuestStars from '@/components/Quest/QuestStars.vue';
import MySVGComponent from '@/components/Svg/svgPath.vue';

export default {
  name: 'LandingPage',
  components: {
    CardContainer,
    CardDescription,
    CardHeader,
    ChallengesContainer,
    CardFooter,
    QuestStars,
    MySVGComponent,
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
