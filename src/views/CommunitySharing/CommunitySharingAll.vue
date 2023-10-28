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
          v-for="item in communityListings.slice().reverse()"
          :id="item.id"
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
            <div>
              <h2 class="card-title text-base">{{ item.listingTitle }}</h2>
              <p class="text-black-light text-xs mt-1">
                {{ item.pickUpLocation }}
              </p>
            </div>

            <div class="flex items-center gap-3 mt-2">
              <div class="avatar">
                <div v-if="item.createdBy.profilePic" class="w-8 rounded-full">
                  <img
                    :src="item.createdBy.profilePic"
                    referrerpolicy="no-referrer"
                  />
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

    <div class="fixed bottom-8 right-8 z-10" @click="navigateItem">
      <div
        class="btn text-white bg-green hover:bg-green-dark border-0 shadow-xl"
      >
        <div class="flex flex-row">
          <PlusIcon class="w-6 h-6 stroke-2 text-white mr-2" />
          <p>Add Listing</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import { scrollToTop } from '@/helpers/common';
import CustomInput from '@/components/Form/CustomInput.vue';
import { PlusIcon, UserIcon } from '@heroicons/vue/24/solid';

export default {
  name: 'CommunitySharingAll',
  components: { ParentHeader, CustomInput, PlusIcon, UserIcon },
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
      if (this.dataField) {
        return this.getCommunityListings.filter((item) => {
          return item.listingTitle
            .toLowerCase()
            .includes(this.dataField.toLowerCase());
        });
      }
      return this.getCommunityListings;
    },
  },
  created() {
    this.fetchCommunityListings();
    this.fetchUser();
  },
  methods: {
    ...mapActions(['fetchCommunityListings', 'fetchUser']),
    goBack() {
      this.$router.push('/');
    },
    getItemDetails(id) {
      this.$router.push(`/item/${id}`);
      scrollToTop();
    },
    navigateItem() {
      this.$router.push('/add-item');
    },
  },
};
</script>
