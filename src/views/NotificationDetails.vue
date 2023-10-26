<template>
  <div class="flex justify-center mt-8 md:mt-32 w-full md:mb-28">
    <div
      class="notification-container d-flex flex flex-col w-full md:w-3/4 h-[43rem] md:h-[40rem]"
    >
      <NotificationHeader />
      <NotificationBody />
    </div>
  </div>
</template>

<script>
import NotificationHeader from '@/components/Notification/NotificationHeader.vue';
import NotificationBody from '@/components/Notification/NotificationBody.vue';

export default {
  name: 'ChatDetails',
  components: {
    NotificationHeader,
    NotificationBody,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
