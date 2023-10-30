<template>
  <div class="mb-36 md:mb-12 md:h-screen">
    <div class="flex justify-center items-center mt-16 md:mt-28">
      <div class="relative card w-60 md:w-48 glass shadow-md">
        <div class="card-body gap-0 p-4 pt-6 items-center text-center">
          <h1 class="card-title text-pink">Quest 1</h1>
          <p class="text-sm text-white-light">Complete Challenges</p>
          <div class="absolute -top-3.5">
            <QuestStars :challenge-status="getQuestData" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="getQuestData">
      <GraphicComponent class="m-auto mt-12" :challenge-status="getQuestData" />
      <ChallengesContainer />
    </div>

    <div
      v-else
      class="flex justify-center items-center h-1/2 text-lg md:mt-0 mt-12"
    >
      <CustomLoader color="white" size="15px" />
    </div>
  </div>
</template>

<script>
import ChallengesContainer from '@/components/Quest/ChallengesContainer.vue';
import QuestStars from '@/components/Quest/QuestStars.vue';
import GraphicComponent from '@/components/GraphicComponent/GraphicComponent.vue';
import { mapGetters, mapActions } from 'vuex';
import CustomLoader from '@/components/Loader/CustomLoader.vue';

export default {
  name: 'QuestPage',
  components: {
    ChallengesContainer,
    QuestStars,
    GraphicComponent,
    CustomLoader,
  },
  computed: {
    ...mapGetters(['getQuestData']),
  },
  mounted() {
    this.fetchQuestData();
  },
  methods: {
    ...mapActions(['fetchQuestData']),
    navigateToForm() {
      this.$router.push('/form');
    },
  },
};
</script>
