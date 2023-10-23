<template>
  <div class="flex flex-col md:items-center mt-10 md:mb-10 ">
    <div class="flex hide-scroll-bar overflow-x-scroll px-10">
      <div class="flex flex-nowrap">
        <div v-for="content in questCards" :key="content.id">
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
                  roundness="full"
                  :color="
                    content.status === 'In Progress'
                      ? 'blue'
                      : content.status === 'Not Started'
                      ? 'red'
                      : 'green'
                  "
                  @click="changeTab('chat')"
                  ><label for="my_drawer_4" class="drawer-button">{{
                    content.status
                  }}</label></CustomButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CustomDrawer
    drawer-title="You joined Challenge 1!"
    drawer-subtitle="Do you want to complete the challenge now?"
    button-false="Not now"
    button-true="Yes, take me there!"
  >
    Get an item for free from the Community Sharing page
  </CustomDrawer>
</template>

<script>
import { questCards } from '@/data/questCards.js';
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomDrawer from '@/components/Modal/CustomDrawer.vue';

export default {
  name: 'ChallengesContainer',
  components: {
    CustomButton,
    CustomDrawer,
  },
  data() {
    return {
      questCards,
    };
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
