import VueRouter from 'vue-router'
import Vue from 'vue'

const Profile = () => import('views/profile/Profile')
const Cart = () => import('views/cart/Cart')
const Home = () => import('views/home/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router