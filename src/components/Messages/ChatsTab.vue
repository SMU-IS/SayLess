<template>
  <div>
    <div v-if="chatList.length === 0" class="no-chats text-center">
      <p class="text-white">No chats to display.</p>
    </div>
    <div v-else>
      <div v-for="chat in chatList" :key="chat.id" class="chat-item flex items-center p-2 border-b border-gray-300">
        <img :src="chat.profilePic" alt="Profile Pic" class="profile-pic w-10 h-10 mr-5" />
        <div class="chat-details flex-1">
          <p class="text-gray-400">{{ chat.personId }}</p>
          <h4 class="text-white font-bold">{{ chat.listingTitle }}</h4>
          <p class="text-white">{{ chat.latestMessage }}</p>
        </div>
        <img :src="chat.listingImage" alt="Listing Image" class="listing-image w-10 h-10" />
      </div>
    </div>

    </div>

      
  </template>
  
  <script>
  export default {
    data() {
      return {
        chatList: [
        {
            id: 1,
            profilePic: 'src/assets/Icons/Profile.png',
            personId: 'bryanchua1122',
            listingTitle: 'Free Onions',
            listingImage: 'src/assets/Icons/Inventory.png',
            latestMessage: 'Hello there!',
        },
        {
            id: 2,
            profilePic: 'src/assets/Icons/Profile.png',
            personId: 'abigailchua12',
            listingTitle: 'Dozen of Eggs Available',
            listingImage: 'src/assets/Icons/Inventory.png',
            latestMessage: 'How are you?',
        },
        {
            id: 3,
            profilePic: 'src/assets/Icons/Profile.png',
            personId: 'johndoe72',
            listingTitle: 'Freshly harvested vegetables',
            listingImage: 'src/assets/Icons/Inventory.png',
            latestMessage: 'Good morning!',
        },
          // Add more chat items as needed
        ],
      };
    },
  };
  </script>
  
