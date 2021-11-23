import { createRouter, createWebHashHistory } from 'vue-router'
import Recommod from '../views/recommod.vue'
import Singer from '../views/singer.vue'
import Search from '../views/search.vue'
import TopList from '../views/top-list.vue'

const routes = [
  {
    path: '/',
    redirect: '/recommod'
  },
  {
    path: '/recommod',
    component: Recommod
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-List',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
