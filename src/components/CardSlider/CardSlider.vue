<template>
  <div class="flex flex-row overflow-x-auto gap-6 hide-scroll-bar">
    <div v-for="item in cardData" :key="item.id">
      <div
        class="card md:w-fit card-compact shadow-xl mt-6 min-h-[250px] bg-white rounded-3xl"
      >
        <figure>
          <img :src="item.image" alt="Community Sharing" />
        </figure>
        <div class="flex flex-row justify-between items-center card-body">
          <h3 class="text-md text-black">{{ item.cardTitle }}</h3>
          <div class="rating">
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-green-500"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSlider',
  props: {
    cardData: {
      type: Array,
      required: true,
    },
  },
};
</script>
