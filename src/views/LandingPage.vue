<template>
  <div class="flex flex-col mx-4 justify-center items-center">
    <CardContainer
      class="flex flex-col items-center text-center bg-g-quest2 w-3/4 border !rounded-3xl relative p-2"
    >
      <CardHeader
        class="text-2xl !p-2 mt-2"
        text-color="text-white"
      >
        Quest 1
      </CardHeader>

      <CardDescription text-color="text-gray-700">
        COMPLETE CHALLENGES
      </CardDescription>

      <CardFooter class="absolute !p-0 top-[-1rem]">
        <div
          class="stars-container flex flex-row bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 border rounded-3xl px-4 py-1"
        >
          <StarIcon
            class="w-5 mx-1"
            @click="emitHeaderClick"
          />
          <StarIcon
            class="w-5 mx-1"
            @click="emitHeaderClick"
          />
          <StarIcon
            class="w-5 mx-1"
            @click="emitHeaderClick"
          />
        </div>
      </CardFooter>
    </CardContainer>

    <div class="w-1/2">
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
      </div>
      <div class="w-full bg-slate-700 rounded-full h-2 dark:bg-gray-700">
        <div
          class="bg-g-quest2 h-2 rounded-full"
          style="width: 45%"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col m-auto p-auto">
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
        <div class="inline-block px-3">
          <CardContainer
            class="relative w-72 h-64 max-w-xs overflow-hidden rounded-lg shadow-md !bg-card-light hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <CardHeader
              class="bg-[#221E2F]"
              text-color="text-pink"
            >
              Challenge #1
            </CardHeader>
            <CardDescription
              text-color="text-white"
              class="my-4"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium accusamus animi nihil earum, consequatur fuga
              voluptatem reprehenderit maxime velit laudantium incidunt sit
              sapiente optio vitae, dicta maiores at possimus voluptate?
            </CardDescription>
            <p
              class="absolute right-0 bottom-4 mx-5 px-4 bg-trans rounded-full"
            >
              not started
            </p>
          </CardContainer>
        </div>
        <div class="inline-block px-3">
          <CardContainer
            class="relative w-72 h-64 max-w-xs overflow-hidden rounded-lg shadow-md !bg-card-light hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <CardHeader
              class="bg-[#221E2F]"
              text-color="text-pink"
            >
              Challenge #1
            </CardHeader>
            <CardDescription
              text-color="text-white"
              class="my-4"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium accusamus animi nihil earum, consequatur fuga
              voluptatem reprehenderit maxime velit laudantium incidunt sit
              sapiente optio vitae, dicta maiores at possimus voluptate?
            </CardDescription>
            <p
              class="absolute right-0 bottom-4 mx-5 px-4 bg-trans rounded-full"
            >
              not started
            </p>
          </CardContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardContainer from '@/components/Card/CardContainer.vue';
import CardDescription from '@/components/Card/CardDescription.vue';
import CardHeader from '@/components/Card/CardHeader.vue';
import CardFooter from '@/components/Card/CardFooter.vue';
import { StarIcon } from '@heroicons/vue/24/solid';

export default {
  name: 'LandingPage',
  components: {
    CardContainer,
    CardDescription,
    CardHeader,
    CardFooter,
    StarIcon,
  },
  data: function () {
    return {
      email: this.$store.getters.getEmail,
    };
  },
  methods: {
    navigateToForm() {
      this.$router.push('/form');
    },
  },
};
</script>

<style scoped>
@tailwind components

@layer components {
  .stars-container {
    box-shadow: 0px 0px 10px 0px #ffe993;
    border: 2px solid #ffe993;
  }
}
</style>
