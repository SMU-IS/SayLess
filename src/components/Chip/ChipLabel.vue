<template>
  <CustomButton :color="color" roundness="full" size="small" @click="emitClick">
    <div class="flex items-center">
      <slot>{{ children }}</slot>
      <svg
        v-if="settings == 'cross'"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x cursor-pointer text-white rounded-full w-4 h-4 ml-2"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
      <svg
        v-if="settings == 'plus'"
        style="transform: rotate(45deg)"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x cursor-pointer text-white rounded-full w-4 h-4 ml-2"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  </CustomButton>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'ChipLabel',
  components: { CustomButton },
  props: {
    settings: {
      type: String,
      default: 'cross',
    },
    color: {
      type: String,
      default: 'green',
    },
  },
  emits: ['chip-click'],
  methods: {
    emitClick() {
      this.$emit('chip-click');
    },
  },
};
</script>
