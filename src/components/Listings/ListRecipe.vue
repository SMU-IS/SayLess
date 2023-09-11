<template>
  <div class="grid grid-cols-2 gap-3 min-w-full py-4 px-3">
    <div v-for="item in recipeListings" :key="item.id">
      <CardContainer @click="seeDetails(item.id)">
        <CardImg :src="item.img" />
        <CardHeader> {{ item.title }} </CardHeader>
      </CardContainer>
    </div>
  </div>
</template>

<script>
import CardContainer from '@/components/Card/CardContainer.vue';
import CardImg from '@/components/Card/CardImg.vue';
import CardHeader from '@/components/Card/CardHeader.vue';

export default {
  name: 'ListRecipe',
  components: { CardContainer, CardImg, CardHeader },
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
