import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/property',
    name: 'Property',
    component: () => import('../views/Property.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/forclients/Sign.vue')
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import('../views/forclients/Forum.vue')
  },
  {
    path: '/promotions',
    name: 'promotions',
    component: () => import('../views/forclients/Promotions.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/forclients/News.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
