<template>
  <div class="flex flex-row justify-center gap-4 mt-28">
    <div class="card xs:w-48 w-screen bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <img :src="InventoryIcon" alt="Shoes" class="rounded-xl" />
        <h2 class="card-title">Inventory</h2>
        <p>Track your kitchen inventory to prevent expiry</p>
      </div>
    </div>

    <div class="card xs:w-48 w-screen bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <img :src="DiscountIcon" alt="Shoes" class="rounded-xl" />
        <h2 class="card-title">Discounts</h2>
        <p>Join or create group deals to save more.</p>
      </div>
    </div>
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

export default {
  name: 'LandingPage',
  data() {
    return {
      InventoryIcon,
      DiscountIcon,
    };
  },
};
</script>
