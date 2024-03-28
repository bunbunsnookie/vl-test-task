import { createRouter, createWebHistory } from 'vue-router'

import TaskListBody from '@/components/TaskListBody.vue'
import ViewTask from '@/components/ViewTask.vue'
import AddTask from '@/components/AddTask.vue'
import EditingTask from '@/components/EditingTask.vue'


const routes = [
  { path: '/', component: TaskListBody },
  { path: '/view/:id', component: ViewTask },
  { path: '/add', component: AddTask},
  { path: '/edit/:id', component: EditingTask},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router