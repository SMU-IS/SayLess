<template>
  <dialog :id="modalId" class="modal text-center">
    <div class="modal-box">
      <h3 class="text-lg">{{ modalTitle }}</h3>
      <form class="space-y-5" @submit.prevent>
        <div class="flex flex-col gap-2">
          <label class="font-semibold text-left" for="item">Item</label>
          <CustomInput
            v-model="item"
            type="text"
            placeholder="e.g. Oatside Milk"
            @enter-pressed="handleAdd"
          />
        </div>
      </form>
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
import CustomInput from '@/components/Form/CustomInput.vue';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { getResponse } from '@/helpers/getResponse';
import { openModal } from '@/helpers/common';
import CongratsModal from '@/components/Modal/CongratsModal.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FormModal',
  components: { CustomButton, CustomInput, CongratsModal },

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
