<template>
  <div class="flex flex-col md:items-center mt-10 md:mb-10">
    <div class="flex hide-scroll-bar overflow-x-scroll px-10">
      <div class="flex flex-nowrap">
        <div v-for="data in getQuestData" :key="data.challenge.id">
          <div class="inline-block px-3">
            <div
              class="relative w-72 pb-4 min-h-[200px] max-w-xs overflow-hidden rounded-lg shadow-md bg-card-light hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div
                class="p-4 font-bold tracking-tight min-h-[20px] bg-[#221E2F] w-full text-pink"
              >
                Challenge {{ getQuestName.indexOf(data.challenge.id) + 1 }}

                <!-- <component
                  :is="content.icon"
                  class="checkedIcon w-5 float-right"
                  :class="{ 'icon-checked': data.status === 'Completed' }"
                /> -->
              </div>

              <div class="text-white p-4 mb-4">
                {{ data.challenge.content }}
              </div>

              <div class="flex justify-end mr-5">
                <CustomButton
                  size="small"
                  roundness="round"
                  :disabled="
                    data.status === 'Completed' || data.status === 'In Progress'
                  "
                  :color="
                    data.status === 'In Progress'
                      ? 'disabled'
                      : data.status === 'Start'
                      ? 'green'
                      : 'disabled'
                  "
                  @click="onDrawerOpen(data.challenge.id)"
                  >{{ data.status }}</CustomButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-for="data in getQuestData" :key="data.challenge.id">
    <CustomDrawer
      :drawer-id="'my_drawer_' + data.challenge.id"
      :page-name="data.challenge.path"
      :drawer-title="
        'You joined Challenge ' + (getQuestName.indexOf(data.challenge.id) + 1)
      "
      drawer-subtitle="Do you want to complete the challenge now?"
      button-false="Not now"
      button-true="Yes, take me there!"
    >
      {{ data.challenge.content }}
    </CustomDrawer>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomDrawer from '@/components/Modal/CustomDrawer.vue';
import { toggleDrawer } from '@/helpers/common';
import { mapGetters } from 'vuex';

export default {
  name: 'ChallengesContainer',
  components: {
    CustomButton,
    CustomDrawer,
  },
  computed: {
    ...mapGetters(['getQuestData']),
    getQuestName() {
      const challengesName = [];
      for (let i = 0; i < this.getQuestData.length; i++) {
        challengesName.push(this.getQuestData[i].challenge.id);
      }
      return challengesName;
    },
    title() {
      const questNameIndex = this.getQuestName.indexOf(this.data.challenge.id);
      return 'You joined Challenge ' + (questNameIndex + 1);
    },
  },
  methods: {
    onDrawerOpen(drawerId) {
      toggleDrawer(`my_drawer_${drawerId}`);
      this.handleUpdateChallengeStatus(drawerId);
    },
    async handleUpdateChallengeStatus(id) {
      try {
        await this.$store.dispatch('updateQuestStatus', {
          id: id,
          status: 'In Progress',
        });
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>

<style scoped>
@tailwind components;

@layer components {
  .checkedIcon {
    @apply text-transparent-dark;
  }
  .icon-checked {
    @apply !text-white;
  }
}
</style>
