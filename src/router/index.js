import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Client',
      name: 'Client',
      component: () => import('@/views/Client.vue'),
      meta: {
        pageTitle: 'Client',
        breadcrumb: [
          {
            text: 'Client',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Candidate',
      name: 'Candidate',
      component: () => import('@/views/Candidate.vue'),
      meta: {
        pageTitle: 'Candidate',
        breadcrumb: [
          {
            text: 'Candidate',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Job',
      name: 'Job',
      component: () => import('@/views/Job.vue'),
      meta: {
        pageTitle: 'Job',
        breadcrumb: [
          {
            text: 'Job',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Placement',
      name: 'Placement',
      component: () => import('@/views/Placement.vue'),
      meta: {
        pageTitle: 'Placement',
        breadcrumb: [
          {
            text: 'Placement',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Activitie',
      name: 'Activitie',
      component: () => import('@/views/Activitie.vue'),
      meta: {
        pageTitle: 'Activitie',
        breadcrumb: [
          {
            text: 'Activitie',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
