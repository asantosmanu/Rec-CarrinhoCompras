import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import FecharComprasView from '../views/FecharComprasView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/fecharcompras',
        name: 'fecharcompras',
        component: FecharComprasView
      }
    ]
})

export default router
