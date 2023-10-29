<template>
  <ParentHeader> Messages </ParentHeader>
  <div class="flex justify-center mt-32 md:h-screen">
    <div class="w-screen md:w-3/4 h-screen pb-8 md:rounded-xl md:h-[80vh]">
      <div class="flex justify-between gap-3">
        <CustomButton
          size="small"
          width="full"
          roundness="full"
          :color="currentTab === 'chat' ? 'gradient' : 'disabled'"
          @click="changeTab('chat')"
        >
          <div
            class="flex justify-center items-center gap-3 p-1 text-white text-sm"
          >
            <img src="@/assets/Icons/Chat.png" alt="Custom Icon" class="w-6" />
            <p>Chat</p>
          </div>
        </CustomButton>

        <CustomButton
          size="small"
          roundness="full"
          width="full"
          :color="currentTab === 'notifications' ? 'gradient' : 'disabled'"
          @click="changeTab('notifications')"
        >
          <div
            class="flex justify-center items-center gap-3 p-1 text-white text-sm"
          >
            <img src="@/assets/Icons/Bell.png" alt="Custom Icon" class="w-6" />
            <p>Notifications</p>
          </div>
        </CustomButton>
      </div>

      <div class="content mt-4 h-[32rem] md:h-[40rem] overflow-y-auto">
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
