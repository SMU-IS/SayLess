<template>
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="font-bold text-lg">{{ modalTitle }}</h3>
      <p class="py-4">
        <slot>{{ modalContent }}</slot>
      </p>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script>
export default {
  name: 'CustomModal',
  props: {
    modalTitle: {
      type: String,
      default: '',
    },
    modalContent: {
      type: String,
      default: '',
    },
  },
};
</script>
