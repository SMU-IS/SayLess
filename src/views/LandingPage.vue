<template>
  <ParentHeader> Wasteless Kitchen </ParentHeader>
  <div class="flex flex-row justify-center gap-4 mt-32">
    <CustomCard background="white" size="small">
      <div class="card-body items-left text-left">
        <div class="bg-white min-h-[60px] sm:min-h-[150px]">
          <img :src="InventoryIcon" :alt="Inventory" class="w-1/2" />
        </div>

        <h2 class="card-title text-black">Inventory</h2>
        <p class="text-sm">Track your kitchen inventory to prevent expiry</p>
      </div>
    </CustomCard>

    <CustomCard background="white" size="small">
      <div class="card-body items-left text-left">
        <div class="bg-white min-h-[60px] sm:min-h-[150px]">
          <img :src="InventoryIcon" :alt="Inventory" class="w-1/2" />
        </div>

        <h2 class="card-title text-black">Inventory</h2>
        <p class="text-sm">Track your kitchen inventory to prevent expiry</p>
      </div>
    </CustomCard>
  </div>

  <div class="flex flex-row justify-center mt-8">
    <CustomCard background="gradient" size="small" width="full">
      <div class="p-5">
        <h2 class="card-title text-white">Complete quests to earn vouchers</h2>
        <div class="flex card-actions justify-start mt-4">
          <router-link to="/quest">
            <CustomButton color="midnight" roundness="full">
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

  <div class="flex flex-col md:items-center mt-8">
    <h3>Community Sharing</h3>

    <div class="grid md:grid-cols-3 justify-center mt-8 gap-5 md:mx-32">
      <div
        class="cursor-pointer card card-side bg-white shadow-xl md:flex-col md:justify-center md:pb-10 gap-12 items-center md:p-0 md:gap-5 pr-7"
        @click="showModal"
      >
        <figure>
          <img src="../assets/Food/Sourdough.jpg" class="md:w-full" />
        </figure>
        <div class="">
          <h2 class="card-title text-black">Sourdough</h2>
          <p>Expiry Date 10/10/2023</p>
        </div>
      </div>

      <div
        class="card card-side bg-white shadow-xl md:flex-col md:justify-center md:pb-10 gap-12 items-center md:p-0 md:gap-5 pr-7"
      >
        <figure>
          <img src="../assets/Food/Sourdough.jpg" class="md:w-full" />
        </figure>
        <div class="">
          <h2 class="card-title text-black">Sourdough</h2>
          <p>Expiry Date 10/10/2023</p>
        </div>
      </div>

      <div
        class="card card-side bg-white shadow-xl md:flex-col md:justify-center md:pb-10 gap-12 items-center md:p-0 md:gap-5 pr-7"
      >
        <figure>
          <img src="../assets/Food/Sourdough.jpg" class="md:w-full" />
        </figure>
        <div class="">
          <h2 class="card-title text-black">Sourdough</h2>
          <p>Expiry Date 10/10/2023</p>
        </div>
      </div>

      <div
        class="card card-side bg-white shadow-xl md:flex-col md:justify-center md:pb-10 gap-12 items-center md:p-0 md:gap-5 pr-7"
      >
        <figure>
          <img src="../assets/Food/Sourdough.jpg" class="md:w-full" />
        </figure>
        <div>
          <h2 class="card-title text-black">Sourdough</h2>
          <p>Expiry Date 10/10/2023</p>
        </div>
      </div>
    </div>
  </div>

  <CustomModal modal-title="Hello World">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim maiores ipsam
    neque.
  </CustomModal>
</template>

<script>
import InventoryIcon from '@/assets/Icons/GroupBuy.png';
import GroupBuyIcon from '@/assets/Icons/GroupBuy.png';
import CustomCard from '@/components/Card/CustomCard.vue';
import { communitySharingData } from '@/data/communitySharing';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/solid';
import { openModal } from '@/helpers/common';
import CustomModal from '@/components/Modal/CustomModal.vue';

export default {
  name: 'LandingPage',
  components: {
    CustomCard,
    ParentHeader,
    CustomButton,
    ArrowRightIcon,
    CustomModal,
  },
  data() {
    return {
      InventoryIcon,
      GroupBuyIcon,
      communitySharingData,
    };
  },
  methods: {
    showModal() {
      openModal();
    },
  },
};
</script>
