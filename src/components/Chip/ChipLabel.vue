<template>
  <div
    class="flex justify-center items-center px-3.5 py-2 font-medium rounded-full bg-green-700"
  >
    <p class="text-sm">
      <slot>{{ children }}</slot>
    </p>

    <div class="flex">
      <button
        type="button"
        @click="emitClose"
      >
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
          class="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-4 h-4 ml-2"
        >
          <line
            x1="18"
            y1="6"
            x2="6"
            y2="18"
          />
          <line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChipLabel',
  emits: ['close-click'],
  methods: {
    emitClose() {
      this.$emit('close-click');
    },
  },
};
</script>
