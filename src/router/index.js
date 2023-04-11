import Vue from 'vue'
import VueRouter from 'vue-router'
import Dash_broadVue from '../views/dashboard.vue'
import Crypto_currenciesVue from '../views/crypto_currencies.vue'
import MainLayout from '../views/layout/MainLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dash_broadVue,
  },
  {
    path: '/crypto_currencies',
    name: 'dashboard',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Crypto_currenciesVue,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
