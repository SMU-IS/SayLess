<template>
  <h3>Community Sharing</h3>
  <div class="grid md:grid-cols-3 justify-center mt-8 gap-5 md:mx-32">
    <div
      v-for="item in foodList"
      :key="item.id"
      class="cursor-pointer card card-side bg-white shadow-xl md:flex-col md:justify-center md:pb-10 gap-12 items-center md:p-0 md:gap-5 pr-7"
    >
      <figure>
        <img :src="item.listingImages[0]" class="md:w-full" />
      </figure>
      <div>
        <h2 class="card-title text-black">{{ item.listingTitle }}</h2>
        <p>Expiry Date 10/10/2023</p>
      </div>
    </div>
  </div>

  <CustomDrawer
    drawer-title="You joined Challenge 1!"
    drawer-subtitle="Do you want to complete the challenge now?"
    button-false="Not now"
    button-true="Yes, take me there!"
  >
    Get an item for free from the Community Sharing page
  </CustomDrawer>
</template>

<script>
import { openDrawer } from '@/helpers/common';
import CustomDrawer from '@/components/Modal/CustomDrawer.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CommunitySharing',
  components: { CustomDrawer },
  computed: {
    ...mapGetters(['getFood']),
    foodList() {
      return JSON.parse(JSON.stringify(this.getFood));
    },
  },
  mounted() {
    this.getFoodListings();
  },
  methods: {
    ...mapActions(['getFoodListings']),
    showDrawer() {
      openDrawer();
    },
  },
};
</script>
