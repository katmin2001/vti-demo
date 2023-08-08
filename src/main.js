import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import route from './route/route.js'
import Home from './components/home/home.vue'
createApp(App).use(route).mount('#app')
