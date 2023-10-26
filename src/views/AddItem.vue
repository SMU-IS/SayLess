<template>
  <div class="flex flex-col gap-6 text-center">
    <h3 class="text-white font-bold text-2xl text-start mt-8 mb-2">Add Item</h3>
    <div>
      <label
        for="image"
        class="block text-white-light text-xm font-bold text-start mb-2"
        >Listing Photo</label
      >
      <ImageUpload />
    </div>
    <div>
      <label
        for="title"
        class="block mb-2 text-white-light text-xm font-bold text-start"
        >Title</label
      >
      <CustomInput
        v-model="title"
        type="text"
        placeholder="e.g Canned Tuna"
        @enter-pressed="handleSubmit"
      />
    </div>
    <div>
      <label
        for="Description"
        class="block text-white-light text-xm font-bold text-start"
        >Description</label
      >
      <textarea
        id="description"
        v-model="description"
        placeholder="e.g. 2x cloves of garlic. Best Before 07 December 2023"
        rows="4"
        required
        class="mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:shadow-outline focus:bg-white focus:border-purple-500"
      />
    </div>
    <div>
      <label
        for="pickUpTime"
        class="block mb-2 text-white-light text-xm font-bold text-start"
        >Pick-up Location</label
      >
      <CustomInput
        v-model="location"
        type="text"
        placeholder="e.g. Today at Bedok"
      />
    </div>

    <CustomButton color="green" size="medium" width="full" @click="handleAdd">
      Submit
    </CustomButton>
  </div>
</template>
<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import ImageUpload from '@/components/Form/imageUpload.vue';
import { mapActions } from 'vuex';

export default {
  name: 'AddItem',
  components: { CustomInput, ImageUpload, CustomButton },
  data() {
    return {
      images: [],
      title: '',
      description: '',
      location: '',
    };
  },
  created() {
    this.postCommunityListings();
  },
  methods: {
    ...mapActions(['postCommunityListings']),

    async handleSubmit() {
      return this.images, this.title, this.description, this.pickUpTime;
    },

    async handleAdd() {
      try {
        await this.$store.dispatch('postCommunityListings', {
          listingTitle: this.title,
          listingDetails: this.description,
          pickUpLocation: this.location,
        });
      } catch (err) {
        getResponse('error', getErrorMessage(err.message));
      }

      this.images = '';
      this.title = '';
      this.description = '';
      this.location = '';
    },
  },
};
</script>
