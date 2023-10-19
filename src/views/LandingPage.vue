<template>
  <ParentHeader> Wasteless Kitchen </ParentHeader>
  <div id="divOne" class="flex flex-row justify-center gap-4 mt-32">
    <CustomCard background="white" size="small">
      <div class="card-body items-left text-left">
        <div class="bg-white min-h-[60px] sm:min-h-[150px]">
          <img :src="InventoryIcon" alt="Inventory" class="w-1/2" />
        </div>

        <h2 class="card-title text-black">Inventory</h2>
        <p class="text-sm">Track your kitchen inventory to prevent expiry</p>
      </div>
    </CustomCard>

    <CustomCard background="white" size="small">
      <div class="card-body items-left text-left">
        <div class="bg-white min-h-[60px] sm:min-h-[150px]">
          <img :src="InventoryIcon" alt="Inventory" class="w-1/2" />
        </div>

        <h2 class="card-title text-black">Inventory</h2>
        <p class="text-sm">Track your kitchen inventory to prevent expiry</p>
      </div>
    </CustomCard>
  </div>

  <div id="divTwo" class="flex flex-row justify-center mt-8">
    <CustomCard background="gradient" size="small" width="full">
      <div class="p-5">
        <h2 class="card-title text-white">Complete quests to earn vouchers</h2>
        <div class="flex card-actions justify-start mt-4">
          <router-link to="/quest">
            <CustomButton color="black" roundness="full">
              <div class="flex items-center gap-2">
                Check It Out
                <ArrowRightIcon class="h-4 w-4" />
              </div>
            </CustomButton>
          </router-link>
        </div>
      </div>
    </CustomCard>
  </div>

  <div id="divThree" class="flex flex-col md:items-center mt-8">
    <CommunitySharing />
  </div>
</template>

<script>
import InventoryIcon from '@/assets/Icons/GroupBuy.png';
import GroupBuyIcon from '@/assets/Icons/GroupBuy.png';
import CustomCard from '@/components/Card/CustomCard.vue';
import { communitySharingData } from '@/data/communitySharing';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/solid';
import { pageLoadAnimation } from '@/helpers/common';
import CommunitySharing from '@/components/CommunitySharing/CommunitySharing.vue';

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
      communitySharingData,
    };
  },
  mounted() {
    const divIds = ['#divOne', '#divTwo', '#divThree'];
    pageLoadAnimation(divIds);
  },
};
</script>
