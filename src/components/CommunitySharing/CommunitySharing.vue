<template>
  <div class="flex justify-between items-center md:mx-36">
    <h3>Community Sharing</h3>
    <h4>View All</h4>
  </div>

  <div class="grid md:grid-cols-3 justify-center mt-4 gap-5 md:mx-32">
    <div
      v-for="item in foodList"
      :key="item.id"
      class="cursor-pointer card card-side bg-white shadow-xl md:flex-col md:justify-center md:pb-10 gap-12 items-center md:p-0 md:gap-5 pr-7"
      @click="getItemDetails(item.id)"
    >
      <figure>
        <img :src="item.listingImages[0]" class="md:w-full" />
      </figure>
      <div>
        <h3 class="text-black">{{ item.listingTitle }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CommunitySharing',
  computed: {
    ...mapGetters(['getFood']),
    foodList() {
      const data = JSON.parse(JSON.stringify(this.getFood));
      const showLimitedItems = data.slice(0, 3);
      return showLimitedItems;
    },
  },
  mounted() {
    this.getFoodListings();
  },
  methods: {
    ...mapActions(['getFoodListings']),
    getItemDetails() {
      // console.log(id);
    },
  },
};
</script>
