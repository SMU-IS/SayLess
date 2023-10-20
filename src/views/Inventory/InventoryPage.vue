<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Inventory
  </ParentHeader>

  <div class="md:h-screen">
    <div class="mx-auto md:mt-32 mt-28 w-full md:w-1/3">
      <div class="flex gap-5">
        <CustomCard background="white" size="small" class="flex-1 flex-grow">
          <div class="card-body items-left text-left cursor-pointer p-4">
            <h2 class="card-title text-black">Add Food</h2>
            <p class="text-sm">Manually input item into your inventory</p>
          </div>
        </CustomCard>

        <CustomCard background="white" size="small" class="flex-1 flex-grow">
          <div class="card-body items-left text-left cursor-pointer p-4">
            <h2 class="card-title text-black">Scan Receipt</h2>
            <p class="text-sm">Scan receipt to add items into inventory</p>
          </div>
        </CustomCard>
      </div>
    </div>

    <div class="flex justify-between mt-6 md:w-1/2 md:mx-auto">
      <p class="md:text-center text-2xl text-white">Your Inventory</p>
      <CustomButton roundness="full" color="gray" size="small">
        <div class="flex flex-row gap-1.5">
          <p class="md:text-center text-sm text-black">Edit</p>
          <PencilSquareIcon class="w-4 h-auto text-black" />
        </div>
      </CustomButton>
    </div>

    <div class="flex flex-row mt-6 mb-28 md:w-1/2 md:mx-auto">
      <CustomCard width="full" background="gray">
        <div class="flex flex-col gap-5">
          <CustomCard
            v-for="grocery in groceries"
            :key="grocery.id"
            background="white"
            width="full"
          >
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-col">
                <p class="text-black">Item</p>
                <p>{{ grocery.item }}</p>
              </div>

              <div class="flex flex-col">
                <p class="text-black">Expiry Date</p>
                <p class="text-red">{{ grocery.doe }}</p>
              </div>
            </div>
          </CustomCard>
        </div>
      </CustomCard>
    </div>
  </div>
</template>

<script>
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import CustomCard from '@/components/Card/CustomCard.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import { PencilSquareIcon } from '@heroicons/vue/24/outline';
import { groceries } from '@/data/inventoryData.js';

export default {
  name: 'InventoryPage',
  components: { ParentHeader, CustomCard, CustomButton, PencilSquareIcon },
  data() {
    return {
      groceries,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
