<template>
  <div class="flex justify-center items-center mt-16 md:mt-40">
    <div class="relative card w-7/12 bg-trans-dark shadow-xl">
      <div class="card-body gap-0 p-4 pt-6 items-center text-center">
        <h1 class="card-title text-pink">Quest 1</h1>
        <p class="text-gray-400">complete challenges</p>
        <div class="absolute -top-3.5">
          <QuestStars />
        </div>
      </div>
    </div>
  </div>

  <GraphicComponent class="m-auto mt-12 -mb-5" />
  <ChallengesContainer />
</template>

<script>
import ChallengesContainer from '@/components/Quest/ChallengesContainer.vue';
import QuestStars from '@/components/Quest/QuestStars.vue';
import GraphicComponent from '@/components/GraphicComponent/GraphicComponent.vue';

export default {
  name: 'QuestPage',
  components: {
    ChallengesContainer,
    QuestStars,
    GraphicComponent,
  },
  data() {
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
