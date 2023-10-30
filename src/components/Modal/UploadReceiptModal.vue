<template>
  <dialog :id="modalId" class="modal text-center">
    <div class="modal-box">
      <ImageUpload @image-changed="handleImageChanged" />
      <div v-if="dataToDisplay?.length > 0" class="overflow-x-auto mt-4">
        <table class="table text-center">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataToDisplay" :key="data.description">
              <td>{{ data.description }}</td>
              <td>${{ data.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-6">
        <CustomLoader color="white" :loading="isLoading" size="10px" />
      </div>

      <div class="modal-action flex justify-center">
        <form method="dialog" class="w-full">
          <CustomButton width="full" color="ghost" @click="onModalClose"
            >Cancel</CustomButton
          >
        </form>
        <form method="dialog" class="w-full">
          <CustomButton width="full" color="gradient" @click="handleAdd">{{
            confirmationText
          }}</CustomButton>
        </form>
      </div>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

  <CongratsModal
    modal-id="congrats_1"
    modal-title="You've got an achievement"
    modal-subtitle="You completed Challenge 1"
    button-text="Collect Reward"
  />
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { closeModal } from '@/helpers/common';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { getResponse } from '@/helpers/getResponse';
import { openModal } from '@/helpers/common';
import CongratsModal from '@/components/Modal/CongratsModal.vue';
import ImageUpload from '@/components/Form/ImageUpload.vue';
import { mapGetters, mapActions } from 'vuex';
import CustomLoader from '@/components/Loader/CustomLoader.vue';

export default {
  name: 'UploadReceiptModal',
  components: { CustomButton, ImageUpload, CongratsModal, CustomLoader },
  props: {
    modalId: {
      type: String,
      default: '',
    },
    modalTitle: {
      type: String,
      default: '',
    },
    confirmationText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      item: '',
      itemName: [],
      isLoading: false,
      childImage: null,
      dataToDisplay: [],
    };
  },
  computed: {
    ...mapGetters(['getInventoryData', 'getQuestData', 'getUserDetails']),
    getChallengeStatus() {
      return this.getQuestData?.[0].status;
    },
  },
  methods: {
    ...mapActions(['fetchInventory']),
    async handleImageChanged(imageUrl) {
      this.isLoading = true;
      const data = {
        token: this.getUserDetails['x-access-token'],
        img: imageUrl,
      };
      const response = await this.$store.dispatch('sendImageEdenAI', data);
      if (response) {
        const { item_lines } = response.data.extracted_data[0];
        this.dataToDisplay = item_lines;
        this.isLoading = false;
      }
    },
    onModalClose() {
      closeModal(this.modalId);
    },
    showCongratsModal() {
      openModal('congrats_1');
    },
    async handleAdd() {
      if (
        this.getChallengeStatus === 'In Progress' &&
        this.getInventoryData?.length === 0
      ) {
        this.showCongratsModal();
      }
      if (this.item.length !== 0) {
        try {
          this.itemName.push(this.item);
          const data = {
            token: this.getUserDetails['x-access-token'],
            itemName: this.itemName,
          };
          await this.$store.dispatch('handleAddItem', data);
          getResponse('success', 'Your item has been added!');
          this.fetchInventory();
        } catch (err) {
          getResponse('error', getErrorMessage(err.message));
        }
      }

      this.item = '';
      this.onModalClose();
    },
  },
};
</script>
