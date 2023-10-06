<template>
  <div class="flex flex-row justify-center gap-4 mt-28">
    <CardContainerSecond
      :icon="InventoryIcon"
      alt-text="Inventory"
      title="Inventory"
      description="Track your kitchen inventory to prevent expiry"
    />

    <CardContainerSecond
      :icon="DiscountIcon"
      alt-text="Discount"
      title="Discount"
      description="Join or create group deals to save more."
    />
  </div>

  <div class="flex flex-row justify-center mt-8">
    <div class="card w-screen bg-base-100 shadow-xl image-full">
      <div class="card-body">
        <h2 class="card-title text-white">Complete quests to earn vouchers</h2>
        <div class="card-actions justify-start mt-4">
          <button class="btn btn-primary">Check it out</button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-row justify-start mt-8">
    <h3>Community Sharing</h3>
  </div>
</template>

<script>
import InventoryIcon from '@/assets/Icons/Inventory.png';
import DiscountIcon from '@/assets/Icons/Discount.png';
import CardContainerSecond from '@/components/Card/CardContainerSecond.vue';

export default {
  name: 'LandingPage',
  components: {
    CardContainerSecond,
  },
  data() {
    return {
      InventoryIcon,
      DiscountIcon,
    };
  },
};
</script>
