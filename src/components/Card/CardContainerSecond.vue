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
        blue: 'bg-blue-200',
        red: 'bg-red-200',
        green: 'bg-green-200',
        yellow: 'bg-yellow-200',
        gradient: 'bg-gradient-header bg-cover',
      },
      /* card sizes */
      size: {
        small: 'p-2',
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
        full: 'w-full md:w-1/2',
      },
    },
  },
);

export default {
  name: 'CardContainerSecond',
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
