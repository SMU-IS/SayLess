<template>
  <div class="">
    <div class="flex justify-between text-white">
      <h4>Community Sharing</h4>
      <h4 class="cursor-pointer" @click="viewAll">View All</h4>
    </div>

    <div class="grid md:grid-cols-3 mt-4 gap-5">
      <div
        v-for="item in getCommunityListings"
        :key="item.id"
        class="card card-side bg-white text-black shadow-xl rounded-lg cursor-pointer"
        @click="getItemDetails(item.id)"
      >
        <figure>
          <img
            src="../../assets/Food/Chip.jpg"
            alt="Movie"
            class="h-full w-32"
          />
        </figure>

        <div class="flex flex-col justify-center gap-2 p-5">
          <h2 class="card-title">{{ item.listingTitle }}</h2>
          <p class="text-black-light text-base">Lorem ipsum dolor sit amet</p>

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
