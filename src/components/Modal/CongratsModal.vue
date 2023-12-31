<template>
  <dialog :id="modalId" class="modal text-center">
    <div class="modal-box p-0 overflow-visible bg-green rounded-3xl">
      <div class="bg-white absolute right-0 bottom-[30%] p-12"></div>
      <div class="bg-white rounded-3xl rounded-bl-[30px] relative py-8">
        <div class="absolute top-[-38%] left-0 right-0 text-center">
          <img
            src="@/assets/Icons/target.png"
            alt="Custom Icon"
            class="w-32 h-32 mx-auto my-3"
          />
        </div>
        <div class="flex flex-col gap-2 mt-8">
          <h1 class="text-xl font-bold">{{ modalTitle }}</h1>
          <h3 class="text-lg">{{ modalSubtitle }}</h3>
          <h2
            class="text-base font-bold mt-4 mx-auto px-6 py-1 w-fit rounded-full bg-[#FFE993]"
          >
            + 300 coins
          </h2>
        </div>
      </div>
      <div class="bg-green rounded-3xl rounded-tr-[30px] p-8 relative">
        <h2 class="text-xl font-bold text-white">Congratulations!</h2>
        <p class="py-2">
          <slot>{{ modalContent }}</slot>
        </p>
        <div class="modal-action mt-0">
          <form method="dialog" class="w-full">
            <CustomButton width="full" color="white" @click="changeTab">
              <span v-if="isLoading">
                <CustomLoader :loading="isLoading" color="black" />
              </span>
              <p v-else>
                {{ buttonText }}
              </p>
            </CustomButton>
          </form>
        </div>
      </div>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';
import { mapGetters } from 'vuex';
import CustomLoader from '@/components/Loader/CustomLoader.vue';
import { getResponse } from '@/helpers/getResponse';

export default {
  name: 'CongratsModal',
  components: { CustomButton, CustomLoader },
  props: {
    modalId: {
      type: String,
      default: '',
    },
    modalTitle: {
      type: String,
      default: '',
    },
    modalSubtitle: {
      type: String,
      default: '',
    },
    modalContent: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(['getQuestData']),
    getChallengeId() {
      if (this.modalId === 'congrats_1') {
        return '653767cabeca8f1fa9473322';
      } else if (this.modalId === 'congrats_2') {
        return '653767e6a456e880499948db';
      } else if (this.modalId === 'congrats_3') {
        return '65376b37eeedf45dd416465e';
      }
      return '';
    },
  },
  methods: {
    async changeTab() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('incrementCount');
        await this.$store.dispatch('updateQuestStatus', {
          id: this.getChallengeId,
          status: 'Completed',
        });
        this.isLoading = false;
        this.$router.push('/quest');
      } catch (err) {
        this.isLoading = false;
        getResponse('error', err.message);
      }
    },
  },
};
</script>
