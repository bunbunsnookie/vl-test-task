import { createRouter, createWebHistory } from 'vue-router'

import TaskListBody from '../src/components/TaskListBody.vue'
import ViewTask from '../src/components/ViewTask.vue'


const routes = [
  { path: '/', component: TaskListBody },
  { path: '/view', component: ViewTask },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router