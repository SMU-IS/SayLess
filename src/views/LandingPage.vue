<template>
  <div class="flex flex-col mx-4">
    <CardContainer>
      <CardHeader>Earn points when you throw less</CardHeader>
      <CardDescription> Save the earth together </CardDescription>
      <CardFooter>
        <CustomButton
          button-color="btn--success"
          button-size="w-1/2"
        >
          Learn More
        </CustomButton>
      </CardFooter>
    </CardContainer>

    <SearchBar />
    <ListItems />
  </div>
</template>

<script>
import ListItems from '@/components/Listings/ListItems.vue';
import SearchBar from '@/components/Form/SearchBar.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import CardContainer from '@/components/Card/CardContainer.vue';
import CardDescription from '@/components/Card/CardDescription.vue';
import CardHeader from '@/components/Card/CardHeader.vue';
import CardFooter from '@/components/Card/CardFooter.vue';

export default {
  name: 'LandingPage',
  components: {
    ListItems,
    SearchBar,
    CardContainer,
    CardDescription,
    CardHeader,
    CustomButton,
    CardFooter,
  },
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
