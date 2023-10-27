<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Add Item
  </ParentHeader>
  <div
    class="flex flex-col md:w-1/2 md:mx-auto md:gap-4 mt-28 gap-6 mx-6 mb-12"
  >
    <div>
      <label
        for="image"
        class="block text-white text-xm font-bold text-start mb-2"
        >Listing Photo</label
      >
      <ImageUpload @image-changed="handleImageChanged" />
    </div>
    <div>
      <label
        for="title"
        class="block mb-2 text-white text-xm font-bold text-start"
        >Title</label
      >
      <CustomInput
        v-model="title"
        type="text"
        placeholder="e.g Canned Tuna"
        @enter-pressed="handleAdd"
      />
    </div>
    <div>
      <label
        for="Description"
        class="block mb-2 text-white text-xm font-bold text-start"
        >Description</label
      >
      <textarea
        id="description"
        v-model="description"
        placeholder="e.g. 2x cloves of garlic. Best Before 07 December 2023"
        rows="4"
        required
        class="bg-gray-100 appearance-none border-0 rounded w-full py-3 px-4 text-black leading-tight"
        @enter-pressed="handleAdd"
      />
    </div>
    <div>
      <label
        for="pickUpTime"
        class="block mb-2 text-white text-xm font-bold text-start"
        >Pick-up Location</label
      >
      <CustomInput
        v-model="location"
        type="text"
        placeholder="e.g. Today at Bedok"
        @enter-pressed="handleAdd"
      />
    </div>
    <CustomButton color="green" size="medium" width="full" @click="handleAdd">
      <span v-if="isLoading">
        <CustomLoader :loading="isLoading" />
      </span>
      <p v-else>Submit</p>
    </CustomButton>

    <CongratsModal
      modal-id="congrats_3"
      modal-title="You've got an achievement"
      modal-subtitle="You completed Challenge 3"
      button-text="Collect Reward"
    />
  </div>
</template>
<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import ImageUpload from '@/components/Form/ImageUpload.vue';
import { mapActions, mapGetters } from 'vuex';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import { validateForm } from '@/helpers/validateForm';
import { getResponse } from '@/helpers/getResponse';
import CustomLoader from '@/components/Loader/CustomLoader.vue';
import { openModal } from '@/helpers/common';
import CongratsModal from '@/components/Modal/CongratsModal.vue';

export default {
  name: 'AddItem',
  components: {
    CustomInput,
    ImageUpload,
    CustomButton,
    ParentHeader,
    CustomLoader,
    CongratsModal,
  },
  data() {
    return {
      images: [],
      title: '',
      description: '',
      location: '',
      childImage: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(['getQuestData']),
    getChallengeStatus() {
      return this.getQuestData[2].status;
    },
  },
  methods: {
    ...mapActions(['postCommunityListings']),
    goBack() {
      this.$router.go(-1);
    },
    showModal(modal) {
      openModal(modal);
    },
    handleImageChanged(imageUrl) {
      this.childImage = imageUrl;
    },
    async handleAdd() {
      this.isLoading = true;
      if (
        validateForm(this.title) &&
        validateForm(this.description) &&
        validateForm(this.location)
      ) {
        this.images.push(this.childImage);

        try {
          const data = {
            listingImages: this.images,
            listingTitle: this.title,
            listingDetails: this.description,
            pickUpLocation: this.location,
          };

          await this.$store.dispatch('postCommunityListings', data);
          if (this.getChallengeStatus === 'In Progress') {
            this.isLoading = false;
            this.showModal('congrats_3');
          } else {
            getResponse('success', 'Added to Community market place!');
            this.$router.push('/community');
          }
        } catch (err) {
          this.isLoading = false;
          getResponse('error', getErrorMessage(err.message));
        }
        this.images = [];
        this.title = '';
        this.description = '';
        this.location = '';
      } else {
        this.isLoading = false;
        getResponse('error', 'Fill in all the fields');
      }
    },
  },
};
</script>
