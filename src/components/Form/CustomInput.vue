<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:shadow-outline focus:bg-white focus:border-purple-500"
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
