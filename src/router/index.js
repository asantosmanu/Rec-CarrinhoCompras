import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import ProximaView from '../views/ProximaView.vue'
import ConcluirCompraView from '../views/ConcluirCompraView.vue'




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/form',
        name: 'form',
        component: FormView
      },
      {
        path: '/favoritos',
        name: 'favoritos',
        component: FavoritosView
      },
      {
        path: '/proxima',
        name: 'proxima',
        component: ProximaView
      },
    ]
})

export default router
