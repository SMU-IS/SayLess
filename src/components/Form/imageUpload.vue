<template>
  <label
    id="dropcontainer"
    for="images"
    class="drop-container cursor-pointer flex relative flex-col gap-2 justify-center align-center p-4 rounded-lg border-dashed border-2 border-gray text-white"
    @dragover.prevent
    @drop="handleDrop"
  >
    <span v-if="showImageDropText" class="text-green text-lg"
      >Drop image here</span
    >
    <span v-if="showImageDropText">or</span>
    <div
      id="preview"
      class="max-w-full rounded-lg shadow-md overflow-hidden max-h-[250px] items-center flex"
    >
      <img v-if="item.imageUrl" :src="item.imageUrl" />
    </div>
    <label v-if="changeImage" for="images" class="btn bg-white text-black"
      >Change Image
    </label>
    <label v-else for="images" class="btn bg-white text-black"
      >Select Image
    </label>
    <input
      id="images"
      type="file"
      accept="image/*"
      class="hidden"
      required
      @change="onChange"
    />
  </label>
</template>

<script>
export default {
  name: 'ImageUploader',
  components: {},
  data() {
    return {
      showImageDropText: true,
      changeImage: false,
      item: {
        image: null,
        imageUrl: null,
      },
    };
  },
  mounted() {
    const dropContainer = document.getElementById('dropcontainer');
    dropContainer.addEventListener('dragover', this.preventDefaultBehavior);
    dropContainer.addEventListener('drop', this.preventDefaultBehavior);
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.image = file;
      this.item.imageUrl = URL.createObjectURL(file);

      this.showImageDropText = false;
      this.changeImage = true;
    },
    handleDrop(event) {
      event.preventDefault();
      const droppedFiles = event.dataTransfer.files;

      if (droppedFiles.length > 0) {
        const file = droppedFiles[0];

        const reader = new FileReader();
        reader.onload = () => {
          this.item.imageUrl = reader.result;
        };
        reader.readAsDataURL(file);

        this.showImageDropText = false;
        this.changeImage = true;
      }
    },
  },
};
</script>

<style scoped>
.drop-container:hover,
.drop-container.drag-active {
  background: #eeeeee26;
  border-color: #111;
}

.drop-container:hover .drop-title,
.drop-container.drag-active .drop-title {
  color: #222;
}

.drop-title {
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color 0.2s ease-in-out;
}

input[type='file'] {
  width: 350px;
  max-width: 100%;
  color: #444;
  padding: 5px;
  background: #ffffff23;
  border-radius: 10px;
  border: 1px solid #555;
}

input[type='file']::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #084cdf;
  padding: 10px 20px;
  border-radius: 10px;
  color: #ffffff2a;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

input[type='file']::file-selector-button:hover {
  background: #0d45a5;
}
</style>
