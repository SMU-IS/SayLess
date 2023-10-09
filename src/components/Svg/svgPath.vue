<template>
  <div class="relative">
    <button class="bg-primary text-white" @click="doesMove = true">
      Start
    </button>

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
        class="path1"
      />

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

      <circle class="c1 fill-current text-pink" r="12"></circle>
      <circle class="c2 fill-current text-pink" r="12"></circle>
      <circle class="c3 fill-current text-pink" r="12"></circle>

      <circle
        :class="{ dot1: doesMove }"
        class="dot fill-current text-gradient"
        r="15"
      ></circle>
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MySVGComponent',
  data() {
    return {
      doesMove: false,
      scales: ((ref(screen.width).value - 363) / 2 + 320) / 320, // took alot of math calc to get this HAHAHAHAHA based off true viewport
    };
  },
};
</script>

<style scoped>
.c1 {
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-distance: 20%;
}
.c2 {
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-distance: 53.3%;
}
.c3 {
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-distance: 100%;
}
.dot {
  position: absolute;
  top: 20px;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;

  animation: blink 0.5s infinite alternate ease-in-out;
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
}

.dot1 {
  motion-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  animation: move1 3s 1 ease-in-out forwards;
}

.dot2 {
  motion-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  animation: move2 3s 1 ease-in-out forwards;
}

.dot3 {
  motion-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  animation: move3 3s 1 ease-in-out forwards;
}

@keyframes move1 {
  0% {
    motion-offset: 0%;
    offset-distance: 0%;
  }
  100% {
    motion-offset: 20%;
    offset-distance: 20%;
  }
}

@keyframes move2 {
  0% {
    motion-offset: 0%;
    offset-distance: 0%;
  }
  100% {
    motion-offset: 53.3%;
    offset-distance: 53.3%;
  }
}

@keyframes move3 {
  0% {
    motion-offset: 0%;
    offset-distance: 0%;
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
