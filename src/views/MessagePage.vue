<template>
  <div class="container flex mt-28">
    <div class="container w-screen md:w-1/3">
      <div class="tabs tabs-boxed p-2">
        <a
          class="tab w-1/2 h-full"
          :class="{ 'tab-active': currentTab === 'chat' }"
          style="border-radius: 100px"
          @click="changeTab('chat')"
        >
          <img
            src="@/assets/Icons/Chat.png"
            alt="Custom Icon"
            class="pr-1 py-2"
          />
          Chat
        </a>
        <a
          class="tab w-1/2 h-full"
          :class="{ 'tab-active': currentTab === 'notifications' }"
          style="border-radius: 100px"
          @click="changeTab('notifications')"
        >
          <img
            src="@/assets/Icons/ring.png"
            alt="Custom Icon"
            class="pr-1 py-2"
          />
          Notifications
        </a>
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
import ChatsTab from '@/components/Messages/ChatsTab.vue';
import NotificationsTab from '@/components/Messages/NotificationsTab.vue';

export default {
  name: 'MessagePage',
  components: {
    ChatsTab,
    NotificationsTab,
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
