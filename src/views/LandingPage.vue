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
      title="Group Buy"
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

    <div class="flex flex-row justify-center mt-8">
      <div
        class="card card-side bg-white shadow-xl md:w-1/3 md:flex-col md:justify-center md:items-center md:py-10"
      >
        <figure>
          <img src="../assets/Food/Sourdough.jpg" class="md:w-1/3" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-black">Sourdough</h2>
          <p>Expiry Date 10/10/2023</p>
        </div>
      </div>
    </div>

    <div class="flex flex-row justify-center mt-8">
      <div
        class="card card-side bg-white shadow-xl md:w-1/3 md:flex-col md:justify-center md:items-center md:py-10"
      >
        <figure>
          <img src="../assets/Food/Sourdough.jpg" class="md:w-1/3" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-black">Sourdough</h2>
          <p>Expiry Date 10/10/2023</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InventoryIcon from '@/assets/Icons/GroupBuy.png';
import GroupBuyIcon from '@/assets/Icons/GroupBuy.png';
import CardContainerSecond from '@/components/Card/CardContainerSecond.vue';
import { communitySharingData } from '@/data/communitySharing';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';

export default {
  name: 'LandingPage',
  components: {
    CardContainerSecond,
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
