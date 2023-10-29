<template>
  <div
    class="notification-body text-white bg-white rounded-t-lg flex-1 overflow-y-scroll"
  >
    <div class="heading mt-6 mb-6">
      <div class="header-icon flex justify-center items-center">
        <img
          src="@/assets/Icons/Quest.png"
          alt="Quest Picture"
          class="w-14 h-14 p-2 border-2 border-lightgray rounded-md block"
        />
      </div>
      <p class="text-gray text-center mt-2 font-semibold">Quest Completion</p>
    </div>
    <div class="notificationinfo mt-6 ms-6 me-6">
      <p class="text-black font-semibold">Quest successfully completed!</p>
      <div class="quest-info text-gray bg-slate-100 p-4 rounded-md mt-2">
        <p class="font-semibold mb-2">Quest</p>
        <p>You have successully completed this quest and earned 500 points!</p>
      </div>
      <div class="qr-info text-gray bg-slate-100 p-4 rounded-md mt-2 mb-4">
        <p class="font-semibold mb-2">QR Code</p>
        <p>
          Present the QR below at any Fairprice supermarket to redeem your
          voucher.
        </p>
        <div class="qr-icon flex justify-center items-center mt-2">
          <img src="@/assets/Icons/qr.png" alt="QR Picture" class="w-1/4 p-2" />
        </div>
        <div class="savebutton text-center mt-2">
          <CustomButton size="medium" roundness="round" color="green"
            >Save to photos</CustomButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'NotificationBody',
  components: {
    CustomButton,
  },

  computed: {},
  methods: {},
};
</script>
