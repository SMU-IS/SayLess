<template>
  <div class="flex flex-col gap-6 px-3">
    <SearchBar />
    <CardContainer
      card-prop="text-start w-100 p-6 bg-gray-800 border-1 border-slate-600 shadow rounded-lg"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
      >
        Earn points when you throw less
      </h5>

      <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
        Save the earth together
      </p>

      <CustomButton
        button-color="btn--success"
        width-size="w-1/3"
      >
        Learn More
      </CustomButton>
    </CardContainer>

    <p class="text-white text-start font-bold text-xl">
      Food Near You
    </p>

    <ListItems />
  </div>
</template>

<script>
import ListItems from '@/components/Listings/ListItems.vue';
import SearchBar from '@/components/Form/SearchBar.vue';
import CardContainer from '@/components/Card/CardContainer.vue';
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'LandingPage',
  components: { ListItems, SearchBar, CardContainer, CustomButton },
  data: function () {
    return {
      email: this.$store.getters.getEmail,
    };
  },
  methods: {
    navigateToForm() {
      this.$router.push('/form');
    },
  },
};
</script>
