<template>
  <div class="promptsContainer">
    <h2 class="text-white text-center mb-4">Ask something like:</h2>
    <div
      v-for="prompt in prompts"
      class="bg-gray-300 rounded-md text-center text-white bg-opacity-20 p-2 mb-3"
      @click="selectPrompt(prompt)"
    >
      {{ prompt }}
    </div>
  </div>
</template>

<script>
import { prompts } from '@/data/prompts.js';

export default {
  name: 'Prompts',
  data() {
    return {
      prompts: prompts,
    };
  },
};
</script>
