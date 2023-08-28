<template>
  <div class="grid grid-cols-2 gap-3 min-w-full">
    <div
      v-for="item in foodListings"
      :key="item.id"
    >
      <CardContainer @click="seeDetails(item.id)">
        <CardImage :card-image="item.cardImage" />
        <div class="flex items-start px-5 pt-2">
          <CardTitle>
            {{ item.cardTitle }}
          </CardTitle>
        </div>
        <div class="flex flex-col justify-start items-start px-5 py-3">
          <CardSubTitle>{{ item.cardSubTitle }}</CardSubTitle>
          <CardSubTitle> Within {{ item.distance }}</CardSubTitle>
        </div>
      </CardContainer>
    </div>
  </div>
</template>

<script>
import CardContainer from '@/components/Card/CardContainer.vue';
import CardImage from '@/components/Card/CardImage.vue';
import CardSubTitle from '@/components/Card/CardSubTitle.vue';
import CardTitle from '@/components/Card/CardTitle.vue';

export default {
  name: 'ListItems',
  components: { CardContainer, CardTitle, CardSubTitle, CardImage },
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
