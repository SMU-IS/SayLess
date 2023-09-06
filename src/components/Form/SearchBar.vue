<template>
  <form class="flex flex-row items-center gap-3 mb-3">
    <CustomInput
      type="text"
      placeholder="Search Item..."
    />

    <IconButton @click="emitBtnClick" />
  </form>
</template>

<script>
import IconButton from '@/components/Button/IconButton.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
export default {
  name: 'SearchBar',
  components: {
    CustomInput,
    IconButton,
  },
  props: {
    cardContent: {
      type: String,
      default: 'Whitehaven Beach',
    },
  },
  emits: ['btn-click'],
  methods: {
    emitBtnClick() {
      this.$emit('btn-click');
    },
  },
};
</script>
