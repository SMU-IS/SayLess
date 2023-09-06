import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './router';
import store from '@/store';
import Uploader from 'vue-media-upload';

const app = createApp(App);

app.use(store).use(router).component('Uploader', Uploader).mount('#app');
