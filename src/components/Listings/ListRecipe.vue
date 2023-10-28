<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 min-w-full py-4"
  >
    <div v-for="item in getRecipe?.slice().splice(0, 20)" :key="item.id">
      <CustomCard
        background="white"
        roundness="round"
        size="small"
        width="full"
        class="overflow-hidden h-full shadow-lg"
        style="cursor: pointer"
        @click="seeDetails(item.id)"
      >
        <div class="flex h-full">
          <div class="bg-gray-800 h-full w-6/12 overflow-hidden">
            <img :src="item.img" class="w-full" />
          </div>
          <div class="p-3 py-2 w-6/12">
            <h3 class="text-lg font-regular text-slate-700 leading-5">
              {{ item.title }}
            </h3>
            <p>
              {{ item.domain }}
            </p>
          </div>
        </div>
      </CustomCard>
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
      this.$router.push(`/recipe/${itemId}`);
    },
  },
};
</script>
