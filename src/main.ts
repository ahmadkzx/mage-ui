import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/root.css'
import router from './config/router'

createApp(App).use(router).mount('#app')
