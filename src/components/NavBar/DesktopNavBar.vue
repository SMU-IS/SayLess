<template>
  <div class="navbar bg-base-100 hidden md:block py-4 fixed z-50">
    <div class="flex flex-row justify-between">
      <CustomButton color="ghost" @click="navigateHome">
        <div class="flex items-center gap-3">
          <img :src="Avocado" class="w-10" />
          <p class="text-lg tracking-widest">{{ BRAND_NAME }}</p>
        </div>
      </CustomButton>

      <div class="flex items-center gap-2">
        <p v-if="name">{{ name }}</p>
        <p v-else>{{ email }}</p>
        <div class="dropdown dropdown-left flex pr-5 gap-5">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-7 h-7 rounded-full">
              <img v-if="profilePic" :src="profilePic" />
              <UserIcon v-else class="rounded-full" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li
              v-for="links in navLinks"
              :key="links.title"
              @click="handleClick(links.path)"
            >
              <p class="text-md">{{ links.title }}</p>
            </li>

            <li @click="showModal"><p>Logout</p></li>
          </ul>
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
import CustomButton from '@/components/Button/CustomButton.vue';
import { navLinks } from '@/data/navLinks';
import { goHome, scrollToTop } from '@/helpers/common';
import { UserIcon } from '@heroicons/vue/24/outline';
import Avocado from '@/assets/Icons/Avocado.png';
import CustomModal from '@/components/Modal/CustomModal.vue';
import { openModal } from '@/helpers/common';
import { BRAND_NAME } from '@/constants';

export default {
  name: 'DesktopNavBar',
  components: { CustomButton, UserIcon, CustomModal },
  data() {
    return {
      email: this.$store.getters.getEmail,
      name: this.$store.getters.getName,
      profilePic: this.$store.getters.getProfilePicture,
      navLinks,
      Avocado,
      BRAND_NAME,
    };
  },
  methods: {
    showModal() {
      openModal('my_modal_2');
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
      scrollToTop();
      const elem = document.activeElement;
      if (elem) {
        elem?.blur();
      }
    },
  },
};
</script>
