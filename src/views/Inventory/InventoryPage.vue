<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Inventory
  </ParentHeader>
  <div class="flex flex-col md:flex-row-reverse md:gap-14 md:mt-24">
    <div class="mx-auto md:mt-32 mt-28 w-full md:w-1/3">
      <div class="flex gap-3 md:flex-col md:items-center">
        <CustomCard
          background="white"
          size="small"
          class="flex-1 flex-grow rounded-[16px]"
          width="full"
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
            <p class="mt-1.5 text-xs text-white-light">
              Manually input item into your inventory
            </p>
          </div>
        </CustomCard>

        <CustomCard
          background="white"
          size="small"
          class="flex-1 flex-grow rounded-[16px]"
          width="full"
          @click="showModal('UPLOAD_RECEIPT_MODAL')"
        >
          <div
            class="card-body gap-0 items-left text-left cursor-pointer p-4 relative"
          >
            <h2 class="card-title text-black text-base">Upload Receipt</h2>
            <img
              src="@/assets/Icons/addreceipt.png"
              alt="Custom Icon"
              class="h-8 w-8 absolute right-1 top-1"
            />
            <p class="mt-1.5 text-xs text-white-light">
              Upload a photo of your receipt to add items into inventory
            </p>
          </div>
        </CustomCard>
      </div>
    </div>

    <div class="md:flex-1">
      <div class="flex justify-between items-center mt-6 md:w-full md:mx-auto">
        <h4 class="text-white">Your Inventory</h4>
        <CustomButton
          v-if="getInventoryData?.length > 0"
          roundness="full"
          color="green"
          size="small"
        >
          <div class="flex flex-row gap-1.5">
            <p class="md:text-center text-sm text-white">Edit</p>
            <PencilSquareIcon class="w-4 h-auto text-white" />
          </div>
        </CustomButton>
      </div>

      <div
        v-if="getInventoryData"
        class="flex min-h-[24rem] h-fit flex-row mt-6 md:w-full md:mx-auto"
      >
        <div v-if="getInventoryData?.length < 1">
          <h4>No Items Found</h4>
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

      <div v-else class="mt-6">
        <CustomLoader color="white" size="15px" />
      </div>
    </div>

    <FormModal
      modal-id="my_modal_1"
      modal-title="Add to Inventory"
      confirmation-text="Add"
    />

    <UploadReceiptModal
      modal-id="UPLOAD_RECEIPT_MODAL"
      confirmation-text="Add"
    />
  </div>
</template>

<script>
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import CustomCard from '@/components/Card/CustomCard.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import { PencilSquareIcon } from '@heroicons/vue/24/outline';
import FormModal from '@/components/Modal/FormModal.vue';
import UploadReceiptModal from '@/components/Modal/UploadReceiptModal.vue';
import { openModal } from '@/helpers/common';
import { mapGetters, mapActions } from 'vuex';
import CustomLoader from '@/components/Loader/CustomLoader.vue';

export default {
  name: 'InventoryPage',
  components: {
    ParentHeader,
    CustomCard,
    CustomButton,
    PencilSquareIcon,
    FormModal,
    UploadReceiptModal,
    CustomLoader,
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
  },
};
</script>
