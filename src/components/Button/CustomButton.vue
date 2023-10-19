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
        black: 'bg-black text-white hover:bg-black-dark',
        white: 'bg-white text-black  hover:bg-white-dark',
        red: 'bg-red-dark text-white  hover:bg-red',
        blue: 'bg-blue-dark text-white hover:bg-blue',
        green: 'bg-green text-white hover:bg-green-dark',
        ghost: 'bg-none text-white-light hover:bg-gray-800 ',
        gradient: 'bg-gradient-header text-white',
      },
      /* button sizes */
      size: {
        small: ['text-sm', 'py-2', 'px-3'],
        medium: ['text-base', 'py-3', 'px-4'],
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
      default: 'black',
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
