import { createRouter, createWebHistory } from 'vue-router'

import LoginIndex from '@/views/login/LoginIndex.vue'
import LayoutIndex from '@/views/layout/LayoutIndex.vue'

import Category from "@/views/category/Category.vue";
import Home from "@/views/home/HomeIndex.vue";
import SubCategory from "@/views/subCategory/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginIndex
    },
    {
      path: '/',
      component: LayoutIndex,
      children:[
        {
          path: '',
          component: Home
        },
        {
          path: '/category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },

      ]
    },
  ],
})

export default router
