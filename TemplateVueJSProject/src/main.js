import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/common/Prototype.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
