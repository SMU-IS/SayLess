<template>
  <div class="">
    <div class="flex justify-between text-white">
      <h4>Community Sharing</h4>
      <h4 class="cursor-pointer" @click="viewAll">View All</h4>
    </div>

    <div class="grid md:grid-cols-3 lg:grid-cols-5 mt-4 gap-5">
      <div
        v-for="item in getCommunityListings"
        :key="item.id"
        class="card card-side bg-white text-black shadow-xl rounded-lg cursor-pointer md:max-w-sm w-full max-w-full flex md:block"
        @click="getItemDetails(item.id)"
      >
        <div
          class="h-full w-32 md:h-48 md:w-full flex-none bg-cover rounded-l md:rounded-l-none md:rounded-t text-center overflow-hidden"
          :style="'background-image: url(' + item.listingImages[0] + ')'"
          title="Woman holding a mug"
        ></div>

        <div class="flex flex-col justify-center gap-2 p-5">
          <h2 class="card-title text-base">{{ item.listingTitle }}</h2>
          <p class="text-black-light text-xs">Lorem ipsum dolor sit amet</p>

          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="w-8 rounded-full">
                <!-- <img :src="item.createdBy.profilePic" /> -->
                <img :src="getProfilePicture" />
              </div>
            </div>

            <p class="text-black-light text-xs">
              {{ item.createdBy.name }}
            </p>
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
    ...mapGetters(['getCommunityListings', 'getProfilePicture']),
  },
  created() {
    this.fetchCommunityListings();
  },
  methods: {
    ...mapActions(['fetchCommunityListings']),
    viewAll() {
      this.$router.push('/community');
      scrollToTop();
    },
    getItemDetails(id) {
      this.$router.push(`/item/${id}`);
      scrollToTop();
    },
  },
};
</script>
