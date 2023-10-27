<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Community Sharing
  </ParentHeader>
  <div>
    <div class="mx-auto md:mt-36 mt-28 w-full md:w-full">
      <CustomInput
        v-model="dataField"
        type="text"
        placeholder="Search Item..."
      />
    </div>

    <h4 class="text-white md:text-center mt-6">Current Listings Available</h4>

    <div class="flex flex-col md:flex-row justify-center md:gap-4">
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

    <div class="fixed bottom-8 right-8" @click="navigateItem">
      <div class="btn bg-green border-0 shadow-xl">
        <div class="flex flex-row">
          <PlusIcon class="w-6 h-6 text-black mr-2" />
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
    ...mapGetters(['getCommunityListings', 'getProfilePicture']),
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
    },
  },
};
</script>
