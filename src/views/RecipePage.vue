<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Recipe
  </ParentHeader>

  <div>
    <div class="mx-auto md:mt-32 mt-28 w-full md:w-1/3">
      <h4 class="text-white mb-4">Recipes</h4>

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
          <div v-for="(tag, i) in tags" :key="i">
            <ChipLabel @close-click="deleteTag(tag)">
              <p class="text-white">{{ tag }}</p>
            </ChipLabel>
          </div>
        </div>
      </div>

      <ListRecipe />
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/Button/IconButton.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import ListRecipe from '@/components/Listings/ListRecipe.vue';
import ChipLabel from '@/components/Chip/ChipLabel.vue';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';

export default {
  name: 'RecipePage',
  components: {
    ListRecipe,
    CustomInput,
    IconButton,
    ChipLabel,
    ParentHeader,
  },
  data() {
    return {
      newTag: '',
      tags: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
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
