<template>
  <div class="">
    <div class="flex justify-between items-end text-white">
      <h4>Community Sharing</h4>
      <h4 class="cursor-pointer text-base text-green" @click="viewAll">
        View All
      </h4>
    </div>

    <div class="grid md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5">
      <div
        v-for="item in showLimitedListings"
        :key="item.id"
        class="card card-side bg-white text-black shadow-xl rounded-lg cursor-pointer md:max-w-sm w-full max-w-full flex md:block"
        @click="getItemDetails(item.id)"
      >
        <!-- <div
          class="h-full w-32 md:h-48 md:w-full flex-none bg-cover rounded-l md:rounded-l-none md:rounded-t text-center overflow-hidden"
          :style="'background-image: url(' + item.listingImages[0] + ')'"
          title="Woman holding a mug"
        ></div> -->

        <div
          class="h-full w-32 md:h-48 md:w-full flex-none bg-cover rounded-l md:rounded-l-none md:rounded-t text-center overflow-hidden"
          :style="'background-image: url(src/assets/Food/Chip.jpg)'"
          title="Woman holding a mug"
        ></div>

        <div class="flex flex-col justify-center gap-2 p-5">
          <h2 class="card-title text-base">{{ item.listingTitle }}</h2>
          <p class="text-black-light text-xs">Lorem ipsum dolor sit amet</p>

          <div class="flex items-center gap-3">
            <div class="avatar">
              <div v-if="getProfilePicture" class="w-8 rounded-full">
                <!-- <img :src="item.createdBy.profilePic" /> -->
                <img :src="getProfilePicture" referrerpolicy="no-referrer" />
              </div>
              <UserIcon v-else class="w-4 h-auto" />
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
import { UserIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'CommunitySharing',
  components: { UserIcon },
  computed: {
    ...mapGetters(['getCommunityListings', 'getProfilePicture']),
    showLimitedListings() {
      if (this.getCommunityListings) {
        return this.getCommunityListings.slice(0, 5);
      }
      return this.getCommunityListings;
    },
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
