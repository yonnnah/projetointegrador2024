import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/consulta',
      name: 'consulta',
      component: () => import('../views/ConsultaView.vue')
    },
    {
      path: '/historico',
      name: 'historico',
      component: () => import('../views/HistoricoView.vue')
    },
    {
      path: '/lembrete',
      name: 'lembrete',
      component: () => import('../views/LembreteView.vue')
    },
    {
      path: '/nova-consulta',
      name: 'nova consulta',
      component: () => import('../views/NovaConsultaView.vue')
    },
    {
      path: '/novo-lembrete',
      name: 'novo lembrete',
      component: () => import('../views/NovoLembreteView.vue')
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
    }
  ]
})

export default router
