<template>
  <div class="chat-header text-white border-b-2 pb-4 px-6 md:px-12 lg:px-20">
    <div class="chat-header-content">
      <div class="owner-content flex mb-4 items-center">
        <div class="container w-1/4 flex justify-start">
          <CustomButton
            roundness="full"
            size="small"
            color="ghost"
            @click="goBack"
          >
            <ArrowLeftIcon class="w-6 h-auto text-white" />
          </CustomButton>
        </div>
        <div class="container w-2/4 text-center">
          <div class="owner-name text-center">
            <h3 class="text-sm">{{ correspondentObj.name }}</h3>
          </div>
        </div>
        <div class="container w-1/4 flex justify-end">
          <img
            :src="correspondentObj.profilePic"
            alt="Owner's Picture"
            class="owner-picture w-8 h-8 float-right rounded-full border-white"
          />
        </div>
      </div>
      <div v-if="specificListing" class="listing-content flex">
        <img
          :src="specificListing.listingImages[0]"
          alt="Listing Picture"
          class="listing-picture w-16 h-16 object-cover"
        />
        <div class="container ms-4">
          <div class="listing-name">
            <p class="text-xs font-semibold mb-2">
              {{ specificListing.listingTitle }}
            </p>
          </div>
          <CustomButton
            v-if="
              specificListing.isAvailable &&
              getId !== specificListing.createdBy.id
            "
            size="small"
            roundness="round"
            :color="
              specificListing.requested.some((obj) => obj.id === getId)
                ? 'disabled'
                : 'green'
            "
            :disabled="
              specificListing.requested.some((obj) => obj.id === getId)
            "
            @click="requestItem"
            >{{ isLoading ? 'Loading...' : 'Request Item' }}</CustomButton
          >
          <CustomButton
            v-if="
              specificListing.isAvailable &&
              getId == specificListing.createdBy.id
            "
            size="small"
            roundness="round"
            :color="
              !specificListing.requested.some(
                (obj) => obj.id === correspondentObj.id,
              )
                ? 'disabled'
                : 'green'
            "
            :disabled="
              !specificListing.requested.some(
                (obj) => obj.id === correspondentObj.id,
              )
            "
            @click="closeDeal"
            >{{
              isLoadingCloseDeal ? 'Loading...' : 'Close Deal'
            }}</CustomButton
          >
          <CustomButton
            v-if="!specificListing.isAvailable"
            size="small"
            roundness="round"
            color="gray"
            disabled
            >Deal Closed</CustomButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { mapGetters } from 'vuex';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'ChatHeader',
  components: {
    CustomButton,
    ArrowLeftIcon,
  },
  props: {
    listingId: {
      type: String,
      default: '',
    },
    messages: {
      type: Object,
      required: true,
    },
    correspondentObj: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    isLoadingCloseDeal: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close', 'request'],
  computed: {
    ...mapGetters(['getCommunityListings', 'getUserDetails']),
    specificListing() {
      const listing = this.getCommunityListings.find(
        (listing) => listing.id === this.listingId,
      );
      return listing;
    },
    getId() {
      return this.getUserDetails?.userData.id;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async requestItem() {
      this.$emit('request', this.specificListing.id);
    },
    closeDeal() {
      this.$emit('close', this.specificListing.id);
    },
    formatTimestamp(timestamp) {
      const hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();

      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;
    },
  },
};
</script>
