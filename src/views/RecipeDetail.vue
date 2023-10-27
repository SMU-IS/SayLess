<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Recipe
  </ParentHeader>

  <div v-if="getRecipeDetailInit">
    <!-- <div class="mx-auto md:mt-32 mt-28 w-full md:w-1/3"> -->
    <div class="mt-28">
      <div class="w-full">
        <div class="grid md:grid-cols-2 gap-5">
          <img :src="getRecipeDetail.recipe.img" class="w-full" />
          <div class="md:ml-5">
            <h3 class="text-white-dark text-2xl">
              {{ getRecipeDetail.recipe.title }}
            </h3>
            <p>
              {{ getRecipeDetail.recipe.displayurl }}
            </p>
            <div v-if="getRecipeDetail.attribs.rating" class="flex my-2">
              <StarIcon
                v-for="(item, index) in Math.floor(
                  getRecipeDetail.attribs.rating,
                )"
                :key="index"
                class="w-5"
              />
              <StarIconOutline
                v-for="(item, index) in 5 -
                Math.floor(getRecipeDetail.attribs.rating)"
                :key="index"
                class="w-5"
              />
            </div>
            <div v-else class="flex my-2">
              <StarIconOutline
                v-for="(item, index) in 5"
                :key="index"
                class="w-5"
              />
            </div>
            <div v-if="getRecipeDetail.tags" class="mt-5">
              <span v-for="(item, index) in getRecipeDetail.tags" :key="index"
                ><span
                  v-if="index < 15"
                  class="inline-block me-3 text-lg text-white-dark"
                  >#{{ item }}</span
                ></span
              >
            </div>
            <div v-if="getRecipeDetail.attribs.time_in_minutes" class="mt-5">
              <div class="mt-5">
                <span class="text-white-dark flex align-center gap-3">
                  <ClockIcon class="w-5 inline-block" />
                  {{ getRecipeDetail.attribs.time_in_minutes }} minutes
                </span>
              </div>
            </div>
            <div class="mt-1">
              <span class="text-white-dark flex align-center gap-3 capitalize">
                <ShoppingBagIcon class="w-5 inline-block" />
                {{ getRecipeDetail.recipe.needs.join(', ') }}
              </span>
            </div>
            <div
              v-if="
                getRecipeDetail.recipe.needs.length ==
                getRecipeDetail.recipe.uses
              "
              class="mt-1"
            >
              <span> You have all the ingredients </span>
            </div>
            <div class="mt-5">
              <CustomButton
                class="w-full"
                color="green"
                @click="browseRecipe(getRecipeDetail.recipe.hash)"
                >View Full Recipe</CustomButton
              >
            </div>
            <div class="mt-10">
              <h4 class="text-white-dark">Ingredients</h4>
              <div
                v-for="(item, index) in getRecipeDetail.ingredients"
                :key="index"
              >
                <p
                  class="text-lg text-gray-300"
                  style="text-transform: capitalize"
                >
                  <CheckCircleIcon class="w-5 inline-block" /> {{ item.line }}
                </p>
              </div>
            </div>

            <div v-if="getRecipeDetail.nutrition.length > 0" class="mt-10">
              <h4 class="text-white-dark">Nutrients Info</h4>
              <table
                class="w-full divide-y divide-gray-200 dark:divide-gray-700"
              >
                <tbody>
                  <tr
                    v-for="(item, index) in getRecipeDetail.nutrition"
                    :key="index"
                    class="text-lg"
                    style="text-transform: capitalize"
                  >
                    <td>{{ item.name }}</td>
                    <td class="text-end">{{ item.value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/Button/IconButton.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomInput from '@/components/Form/CustomInput.vue';
import ListRecipe from '@/components/Listings/ListRecipe.vue';
import ChipLabel from '@/components/Chip/ChipLabel.vue';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import { mapGetters } from 'vuex';
import {
  StarIcon,
  CheckCircleIcon,
  ClockIcon,
  ShoppingBagIcon,
} from '@heroicons/vue/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/vue/24/outline';

export default {
  name: 'RecipeDetail',
  components: {
    ListRecipe,
    CustomInput,
    CustomButton,
    IconButton,
    ChipLabel,
    ParentHeader,
    StarIcon,
    StarIconOutline,
    CheckCircleIcon,
    ClockIcon,
    ShoppingBagIcon,
  },
  data() {
    return {
      newTag: '',
      recipeDetails: [],
    };
  },
  computed: {
    ...mapGetters(['getRecipeDetail', 'getRecipeDetailInit']),
  },
  mounted() {
    this.getData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async getData() {
      try {
        const listingId = this.$route.params.rid;
        this.$store.dispatch('fetchRecipeDetails', listingId);
      } catch (err) {
        throw err;
      }
    },
    browseRecipe(link) {
      window.open(link, '_blank');
    },
  },
};
</script>
