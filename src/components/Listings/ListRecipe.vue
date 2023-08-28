<template>
  <div class="grid grid-cols-2 gap-3 min-w-full">
    <div
      v-for="item in recipeListings"
      :key="item.id"
    >
      <CardContainer @click="seeDetails(item.id)">
        <CardImage
          :card-image="item.img"
          :img-height="200"
        />
        <div class="flex items-start px-5 pt-2">
          <CardTitle
            class="text-base text-start font-extrabold tracking-tight text-white dark:text-white"
          >
            {{ item.title }}
          </CardTitle>
        </div>
        <div class="flex flex-col justify-start items-start px-5 py-3">
          <CardSubTitle>
            Uses {{ item.uses.split(',').join(', ') }}
          </CardSubTitle>
        </div>
      </CardContainer>
    </div>
  </div>
</template>

<script>
import CardContainer from '@/components/Card/CardContainer.vue';
import CardImage from '@/components/Card/CardImage.vue';
import CardSubTitle from '@/components/Card/CardSubTitle.vue';

export default {
  name: 'ListRecipe',
  components: { CardContainer, CardSubTitle, CardImage },
  props: {
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    return {
      foodListings: [],
    };
  },
  computed: {
    recipeListings() {
      return this.$store.getters.getRecipe;
    },
  },
  methods: {
    seeDetails(itemId) {
      this.$router.push(`/item/${itemId}`);
    },
  },
};
</script>
