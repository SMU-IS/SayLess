<template>
  <ParentHeader>Profile</ParentHeader>
  <div
    class="flex flex-col text-white text-center items-center md:h-screen gap-4 mt-32 md:w-1/2 md:mx-auto mx-6"
  >
    <CustomCard id="divOne" background="black" width="full">
      <div class="flex flex-row items-center gap-5 text-white">
        <img
          v-if="profilePic"
          :src="profilePic"
          :alt="name"
          class="w-16 h-16 rounded-full"
          referrerpolicy="no-referrer"
        />

        <UserIcon v-else class="w-9 h-9 rounded-full" />

        <div class="flex flex-col justify-start text-left gap-1">
          <h2 v-if="name" class="card-title text-base">{{ name }}</h2>
          <p class="text-md text-left">{{ email }}</p>
        </div>
      </div>
    </CustomCard>

    <ul id="divTwo" class="menu bg-transparent-dark w-full rounded-lg text-lg">
      <li v-for="data in profileData" :key="data.title">
        <span @click="handleLink(data.title)">
          <component :is="data.icon" class="h-5 w-5" />
          {{ data.title }}
        </span>
      </li>
      <li @click="showModal">
        <span class="text-red-light">
          <ArrowRightOnRectangleIcon class="h-5 w-5" />
          Logout
        </span>
      </li>
    </ul>

    <CustomModal
      modal-id="my_modal_3"
      modal-title="Are you sure you want to log out?"
      confirmation-text="Log Out"
      :click-handler="logout"
    >
      <p>You will need to log in again.</p>
    </CustomModal>
  </div>
</template>

<script>
import CustomCard from '@/components/Card/CustomCard.vue';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/solid';
import { profileData } from '@/data/profileData';
import { UserIcon } from '@heroicons/vue/24/outline';
import { pageLoadAnimation } from '@/helpers/common';
import CustomModal from '@/components/Modal/CustomModal.vue';
import { openModal } from '@/helpers/common';

export default {
  name: 'ProfilePage',
  components: {
    CustomCard,
    ParentHeader,
    ArrowRightOnRectangleIcon,
    UserIcon,
    CustomModal,
  },
  data() {
    return {
      email: this.$store.getters.getEmail,
      name: this.$store.getters.getName,
      profilePic: this.$store.getters.getProfilePicture,
      profileData,
    };
  },
  mounted() {
    const divIds = ['#divOne', '#divTwo'];
    pageLoadAnimation(divIds);
  },
  methods: {
    showModal() {
      openModal('my_modal_3');
    },
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/onboard');
      } catch (err) {
        throw err;
      }
    },
    handleLink(name) {
      alert(name);
    },
  },
};
</script>
