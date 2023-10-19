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
            <h3>{{ listingData.personId }}</h3>
          </div>
        </div>
        <div class="container w-1/4 flex justify-end items-center">
          <img
            :src="listingData.profilePic"
            alt="Owner's Picture"
            class="owner-picture w-7 h-7 float-right rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div class="listing-content flex">
        <img
          :src="listingData.listingImage"
          alt="Listing Picture"
          class="listing-picture w-24"
        />
        <div class="container ms-4">
          <div class="listing-name">
            <p class="text-md font-semibold mb-2">
              {{ listingData.listingTitle }}
            </p>
          </div>
          <CustomButton
            v-if="!listingData.requested && sender !== listingData.personId"
            size="medium"
            roundness="round"
            color="primary"
            @click="requestItem"
            >Request Item</CustomButton
          >
          <CustomButton
            v-if="!listingData.accepted && sender == listingData.personId"
            size="small"
            roundness="round"
            color="primary"
            :disabled="!listingData.requested"
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

export default {
  name: 'ListingHeader',
  components: {
    CustomButton,
  },
  props: {
    listingData: {
      type: Object,
      required: true,
    },
    messages: {
      type: Object,
      required: true,
    },
    sender: {
      type: String,
      default: '',
    },
  },
  emits: ['accept', 'request'],
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    requestItem() {
      this.$emit('request', true);

      // console.log('xxx');
      // this.listingData.requested = true;
      // this.sendMessage('Requested');
    },
    acceptItem() {
      this.$emit('accept', true);

      // this.listingData.accepted = true;
      // this.sendMessage('Accepted');
      //   this.listingData.reservedFor = sender
    },
    formatTimestamp(timestamp) {
      const hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();

      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;
    },
    // sendMessage(message) {
    //   let currentTime = new Date();
    //   this.messages.push({
    //     sender: this.sender,
    //     messageText: message,
    //     timestamp: this.formatTimestamp(currentTime),
    //   });
    // },
  },
};
</script>
