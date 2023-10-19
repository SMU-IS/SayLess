<!-- <template>
  <dialog id="my_drawer" class="modal">
    <div class="bottomDrawer bg-zinc-900">
      <form method="dialog"></form>
      <div class="mb-12 mt-6">
        <div>
          <h3 class="font-bold text-lg text-white">{{ drawerTitle }}</h3>
          <p class="text-md text-white">{{ drawerSubtitle }}</p>
        </div>
        <p class="p-4 mt-4 text-pink bg-zinc-800 rounded">
          <slot>{{ drawerContent }}</slot>
        </p>
      </div>
      <form method="dialog" class="flex flex-col justify-around gap-2">
        <CustomButton width="full" roundness="round" color="green">
          {{ buttonTrue }}
        </CustomButton>
        <CustomButton
          width="full"
          roundness="round"
          color="ghost"
          @click="onDrawerClose"
        >
          {{ buttonFalse }}
        </CustomButton>
      </form>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template> -->

<template>
  <div class="drawer drawer_bottom z-50">
    <input id="my_drawer_4" type="checkbox" class="drawer-toggle" />

    <div class="drawer-side">
      <label
        for="my_drawer_4"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <div
        class="bottomDrawer bg-zinc-900 menu p-6 w-full h-3/6 bg-base-200 text-base-content"
      >
        <!-- Sidebar content here -->
        <!-- <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li> -->
        <form method="dialog"></form>
        <div class="mb-12 mt-6">
          <div>
            <h3 class="font-bold text-lg text-white">{{ drawerTitle }}</h3>
            <p class="text-md text-white">{{ drawerSubtitle }}</p>
          </div>
          <p class="p-4 mt-4 text-pink bg-zinc-800 rounded">
            <slot>{{ drawerContent }}</slot>
          </p>
        </div>
        <form method="dialog" class="flex flex-col justify-around gap-2">
          <CustomButton width="full" roundness="round" color="green">
            {{ buttonTrue }}
          </CustomButton>
          <CustomButton
            width="full"
            roundness="round"
            color="ghost"
            @click="onDrawerClose"
          >
            {{ buttonFalse }}
          </CustomButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'CustomDrawer',
  components: {
    CustomButton,
  },
  props: {
    contentHere: {
      type: String,
      default: '',
    },
    drawerTitle: {
      type: String,
      default: '',
    },
    drawerSubtitle: {
      type: String,
      default: '',
    },
    drawerContent: {
      type: String,
      default: '',
    },
    buttonFalse: {
      type: String,
      default: '',
    },
    buttonTrue: {
      type: String,
      default: '',
    },
  },
  methods: {
    onDrawerClose() {
      closeDrawer();
    },
  },
};
</script>

<style scoped>
.drawer_bottom .drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateY(0%);
}

.drawer_bottom .drawer-toggle ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateY(100%);
}
</style>
