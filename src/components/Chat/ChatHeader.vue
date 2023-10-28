<template>
  <div class="chat-header text-white border-b-2 pb-4 px-6 md:px-12 lg:px-20">
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
            <h3 class="text-sm">{{ correspondentObj.name }}</h3>
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
              specificListing.isAvailable && id !== specificListing.createdBy.id
            "
            size="small"
            roundness="round"
            color="green"
            :disabled="specificListing.requested.some((obj) => obj.id === id)"
            @click="requestItem"
            >Request Item</CustomButton
          >
          <CustomButton
            v-if="
              specificListing.isAvailable && id == specificListing.createdBy.id
            "
            size="small"
            roundness="round"
            color="green"
            :disabled="
              !specificListing.requested.some(
                (obj) => obj.id === correspondentObj.id,
              )
            "
            @click="closeDeal"
            >Close Deal</CustomButton
          >
          <!-- <CustomButton
            v-if="
              specificListing.reservedFor != null
            "
            size="small"
            roundness="round"
            color="gray"
            disabled
            >Reserved</CustomButton
          > -->
          <!-- <CustomButton
            v-if="
              specificListing.reservedFor.id === correspondentObj.id && isAvailable
            "
            size="small"
            roundness="round"
            color="green"
            @click="closeDeal"            
            >Close Deal</CustomButton
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { mapGetters } from 'vuex';

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
  // add a close
  emits: ['close', 'request'],
  data() {
    return {
      id: '6530d24110a9828679f8858a',
    };
  },

  computed: {
    ...mapGetters(['getCommunityListings', 'getUserDetails']),
    specificListing() {
      return this.getCommunityListings.find(
        (listing) => listing.id === this.listingId,
      );
    },
    // isAlreadyRequested() {
    //   this.specificListing.requested.some(obj => obj.id === this.id)
    //   return this.specificListing.requested.some(obj => obj.id === this.id);
    // },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    requestItem() {
      this.$emit('request', this.specificListing.id);
    },
    closeDeal() {
      this.$emit('close', this.specificListing.id);
    },
    // closeDeal() {
    //   this.$emit('close', this.correspondentObj);
    // },
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
