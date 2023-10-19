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
        <CustomButton
          width="full"
          roundness="round"
          size="large"
          color="success"
        >
          {{ buttonTrue }}
        </CustomButton>
        <CustomButton width="full" roundness="round" size="large" color="ghost"  >
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
  <div class="drawer drawer_bottom">
    <input id="my_drawer_4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- <label for="my-drawer-4" class="drawer-button btn btn-primary"
        >Open drawer</label
      > -->
    </div>
    <div class="drawer-side">
      <label
        for="my_drawer_4"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-full min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import CustomButton from '@/components/Button/CustomButton.vue';

export default {
  name: 'CustomDrawer',
  // components: {
  //   CustomButton,
  // },
  props: {
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
};
</script>

<style scoped>
.drawer_bottom .drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateY(60%);
}

.drawer_bottom .drawer-toggle ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateY(100%);
}
</style>
