import { createApp } from 'vue'
import './style.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
