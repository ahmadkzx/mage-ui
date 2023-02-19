import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/Home')
const CreateAPIPage = () => import('@/pages/CreateAPI')
const CreateSchemaPage = () => import('@/pages/CreateSchema')

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/api', component: CreateAPIPage },
    { path: '/schema', component: CreateSchemaPage },
  ],
})
