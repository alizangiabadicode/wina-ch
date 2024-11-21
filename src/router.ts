import { createMemoryHistory, createRouter } from 'vue-router'

import RootPage from './pages/root/index.vue'
import GuestPage from './pages/guest/index.vue'
import RoomPage from './pages/room/index.vue'

const routes = [
  { 
    path: '/', 
    component: RootPage, 
    children: [
      {
        path: 'room',
        component: RoomPage,
      },
      {
        path: 'guest',
        component: GuestPage
      },
      { 
        path: '/:catchAll(.*)',
        redirect: '/room'
      }
    ]
   },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router