import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'simulationPage',
      component: () => import("@/pages/SimulationPage.vue")
    },   
  ]
})

export default router
