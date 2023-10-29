<template>
  <div class="navbar bg-main-dark">
    <div class="flex flex-row justify-between w-full md:mx-8 lg:mx-20">
      <div class="flex items-center gap-3 cursor-pointer" @click="navigateHome">
        <img :src="Avocado" class="w-10" />
        <p class="text-lg tracking-widest text-green">{{ BRAND_NAME }}</p>
      </div>

      <div class="flex">
        <div class="navbar-center hidden md:flex">
          <ul tabindex="0" class="menu menu-horizontal px-1 z-[1]">
            <li
              v-for="links in navLinks"
              :key="links.title"
              class="text-white"
              @click="handleClick(links.path)"
            >
              <p
                :class="{ 'opacity-40': !isCurrentRoute(links.path) }"
                class="text-md px-6 hover:bg-green hover:text-white"
              >
                {{ links.title }}
              </p>
            </li>
          </ul>
        </div>

        <div class="flex items-center gap-2">
          <div class="dropdown dropdown-left">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div v-if="getProfilePic" class="w-7 h-7 rounded-full">
                <img :src="getProfilePic" />
              </div>

              <div v-else class="avatar placeholder">
                <div class="bg-white text-black rounded-full w-9 h-9">
                  <span class="text-xs">{{ getFirstLetter }}</span>
                </div>
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-dark rounded-box w-52"
            >
              <li v-if="getName" class="text-white" @click="goToProfile">
                <p class="text-white">{{ getName }}</p>
              </li>
              <li v-else @click="goToProfile">
                <p class="text-white">{{ getEmail }}</p>
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
import Avocado from '@/assets/Icons/Avocado.png';
import CustomModal from '@/components/Modal/CustomModal.vue';
import { openModal } from '@/helpers/common';
import { BRAND_NAME } from '@/constants';
import { mapGetters } from 'vuex';

export default {
  name: 'DesktopNavBar',
  components: { CustomModal },
  data() {
    return {
      navLinks,
      Avocado,
      BRAND_NAME,
      isSelected: false,
    };
  },
  computed: {
    ...mapGetters(['getUserDetails']),
    getProfilePic() {
      return this.getUserDetails?.userData.profilePic;
    },
    getEmail() {
      return this.getUserDetails?.userData.email;
    },
    getName() {
      return this.getUserDetails?.userData.name;
    },
    getFirstLetter() {
      let ownerEmail = this.getUserDetails?.userData.email;
      let ownerName = ownerEmail?.split('@')[0];
      return ownerName?.charAt(0).toUpperCase();
    },
  },
  methods: {
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
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
