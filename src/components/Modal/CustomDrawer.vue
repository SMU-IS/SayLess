<template>
  <dialog id="my_drawer" class="modal">
    <div class="bottomDrawer bg-zinc-900">
      <form method="dialog"></form>
      <div class="mb-12 mt-6">
        <div>
          <h3 class="font-bold text-lg text-white">{{ drawerTitle }}</h3>
          <p class="text-md text-white">{{ drawerSubtitle }}</p>
        </div>
        <p class="p-4 mt-4 text-pink bg-zinc-800 rounded">
          <slot>{{ drawerContent }}</slot>
        </p>
      </div>
      <form method="dialog" class="flex flex-col justify-around gap-2">
        <CustomButton width="full" roundness="round" color="green">
          {{ buttonTrue }}
        </CustomButton>
        <CustomButton
          width="full"
          roundness="round"
          color="ghost"
          @click="onDrawerClose"
        >
          {{ buttonFalse }}
        </CustomButton>
      </form>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { closeDrawer } from '@/helpers/common';

export default {
  name: 'CustomDrawer',
  components: {
    CustomButton,
  },
  props: {
    drawerTitle: {
      type: String,
      default: '',
    },
    drawerSubtitle: {
      type: String,
      default: '',
    },
    drawerContent: {
      type: String,
      default: '',
    },
    buttonFalse: {
      type: String,
      default: '',
    },
    buttonTrue: {
      type: String,
      default: '',
    },
  },
  methods: {
    onDrawerClose() {
      closeDrawer();
    },
  },
};
</script>
