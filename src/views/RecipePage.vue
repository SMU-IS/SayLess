<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Recipe
  </ParentHeader>

  <div>
    <!-- <div class="mx-auto md:mt-32 mt-28 w-full md:w-1/3"> -->
    <div class="mt-28">
      <h4 class="text-white mb-4">Your Inventory</h4>

      <div class="w-full">
        <div class="flex items-start gap-3">
          <div class="w-full relative" @blur="hidePrompt">
            <CustomInput
              v-model="newTag"
              type="text"
              placeholder="Enter Ingredients"
              @enter-pressed="addTag"
            />
            <!-- Prompt -->
            <ul
              v-if="newTag.length > 0"
              class="max-h-80 overflow-scroll absolute top-100 left-0 w-full z-10"
            >
              <template v-for="(catPrompt, category) in prompt" :key="category">
                <li
                  class="bg-gray-200 appearance-none border-2 border-gray-200 w-full py-3 px-4 text-gray-500 leading-tight focus:shadow-outline focus:bg-white focus:border-purple-500 hover:bg-gray-300"
                >
                  {{ category }}
                </li>
                <li
                  v-for="(item, index) in catPrompt"
                  :key="index"
                  class="pl-10 bg-gray-100 appearance-none border-2 border-gray-200 w-full py-3 px-4 text-gray-700 leading-tight focus:shadow-outline focus:bg-white focus:border-purple-500 hover:bg-gray-300"
                  @click="addPrompt(item)"
                >
                  {{ item }}
                </li>
              </template>
            </ul>
          </div>
          <IconButton class="mt-4 block" @click="addTag" />
        </div>

        <div class="flex items-center flex-wrap mt-5 gap-3">
          <div v-for="(tag, i) in tags" :key="i">
            <ChipLabel settings="cross" @chip-click="deleteTag(tag)">
              <p class="text-white">{{ tag }}</p>
            </ChipLabel>
          </div>
        </div>
      </div>
      <div class="w-full mt-5">
        <h4>Suggestions</h4>
        <div class="flex items-center flex-wrap mt-3 gap-3">
          <div v-for="(item, i) in getRecipePrompt" :key="i">
            <ChipLabel
              settings="plus"
              color="offwhite"
              @chip-click="addSuggestions(item.ingredient)"
            >
              <p class="text-white">{{ item.ingredient }}</p>
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
import { mapGetters } from 'vuex';

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
      promptDICT: {
        'Pantry Essentials': ['onion', 'otsad'],
        'Vegetables & Greens': ['onion'],
        Mushrooms: ['onion'],
        Meat: ['bacon', 'ham'],
      },
      prompt: {},
    };
  },
  computed: {
    ...mapGetters(['getRecipePrompt', 'getIngredient']),
  },
  watch: {
    newTag: function (tagnew) {
      let PATTERN = tagnew;
      let newPrompt = {};
      for (const category in this.promptDICT) {
        let filteredArr = this.promptDICT[category].filter(function (str) {
          return str.includes(PATTERN);
        });
        if (filteredArr.length > 0) {
          newPrompt[category] = filteredArr;
        }
      }
      this.prompt = newPrompt;
    },
  },
  mounted() {
    this.tags = this.getIngredient;
    this.addData();
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
    addPrompt(item) {
      this.tags.push(item);
      this.newTag = '';
    },
    addSuggestions(tag) {
      this.tags.push(tag);
      this.addData();
    },
    deleteTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
      this.addData();
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
