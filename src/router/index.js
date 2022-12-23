import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main.vue"
import Plans from "@/views/Plans.vue";
import Addons from "@/views/Addons.vue";
import Summary from "@/views/Summary.vue";

const routes = [
   {
     path: '/',
     name: 'home',
     component: Main
   },
   {
    path: '/plans',
    name: 'plans',
    component: Plans
  },
  {
    path: '/addons',
    name: 'addons',
    component: Addons 
  },
  {
    path: '/summary',
    name: 'summary',
    component: Summary 
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
