import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/InicioView.vue')
    },
    {
      path: '/conta',
      name: 'conta',
      children: [
        {
          path: 'inicio',
          name: 'inicio',
          meta: { requiresAuth: true },
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'consulta',
          name: 'consulta',
          meta: { requiresAuth: true },
          component: () => import('../views/ConsultaView.vue')
        },
        {
          path: 'historico',
          name: 'historico',
          meta: { requiresAuth: true },
          component: () => import('../views/HistoricoView.vue')
        },
        {
          path: 'lembrete',
          name: 'lembrete',
          meta: { requiresAuth: true },
          component: () => import('../views/LembreteView.vue')
        },
        {
          path: 'nova-consulta',
          name: 'nova consulta',
          meta: { requiresAuth: true },
          component: () => import('../views/NovaConsultaView.vue')
        },
        {
          path: 'editar-consulta/:id',
          name: 'nova consulta',
          meta: { requiresAuth: true },
          component: () => import('../views/EditarConsulta.vue')
        },
        {
          path: 'novo-lembrete',
          name: 'novo lembrete',
          meta: { requiresAuth: true },
          component: () => import('../views/NovoLembreteView.vue')
        },
        {
          path: 'editar-lembrete/:id',
          name: 'editar lembrete',
          meta: { requiresAuth: true },
          component: () => import('../views/EditarLembrete.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authModule = await import('@/stores/user')
    const authStore = authModule.useAuth()
    const isAuthenticated = authStore.isAuthenticated

    if (!isAuthenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
