import VueRouter from 'vue-router'
import Vue from 'vue'

const Profile = () => import('views/profile/Profile')
const Cart = () => import('views/cart/Cart')
const Home = () => import('views/home/Home')
const Address = () => import('views/profile/address/Address')
const LoginMessage = () => import('views/profile/login-message/LoginMessage')
const ShowOrders = () => import('views/profile/show-orders/ShowOrders')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: 'loginmessage',
        component: LoginMessage
      },
      {
        path: 'address',
        component: Address
      },
      {
        path: 'showorders',
        component: ShowOrders
      }
    ]
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