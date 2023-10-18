<template>
  <dialog :id="modalId" class="modal text-center">
    <div class="modal-box">
      <ExclamationTriangleIcon class="w-20 h-20 mx-auto text-red-light my-3" />
      <h3 class="text-lg">{{ modalTitle }}</h3>
      <p class="py-2">
        <slot>{{ modalContent }}</slot>
      </p>
      <div class="modal-action">
        <form method="dialog">
          <CustomButton color="ghost" @click="onModalClose"
            >Cancel</CustomButton
          >
        </form>

        <form method="dialog">
          <CustomButton color="red" @click="handleConfirmation">{{
            confirmationText
          }}</CustomButton>
        </form>
      </div>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { closeModal } from '@/helpers/common';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'CustomModal',
  components: { CustomButton, ExclamationTriangleIcon },
  props: {
    modalId: {
      type: String,
      default: '',
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
    modalTitle: {
      type: String,
      default: '',
    },
    modalContent: {
      type: String,
      default: '',
    },
    confirmationText: {
      type: String,
      default: '',
    },
  },
  methods: {
    onModalClose() {
      closeModal(this.modalId);
    },
    handleConfirmation() {
      this.clickHandler();
    },
  },
};
</script>
