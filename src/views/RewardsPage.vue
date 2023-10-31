<template>
  <ParentHeader :show-back-btn="true" @header-click="goBack">
    Rewards
  </ParentHeader>
  <header class="flex justify-center">
    <div class="p-0 bg-green rounded-3xl mt-48 w-full md:w-96">
      <div class="bg-green rounded-3xl rounded-bl-[30px] relative py-8">
        <div class="absolute top-[-30%] left-0 right-0 text-center">
          <img
            src="@/assets/Icons/Coin.png"
            alt="Custom Icon"
            class="w-32 h-32 mx-auto my-3"
          />
        </div>
        <div class="flex flex-col gap-2 mt-8">
          <h3 class="text-xl font-bold text-center text-white">
            Your Current Coins
          </h3>
          <h2
            class="text-base font-bold mt-4 mx-auto px-6 py-1 w-fit rounded-full bg-[#FFE993]"
          >
            {{ coins === 0 ? `${coins} Coin` : `${coins} Coins` }}
          </h2>
          <CustomButton width="full" color="ghost" @click="navigate">
            <p class="text-black">Get more coins?</p>
          </CustomButton>
        </div>
      </div>
      <div class="bg-white rounded-3xl rounded-tr-[30px] p-8 relative">
        <div class="mt-0">
          <form method="dialog" class="w-full">
            <CustomButton width="full" color="green" @click="redeemVoucher">
              <p>Redeem Vouchers</p>
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ParentHeader from '@/components/NavBar/ParentHeader.vue';
import CustomButton from '@/components/Button/CustomButton.vue';
import { getResponse } from '@/helpers/getResponse';

export default {
  name: 'RewardsPage',
  components: {
    ParentHeader,
    CustomButton,
  },
  data() {
    return {
      coins: 0,
    };
  },
  computed: {
    ...mapGetters(['getQuestData', 'getUserDetails']),
  },
  mounted() {
    this.fetchQuestData();
    const coinsValue = 300;
    for (let challenge of this.getQuestData) {
      if (challenge.status === 'Completed') {
        this.coins += coinsValue;
      }
    }
  },
  methods: {
    ...mapActions(['fetchQuestData']),
    goBack() {
      this.$router.go(-1);
    },
    navigate() {
      this.$router.push('/quest');
    },
    redeemVoucher() {
      getResponse('warning', 'Available Soon!');
    },
  },
};
</script>
