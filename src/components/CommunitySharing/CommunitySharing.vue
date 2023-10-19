<template>
  <div class="w-full">
    <div class="flex justify-between items-baseline">
      <h4 class="text-white">Community sharing</h4>
      <h4 class="text-sm text-green">View All</h4>
    </div>

    <div class="grid md:grid-cols-3 mt-4 gap-5">
      <div
        v-for="item in foodList"
        :key="item.id"
        class="md:max-w-sm w-full max-w-full flex md:block rounded"
        @click="getItemDetails(item.id)"
      >
        <div
          class="h-full w-32 md:h-48 md:w-full flex-none bg-cover rounded-l md:rounded-l-none md:rounded-t text-center overflow-hidden"
          :style="'background-image: url(' + item.listingImages[0] + ')'"
          title="Woman holding a mug"
        ></div>

        <div
          class="w-full bg-white rounded-r md:rounded-b-none md:rounded-b p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-4 md:mb-8">
            <p class="text-sm text-gray-600 flex items-center">Members only</p>
            <div class="text-gray-900 font-bold text-md mb-2">
              {{ item.listingTitle }}
            </div>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="flex items-center">
            <img
              class="w-7 h-7 md:w-10 md:h-10 rounded-full mr-4"
              :src="item.listingImages[0]"
              alt="Avatar of Jonathan Reinink"
            />
            <div>
              <p class="text-gray-900 leading-none text-xs">Jonathan Reinink</p>
              <p class="text-gray-600 text-xs">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { scrollToTop } from '@/helpers/common';
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
    getItemDetails(id) {
      this.$router.push(`/item/${id}`);
      scrollToTop();
    },
  },
};
</script>
