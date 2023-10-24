<template>
  <div class="flex justify-center items-center mt-16 md:mt-40">
    <div class="relative card w-60 md:w-48 glass shadow-md">
      <div class="card-body gap-0 p-4 pt-6 items-center text-center">
        <h1 class="card-title text-pink">Quest 1</h1>
        <p class="text-sm text-white-light">complete challenges</p>
        <div class="absolute -top-3.5">
          <QuestStars />
        </div>
      </div>
    </div>
  </div>

  <GraphicComponent class="m-auto mt-12" />
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
