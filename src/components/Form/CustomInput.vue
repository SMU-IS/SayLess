<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="bg-gray-100 appearance-none border-0 rounded w-full py-3 px-4 text-black leading-tight"
    @input="handleInput"
    @keyup.enter.prevent="handleEnterKey"
  />
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    type: {
      type: String,
      default: 'text',
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'enterPressed'],
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value);
    },
    handleEnterKey() {
      this.$emit('enterPressed');
    },
  },
};
</script>
