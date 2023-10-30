<template>
  <div>
    <div
      v-if="notificationList.length === 0"
      class="no-notifications text-center"
    >
      <p class="text-white">No notifications to display.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsTab',
  data() {
    return {
      notificationList: [],
    };
  },
};
</script>
