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
        <form method="dialog">
          <CustomButton color="ghost" @click="onModalClose"
            >Cancel</CustomButton
          >
        </form>
        <form method="dialog">
          <CustomButton color="gradient" @click="handleAdd">{{
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
import CustomInput from '@/components/Form/CustomInput.vue';

export default {
  name: 'FormModal',
  components: { CustomButton, CustomInput },
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
    };
  },
  methods: {
    onModalClose() {
      closeModal(this.modalId);
    },
    handleAdd() {
      // console.log(this.item);
    },
  },
};
</script>
