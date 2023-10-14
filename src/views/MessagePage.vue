<template>
  <ParentHeader> Messages </ParentHeader>
  <div class="flex mt-32">
    <div class="w-screen md:w-1/3">
      <div class="flex justify-center">
        <CustomButton
          size="small"
          roundness="full"
          :color="currentTab === 'chat' ? 'primary' : null"
          @click="changeTab('chat')"
        >
          <div class="flex items-center gap-3 px-5">
            <img
              src="@/assets/Icons/Chat.png"
              alt="Custom Icon"
              class="pr-1 py-2"
            />
            Chat
          </div>
        </CustomButton>

        <CustomButton
          size="small"
          roundness="full"
          :color="currentTab === 'notifications' ? 'primary' : null"
          @click="changeTab('notifications')"
        >
          <div class="flex items-center gap-3 px-5">
            <img
              src="@/assets/Icons/ring.png"
              alt="Custom Icon"
              class="pr-1 py-2"
            />
            Notifications
          </div>
        </CustomButton>
      </div>

      <div class="content mt-4">
        <div v-if="currentTab === 'chat'">
          <ChatsTab />
        </div>
        <div v-if="currentTab === 'notifications'">
          <NotificationsTab />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import ChatsTab from '@/components/Messages/ChatsTab.vue';
import NotificationsTab from '@/components/Messages/NotificationsTab.vue';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';

export default {
  name: 'MessagePage',
  components: {
    ChatsTab,
    NotificationsTab,
    ParentHeader,
    CustomButton,
  },
  data() {
    return {
      currentTab: 'chat',
    };
  },
  methods: {
    changeTab(tabName) {
      this.currentTab = tabName;
    },
  },
};
</script>
