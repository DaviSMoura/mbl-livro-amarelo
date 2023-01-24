import { ViteSSG } from 'vite-ssg'
import './style/main.css'
import App from './App.vue'
import VueMask from '@devindex/vue-mask'

import Home from './pages/Home.vue'
import Cadastro from './pages/Cadastro.vue'
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cadastro',
    component: Cadastro
  }
]

export const createApp = ViteSSG(App, { routes }, ({app}) => {
  app.use(VueMask)
})