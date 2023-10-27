<template>
  <div class="relative w-96 md:w-72">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90%"
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
      <g filter="url(#e)">
        <path
          d="m20 11.121c0 5.891-4.4772 17.333-10 17.333-5.5228 0-10-11.442-10-17.333 0-5.891 4.4772-10.667 10-10.667 5.5228 0 10 4.7756 10 10.667z"
          fill="url(#d)"
          fill-opacity=".6"
        />
        <path
          d="m19.852 11.121c0 2.9173-1.1113 7.228-2.9132 10.81-0.9004 1.7897-1.969 3.3888-3.1497 4.5383-1.1815 1.1503-2.462 1.8381-3.7896 1.8381-1.3276 0-2.6081-0.6878-3.7896-1.8381-1.1807-1.1495-2.2493-2.7486-3.1498-4.5383-1.8019-3.5815-2.9132-7.8922-2.9132-10.81 0-5.8187 4.42-10.519 9.8525-10.519 5.4326 0 9.8525 4.7005 9.8525 10.519z"
          stroke="url(#c)"
          stroke-width=".29491"
        />
      </g>
      <circle
        cx="9.8981"
        cy="10.353"
        r="5.7515"
        fill="url(#b)"
        fill-opacity=".9"
        stroke="url(#a)"
        stroke-width=".29324"
      />

      <circle class="c0 fill-current text-white-light" r="12"></circle>
      <circle class="c1 fill-current text-green" r="12"></circle>
      <circle class="c2 fill-current text-green" r="12"></circle>
      <circle class="c3 fill-current text-green" r="12"></circle>

      <circle class="dot fill-current text-white" r="15"></circle>
    </svg>
    <img
      id="c1"
      src="@/assets/Icons/quest1.png"
      alt="Custom Icon"
      class="w-24 mx-auto my-3 absolute top-3 md:top-0 left-40 md:left-28"
    />
    <img
      id="c2"
      src="@/assets/Icons/quest2.png"
      alt="Custom Icon"
      class="w-24 mx-auto my-3 absolute top-24 md:top-16 left-40 md:left-28"
    />
    <img
      id="c3"
      src="@/assets/Icons/quest3.png"
      alt="Custom Icon"
      class="w-24 mx-auto my-3 absolute top-52 md:top-36 left-40 md:left-28"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { mapGetters } from 'vuex';
gsap.registerPlugin(MotionPathPlugin);

export default {
  name: 'GraphicComponent',
  props: {
    challengeStatus: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      scales: ((ref(screen.width).value - 363) / 2 + 320) / 320,
    };
  },
  computed: {
    ...mapGetters(['getCount']),
  },
  created() {
    this.timelineQuest = gsap.timeline();
  },
  mounted() {
    this.timelineQuest.pause();
    let userViewCount = this.getCount;

    this.timelineQuest
      .to('.dot', {
        duration: 3,
        ease: 'power1.inOut',
        motionPath: {
          path: '.path1',
          align: '.path1',
          alignOrigin: [0.5, 0.5],
          offsetX: 0,
          offsetY: -8,
          start: '0',
          end: '0.2',
        },
      })
      .fromTo(
        '#c1',
        { opacity: 0.2 },
        { opacity: 1, duration: 1, ease: 'power1.inOut' },
      )
      .addPause()
      .to('.dot', {
        duration: 3,
        ease: 'power1.inOut',
        motionPath: {
          path: '.path1',
          align: '.path1',
          alignOrigin: [0.5, 0.5],
          offsetX: 0,
          offsetY: -8,
          start: '0.2',
          end: '0.533',
        },
      })
      .fromTo(
        '#c2',
        { opacity: 0.2 },
        { opacity: 1, duration: 1, ease: 'power1.inOut' },
      )
      .addPause()
      .to('.dot', {
        duration: 3,
        ease: 'power1.inOut',
        motionPath: {
          path: '.path1',
          align: '.path1',
          alignOrigin: [0.5, 0.5],
          offsetX: 0,
          offsetY: -8,
          start: '0.533',
          end: '1',
        },
      })
      .fromTo(
        '#c3',
        { opacity: 0.2 },
        { opacity: 1, duration: 1, ease: 'power1.inOut' },
      );

    if (this.challengeStatus) {
      let counter = 0;

      for (let i = 0; i < this.challengeStatus.length; i++) {
        if (this.challengeStatus[i].status === 'Completed') {
          counter += 1;
        }
      }

      if (counter == 0) {
        this.timelineQuest.seek(0);
      } else if (counter == 1) {
        if (userViewCount == 1) {
          this.timelineQuest.seek(0);
          this.timelineTrigger();
          this.decrementCount();
        } else {
          this.timelineQuest.seek(4);
        }
      } else if (counter == 2) {
        if (userViewCount == 1) {
          this.timelineQuest.seek(4);
          this.timelineTrigger();
          this.decrementCount();
        } else {
          this.timelineQuest.seek(8);
        }
      } else {
        if (userViewCount == 1) {
          this.timelineQuest.seek(8);
          this.timelineTrigger();
          this.decrementCount();
        } else {
          this.timelineQuest.seek(12);
        }
      }
    }
  },
  methods: {
    timelineTrigger() {
      this.timelineQuest.play();
    },
    async decrementCount() {
      try {
        await this.$store.dispatch('decrementCount');
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>

<style scoped>
.c0 {
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-distance: 0%;
}
.c1 {
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-distance: 20%;
  filter: drop-shadow(0px 1px 7px rgba(3, 255, 200, 0.8));
}
.c2 {
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-distance: 53.3%;
  filter: drop-shadow(0px 1px 7px rgba(3, 255, 200, 0.8));
}
.c3 {
  offset-path: path(
    'M0 8H311.75C337.017 8 357.5 28.483 357.5 53.75V53.75C357.5 79.017 337.017 99.5 311.75 99.5H115C90.6995 99.5 71 119.199 71 143.5V143.5C71 167.801 90.6995 187.5 115 187.5H273C286.807 187.5 298 198.693 298 212.5V271'
  );
  offset-distance: 100%;
  filter: drop-shadow(0px 1px 7px rgba(3, 255, 200, 0.8));
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

@keyframes blink {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1s;
  }
}
</style>
