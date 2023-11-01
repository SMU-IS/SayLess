<template>
  <div>
    <div v-if="selectedChat.length === 0" class="no-chats text-center">
      <p class="text-white">No chats to display.</p>
    </div>
    <div v-else>
      <div
        v-for="chat in selectedChat"
        :key="chat?.id"
        class="chat-item cursor-pointer"
        @click="viewChat(chat.id)"
      >
        <div
          class="chatContent flex items-center p-2 border-b border-transparent"
        >
          <img
            :src="getCorrespondentPic(chat)"
            alt="Profile Pic"
            class="avatar w-10 h-10 mr-5 rounded-full"
          />
          <div class="chat-details flex-1">
            <p class="text-gray-400 text-xs">
              {{ getCorrespondentName(chat) }}
            </p>
            <h4 v-if="chat.listing" class="text-white text-base">
              {{ chat?.listing[0].listingTitle }}
              <span
                v-if="chat?.unread_msg.length >= 1"
                class="inline-flex items-center justify-center w-6 h-6 ml-2 text-xs font-semibold text-white bg-gradient-header rounded-full float-right me-4"
                >{{ chat?.unread_msg.length }}</span
              >
            </h4>
            <p v-if="chat?.latest_msg[0]" class="text-white-light text-sm">
              {{ chat?.latest_msg[0].message.slice(0, 200) }}
            </p>
            <p v-else class="text-white-light text-sm">No messages yet.</p>
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
  computed: {
    ...mapGetters(['getChatRooms', 'getUserDetails']),
    selectedChat() {
      if (this.getChatRooms) {
        return this.getChatRooms
          .filter((result) => {
            const participants = result.participants;
            if (participants && participants.length === 2) {
              const [participant1, participant2] = participants;
              return (
                participant1.id === this.getUserDetails.userData.id ||
                participant2.id === this.getUserDetails.userData.id
              );
            }
            return false;
          })
          .sort((a, b) => {
            let dateA, dateB;

            if (a.latest_msg.length > 0) {
              dateA = new Date(a.latest_msg[0].createdOn);
            } else {
              dateA = new Date(a.createdOn);
            }

            if (b.latest_msg.length > 0) {
              dateB = new Date(b.latest_msg[0].createdOn);
            } else {
              dateB = new Date(b.createdOn);
            }

            return dateB - dateA;
          });
      }
      return [];
    },
  },
  mounted() {
    this.fetchChatRoomDetails();
  },
  methods: {
    ...mapActions(['fetchChatRoomDetails']),
    getCorrespondentName(chat) {
      if (chat.participants[0].id == this.getUserDetails.userData.id) {
        return chat.participants[1].name;
      } else {
        return chat.participants[0].name;
      }
    },
    getCorrespondentId(chat) {
      if (chat.participants[0].id == this.getUserDetails.userData.id) {
        return chat.participants[1].id;
      } else {
        return chat.participants[0].id;
      }
    },
    getCorrespondentPic(chat) {
      if (chat.participants[0].id == this.getUserDetails.userData.id) {
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
