import { createRouter, createWebHistory } from 'vue-router'
import MSMain from '@/views/MSMain.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      /**
       * trang chủ
       */
      path: '/',
      name: 'home',
      component: MSMain
    }
  ]
})

export default router
