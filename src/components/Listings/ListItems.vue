<template>
  <div class="grid grid-cols-2 gap-4 min-w-full">
    <div v-for="item in foodListings" :key="item.id">
      <CardContainer @click="seeDetails(item.id)">
        <CardImg :src="item.cardImage" :alt="item.cardTitle" />

        <CardHeader> {{ item.cardTitle }} </CardHeader>
        <CardDescription>
          {{ item.details }}
        </CardDescription>
      </CardContainer>
    </div>
  </div>
</template>

<script>
import CardContainer from '@/components/Card/CardContainer.vue';
import CardDescription from '@/components/Card/CardDescription.vue';
import CardHeader from '@/components/Card/CardHeader.vue';
import CardImg from '@/components/Card/CardImg.vue';

export default {
  name: 'ListItems',
  components: { CardContainer, CardImg, CardHeader, CardDescription },
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
