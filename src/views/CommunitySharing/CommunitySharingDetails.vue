<template>
  <div
    class="pb-8 flex flex-col md:flex-row text-white justify-between items-center gap-4 lg:mb-44 mx-6 md:mx-12"
  >
    <DetailsHeader @header-click="goBack">{{ details.title }}</DetailsHeader>

    <div class="w-full flex flex-col gap-5 md:flex-row md:mt-48">
      <div class="flex flex-col gap-6 mt-24 md:mt-0 w-full md:w-1/2">
        <div class="p-2 bg-transparent rounded-xl">
          <div class="carousel w-full rounded-box">
            <div
              v-for="imgData in details?.allImages"
              :key="imgData?.id"
              class="carousel-item w-full h-72"
            >
              <img :src="imgData" class="w-full object-cover" />
            </div>
          </div>
        </div>

        <div class="flex flex-col order-last gap-3">
          <p class="text-sm">{{ details?.lastPosted }}</p>

          <div class="flex items-center gap-3">
            <div v-if="details.profilePic" class="avatar">
              <div class="w-8 rounded-full">
                <img :src="details.profilePic" referrerpolicy="no-referrer" />
              </div>
            </div>
            <div v-else class="avatar placeholder">
              <div class="bg-white text-black rounded-full w-8">
                <span class="text-xs">{{
                  details?.name?.split('@')[0].slice(0, 1).toUpperCase()
                }}</span>
              </div>
            </div>

            <p v-if="details?.profilePic" class="text-sm">
              {{ details.name }}
            </p>

            <p v-else class="text-white text-sm">
              {{ details?.name?.split('@')[0] }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 mt-3 md:mt-0">
        <div class="p-2 bg-transparent rounded-xl">
          <CustomCard background="gray" width="full" class="mb-4">
            <div class="flex flex-col text-left gap-1">
              <p class="text-gray text-xl">Pick Up Location</p>
              <p class="text-black-light pb-10">
                {{ details?.location }}
              </p>
            </div>
          </CustomCard>

          <CustomCard background="gray" width="full">
            <div class="flex flex-col text-left gap-1">
              <p class="text-gray text-xl">Description</p>
              <p class="text-black-light pb-10">
                {{ details?.details }}
              </p>
            </div>
          </CustomCard>

          <CustomButton
            v-if="details.createdId == getId"
            width="full"
            roundness="round"
            color="green"
            @click="viewChat('')"
            >View Chats</CustomButton
          >
          <CustomButton
            v-else-if="details.createdId !== getId && checkExistingChat"
            width="full"
            roundness="round"
            color="green"
            @click="viewChat(details.id)"
            >View Chat</CustomButton
          >
          <CustomButton
            v-else
            width="full"
            roundness="round"
            color="green"
            @click="createChatRoom"
          >
            <span v-if="isLoading"> <CustomLoader color="white" /> </span>
            <span v-else> Chat to Deal </span>
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
import { mapActions, mapGetters } from 'vuex';
import { calculateTimeSincePosted } from '@/helpers/common';
import CustomLoader from '@/components/Loader/CustomLoader.vue';

export default {
  name: 'CommunitySharingDetails',
  components: { DetailsHeader, CustomButton, CustomCard, CustomLoader },
  data() {
    return {
      details: [],
      chatrooms: [],
      listingId: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(['getCommunityListings', 'getUserDetails', 'getChatRooms']),
    checkExistingChat() {
      if (this.chatrooms) {
        return this.chatrooms.some((result) => {
          if (result.listing[0]?.id === this.listingId) {
            const participants = result.participants;
            if (participants && participants?.length === 2) {
              const [participant1, participant2] = participants;
              return (
                participant1.id === this.getUserDetails.userData.id ||
                participant2.id === this.getUserDetails.userData.id
              );
            }
          }
          return false;
        });
      }
      return false;
    },
    getId() {
      return this.getUserDetails?.userData.id;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions(['fetchChatRoomDetails']),
    goBack() {
      this.$router.go(-1);
    },
    fetchData() {
      const data = this.getCommunityListings;
      if (this.getChatRooms) {
        this.chatrooms = this.getChatRooms;
      }
      this.listingId = this.$route.params.id;
      const selectedListing = data.find((item) => item.id === this.listingId);

      if (selectedListing) {
        const {
          id,
          createdBy,
          isAvailable,
          listingTitle,
          listingDetails,
          listingImages,
          pickUpLocation,
          createdOn,
        } = selectedListing;

        this.details = {
          id: id,
          createdId: createdBy.id,
          name: createdBy.name ? createdBy.name : createdBy.email,
          profilePic: createdBy.profilePic,
          availablity: isAvailable,
          title: listingTitle,
          details: listingDetails,
          allImages: listingImages,
          location: pickUpLocation,
          lastPosted: calculateTimeSincePosted(createdOn),
        };
      }
    },
    viewChat(listingid) {
      if (listingid !== null && listingid !== undefined && listingid != '') {
        const selectedChatRoom = this.chatrooms.find(
          (item) => item.listing[0].id === listingid,
        );
        this.$router.push(`/message/${selectedChatRoom.id}`);
      } else {
        this.$router.push('/message');
      }
    },
    createChatRoom() {
      this.isLoading = true;
      const participants = [
        this.getUserDetails.userData.id,
        this.details.createdId,
      ];
      this.$store
        .dispatch('createChatRoom', {
          participants: participants,
          listing: this.details.id,
        })
        .then((id) => {
          let initialLength;
          if (this.getChatRooms === null) {
            initialLength = 0;
          } else {
            initialLength = this.getChatRooms.length;
          }
          this.fetchChatRoomDetails();
          const waitForLengthIncrease = () => {
            if (this.getChatRooms) {
              if (this.getChatRooms.length >= initialLength + 1) {
                this.$router.push(`/message/${id}`);
              } else {
                setTimeout(waitForLengthIncrease, 100);
              }
            } else {
              setTimeout(waitForLengthIncrease, 100);
            }
          };
          waitForLengthIncrease();
          this.isLoading = false;
        });
    },
  },
};
</script>
