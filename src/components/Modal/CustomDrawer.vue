<template>
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
        <button class="btn btn-md bg-purple text-white border-none">
          {{ buttonTrue }}
        </button>
        <button class="btn btn-md bg-transparent border-none text-gray-400">
          {{ buttonFalse }}
        </button>
      </form>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script>
export default {
  name: 'CustomDrawer',
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
