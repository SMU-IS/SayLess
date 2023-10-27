<template>
  <div>
    <div
      v-if="notificationList.length === 0"
      class="no-notifications text-center"
    >
      <p class="text-white">No notifications to display.</p>
    </div>
    <div v-else>
      <div
        v-for="notification in notificationList"
        :key="notification.id"
        class="gap-4 notification-item flex items-center p-2 border-b border-transparent"
      >
        <img
          :src="notification.notificationImage"
          alt="Notification Pic"
          class="w-10"
        />
        <div class="notification-details flex-1">
          <p class="text-gray-400 text-xs">{{ notification.category }}</p>
          <h4 class="text-white text-base">{{ notification.subject }}</h4>
          <p class="text-gray-400 text-sm">
            {{ notification.notificationMessage }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { notificationList } from '@/data/notificationList.js';

export default {
  name: 'NotificationsTab',
  data() {
    return {
      notificationList: notificationList,
    };
  },
};
</script>
