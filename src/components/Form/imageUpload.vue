<template>
  <Uploader
    class="image"
    server="/api/upload"
    :media="media.saved"
    path="/storage/media"
    @add="addMedia"
    @remove="removeMedia"
  />
</template>

<script>
import Uploader from 'vue-media-upload';

export default {
  name: 'ImageUploader',
  components: { Uploader },
  data() {
    return {
      media: {
        saved: [
          { id: 1, name: '' },
          { id: 2, name: '' },
          { id: 3, name: '' },
          { id: 4, name: '' },
        ],
        added: [],
        removed: [],
      },
    };
  },
  methods: {
    addMedia(addedImage, addedMedia) {
      this.media.added = addedMedia;
    },
    removeMedia(removedImage, removedMedia) {
      this.media.removed = removedMedia;
    },
  },
};
</script>

<style scoped>
:deep(.mu-container) {
  background-color: rgb(243 244 246) !important;
  border: none !important;
  margin-top: 12px !important;
}
</style>
