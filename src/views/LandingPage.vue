<template>
  <ParentHeader> Wasteless Kitchen </ParentHeader>
  <div class="flex flex-row justify-center gap-4 mt-36">
    <CardContainerSecond
      :icon="InventoryIcon"
      alt-text="Inventory"
      title="Inventory"
      description="Track your kitchen inventory to prevent expiry"
    />

    <CardContainerSecond
      :icon="GroupBuyIcon"
      alt-text="Group Buy"
      title="GroupBuy"
      description="Join group deals to save more."
    />
  </div>

  <div class="flex flex-row justify-center mt-8">
    <div class="card md:w-1/2 bg-gradient-header bg-cover shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-white">Complete quests to earn vouchers</h2>
        <div class="card-actions justify-start mt-4">
          <button class="btn btn-primary">Check it out</button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col md:items-center mt-8">
    <h3>Community Sharing</h3>
    <CardSlider :card-data="communitySharingData" />
  </div>
</template>

<script>
import InventoryIcon from '@/assets/Icons/GroupBuy.png';
import GroupBuyIcon from '@/assets/Icons/GroupBuy.png';
import CardContainerSecond from '@/components/Card/CardContainerSecond.vue';
import CardSlider from '@/components/CardSlider/CardSlider.vue';
import { communitySharingData } from '@/data/communitySharing';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';

export default {
  name: 'LandingPage',
  components: {
    CardContainerSecond,
    CardSlider,
    ParentHeader,
  },
  data() {
    return {
      InventoryIcon,
      GroupBuyIcon,
      communitySharingData,
    };
  },
};
</script>
