<template>
  <ParentHeader> Messages </ParentHeader>
  <div class="flex justify-center mt-32 md:h-screen">
    <div class="w-screen lg:w-1/3">
      <div class="flex justify-center">
        <CustomButton
          size="small"
          roundness="full"
          :color="currentTab === 'chat' ? 'gradient' : null"
          @click="changeTab('chat')"
        >
          <div class="flex items-center gap-3 px-5 text-white">
            <img
              src="@/assets/Icons/Chat.png"
              alt="Custom Icon"
              class="pr-1 py-2 w-6"
            />
            Chat
          </div>
        </CustomButton>

        <CustomButton
          size="small"
          roundness="full"
          :color="currentTab === 'notifications' ? 'gradient' : null"
          @click="changeTab('notifications')"
        >
          <div class="flex items-center gap-3 px-5 text-white">
            <img
              src="@/assets/Icons/Ring.png"
              alt="Custom Icon"
              class="pr-1 py-2 w-6"
            />
            Notifications
          </div>
        </CustomButton>
      </div>

      <div class="content mt-4 h-[32rem] md:h-[40rem] overflow-y-scroll">
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
