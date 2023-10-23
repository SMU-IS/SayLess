<template>
  <div class="grid grid-cols-2 gap-3 min-w-full py-4 px-3">
    <div v-for="item in getRecipe" :key="item.id">
      {{ item.title }}
      <CustomCard
        :icon="item.img"
        :alt-text="item.title"
        :title="item.title"
        @click="seeDetails(item.id)"
      />
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/Card/CustomCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ListRecipe',
  components: { CustomCard },
  props: {
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      foodListings: [],
    };
  },
  computed: {
    ...mapGetters(['getRecipe']),
  },
  methods: {
    seeDetails(itemId) {
      this.$router.push(`/item/${itemId}`);
    },
  },
};
</script>
