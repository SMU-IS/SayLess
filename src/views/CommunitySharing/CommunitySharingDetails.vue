<template>
  <div
    class="overflow-scroll pb-8 flex flex-col md:flex-row text-white justify-between items-center h-screen gap-4 lg:mb-44 mx-6 md:mx-12"
  >
    <DetailsHeader @header-click="goBack">{{ details.title }}</DetailsHeader>

    <div class="flex flex-col gap-5 md:flex-row md:mt-28">
      <div class="flex flex-col gap-6 mt-24 md:mt-0 w-full md:w-1/2">
        <div class="p-2 bg-transparent rounded-xl">
          <div class="carousel w-full rounded-box">
            <div
              v-for="imgData in details.allImages"
              :key="imgData.id"
              class="carousel-item w-full"
            >
              <img :src="imgData" class="object-cover" />
            </div>
          </div>
        </div>

        <div class="flex flex-col order-last gap-1.5">
          <p class="text-sm">25 mins ago</p>
          <p class="text-sm">{{ details.name }}</p>
        </div>
      </div>

      <div class="w-full md:w-1/2 mt-6 md:mt-0">
        <div class="p-2 bg-transparent rounded-xl">
          <CustomCard background="gray" width="full" class="mb-4">
            <div class="flex flex-col text-left gap-1">
              <p class="text-gray text-xl">Pick Up Location</p>
              <p class="text-black-light pb-10">
                {{ details.location }}
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

          <CustomButton
            width="full"
            roundness="round"
            color="green"
            class="mt-4"
            @click="createChatRoom"
          >
            Chat to Deal
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsHeader from '@/components/NavBar/DetailsHeader.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomCard from '@/components/Card/CustomCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'CommunitySharingDetails',
  components: { DetailsHeader, CustomButton, CustomCard },
  data() {
    return {
      details: [],
      id: '6530d24110a9828679f8858a',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(['fetchChatRoomDetails']),
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
    createChatRoom() {
      const participants = [this.id, '653297865a3478ad39210492'];
      this.$store
        .dispatch('createChatRoom', {
          participants: participants,
          listing: this.details.id,
        })
        .then((id) => {
          this.fetchChatRoomDetails();
          this.$store.watch(
            (state, getters) => getters.getChatRooms,
            (newValue) => {
              if (newValue) {
                this.$router.push(`/message/${id}`);
              }
            },
          );
        });
    },
  },
};
</script>
