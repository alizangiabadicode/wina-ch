import { createMemoryHistory, createRouter } from 'vue-router'

import RootPage from './pages/root/index.vue'
import RoomPage from './pages/room/index.vue'

const routes = [
  { path: '/', component: RootPage, 
    children: [
      {
        path: 'room',
        component: RoomPage
      },
      {
        path: 'guest',
        component: RoomPage
      },
      { 
        path: '/:*',  // This matches any route
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