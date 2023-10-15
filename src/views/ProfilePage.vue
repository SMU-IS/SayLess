<template>
  <ParentHeader>Profile</ParentHeader>
  <div
    class="flex flex-col text-white text-center items-center md:h-screen gap-4 mt-32"
  >
    <CardContainerSecond background="black" width="full">
      <div class="flex flex-row items-center gap-5 p-5 text-white">
        <img
          :src="profilePic"
          :alt="Inventory"
          class="w-20 h-20 rounded-full"
        />

        <div class="flex flex-col justify-center gap-1">
          <h2 class="card-title">{{ name }}</h2>
          <p class="text-sm">{{ email }}</p>
        </div>
      </div>
    </CardContainerSecond>

    <ul class="menu bg-base-200 w-full md:w-1/2 rounded-box text-lg">
      <li v-for="data in profileData" :key="data.title">
        <router-link :to="data.path">
          <component :is="data.icon" class="h-5 w-5" />
          {{ data.title }}
        </router-link>
      </li>
      <li @click="logout">
        <span class="text-red-400">
          <ArrowRightOnRectangleIcon class="h-5 w-5" />
          Logout
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getResponse } from '@/helpers/getResponse';
import CardContainerSecond from '@/components/Card/CardContainerSecond.vue';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/solid';
import { profileData } from '@/data/profileData';

export default {
  name: 'ProfilePage',
  components: {
    CardContainerSecond,
    ParentHeader,
    ArrowRightOnRectangleIcon,
  },
  data() {
    return {
      email: this.$store.getters.getEmail,
      name: this.$store.getters.getName,
      profilePic: this.$store.getters.getProfilePicture,
      profileData,
    };
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/onboard');
        getResponse('success', "You've logged out!");
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>
@/helpers/common
