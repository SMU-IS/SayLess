<template>
  <div>
    <div v-if="selectedChat.length === 0" class="no-chats text-center">
      <p class="text-white">No chats to display.</p>
    </div>
    <div v-else>
      <div
        v-for="chat in selectedChat"
        :key="chat.id"
        class="chat-item cursor-pointer"
        @click="viewChat(chat.id)"
      >
        <div class="chatContent flex items-center p-2 border-b border-gray-300">
          <img
            :src="getCorrespondentPic(chat)"
            alt="Profile Pic"
            class="profile-pic w-10 h-10 mr-5"
          />
          <div class="chat-details flex-1">
            <p class="text-gray-400">{{ getCorrespondentName(chat) }}</p>
            <h4 class="text-white">
              {{ chat.listing.listingTitle }}
              <span
                class="inline-flex items-center justify-center w-6 h-6 ml-2 text-xs font-semibold text-white bg-gradient-header rounded-full float-right me-4"
                >2</span
              >
            </h4>
            <p class="text-white">{{ chat.listing.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ChatsTab',
  data() {
    return {
      id: '6530d24110a9828679f8858a',
    };
  },
  computed: {
    ...mapGetters(['getChatRooms', 'getUserDetails']),
    selectedChat() {
      if (this.getChatRooms) {
        return this.getChatRooms.filter((result) => {
          const participants = result.participants;
          if (participants && participants.length === 2) {
            const [participant1, participant2] = participants;
            return participant1.id === this.id || participant2.id === this.id;
          }
          return false;
        });
      }
      return [];
    },
  },
  created() {
    this.fetchChatRoomDetails();
    this.fetchUser();
  },
  methods: {
    ...mapActions(['fetchChatRoomDetails']),
    ...mapActions(['fetchUser']),
    getCorrespondentName(chat) {
      if (chat.participants[0].id == this.id) {
        return chat.participants[1].name;
      } else {
        return chat.participants[0].name;
      }
    },
    getCorrespondentId(chat) {
      if (chat.participants[0].id == this.id) {
        return chat.participants[1].id;
      } else {
        return chat.participants[0].id;
      }
    },
    getCorrespondentPic(chat) {
      if (chat.participants[0].id == this.id) {
        return chat.participants[1].profilePic;
      } else {
        return chat.participants[0].profilePic;
      }
    },
    viewChat(chatid) {
      this.$router.push(`/message/${chatid}`);
    },
  },
};
</script>
