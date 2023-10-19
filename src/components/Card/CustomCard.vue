<template>
  <div :class="computedClasses">
    <slot></slot>
  </div>
</template>

<script>
import { cva } from 'class-variance-authority';

const CardVariants = cva(
  /* card base style */
  'shadow-md',
  {
    variants: {
      /* card background colors */
      background: {
        white: 'bg-white',
        blue: 'bg-blue',
        red: 'bg-red',
        green: 'bg-green',
        black: 'bg-black',
        gradient: 'bg-gradient-header bg-cover',
      },
      /* card sizes */
      size: {
        small: 'p-0',
        medium: 'p-4',
        large: 'p-8',
      },
      /* card roundness */
      roundness: {
        sharp: 'rounded-none',
        round: 'rounded-lg',
        full: 'rounded-full',
      },
      /* card width */
      width: {
        fit: 'w-fit ',
        full: 'w-full ',
      },
    },
  },
);

export default {
  name: 'CustomCard',
  props: {
    background: {
      type: String,
      default: 'blue',
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
      return CardVariants({
        background: this.background,
        size: this.size,
        roundness: this.roundness,
        width: this.width,
      });
    },
  },
};
</script>
