import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      name: 'coaches',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/coaches/CoachesList.vue')
    },
    {
      path: '/coaches/:id',
      props: true,
      name: 'coach',
      component: () => import('../pages/coaches/CoachDetail.vue'),
      children: [
        {
          path: 'contact',
          name: 'contact-coach',
          component: () => import('../pages/requests/ContactCoach.vue')
        }
      ]
    },
    {
      path: '/register',
      name: 'register-coaches',
      component: () => import('../pages/coaches/CoachRegisteration.vue')
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../pages/requests/RequestReceived.vue')
    },
    {
      path: '/:notFound(.*)',
      name: '404',
      component: () => import('../pages/NotFound.vue')
    }
  ]
})

export default router
