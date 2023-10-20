<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Community Sharing
  </ParentHeader>
  <div class="mx-auto md:mt-44 mt-28 w-full md:w-1/3">
    <CustomInput v-model="dataField" type="text" placeholder="Search Item..." />
  </div>

  <p class="md:text-center text-2xl mt-6 text-white">Current deals available</p>

  <div class="flex flex-col md:flex-row justify-center md:gap-4 mb-28">
    <div class="grid md:grid-cols-3 mt-5 gap-5">
      <div
        v-for="item in communityListings"
        :id="item.id"
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
import { mapActions, mapGetters } from 'vuex';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import { scrollToTop } from '@/helpers/common';
import CustomInput from '@/components/Form/CustomInput.vue';

export default {
  name: 'CommunitySharingAll',
  components: { ParentHeader, CustomInput },
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
      } else {
        return this.getCommunityListings;
      }
    },
  },
  mounted() {
    this.fetchCommunityListings();
  },
  methods: {
    ...mapActions(['fetchCommunityListings']),
    goBack() {
      this.$router.go(-1);
    },
    getItemDetails(id) {
      this.$router.push(`/item/${id}`);
      scrollToTop();
    },
  },
};
</script>
