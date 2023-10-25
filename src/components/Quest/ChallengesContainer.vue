<template>
  <div class="flex flex-col md:items-center mt-10 md:mb-10">
    <div class="flex hide-scroll-bar overflow-x-scroll px-10">
      <div class="flex flex-nowrap">
        <div v-for="content in getQuestData" :key="content.id">
          <div class="inline-block px-3">
            <div
              class="relative w-72 pb-4 max-w-xs overflow-hidden rounded-lg shadow-md bg-card-light hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div
                class="p-4 font-bold tracking-tight min-h-[20px] bg-[#221E2F] w-full text-pink"
              >
                Challenge {{ content.id }}
                <component
                  :is="content.icon"
                  class="checkedIcon w-5 float-right"
                  :class="{ 'icon-checked': content.checked }"
                />
              </div>

              <div class="text-white p-4 mb-4">{{ content.content }}</div>

              <div class="flex justify-end mr-5">
                <CustomButton
                  size="small"
                  roundness="round"
                  :disabled="
                    content.status === 'Completed' ||
                    content.status === 'In Progress'
                  "
                  :color="
                    content.status === 'In Progress'
                      ? 'disabled'
                      : content.status === 'Start'
                      ? 'green'
                      : 'disabled'
                  "
                  @click="onDrawerOpen(content.id)"
                  >{{ content.status }}</CustomButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-for="content in getQuestData" :key="content.id">
    <CustomDrawer
      v-if="content.status === 'In Progress'"
      :drawer-id="'my_drawer_' + content.id"
      :page-name="content.page"
      :drawer-title="'You joined Challenge ' + content.id"
      drawer-subtitle="Do you want to complete the challenge now?"
      button-false="Not now"
      button-true="Yes, take me there!"
    >
      {{ content.content }}
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
