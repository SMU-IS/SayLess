<template>
  <dialog :id="modalId" class="modal text-center">
    <div class="modal-box">
      <ImageUpload @image-changed="handleImageChanged" />
      <div v-if="dataToDisplay?.length > 0" class="overflow-x-auto mt-4">
        <table class="table text-center">
          <thead>
            <tr>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataToDisplay" :key="data?.description">
              <td v-if="data?.description">
                <div class="grid grid-cols-3 gap-4 items-center">
                  <div></div>
                  <div>{{ data?.description }}</div>
                  <XMarkIcon
                    class="w-3 h-auto cursor-pointer"
                    @click="deleteItem(data?.description)"
                  />
                </div>
              </td>
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
    modal-id="congrats_2"
    modal-title="You've got an achievement"
    modal-subtitle="You completed Challenge 2"
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
import { XMarkIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'UploadReceiptModal',
  components: {
    CustomButton,
    ImageUpload,
    CongratsModal,
    CustomLoader,
    XMarkIcon,
  },
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
      isLoading: false,
      childImage: null,
      dataToDisplay: [],
      itemName: [],
    };
  },
  computed: {
    ...mapGetters([
      'getInventoryData',
      'getQuestData',
      'getUserDetails',
      'getEdenAIData',
    ]),
    getChallengeStatus() {
      return this.getQuestData?.[1].status;
    },
  },
  methods: {
    ...mapActions(['fetchInventory']),
    async handleImageChanged(imageUrl) {
      this.isLoading = true;
      const data = {
        token: this.getUserDetails['x-access-token'],
        image: imageUrl,
      };
      await this.$store.dispatch('sendImageEdenAI', data);
      this.isLoading = false;
      this.dataToDisplay = await this.$store.getters.getEdenAIData;
    },
    deleteItem(name) {
      let id = this.dataToDisplay.findIndex(
        (result) => result.description == name,
      );
      this.dataToDisplay.splice(id, 1);
    },
    onModalClose() {
      closeModal(this.modalId);
    },
    showCongratsModal() {
      openModal('congrats_2');
    },
    async handleAdd() {
      if (this.dataToDisplay.length !== 0) {
        try {
          for (let i = 0; i < this.dataToDisplay.length; i++) {
            if (this.dataToDisplay[i].description != null) {
              this.itemName.push(this.dataToDisplay[i].description);
            }
          }
          const data = {
            token: this.getUserDetails['x-access-token'],
            itemName: this.itemName,
          };
          await this.$store.dispatch('handleAddItem', data);

          if (this.getChallengeStatus === 'In Progress') {
            this.isLoading = false;
            this.showCongratsModal();
          }

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
