import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSignin from '../views/FirebaseSigninView.vue'
import FirebaseRegister from '../views/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
import WeatherView from '../views/WeatherView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSignin
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegister
  },
  {
    path: '/addbook',
    name: 'Addbook',
    component: AddBookView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
