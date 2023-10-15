<template>
  <button type="button" :class="computedClasses">
    <slot> {{ buttonText }}</slot>
  </button>
</template>
<script>
import { cva } from 'class-variance-authority';

const ButtonVariants = cva(
  /* button base style */
  'h-fit transition-colors duration-150',
  {
    variants: {
      /* button colors */
      color: {
        primary: 'bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-400',
        danger: 'bg-red-500 text-white  hover:bg-red-700 focus:ring-red-400',
        success:
          'bg-green-600 text-white hover:bg-green-700 focus:ring-green-400',
        warning:
          'bg-yellow-500 text-gray-800 hover:bg-yellow-400 focus:ring-orange-400',
        white: 'bg-white text-gray-800  hover:bg-gray-100 focus:ring-white',
        black: 'bg-black text-white hover:bg-gray-800',
        midnight: 'bg-midnight text-white hover:bg-graty-800',
        ghost: 'bg-none hover:bg-gray-800',
      },
      /* button sizes */
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
        large: ['text-lg', 'py-4', 'px-8'],
      },
      /* button roundness */
      roundness: {
        sharp: 'rounded-none',
        round: 'rounded-lg',
        full: 'rounded-full',
      },
      /* button width */
      width: {
        fit: 'w-fit',
        full: 'w-full',
      },
    },
  },
);

export default {
  name: 'CustomButton',
  props: {
    buttonText: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'medium',
    },
    roundness: {
      type: String,
      default: 'round',
    },
    width: {
      type: String,
      default: 'fit',
    },
  },
  computed: {
    computedClasses() {
      return ButtonVariants({
        color: this.color,
        size: this.size,
        roundness: this.roundness,
        width: this.width,
      });
    },
  },
};
</script>
