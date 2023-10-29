<template>
  <div class="notification-header text-white pb-4">
    <div class="chat-header-content">
      <div class="owner-content flex mb-4">
        <div class="container w-1/4 flex justify-start items-center">
          <CustomButton
            roundness="full"
            size="small"
            style="padding: 0px; background: none"
            @click="goBack"
          >
            <img
              src="@/assets/Icons/back.png"
              alt="Custom Icon"
              class="h-8 w-8"
            />
          </CustomButton>
        </div>
        <div class="container flex justify-end">
          <CustomButton size="small" roundness="full" :color="null">
            <div class="flex items-center gap-3 text-white">
              <img
                src="@/assets/Icons/Bell.png"
                alt="Custom Icon"
                class="pr-1 py-2 w-6"
              />
              <p class="font-semibold">Notifications</p>
            </div>
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'NotificationHeader',
  components: {
    CustomButton,
  },
  data() {
    return {
      id: '6530d24110a9828679f8858a',
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
