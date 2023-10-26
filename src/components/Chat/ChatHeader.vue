<template>
  <div class="chat-header text-white border-b-2 pb-4">
    <div class="chat-header-content">
      <div class="owner-content flex mb-4">
        <div class="container w-1/4 flex justify-start">
          <CustomButton
            roundness="full"
            size="small"
            style="padding: 0px; background: none"
            @click="goBack"
          >
            <img
              src="@/assets/Icons/back.png"
              alt="Custom Icon"
              class="h-8 w-8"
            />
          </CustomButton>
        </div>
        <div class="container w-2/4 text-center">
          <div class="owner-name text-center">
            <h3>{{ correspondentObj.name }}</h3>
          </div>
        </div>
        <div class="container w-1/4 flex justify-end">
          <img
            :src="correspondentObj.profilePic"
            alt="Owner's Picture"
            class="owner-picture w-8 h-8 float-right rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div v-if="specificListing" class="listing-content flex">
        <img
          :src="specificListing.listingImages[0]"
          alt="Listing Picture"
          class="listing-picture w-24"
        />
        <div class="container ms-4">
          <div class="listing-name">
            <p class="text-md font-semibold mb-2">
              {{ specificListing.listingTitle }}
            </p>
          </div>
          <CustomButton
            v-if="
              specificListing.isAvailable && id !== specificListing.createdBy
            "
            size="medium"
            roundness="round"
            color="green"
            @click="requestItem"
            >Request Item</CustomButton
          >
          <CustomButton
            v-if="
              specificListing.isAvailable && id == specificListing.createdBy
            "
            size="small"
            roundness="round"
            color="green"
            :disabled="!specificListing.requested.includes(correspondentObj.id)"
            @click="acceptItem"
            >Accept Item</CustomButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ChatHeader',
  components: {
    CustomButton,
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
  },
  emits: ['accept', 'request'],
  data() {
    return {
      id: '6530d24110a9828679f8858a',
    };
  },
  computed: {
    ...mapGetters(['getCommunityListings']),
    specificListing() {
      return this.getCommunityListings.find(
        (listing) => listing.id === this.listingId,
      );
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
    requestItem() {
      this.$emit('request', this.specificListing.id);
    },
    acceptItem() {
      this.$emit('accept', this.specificListing.id);
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
