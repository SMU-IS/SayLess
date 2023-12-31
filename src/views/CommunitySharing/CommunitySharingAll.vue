<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Community Sharing
  </ParentHeader>
  <div>
    <div class="mx-auto md:mt-36 mt-28 w-full md:w-full">
      <h4 class="text-white mb-4">Current Listings Available</h4>
      <CustomInput
        v-model="dataField"
        type="text"
        placeholder="Search Item..."
      />
    </div>

    <div class="flex flex-col md:flex-row justify-center md:gap-4 mt-6">
      <div class="w-full grid md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5">
        <div
          v-for="item in communityListings?.slice().reverse().slice(0, 20)"
          :id="item?.id"
          :key="item?.id"
          class="card card-side bg-white text-black shadow-xl rounded-lg cursor-pointer md:max-w-sm w-full max-w-full flex md:block"
          @click="getItemDetails(item?.id)"
        >
          <div
            class="h-full w-32 md:h-48 lg:h-60 xl:h-72 md:w-full flex-none bg-cover rounded-l md:rounded-l-none md:rounded-t text-center overflow-hidden"
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
              <div v-if="item?.createdBy.profilePic" class="avatar">
                <div class="w-8 rounded-full">
                  <img
                    :src="item.createdBy.profilePic"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
              <div v-else class="avatar placeholder">
                <div class="bg-black text-white rounded-full w-8">
                  <span class="text-xs">{{
                    item?.createdBy.email
                      .split('@')[0]
                      .slice(0, 1)
                      .toUpperCase()
                  }}</span>
                </div>
              </div>

              <p v-if="item?.createdBy.name" class="text-black-light text-xs">
                {{ item?.createdBy.name }}
              </p>

              <p v-else class="text-black-light text-xs">
                {{ item?.createdBy.email.split('@')[0] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-8 right-8 z-10" @click="navigateItem">
      <div
        class="btn text-white bg-green hover:bg-green-dark border-0 shadow-xl"
      >
        <div class="flex flex-row items-center">
          <PlusIcon class="w-5 h-5 stroke-2 text-white mr-2" />
          <p class="text-sm">Add Listing</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import { scrollToTop, calculateTimeSincePosted } from '@/helpers/common';
import CustomInput from '@/components/Form/CustomInput.vue';
import { PlusIcon } from '@heroicons/vue/24/solid';

export default {
  name: 'CommunitySharingAll',
  components: { ParentHeader, CustomInput, PlusIcon },
  data() {
    return {
      details: [],
      dataField: '',
      filteredDetails: [],
    };
  },
  computed: {
    ...mapGetters(['getCommunityListings', 'getUserDetails']),
    communityListings() {
      const availableListings = this.getCommunityListings?.filter(
        (item) => item?.isAvailable === true,
      );
      if (this.dataField) {
        return availableListings?.filter((item) => {
          return item?.listingTitle
            .toLowerCase()
            .includes(this.dataField.toLowerCase());
        });
      }
      return availableListings;
    },
  },
  mounted() {
    this.fetchCommunityListings();
  },
  methods: {
    ...mapActions(['fetchCommunityListings']),
    goBack() {
      this.$router.push('/');
    },
    getItemDetails(id) {
      this.$router.push(`/item/${id}`);
      scrollToTop();
    },
    navigateItem() {
      this.$router.push('/add-item');
      scrollToTop();
    },
    calTimeSincePosted(data) {
      return calculateTimeSincePosted(data);
    },
  },
};
</script>
