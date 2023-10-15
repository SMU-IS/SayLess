<template>
  <div class="flex mx-4 justify-center items-center mt-20 md:mt-40">
    <div class="relative card w-64 bg-white text-black shadow-xl">
      <div class="card-body items-center text-center">
        <h1 class="card-title">Quest 1</h1>
        <p>Complete Challenges</p>
        <div class="absolute -top-8">
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
