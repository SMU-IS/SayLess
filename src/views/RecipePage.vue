<template>
  <div>
    <div
      class="flex flex-col w-screen text-white p-5 justify-center items-center bg-gray-800 rounded-lg"
    >
      <h3 class="mb-4">
        What's in your fridge?
      </h3>

      <div class="w-full">
        <div class="flex items-center gap-3">
          <CustomInput
            v-model="newTag"
            type="text"
            placeholder="Enter Ingredients"
            @enter-pressed="addTag"
          />

          <IconButton @click="addTag" />
        </div>

        <div class="flex items-center flex-wrap mt-5 gap-3">
          <div
            v-for="(tag, i) in tags"
            :key="i"
          >
            <ChipLabel @close-click="deleteTag(tag)">
              {{ tag }}
            </ChipLabel>
          </div>
        </div>
      </div>
    </div>

    <ListRecipe />
  </div>
</template>

<script>
import IconButton from '@/components/Button/IconButton.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import ListRecipe from '@/components/Listings/ListRecipe.vue';
import ChipLabel from '@/components/Chip/ChipLabel.vue';

export default {
  components: {
    ListRecipe,
    CustomInput,
    IconButton,
    ChipLabel,
  },
  data() {
    return {
      newTag: '',
      tags: [],
    };
  },
  methods: {
    addTag() {
      if (!this.newTag) return;
      this.tags.push(this.newTag);
      this.addData();
      this.newTag = '';
    },
    deleteTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    async addData() {
      try {
        this.$store.dispatch('addRecipes', {
          ingredientsList: this.tags,
        });
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>
