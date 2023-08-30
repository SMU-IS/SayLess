<template>
  <div>
    <div
      class="flex flex-col w-screen text-white p-5 justify-center items-center bg-gray-800 rounded-lg"
    >
      <h3 class="mb-4">
        What's in your fridge?
      </h3>

      <div class="rounded w-full">
        <div
          class="flex justify-between border bg-gray-900 rounded align-middle mb-2 overflow-hidden"
        >
          <input
            v-model="newTag"
            class="bg-transparent flex w-full px-4 py-2"
            placeholder="Enter Ingredients"
            @keyup.enter="addTag"
          >
          <button
            class="bg-teal-500 px-3"
            @click="addTag"
          >
            Add
          </button>
        </div>

        <div class="flex items-center flex-wrap mt-5 gap-3">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="bg-gray-700 px-3 py-1 mr-1 rounded-lg"
          >
            <button
              class="mr-2 bolded"
              @click="deleteTag(tag)"
            >x</button>{{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="py-5 px-3">
      <ListRecipe />
    </div>
  </div>
</template>
<script>
import ListRecipe from '@/components/Listings/ListRecipe.vue';

export default {
  components: {
    ListRecipe,
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
