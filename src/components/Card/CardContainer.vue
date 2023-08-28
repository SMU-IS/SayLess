<template>
  <div :class="cardProp">
    <slot> {{ children }}</slot>
  </div>
</template>

<script>
export default {
  name: 'CardContainer',
  props: {
    cardProp: {
      type: String,
      default:
        'w-full bg-gray-800 rounded-lg shadow dark:bg-gray-800 border-gray-300 min-h-full',
    },
    children: {
      type: String,
      default: '',
    },
  },
};
</script>