<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Inventory
  </ParentHeader>
  <div class="flex flex-col md:flex-row-reverse md:gap-4 md:mt-24">
    <div class="mx-auto md:mt-32 mt-28 w-full md:w-1/3">
      <div class="flex gap-3 md:flex-col md:items-center">
        <CustomCard
          background="white"
          size="small"
          class="flex-1 flex-grow rounded-[16px]"
          @click="showModal('my_modal_1')"
        >
          <div
            class="card-body gap-0 items-left text-left cursor-pointer p-4 relative"
          >
            <h2 class="card-title text-black text-base">Add Food</h2>
            <img
              src="@/assets/Icons/addfood.png"
              alt="Custom Icon"
              class="h-8 w-8 absolute right-1 top-1"
            />
            <p class="text-xs text-white-light">
              Manually input item into your inventory
            </p>
          </div>
        </CustomCard>

        <CustomCard
          background="white"
          size="small"
          class="flex-1 flex-grow rounded-[16px]"
        >
          <div
            class="card-body gap-0 items-left text-left cursor-pointer p-4 relative"
          >
            <h2 class="card-title text-black text-base">Scan Receipt</h2>
            <img
              src="@/assets/Icons/addreceipt.png"
              alt="Custom Icon"
              class="h-8 w-8 absolute right-1 top-1"
            />
            <p class="text-xs text-white-light" @click="scanReceipt">
              Scan receipt to add items into inventory
            </p>
          </div>
        </CustomCard>
      </div>
    </div>

    <div class="md:flex-1">
      <div class="flex justify-between items-center mt-6 md:w-full md:mx-auto">
        <h4 class="text-white">Your Inventory</h4>
        <CustomButton roundness="full" color="green" size="small">
          <div class="flex flex-row gap-1.5">
            <p class="md:text-center text-sm text-white">Edit</p>
            <PencilSquareIcon class="w-4 h-auto text-white" />
          </div>
        </CustomButton>
      </div>

      <div class="flex min-h-[24rem] h-fit flex-row mt-6 md:w-full md:mx-auto">
        <div v-if="getInventoryData?.length < 1">
          <h4>Add Something</h4>
        </div>
        <CustomCard v-else width="full" background="transparent">
          <div class="flex flex-col gap-5">
            <CustomCard
              v-for="grocery in getInventoryData?.slice().reverse()"
              :key="grocery.id"
              background="white"
              width="full"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col">
                  <p class="text-white-light">Item</p>
                  <p>{{ grocery.itemName }}</p>
                </div>

                <div class="flex flex-col">
                  <p class="text-white-light">Expiry Date</p>
                  <p class="text-red">{{ grocery.expiry }}</p>
                </div>
              </div>
            </CustomCard>
          </div>
        </CustomCard>
      </div>
    </div>

    <FormModal
      modal-id="my_modal_1"
      modal-title="Add to Inventory"
      confirmation-text="Add"
    />

    <CongratsModal
      modal-id="congrats_2"
      modal-title="You've got an achievement"
      modal-subtitle="You completed Challenge 2"
      button-text="Collect Reward"
    />
  </div>
</template>

<script>
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import CustomCard from '@/components/Card/CustomCard.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import { PencilSquareIcon } from '@heroicons/vue/24/outline';
import FormModal from '@/components/Modal/FormModal.vue';
import CongratsModal from '@/components/Modal/CongratsModal.vue';
import { openModal } from '@/helpers/common';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'InventoryPage',
  components: {
    ParentHeader,
    CustomCard,
    CustomButton,
    PencilSquareIcon,
    FormModal,
    CongratsModal,
  },
  computed: {
    ...mapGetters(['getInventoryData', 'getQuestData']),
    getChallengeStatus() {
      return this.getQuestData?.[1].status;
    },
  },
  mounted() {
    this.fetchInventory();
  },
  methods: {
    ...mapActions(['fetchInventory']),
    goBack() {
      this.$router.go(-1);
    },
    showModal(modal) {
      openModal(modal);
    },
    async scanReceipt() {
      if (this.getChallengeStatus === 'In Progress') {
        this.showModal('congrats_2');
      }
    },
  },
};
</script>
