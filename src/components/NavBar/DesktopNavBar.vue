<template>
  <div class="navbar bg-base-100 hidden md:block py-3 fixed z-50">
    <div class="flex flex-row justify-between">
      <CustomButton color="ghost" @click="scrollToTop">
        <div class="flex items-center gap-3">
          <img :src="Avocado" class="w-10" />
          Wasteless Kitchen
        </div>
      </CustomButton>

      <div class="flex items-center gap-2">
        <p v-if="name !== 'null'">{{ name }}</p>
        <p v-else>{{ email }}</p>
        <div class="dropdown dropdown-left flex pr-5 gap-5">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-7 h-7 rounded-full">
              <img v-if="profilePic !== 'null'" :src="profilePic" />
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
              <p>{{ links.title }}</p>
            </li>

            <li @click="logout"><p>Logout</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { navLinks } from '@/data/navLinks';
import { scrollToTop } from '@/helpers/common';
import { UserIcon } from '@heroicons/vue/24/outline';
import Avocado from '@/assets/Icons/Avocado.png';

export default {
  name: 'DesktopNavBar',
  components: { CustomButton, UserIcon },
  data() {
    return {
      email: this.$store.getters.getEmail,
      name: this.$store.getters.getName,
      profilePic: this.$store.getters.getProfilePicture,
      navLinks,
      Avocado,
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
    scrollToTop,
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
