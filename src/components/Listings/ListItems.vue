<template>
  <div class="grid grid-cols-2 gap-4 min-w-full">
    <div v-for="item in foodListings" :key="item.id">
      <CardContainerSecond
        :icon="item.cardImage"
        :alt-text="item.cardTitle"
        :title="item.cardTitle"
        :description="item.details"
        @click="seeDetails(item.id)"
      />
    </div>
  </div>
</template>

<script>
import CardContainerSecond from '@/components/Card/CardContainerSecond.vue';

export default {
  name: 'ListItems',
  components: { CardContainerSecond },
  data: function () {
    return {
      foodListings: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    seeDetails(itemId) {
      this.$router.push(`/item/${itemId}`);
    },
    async fetchData() {
      try {
        await this.$store.dispatch('getFoodListings');
        this.foodListings = this.$store.getters.getFood;
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>
