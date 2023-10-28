<template>
  <div>
    <div class="flex justify-between items-end text-white">
      <h4>Community Sharing</h4>
      <h4 class="cursor-pointer text-base text-green" @click="viewAll">
        View All
      </h4>
    </div>

    <div class="grid md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5">
      <div
        v-for="item in showLimitedListings"
        :key="item?.id"
        class="card card-side bg-white text-black shadow-xl rounded-lg cursor-pointer md:max-w-sm w-full max-w-full flex md:block"
        @click="getItemDetails(item.id)"
      >
        <div
          class="h-full w-32 md:h-48 md:w-full flex-none bg-cover rounded-l md:rounded-l-none md:rounded-t text-center overflow-hidden"
          :style="'background-image: url(' + item?.listingImages[0] + ')'"
        ></div>

        <div class="flex flex-col justify-center gap-2 p-5">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <h2 class="card-title text-base">{{ item?.listingTitle }}</h2>
              <p class="text-black-light text-xs mt-1">
                {{ item?.pickUpLocation }}
              </p>
            </div>
            <p class="text-xs mt-1 md:block hidden">
              {{ calTimeSincePosted(item?.createdOn) }}
            </p>
          </div>

          <div class="flex items-center gap-3 mt-2">
            <div class="avatar">
              <div v-if="item?.createdBy.profilePic" class="w-8 rounded-full">
                <img
                  :src="item?.createdBy.profilePic"
                  referrerpolicy="no-referrer"
                />
              </div>
              <UserIcon v-else class="w-4 h-auto mt-2" />
            </div>

            <p v-if="item.createdBy.name" class="text-black-light text-xs">
              {{ item.createdBy.name }}
            </p>

            <p v-else class="text-black-light text-xs mt-2">Anonymous User</p>
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
import { calculateTimeSincePosted } from '@/helpers/common';

export default {
  name: 'CommunitySharing',
  components: { UserIcon },
  computed: {
    ...mapGetters(['getCommunityListings', 'getUserDetails']),
    showLimitedListings() {
      return this.getCommunityListings?.slice().reverse().slice(0, 4);
    },
  },
  mounted() {
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
    calTimeSincePosted(data) {
      return calculateTimeSincePosted(data);
    },
  },
};
</script>
