import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import Dashboard from '../components/Dashboard.vue'
import SignUp from '../views/SignUp.vue'
import DataLaporan from '../components/DataLaporan.vue'
import Reset from '../components/Reset.vue'
import FormIzin from "../views/FormIzin.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/formizin',
    name: 'formizin',
    component: FormIzin
  },
  {
    path: '/reset',
    name: 'reset',
    component: Reset
  },
  {
    path: '/datalaporan',
    name: 'datalaporan',
    component: DataLaporan
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: ForgotPassword
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
