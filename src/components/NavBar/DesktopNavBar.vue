<template>
  <div class="navbar bg-transparent-dark">
    <div class="flex flex-row justify-between w-full md:mx-8 lg:mx-20">
      <div class="flex items-center gap-3 cursor-pointer" @click="navigateHome">
        <img :src="Avocado" class="w-10" />
        <p class="text-lg tracking-widest">{{ BRAND_NAME }}</p>
      </div>

      <div class="flex">
        <div class="navbar-center hidden md:flex">
          <ul tabindex="0" class="menu menu-horizontal px-1 z-[1]">
            <li
              v-for="links in navLinks"
              :key="links.title"
              @click="handleClick(links.path)"
            >
              <p class="text-md text-white px-6">{{ links.title }}</p>
            </li>
          </ul>
        </div>

        <div class="flex items-center gap-2">
          <div class="dropdown dropdown-left">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-7 h-7 rounded-full">
                <img v-if="profilePic" :src="profilePic" />
                <UserIcon v-else class="rounded-full" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li v-if="name" @click="goToProfile">
                <p class="text-white">{{ name }}</p>
              </li>
              <li v-else @click="goToProfile">
                <p class="text-white">{{ email }}</p>
              </li>
              <li class="text-red" @click="showModal"><p>Logout</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <CustomModal
      modal-id="my_modal_2"
      modal-title="Are you sure you want to log out?"
      confirmation-text="Log Out"
      :click-handler="logout"
    >
      <p>You will need to log in again.</p>
    </CustomModal>
  </div>
</template>

<script>
import { navLinks } from '@/data/navLinks';
import { goHome, scrollToTop } from '@/helpers/common';
import { UserIcon } from '@heroicons/vue/24/outline';
import Avocado from '@/assets/Icons/Avocado.png';
import CustomModal from '@/components/Modal/CustomModal.vue';
import { openModal } from '@/helpers/common';
import { BRAND_NAME } from '@/constants';

export default {
  name: 'DesktopNavBar',
  components: { UserIcon, CustomModal },
  data() {
    return {
      email: this.$store.getters.getEmail,
      name: this.$store.getters.getName,
      profilePic: this.$store.getters.getProfilePicture,
      navLinks,
      Avocado,
      BRAND_NAME,
      isSelected: false,
    };
  },
  methods: {
    showModal() {
      openModal('my_modal_2');
    },
    goToProfile() {
      this.$router.push('/profile');
      const elem = document.activeElement;
      if (elem) {
        elem?.blur();
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/onboard');
      } catch (err) {
        throw err;
      }
    },
    navigateHome() {
      goHome(this.$router);
      scrollToTop();
    },
    handleClick(path) {
      this.$router.push(`${path}`);
      this.isSelected = true;
      scrollToTop();
    },
  },
};
</script>
