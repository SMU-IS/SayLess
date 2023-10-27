<template>
  <div>
    <ParentHeader :show-logo="true" class="text-lg tracking-widest text-green">
      SAYLESS
    </ParentHeader>
  </div>

  <div class="flex flex-col md:flex-row justify-center md:gap-4">
    <div
      id="divOne"
      class="flex flex-row justify-center gap-4 mt-32 flex-1 md:grow"
    >
      <CustomCard
        background="white"
        size="small"
        class="flex-1 flex-grow"
        @click="navigateInventory"
      >
        <div class="card-body p-7 items-left text-left cursor-pointer">
          <img :src="InventoryIcon" alt="Inventory" class="w-[64px] sm:w-1/4" />

          <h2 class="card-title text-black">Inventory</h2>
          <p class="text-sm">Track your kitchen inventory to prevent expiry</p>
        </div>
      </CustomCard>

      <CustomCard
        background="white"
        size="small"
        class="flex-1 flex-grow"
        @click="navigateRecipe"
      >
        <div class="card-body p-7 items-left text-left cursor-pointer">
          <img :src="GroupBuyIcon" alt="recipe" class="w-[64px] sm:w-1/4" />

          <h2 class="card-title text-black">Recipes</h2>
          <p class="text-sm">Explore recipes for your food items</p>
        </div>
      </CustomCard>
    </div>

    <div id="divTwo" class="flex flex-row justify-center mt-8 md:mt-32 flex-1">
      <CustomCard background="gradient" size="small" width="full">
        <div class="p-5 flex flex-col justify-center h-full">
          <h2 class="card-title text-white whitespace-normal w-48">
            Complete quests to earn vouchers
          </h2>
          <div class="flex card-actions justify-start mt-4">
            <router-link to="/quest">
              <CustomButton color="black" roundness="full" size="small">
                <div class="flex items-center gap-2">
                  Check it out
                  <ArrowRightIcon class="h-4 w-4" />
                </div>
              </CustomButton>
            </router-link>
          </div>
        </div>
      </CustomCard>
    </div>
  </div>

  <div id="divThree" class="flex flex-col mt-8">
    <CommunitySharing />
  </div>
</template>

<script>
import InventoryIcon from '@/assets/Icons/Inventory.png';
import GroupBuyIcon from '@/assets/Icons/GroupBuy.png';
import CustomCard from '@/components/Card/CustomCard.vue';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/solid';
import { pageLoadAnimation } from '@/helpers/common';
import CommunitySharing from '@/views/CommunitySharing/CommunitySharing.vue';

export default {
  name: 'LandingPage',
  components: {
    CustomCard,
    ParentHeader,
    CustomButton,
    ArrowRightIcon,
    CommunitySharing,
  },
  data() {
    return {
      InventoryIcon,
      GroupBuyIcon,
    };
  },
  mounted() {
    const divIds = ['#divOne', '#divTwo', '#divThree'];
    pageLoadAnimation(divIds);
  },
  methods: {
    navigateInventory() {
      this.$router.push('/inventory');
    },
    navigateRecipe() {
      this.$router.push('/recipe');
    },
  },
};
</script>
