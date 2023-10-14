<template>
  <div class="flex flex-col">
    <div class="flex hide-scroll-bar overflow-x-scroll">
      <div class="flex flex-nowrap">
        <div v-for="content in questCards" :key="content.id">
          <div class="inline-block px-3">
            <CardContainer
              class="relative w-72 h-64 max-w-xs overflow-hidden rounded-lg shadow-md !bg-card-light hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <CardHeader class="bg-[#221E2F] w-full" text-color="text-pink">
                Challenge {{ content.id }}
                <component
                  :is="content.icon"
                  class="checkedIcon w-5 float-right"
                  :class="{ 'icon-checked': content.checked }"
                />
              </CardHeader>

              <CardDescription text-color="text-white" class="my-4">
                {{ content.content }}
              </CardDescription>
              <p
                class="absolute right-0 py-1 bottom-4 text-xs font-bold mx-5 px-4 bg-trans rounded-full text-pink bg-trans-dark"
              >
                {{ content.status }}
              </p>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { questCards } from '@/data/questCards.js';
import CardContainer from '@/components/Card/CardContainer.vue';
import CardDescription from '@/components/Card/CardDescription.vue';
import CardHeader from '@/components/Card/CardHeader.vue';

export default {
  name: 'ChallengesContainer',
  components: {
    CardContainer,
    CardDescription,
    CardHeader,
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
