<template>
  <div>
    <div v-if="chatList.length === 0" class="no-chats text-center">
      <p class="text-white">No chats to display.</p>
    </div>
    <div v-else>
      <div
        v-for="chat in chatList"
        :key="chat.id"
        class="chat-item flex items-center p-2 border-b border-gray-300"
      >
        <img
          :src="chat.profilePic"
          alt="Profile Pic"
          class="profile-pic w-10 h-10 mr-5"
        />
        <div class="chat-details flex-1">
          <p class="text-gray-400">{{ chat.personId }}</p>
          <h4 class="text-white">{{ chat.listingTitle }}</h4>
          <p class="text-white">{{ chat.latestMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chatList } from '@/data/chatList.js';

export default {
  name: 'ChatsTab',
  data() {
    return {
      chatList: chatList,
    };
  },
};
</script>
