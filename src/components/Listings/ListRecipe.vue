<template>
  <div class="grid grid-cols-2 gap-3 min-w-full py-4 px-3">
    <div v-for="item in recipeListings" :key="item.id">
      <CardContainerSecond
        :icon="item.img"
        :alt-text="item.title"
        :title="item.title"
        @click="seeDetails(item.id)"
      />
    </div>
  </div>
</template>

<script>
import CardContainerSecond from '@/components/Card/CardContainerSecond.vue';

export default {
  name: 'ListRecipe',
  components: { CardContainerSecond },
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
