<template>
  <CustomButton color="green" roundness="full" size="small">
    <div class="flex items-center">
      <slot>{{ children }}</slot>
      <svg
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
        @click="emitClose"
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
  emits: ['close-click'],
  methods: {
    emitClose() {
      this.$emit('close-click');
    },
  },
};
</script>
