<template>
  <div class="flex flex-col gap-6 text-center px-6">
    <h3 class="text-white font-black text-4xl text-start font-sans mb-4">
      Add Item
    </h3>

    <div>
      <label
        for="image"
        class="block text-gray-200 text-xm font-bold text-start"
      >Image Upload</label>
      <ImageUpload />
    </div>

    <div>
      <label
        for="title"
        class="block mb-3 text-gray-200 text-xm font-bold text-start"
      >Title</label>
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
        class="block text-gray-200 text-xm font-bold text-start"
      >Description</label>
      <textarea
        id="description"
        v-model="description"
        placeholder="e.g. 2x cloves of garlic. Best Before 07 December 2023"
        rows="4"
        required
        class="bg-gray-100 mt-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:shadow-outline focus:bg-white focus:border-purple-500"
      />
    </div>
    <div>
      <label
        for="pickUpTime"
        class="block mb-3 text-gray-200 text-xm font-bold text-start"
      >Pick-up time</label>
      <CustomInput
        v-model="pickUpTime"
        type="text"
        placeholder="e.g. Today from 4-6pm"
        @enter-pressed="handleSubmit"
      />
    </div>

    <CustomButton class="btn--purple">
      Submit
    </CustomButton>
  </div>
</template>
<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import ImageUpload from '@/components/Form/ImageUpload.vue';

export default {
  name: 'AddItem',
  components: { CustomInput, ImageUpload, CustomButton },
  data: function () {
    return {
      title: '',
      description: '',
      pickUpTime: '',
    };
  },
  methods: {
    async handleSubmit() {
      return this.title, this.description, this.pickUpTime;
    },
  },
};
</script>
