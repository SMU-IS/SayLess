<template>
  <div
    class="flex flex-col text-white text-center justify-center items-center md:h-screen gap-4 lg:mx-96"
  >
    <DetailsHeader @header-click="goBack">
      {{ data.title }}
    </DetailsHeader>

    <div class="flex flex-col items-center gap-12 my-28 md:mt-36">
      <div
        class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box"
      >
        <div class="carousel carousel-end rounded-box">
          <div
            v-for="imgData in data.allImages"
            :key="imgData.id"
            class="carousel-item"
          >
            <img :src="imgData" class="w-52" />
          </div>
        </div>
      </div>

      {{ data.name }}
      {{ data.details }}
      {{ data.location }}
      {{ data.owner }}
    </div>

    <CustomButton width="full" roundness="round" color="green"
      >Chat to Deal</CustomButton
    >
  </div>
</template>

<script>
import DetailsHeader from '@/components/NavBar/DetailsHeader.vue';
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'CommunitySharingDetails',
  components: { DetailsHeader, CustomButton },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async fetchData() {
      try {
        await this.$store.dispatch('getFoodListings');
        const data = this.$store.getters.getFood;
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

          this.data = {
            id: id,
            name: createdBy.name,
            availablity: isAvailable,
            title: listingTitle,
            details: listingDetails,
            allImages: listingImages,
            location: pickUpLocation,
          };
        }
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>
