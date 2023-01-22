import { ViteSSG } from 'vite-ssg'
import './style/main.css'
import App from './App.vue'

import Home from './pages/Home.vue'
const routes = [
  {
    path: '/',
    component: Home
  }
]

export const createApp = ViteSSG(App, { routes })