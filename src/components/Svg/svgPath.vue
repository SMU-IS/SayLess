<template>
  <div class="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 365 259"
      fill="none"
      class="overflow-visible"
    >
      <path
        d="M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271"
        fill="transparent"
        stroke-width="16"
        stroke="url(#paint0_linear_265_4286)"
      />
      <path
        d="M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271"
        fill="transparent"
        stroke-width="16"
        stroke="url(#paint0_linear_265_4286)"
        class="path1"
      />

      <circle class="dot" r="15" fill="orange"></circle>
      <!-- <circle class="dot2" r="15" cx="40" cy="0" fill="purple "></circle> -->

      <defs>
        <linearGradient
          id="paint0_linear_265_4286"
          x1="0"
          y1="133.5"
          x2="357"
          y2="133.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9796F0" />
          <stop offset="1" stop-color="#FBC7D4" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue';

// const screenWidth = ref(screen.width);
// const screenHeight = ref(screen.height);
// const wid = 363 / screenWidth.value;

export default {
  name: 'MySVGComponent',
  data() {
    return {
      scales: ((ref(screen.width).value - 363) / 2 + 320) / 320, // took alot of math calc to get this HAHAHAHAHA based off true viewport
      // point: path1.getTotalLength(),
    };
  },
};
</script>

<style scoped>
.dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;

  motion-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  animation:
    move 15s infinite alternate ease-in-out,
    blink 0.5s infinite alternate ease-in-out;
}

.dot2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
}

@keyframes move {
  0% {
    motion-offset: 0%;
    offset-distance: 0%;
  }
  40% {
    motion-offset: 40%;
    offset-distance: 40%;
  }
  100% {
    motion-offset: 100%;
    offset-distance: 100%;
  }
}

@keyframes blink {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1s;
  }
}
.specialPath {
  /* original width is 320px, viewport is ref, ((viewport - 363) / 2 + 320) / 320 */
  transform-origin: 319px;
  transform: scaleX(v-bind(scales));
}
</style>
