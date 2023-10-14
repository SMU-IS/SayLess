<template>
  <div class="navbar bg-base-100 hidden md:block py-3">
    <div class="flex flex-row justify-between">
      <router-link to="/">
        <CustomButton color="ghost">Wasteless Kitchen</CustomButton>
      </router-link>

      <div class="flex items-center gap-2">
        <p>{{ name }}</p>
        <div class="dropdown dropdown-left flex pr-5 gap-5">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-8 h-8 rounded-full">
              <img :src="profilePic" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <router-link to="/profile"> Profile </router-link>
            </li>

            <li><span @click="logout">Logout</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
export default {
  name: 'DesktopNavBar',
  components: { CustomButton },
  data() {
    return {
      name: this.$store.getters.getName,
      profilePic: this.$store.getters.getProfilePicture,
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
