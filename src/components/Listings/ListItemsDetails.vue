<template>
  <div>
    <DetailsHeader @header-click="goBack">
      {{ foodListings.foodTitle }}
    </DetailsHeader>

    <div class="flex flex-col mt-8">
      <div>
        <img :src="foodListings.foodImage" />

        <div class="flex flex-col px-6 text-white gap-6">
          <div class="flex flex-col px-4 gap-4 py-6 text-right">
            <h2 class="font-bold">
              {{ foodListings.foodTitle }}
            </h2>
            <p>{{ foodListings.foodDetails }}</p>

            <h3>
              Pick-up: <span class="italic">{{ foodListings.time }}</span>
            </h3>
          </div>

          <CustomButton
            button-color="btn--purple"
            @click="requestItem(foodOwner)"
          >
            Request Item
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import DetailsHeader from '@/components/NavBar/DetailsHeader.vue';
import { getResponse } from '@/helpers/getResponse';

export default {
  name: 'ListItemsDetails',
  components: {
    CustomButton,
    DetailsHeader,
  },
  data() {
    return {
      foodListings: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async fetchData() {
      try {
        await this.$store.dispatch('getFoodListings');
        const data = this.$store.getters.getFood;
        const listingId = parseInt(this.$route.params.id);

        for (const foodItem of data) {
          const {
            id,
            cardImage,
            cardTitle,
            cardSubTitle,
            details,
            pickUpTime,
          } = foodItem;

          if (id === listingId) {
            this.foodListings = {
              foodImage: cardImage,
              foodTitle: cardTitle,
              foodOwner: cardSubTitle,
              foodDetails: details,
              time: pickUpTime,
            };
          }
        }
      } catch (err) {
        getResponse('error', err.message);
      }
    },

    requestItem() {
      this.$router.push('/message');
    },
  },
};
</script>
