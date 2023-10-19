<template>
  <div
    class="promptsContainer flex-1 flex items-center justify-center"
    id="promptCon"
    v-if="messages.length === 0"
  >
    <div class="promptsContent w-full">
      <h2 class="text-white text-center mb-8">Ask something like:</h2>
      <div
        v-for="prompt in prompts"
        class="bg-gray-300 rounded-md text-center text-white bg-opacity-20 p-4 mb-3 w-full"
        @click="selectPrompt(prompt)"
      >
        {{ prompt }}
      </div>
    </div>
  </div>
  <div class="message-input border-t-2">
    <div class="inputdiv flex w-full mt-5">
      <input
        v-model="messageText"
        @keydown.enter="sendMessage"
        placeholder="Type your message..."
        class="p-2 rounded-lg flex-1 me-2"
      />
      <CustomButton
        roundness="full"
        @click="sendMessage"
        size="small"
        style="padding: 0px; background: none"
      >
        <img
          src="@/assets/Icons/sendButton.png"
          alt="Custom Icon"
          class="h-12 w-12"
        />
      </CustomButton>
    </div>
  </div>
</template>

<script>
import { prompts } from '@/data/prompts.js';
import CustomButton from '@/components/Button/CustomButton.vue';
import CustomInput from '@/components/Form/CustomInput.vue';

export default {
  name: 'MessageInput',
  emits: ['send'],
  components: {
    CustomButton,
    CustomInput,
  },
  props: {
    messages: Object,
    sender: String,
  },
  data() {
    return {
      messageText: '',
      prompts: prompts,
      sent: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.messageText.trim() !== '') {
        this.$emit('send', this.messageText);
        this.messageText = '';
        this.sent = true;
      }
    },
    selectPrompt(prompt) {
      this.messageText = prompt;
    },
  },
};
</script>
