<template>
  <div class="flex justify-center items-center mt-16 md:mt-40">
    <div class="relative card w-60 md:w-48 glass shadow-md">
      <div class="card-body gap-0 p-4 pt-6 items-center text-center">
        <h1 class="card-title text-pink">{{ getQuestData.questName }}</h1>
        <p class="text-sm text-white-light">Complete Challenges</p>
        <div class="absolute -top-3.5">
          <QuestStars :challenge-status="getChallengesChecked" />
        </div>
      </div>
    </div>
  </div>
  <GraphicComponent
    class="m-auto mt-12"
    :challenge-status="getChallengeStatus"
  />
  <ChallengesContainer />
</template>

<script>
import ChallengesContainer from '@/components/Quest/ChallengesContainer.vue';
import QuestStars from '@/components/Quest/QuestStars.vue';
import GraphicComponent from '@/components/GraphicComponent/GraphicComponent.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'QuestPage',
  components: {
    ChallengesContainer,
    QuestStars,
    GraphicComponent,
  },
  computed: {
    ...mapGetters(['getQuestData']),
    getChallengesChecked() {
      return this.getQuestData.challenges;
    },
    getChallengeStatus() {
      return this.getQuestData.challenges[0].status;
    },
  },
  methods: {
    navigateToForm() {
      this.$router.push('/form');
    },
  },
};
</script>
