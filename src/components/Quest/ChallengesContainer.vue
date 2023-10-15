<template>
  <div class="flex flex-col md:items-center">
    <div class="flex hide-scroll-bar overflow-x-scroll">
      <div class="flex flex-nowrap">
        <div v-for="content in questCards" :key="content.id">
          <div class="inline-block px-3">
            <div
              class="relative w-72 h-64 max-w-xs overflow-hidden rounded-lg shadow-md !bg-card-light hover:shadow-xl transition-shadow duration-300 ease-in-out"
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

              <div class="text-white p-4">{{ content.content }}</div>

              <div class="flex justify-end mr-5">
                <CustomButton
                  size="small"
                  roundness="full"
                  :color="
                    content.status === 'In Progress'
                      ? 'primary'
                      : content.status === 'Not Started'
                      ? 'danger'
                      : 'success'
                  "
                  @click="changeTab('chat')"
                  >{{ content.status }}</CustomButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { questCards } from '@/data/questCards.js';
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'ChallengesContainer',
  components: {
    CustomButton,
  },
  data: function () {
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
    @apply text-trans-dark;
  }

  .icon-checked {
    @apply !text-white;
  }
}
</style>
