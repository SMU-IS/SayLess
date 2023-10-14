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
        class="notification-item flex items-center p-2 border-b border-gray-300"
      >
        <img
          :src="notification.notificationImage"
          alt="Notification Pic"
          class="w-20"
        />
        <div class="notification-details flex-1">
          <p class="text-gray-400">{{ notification.category }}</p>
          <h4 class="text-white">{{ notification.subject }}</h4>
          <p class="text-gray-400">{{ notification.notificationMessage }}</p>
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
