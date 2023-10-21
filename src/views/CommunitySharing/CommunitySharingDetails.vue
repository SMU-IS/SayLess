<template>
  <div
    class="flex flex-col text-white justify-between items-center h-screen gap-4 lg:mb-44"
  >
    <DetailsHeader @header-click="goBack">
      {{ details.title }}
    </DetailsHeader>

    <div class="flex flex-col gap-6 mt-24 md:mt-36">
      <div class="carousel carousel-center rounded-box">
        <div
          v-for="imgData in details.allImages"
          :key="imgData.id"
          class="carousel-item"
        >
          <img src="../../assets/Food/Sourdough.jpg" class="w-52" />
        </div>
      </div>

      <div class="flex flex-col gap-1.5">
        <p class="text-sm">25 mins ago</p>
        <p class="text-sm">{{ details.name }}</p>
      </div>

      <CustomCard background="gray" width="full">
        <div class="flex flex-col text-left gap-1">
          <p class="text-gray text-xl">Pick Up Location</p>
          <p class="text-black-light pb-10">
            <!-- {{ details.location }} -->
            2 Bayfront Ave, B2-06, Singapore 018972
          </p>
        </div>
      </CustomCard>

      <CustomCard background="gray" width="full">
        <div class="flex flex-col text-left gap-1">
          <p class="text-gray text-xl">Description</p>
          <p class="text-black-light pb-10">
            {{ details.details }}
          </p>
        </div>
      </CustomCard>
    </div>

    <div class="w-full md:w-1/3 mb-14 md:mt-14">
      <CustomButton width="full" roundness="round" color="green"
        >Chat to Deal</CustomButton
      >
    </div>
  </div>
</template>

<script>
import DetailsHeader from '@/components/NavBar/DetailsHeader.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomCard from '@/components/Card/CustomCard.vue';

export default {
  name: 'CommunitySharingDetails',
  components: { DetailsHeader, CustomButton, CustomCard },
  data() {
    return {
      details: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    fetchData() {
      const data = this.$store.getters.getCommunityListings;
      const listingId = this.$route.params.id;
      const selectedListing = data.find((item) => item.id === listingId);

      if (selectedListing) {
        const {
          id,
          createdBy,
          isAvailable,
          listingTitle,
          listingDetails,
          listingImages,
          pickUpLocation,
        } = selectedListing;

        this.details = {
          id: id,
          name: createdBy.name,
          availablity: isAvailable,
          title: listingTitle,
          details: listingDetails,
          allImages: listingImages,
          location: pickUpLocation,
        };
      }
    },
  },
};
</script>